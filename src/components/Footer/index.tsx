import { Button, Flex, Image, Text, IconButton } from '@chakra-ui/react'
import { RiArrowUpSLine } from 'react-icons/ri'

import Logo from '../../assets/whiteLogo.svg'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <Flex
      flexDir={['column', 'column', 'row', 'row']}
      justifyContent={['center', 'center', 'space-between', 'space-between']}
      align="center"
      gap={['15px', '15px', '25px', '35px']}
      position="absolute"
      h={['160px', '160px', '90px', '90px']}
      bottom="0"
      padding={['20px 10px', '20px 10px', '30px 59px']}
      color="var(--whiteFixed)"
      w="100vw"
      maxW="1600px"
      bg="var(--grey0)"
    >
      <Image src={Logo} alt="Motors Shop" />
      <Text fontWeight="400" fontSize={['1.2rem', '1.4rem']} textAlign="center">
        © {currentYear} - Todos os direitos reservados.
      </Text>
      <IconButton
        size="1.6rem"
        aria-label="Arrow Up"
        w="53px"
        h="50px"
        bg="var(--grey1)"
        borderRadius="4px"
        icon={<RiArrowUpSLine />}
        _hover={{ bg: 'var(--grey2)' }}
      />
    </Flex>
  )
}
