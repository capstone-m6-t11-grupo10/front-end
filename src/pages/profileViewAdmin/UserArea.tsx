import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'

export const UserArea = () => {
  return (
    <Flex
      bgGradient="linear(to-b, var(--brand1) 55%, transparent  45%)"
      justify="center"
      paddingX="16px"
    >
      <Flex
        w={['100%', '70%']}
        flexDir="column"
        bg="var(--grey10)"
        h={['auto']}
        borderRadius="4px"
        gap="25px"
        mt="8"
        padding="35px 35px"
      >
        <Box
          boxSize="104px"
          minW="104px"
          minH="104px"
          borderRadius="50%"
          bg="var(--brand1)"
        >
          <Image w="100%" />
        </Box>

        <Box>
          <Text
            color="var(--grey1)"
            fontFamily="Lexend"
            fontWeight="600"
            fontSize={['1.5rem', '2rem']}
          >
            Samuel Leão{' '}
            <Text
              display="inline-block"
              fontWeight="500"
              fontSize={['1rem', '1.5rem']}
              color="var(--brand1)"
              bg="var(--brand4)"
              padding="4px 8px"
              borderRadius="4px"
            >
              Anunciante
            </Text>
          </Text>
        </Box>
        <Text color="var(--grey2)" fontWeight="400" fontSize="1.2rem">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </Text>

        <Button
          bg="transparent"
          border="1px solid var(--brand1)"
          borderRadius="4px"
          padding="12px 28px"
          height="48px"
          color="var(--brand1)"
          fontWeight="600"
          fontSize="1.6rem"
          w="160px"
        >
          Criar anuncio
        </Button>
      </Flex>
    </Flex>
  )
}
