import { Box, Flex, Text } from '@chakra-ui/react'

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
        <Box boxSize="32px" bg="purple" borderRadius="150px"></Box>
        <Text fontWeight="400" fontSize="1.6rem" color="var(--grey2)">
          Samuel Leão
        </Text>
      </Flex>
    </>
  )
}
