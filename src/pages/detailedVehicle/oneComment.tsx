import { Text } from "@chakra-ui/react"
import { IComment } from "../../interfaces/coments"
import { useUser } from "../../providers/UserProvider"

interface IOneComment {
    commentary: IComment
}

export const OneComment = ({ commentary }: IOneComment) => {
    const { id, comment, user, dateCreated } = commentary
    const { image, name } = user
    const formatDate = dateCreated.slice(0, 10)
    // const { user } = useUser()
    return (
        <div key={id} style={{ marginTop: '40px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div>
                    <img
                        src={image}
                        alt="Foto"
                        style={{
                            borderRadius: '100%',
                            width: '60px',
                            height: '60px'
                        }}
                    />
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Text marginLeft="2rem">{name}</Text>

                    <Text marginLeft="2rem">{formatDate}</Text>
                </div>
            </div>

            <Text marginTop="2rem">
                {comment}
            </Text></div>
    )
}