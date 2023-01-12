import { Avatar, Box, Flex, Image, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { IUser } from '../../interfaces/IUser'
import { settingUser } from '../../services/api'

interface UserProps {
  onToggle: () => void
}

export const User = ({ onToggle }: UserProps) => {

  const [user, setUser] = useState({} as IUser)

  settingUser(setUser)


  return (
    <>
      <Flex
        alignItems="center"
        gap="15px"
        onClick={onToggle}
        cursor="pointer"
        role="button"
      >
        <Flex boxSize="32px" bg='35px' alignItems='center'>
          {user.image ? (
            <Image
              boxSize='100%'
              borderRadius="100%"
              src={user.image}
            />
          ) : (
            <Avatar name={user.name} boxSize='100%' />
          )}
        </Flex>
        <Text fontWeight="400" fontSize="1.6rem" color="var(--grey2)">
          {user.name}
        </Text>
      </Flex>
    </>
  )
}
