import {
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  useDisclosure
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { LoginSchema } from '../../schemas/login'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../../providers/UserProvider'
import { useCallback, useEffect, useState } from 'react'
import { ModalErrorLogin } from '../../components/Modals/ModalErrorLogin'

import { Label } from '../registration/components/Label'

import { IUser } from '../../interfaces/IUser'
import { ModalAdminEditProfile } from '../../components/Modals/ModalAdminEditProfile/index';
import { settingUser, settingVehicles } from '../../services/api'


export interface ILoginRequest {
  email: string
  password: string
}

export default function Login() {
  const [loading, setLoading] = useState(false)
  const [userInfo, setUserInfo] = useState({} as IUser)


  useEffect(() => {
    settingUser(setUserInfo)
  }, [])

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ILoginRequest>({ resolver: zodResolver(LoginSchema) })

  const {
    isOpen: isModalErrorOpen,
    onClose: onModalErrorClose,
    onOpen: onModalErrorOpen
  } = useDisclosure()

  const navigate = useNavigate()
  const { signIn } = useUser()

  const navigateToRegister = useCallback(() => {
    navigate('/registration')
  }, [])

  const handleLogin = (data: ILoginRequest) => {
    signIn(data, onModalErrorOpen)
      .then(() => setLoading(false))
      .catch(() => setLoading(false))
  }

  const { onOpen, onClose: onModalEditClose, isOpen: isModalEditOpen } = useDisclosure()

  return (
    <>
      <ModalAdminEditProfile isOpen={isModalEditOpen} onClose={onModalEditClose} setUserInfo={setUserInfo} userInfo={userInfo} />
      <ModalErrorLogin isOpen={isModalErrorOpen} onClose={onModalErrorClose} />
      <Flex
        w="100%"
        flexDirection="column"
        alignItems="center"
        gap="5rem"
        overflowY="hidden"
      >
        <Header onEditUserOpen={onOpen} />
        <FormControl
          w={['90%', '70%', '411px', '411px']}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'flex-start'}
          padding={'44px 48px '}
          gap={'15px'}
          borderRadius={'4px'}
          backgroundColor={'var(--grey10)'}
          as="form"
          onSubmit={handleSubmit(handleLogin)}
          color={'var(--grey0)'}
          fontWeight={600}
          fontSize={'16px'}
        >
          <h2
            style={{
              color: '#000000',
              fontWeight: '500',
              fontSize: '24px',
              lineHeight: '30px',
              fontStyle: 'normal',
              marginBottom: '10px'
            }}
          >
            Login
          </h2>
          <Label content="Usuário" />
          <Input
            w={'100%'}
            h={'48px'}
            mt="-10px"
            borderRadius={'4px'}
            isInvalid={!!errors.email}
            {...register('email')}
            placeholder={'Digitar usuário'}
          />
          {!errors.email ? (
            <FormHelperText></FormHelperText>
          ) : (
            <FormHelperText color="red">{errors.email.message}</FormHelperText>
          )}
          <Label content="Senha" />
          <Input
            w={'100%'}
            h={'48px'}
            mt="-10px"
            borderRadius={'4px'}
            isInvalid={!!errors.password}
            type="password"
            {...register('password')}
            placeholder={'Digitar senha'}
          />
          {!errors.password ? (
            <FormHelperText></FormHelperText>
          ) : (
            <FormHelperText color="red">
              {errors.password.message}
            </FormHelperText>
          )}
          <p
            style={{
              color: 'var(--grey2)',
              fontWeight: '500',
              fontSize: '14px',
              fontStyle: 'normal',
              marginLeft: '17rem',
              marginTop: '-25px'
            }}
          >
            Esqueci minha senha
          </p>
          <Button
            w={'100%'}
            h={'48px'}
            mt="21px"
            borderRadius={'4px'}
            borderStyle={'1px solid var(--grey4)'}
            backgroundColor={'var(--brand1)'}
            color={'var(--whiteFixed)'}
            fontWeight={600}
            fontSize={'16px'}
            type="submit"
          >
            Entrar
          </Button>
          <p
            style={{
              color: 'var(--grey2)',
              fontWeight: '500',
              fontSize: '14px',
              fontStyle: 'normal',
              marginLeft: '6rem',
              marginTop: '10px'
            }}
          >
            Ainda não possui uma conta?
          </p>
          <Button
            isLoading={loading}
            w={'100%'}
            h={'48px'}
            mt={'10px'}
            borderRadius={'4px'}
            border={'1px solid var(--grey4)'}
            backgroundColor={'var(--grey10)'}
            color={'var(--grey0)'}
            fontWeight={600}
            fontSize={'16px'}
            onClick={navigateToRegister}
          >
            Cadastrar
          </Button>
        </FormControl>
        <Footer />
      </Flex>
    </>
  )
}
