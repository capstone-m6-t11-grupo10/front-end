import { Button, Flex, Text } from '@chakra-ui/react'

export const BannerHome = () => {
  return (
    <Flex
      bgGradient="linear(to-b, var(--brand1) 55%, transparent  45%)"
      justify="center"
      width="100vw"
      height="80vh"
    >
      <Flex mt="4em" flexDirection="column" alignItems="center" gap={10}>
        <Text
          as="h2"
          color="var(--whiteFixed)"
          fontWeight="bold"
          fontSize="2.75rem"
          fontFamily="Lexend"
          width="70%"
          textAlign="center"
        >
          Velocidade e experiência em um lugar feito pra você
        </Text>
        <Text
          as="p"
          color="var(--grey9)"
          fontWeight="400"
          fontSize="md"
          fontFamily="Inter"
          textAlign="center"
        >
          Um ambiente feito para você explorar o seu melhor
        </Text>
        <Flex flexDirection="row" justifyContent="center" gap={10}>
          <Button
            fontFamily="Inter"
            fontSize="1em"
            fontWeight="600"
            bg="transparent"
            borderRadius="4px"
            border="1.5px solid var(--grey10)"
            color="var(--grey10)"
            height="2.5em"
            width="8em"
            _hover={{ bg: 'var(--brand4)', color: 'var(--brand1)' }}
            transition="all .5s cubic-bezier(.08,.52,.52,1)"
          >
            Carros
          </Button>
          <Button
            fontFamily="Inter"
            fontSize="1em"
            fontWeight="600"
            bg="transparent"
            borderRadius="4px"
            border="1.5px solid var(--grey10)"
            color="var(--grey10)"
            height="2.5em"
            width="8em"
            _hover={{ bg: 'var(--brand4)', color: 'var(--brand1)' }}
            transition="all .5s cubic-bezier(.08,.52,.52,1)"
          >
            Motos
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}
