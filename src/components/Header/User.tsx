import { Box, Flex, Image, Text } from '@chakra-ui/react'

interface UserProps {
  onToggle: () => void
}

export const User = ({ onToggle }: UserProps) => {
  return (
    <>
      <Flex
        align="center"
        gap="15px"
        onClick={onToggle}
        cursor="pointer"
        role="button"
      >
        <Box boxSize="32px">
          <Image
            w="100%"
            h="100%"
            borderRadius="100%"
            src="https://s3.static.brasilescola.uol.com.br/be/2020/08/lobo-guara.jpg"
          />
        </Box>
        <Text fontWeight="400" fontSize="1.6rem" color="var(--grey2)">
          Samuel Tigre
        </Text>
      </Flex>
    </>
  )
}
