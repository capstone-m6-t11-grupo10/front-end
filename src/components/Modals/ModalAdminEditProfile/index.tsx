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
import { FaPencilAlt } from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import { Form } from 'react-router-dom'
import { IUser, IUserEdit } from '../../../interfaces/IUser'
import { edittingProfile } from '../../../services/api'


interface IModalEditProps {
  userInfo: IUser,
  setUserInfo: React.Dispatch<React.SetStateAction<IUser>>
  isOpen: boolean
  onClose: () => void
}

export const ModalAdminEditProfile = (data: IModalEditProps) => {
  const { userInfo, setUserInfo, isOpen, onClose } = data

  const id = userInfo.id

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  const { handleSubmit, register } = useForm<IUserEdit>({
    mode: 'onBlur',
  })

  const onSubmit = (data: IUserEdit) => {
    edittingProfile({ data, setUserInfo, id, onClose })
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="2xl"
    >
      <ModalOverlay />
      <FormControl
        as="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <ModalContent>
          <ModalHeader fontSize={'1em'}>Editar perfil</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={8}>
            <FormLabel fontSize={'.8em'}>Nome</FormLabel>
            <Input
              {...register('name')}
              type={'text'}
              size="lg"
              placeholder={userInfo.name}
              focusBorderColor="#5126EA"
            />

            <FormLabel fontSize={'.8em'}>Email</FormLabel>
            <Input
              {...register('email')}
              type={'email'}
              size="lg"
              placeholder={userInfo.email}
              focusBorderColor="#5126EA"
            />

            <FormLabel fontSize={'.8em'}>Celular</FormLabel>
            <Input
              {...register('phone')}
              type={'tel'}
              size="lg"
              placeholder={userInfo.phone}
              focusBorderColor="#5126EA"
            />

            <FormLabel fontSize={'.8em'}>Data de nascimento</FormLabel>
            <Input
              {...register('birthDate')}
              type="date"
              size="lg"
              placeholder={userInfo.birthDate}
              focusBorderColor="#5126EA"
            />

            <FormLabel fontSize={'.8em'}

            >Descrição</FormLabel>
            <Textarea focusBorderColor="#5126EA" {...register('bio')} />
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
              type='submit'
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
      </FormControl>
    </Modal>

  )
}
