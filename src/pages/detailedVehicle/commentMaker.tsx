import { Button } from "@chakra-ui/button"
import { Card } from "@chakra-ui/card"
import { Text } from "@chakra-ui/layout"
import { useState } from "react";
import { IComment } from "../../interfaces/coments";
import { IUser } from "../../interfaces/IUser";
import { gettingComments, postingComment, settingUser } from "../../services/api";

interface IMakeCommentsProps {
    props: {
        idVehicle: string
        setComments: React.Dispatch<React.SetStateAction<IComment[]>>

    }
}



export const CommentMaker = ({ props }: IMakeCommentsProps) => {
    const [text, setText] = useState("");
    const [user, setUser] = useState({} as IUser)
    const { idVehicle, setComments } = props

    settingUser(setUser)
    const { image, name } = user


    const handleCommentButton = async () => {
        await postingComment(text, idVehicle)
        gettingComments({ id: idVehicle, setComments })
        setText('')
    }

    return (
        <Card padding={'2rem 4rem'} bg={'var(--grey10)'}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                    src={image}
                    // src="https://s3.static.brasilescola.uol.com.br/be/2020/08/lobo-guara.jpg"
                    alt="Foto do teu perfil"
                    style={{
                        borderRadius: '100%',
                        width: '60px',
                        height: '60px'
                    }}
                />
                <Text marginLeft="2rem">{name}</Text>
            </div>
            <textarea value={text}
                onChange={(e) => setText(e.target.value)}
                style={{ height: '100px', resize: 'none' }}>
            </textarea>
            <Button
                marginTop='2rem'
                w='100px'
                variant='solid'
                bg='var(--brand1)'
                color='var(--whiteFixed)'
                type='submit'
                onClick={handleCommentButton}
            >
                Comentar
            </Button>
        </Card>
    )
}