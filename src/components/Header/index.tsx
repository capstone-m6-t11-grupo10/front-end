import { Flex, IconButton, HStack, Image } from '@chakra-ui/react'
import { User } from './User'
import { Menu } from './Menu'
import { NavItem } from './NavItem'
import { MenuMobile } from './MenuMobile'

import Logo from '../../assets/colorfulLogo.svg'

import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'

import { useDisclosure } from '@chakra-ui/react'
import { useAuth } from '../../providers/AuthProvider'

export const Header = () => {
  const { authenticated } = useAuth()

  const {
    isOpen: isMenuMobileOpen,
    onClose: onMenuMobileClose,
    onToggle: onMenuMobileToggle
  } = useDisclosure()

  const {
    isOpen: isMenuOpen,
    onClose: onMenuClose,
    onToggle: onMenuToggle
  } = useDisclosure()

  return (
    <Flex as="nav" width="100%">
      <Flex
        h="100px"
        paddingX={['25px', '45px']}
        w="100%"
        maxW="1600px"
        bg="var(--grey10)"
        justifyContent="space-between"
        flexWrap="wrap"
      >
        <Image
          alignSelf="center"
          w="150px"
          h="30px"
          src={Logo}
          alt="Motors Shop"
        />
        <Flex display={['none', 'none', 'flex', 'flex']}>
          <HStack
            spacing="5"
            w="auto"
            borderRight="2px solid var(--grey6)"
            paddingRight="5"
          >
            <NavItem content="Carros" redirectTo="/" />
            <NavItem content="Motos" redirectTo="/" />
            <NavItem content="Leilão" redirectTo="/" />
          </HStack>

          <HStack paddingLeft="5" spacing="5">
            {authenticated ? (
              <User onToggle={onMenuToggle} />
            ) : (
              <>
                <NavItem content="Fazer login" redirectTo="/login" />
                <NavItem
                  content="Cadastrar"
                  redirectTo="/registration"
                  color="var(--grey0)"
                  border="1px solid var(--grey4)"
                  padding="20px"
                />
              </>
            )}
          </HStack>
        </Flex>
        <IconButton
          aria-label="Open menu"
          alignSelf="center"
          fontSize="4xl"
          bg="transparent"
          mr="2"
          icon={isMenuMobileOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
          display={['flex', 'flex', 'none', 'none']}
          onClick={onMenuMobileToggle}
          _hover={{ bg: 'transparent' }}
        />
        <MenuMobile
          isOpen={isMenuMobileOpen}
          onClose={onMenuMobileClose}
          ml="0px"
          mt="80px"
        />
        <Menu
          display={['none', 'none', 'flex', 'flex']}
          isOpen={isMenuOpen}
          onClose={onMenuClose}
          ml="auto"
          mt="80px"
        />
      </Flex>
    </Flex>
  )
}
