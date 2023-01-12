import { Button } from "@chakra-ui/button"
import { Card } from "@chakra-ui/card"
import { Text } from "@chakra-ui/layout"
import { useState } from "react";
import { IComment } from "../../interfaces/coments";
import { IUser } from "../../interfaces/IUser";
import { gettingComments, postingComment, settingUser } from "../../services/api";
import { isValidURL } from "../../utils/validateUrl";
import { Avatar } from '@chakra-ui/react';

interface IMakeCommentsProps {
  props: {
    idVehicle: string
    setComments: React.Dispatch<React.SetStateAction<IComment[]>>

  }
}



export const CommentMaker = ({ props }: IMakeCommentsProps) => {
  const [text, setText] = useState("");
  const { idVehicle, setComments } = props
  const [user, setUser] = useState({} as IUser)

  settingUser(setUser)
  const { image, name } = user


  const handleCommentButton = async () => {
    await postingComment(text, idVehicle)
    gettingComments({ id: idVehicle, setComments })
    setText('')
  }
  const imageIsValid = isValidURL(image)

  return (
    <Card padding={'2rem 4rem'} bg={'var(--grey10)'}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {imageIsValid ? (
          <img
            src={image}
            alt="Foto"
            style={{
              borderRadius: '100%',
              width: '60px',
              height: '60px'
            }}
          />
        ) : (
          <Avatar name={name} boxSize='35px' />
        )}
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
