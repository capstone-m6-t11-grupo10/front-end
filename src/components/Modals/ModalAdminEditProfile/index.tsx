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
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size="2xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize={'1em'}>Editar perfil</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={8}>
            <FormControl>
              <FormLabel fontSize={'.8em'}>Nome</FormLabel>
              <Input
                type={'text'}
                size="lg"
                ref={initialRef}
                placeholder="Samuel Leão da Silva"
                focusBorderColor="#5126EA"
              />
            </FormControl>

            <FormControl mt={8}>
              <FormLabel fontSize={'.8em'}>Email</FormLabel>
              <Input
                type={'email'}
                size="lg"
                placeholder="samuel@kenzie.com.br"
                focusBorderColor="#5126EA"
              />
            </FormControl>

            <FormControl mt={8}>
              <FormLabel fontSize={'.8em'}>CPF</FormLabel>
              <Input
                type={'number'}
                size="lg"
                placeholder="900.880.090-00"
                focusBorderColor="#5126EA"
              />
            </FormControl>

            <FormControl mt={8}>
              <FormLabel fontSize={'.8em'}>Celular</FormLabel>
              <Input
                type={'tel'}
                size="lg"
                placeholder="(084) 90909-9092"
                focusBorderColor="#5126EA"
              />
            </FormControl>

            <FormControl mt={8}>
              <FormLabel fontSize={'.8em'}>Data de nascimento</FormLabel>
              <Input
                type="date"
                size="lg"
                placeholder="09/12/1999"
                focusBorderColor="#5126EA"
              />
            </FormControl>

            <FormControl mt={8}>
              <FormLabel fontSize={'.8em'}>Descrição</FormLabel>
              <Textarea focusBorderColor="#5126EA" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              height="2.5em"
              width="8em"
              mr={3}
              bgColor="var(--grey6)"
              color="var(--grey2)"
              transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
              fontSize="1em"
              onClick={onClose}
            >
              Cancelar
            </Button>
            <Button
              width="12em"
              height="2.5em"
              bgColor="var(--brand1)"
              color="var(--whiteFixed)"
              transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
              fontSize="1em"
              _hover={{ bg: '#B0A6F0' }}
            >
              Salvar alterações
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
