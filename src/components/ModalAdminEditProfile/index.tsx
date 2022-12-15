import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Textarea
} from '@chakra-ui/react'
import React from 'react'

export const ModalAdminEditProfile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  return (
    <>
      {/* apagar a linha 26 após implementação do modal no local correto */}
      <Button onClick={onOpen}>Open Modal</Button>
      <Button ml={4} ref={finalRef}>
        I'll receive focus on close
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size="2xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Editar perfil</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Nome</FormLabel>
              <Input ref={initialRef} placeholder="Samuel Leão da Silva" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input placeholder="samuel@kenzie.com.br" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>CPF</FormLabel>
              <Input placeholder="900.880.090-00" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Celular</FormLabel>
              <Input placeholder="(084) 90909-9092" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Data de nascimento</FormLabel>
              <Input placeholder="09/12/1999" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Descrição</FormLabel>
              <Textarea />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>Cancelar</Button>
            <Button colorScheme="blue" mr={3}>
              Salvar alteração
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
