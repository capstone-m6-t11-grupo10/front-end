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
          marginLeft={'10px'}
        >
          <h2
            style={{
              color: '#000000',
              fontWeight: '500',
              fontSize: '24px',
              lineHeight: '30px',
              fontStyle: 'normal'
            }}
          >
            Login
          </h2>
          <FormLabel
            style={{
              color: 'var(--grey1)',
              fontWeight: '500',
              fontSize: '14px',
              lineHeight: '17px',
              fontStyle: 'normal'
            }}
          >
            Usuário
          </FormLabel>

          <Input
            w={'100%'}
            h={'48px'}
            borderRadius={'4px'}
            padding={'0px 16px 0px 16px'}
            gap={'10px'}
            isInvalid={!!errors.email}
            {...register('email')}
            placeholder={'Digitar Usuário'}
          />
          {!errors.email ? (
            <FormHelperText>Entre com seu Usuário</FormHelperText>
          ) : (
            <FormHelperText color="red">
              {errors.email.message}
            </FormHelperText>
          )}
          <FormLabel
            style={{
              color: 'var(--grey1)',
              fontWeight: '500',
              fontSize: '14px',
              lineHeight: '17px',
              fontStyle: 'normal'
            }}
          >
            Senha
          </FormLabel>
          <Input
            w={'100%'}
            h={'48px'}
            borderRadius={'4px'}
            padding={'0px 16px 0px 16px'}
            gap={'10px'}
            isInvalid={!!errors.password}
            type="password"
            {...register('password')}
            placeholder={'Digitar Senha'}
          />
          {!errors.password ? (
            <FormHelperText>Digite sua senha</FormHelperText>
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
              lineHeight: '24px',
              fontStyle: 'normal'
            }}
          >
            Esqueci minha senha
          </p>
          <Button
            w={'100%'}
            h={'48px'}
            padding={'12px 28px'}
            gap={'10px'}
            borderRadius={'4px'}
            borderStyle={'1px solid var(--grey4)'}
            backgroundColor={'var(--brand1)'}
            color={'var(--whiteFixed)'}
            fontWeight={600}
            fontSize={'16px'}
            marginLeft={'10px'}
            type="submit"
          >
            Entrar
          </Button>
          <p
            style={{
              color: 'var(--grey2)',
              fontWeight: '500',
              fontSize: '14px',
              lineHeight: '24px',
              fontStyle: 'normal'
            }}
          >
            Ainda não possui uma conta?
          </p>
          <Button
            isLoading={loading}
            w={'100%'}
            h={'48px'}
            padding={'12px 28px'}
            gap={'10px'}
            borderRadius={'4px'}
            border={'1px solid var(--grey4)'}
            backgroundColor={'var(--grey10)'}
            color={'var(--grey0)'}
            fontWeight={600}
            fontSize={'16px'}
            marginLeft={'10px'}
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
