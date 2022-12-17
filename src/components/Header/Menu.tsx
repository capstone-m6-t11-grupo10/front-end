import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  VStack
} from '@chakra-ui/react'
import { NavItem } from './NavItem'

interface MenuProps {
  isOpen: boolean
  onClose: () => void
  mt: string
  ml: string
  display: string[]
}

export const Menu = ({ isOpen, onClose, ml, mt, display }: MenuProps) => {
  return (
    <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
      <DrawerContent
        bg="var(--grey9)"
        ml={ml}
        mt={mt}
        display={display}
        w={['auto', 'auto', '180px', '180px']}
        boxShadow="0px 4px 40px -10px rgba(0, 0, 0, 0.25)"
        borderRadius="4px"
      >
        <DrawerBody>
          <Flex
            paddingY="4"
            textAlign="start"
            flexDirection="column"
            align="start"
            gap="25px"
          >
            <NavItem content="Editar Perfil" redirectTo="/" />
            <NavItem content="Editar Endereço" redirectTo="/" />
            <NavItem content="Minhas compras" redirectTo="/" />
            <NavItem content="Sair" redirectTo="/" />
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}
