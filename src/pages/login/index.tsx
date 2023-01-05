import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input
} from '@chakra-ui/react'
import { FieldError, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { validacoesYup } from '../../schemas'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(validacoesYup) })
  function onSubmit() {
    console.log('foi')
  }

  return (
    <Flex
      w="100%"
      flexDirection="column"
      alignItems="center"
      gap="5rem"
      overflowY="hidden"
    >
      <Header />
      <FormControl
        w={['90%', '70%', '411px', '411px']}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'flex-start'}
        padding={'44px 48px '}
        gap={'32px'}
        borderRadius={'4px'}
        backgroundColor={'var(--grey10)'}
        as="form"
        onSubmit={handleSubmit(onSubmit)}
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
          isInvalid={errors.name ? true : false}
          type="name"
          {...register('name')}
          placeholder={'Digitar Usúario'}
        />
        {!errors.name ? (
          <FormHelperText>Entre com seu Usuário</FormHelperText>
        ) : (
          <FormHelperText color="red">
            {(errors.name as FieldError).message}
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
          isInvalid={errors.password ? true : false}
          type="password"
          {...register('password')}
          placeholder={'Digitar Senha'}
        />
        {!errors.password ? (
          <FormHelperText>Digite sua senha</FormHelperText>
        ) : (
          <FormHelperText color="red">
            {(errors.password as FieldError).message}
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
          w={'100%'}
          h={'48px'}
          padding={'12px 28px'}
          gap={'10px'}
          borderRadius={'4px'}
          borderStyle={'1px solid var(--grey4)'}
          backgroundColor={'var(--grey10)'}
          color={'var(--grey0)'}
          fontWeight={600}
          fontSize={'16px'}
          marginLeft={'10px'}
          type="submit"
        >
          Cadastrar
        </Button>
      </FormControl>
      <Footer />
    </Flex>
  )
}
