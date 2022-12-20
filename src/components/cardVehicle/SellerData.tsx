import { Stack, Box, Text } from '@chakra-ui/react'

interface SellerDataProps {
  name: string
}

export const SellerData = ({ name }: SellerDataProps) => {
  return (
    <Stack mt="6" gap="5px" direction="row">
      <Box
        bg="var(--brand1)"
        borderRadius="50%"
        w="30px"
        h="30px"
        color="var(--grey10)"
        textAlign="center"
      >
        <Text margin="3px">SL</Text>
      </Box>
      <Text color="var(--grey2)" fontWeight={500}>
        {name}
      </Text>
    </Stack>
  )
}
