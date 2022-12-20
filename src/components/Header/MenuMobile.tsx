import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  Flex
} from '@chakra-ui/react'
import { Menu } from './Menu'
import { User } from './User'
import { NavItem } from './NavItem'

import { useDisclosure } from '@chakra-ui/react'
import { useAuth } from '../../providers/AuthProvider'

interface MenuMobileProps {
  isOpen: boolean
  onClose: () => void
  mt: string
  ml: string
}

export const MenuMobile = ({ isOpen, onClose, ml, mt }: MenuMobileProps) => {
  const { onToggle, isOpen: isUserOpen, onClose: onUserClose } = useDisclosure()
  const { authenticated } = useAuth()

  return (
    <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
      <DrawerContent
        display={['flex', 'flex', 'none', 'none']}
        bg="var(--whiteFixed)"
        ml={ml}
        mt={mt}
        borderRadius="4px"
        borderTop="1px solid var(--grey4)"
        borderBottom="1px solid var(--grey4)"
      >
        <DrawerBody>
          <Flex
            textAlign="start"
            flexDirection="column"
            align="start"
            gap="35px"
            padding="16px 5px"
          >
            <NavItem content="Carros" redirectTo="/" fontWeight="600" />
            <NavItem content="Motos" redirectTo="/" fontWeight="600" />
            <NavItem content="Leilão" redirectTo="/" fontWeight="600" />
          </Flex>
        </DrawerBody>
        <DrawerFooter borderTop="1px solid var(--grey4)">
          {authenticated ? (
            <Flex w="100%">
              <User onToggle={onToggle} />
            </Flex>
          ) : (
            <Flex
              w="100%"
              gap="25px"
              padding="16px 5px"
              flexDirection="column"
              align="start"
            >
              <NavItem
                content="Fazer login"
                redirectTo="/login"
                fontWeight="600"
              />
              <NavItem
                content="Cadastrar"
                redirectTo="/"
                color="var(--grey0)"
                border="1px solid var(--grey4)"
                padding="20px"
                width="100%"
              />
            </Flex>
          )}

          <Menu
            display={['flex', 'flex', 'none', 'none']}
            isOpen={isUserOpen}
            onClose={onUserClose}
            ml="0"
            mt="321px"
          />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
