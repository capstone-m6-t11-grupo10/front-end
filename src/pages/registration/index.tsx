import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input
} from '@chakra-ui/react'
import { FieldError, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { validacoesYup } from '../../schemas'

export default function Registration() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(validacoesYup) })
  function onSubmit() {
    console.log('foi')
  }

  return (
    <FormControl as="form" onSubmit={handleSubmit(onSubmit)}>
      <h2
        style={{
          color: 'var(--random1)'
        }}
      >
        Cadastro
      </h2>
      <p>Informações pessoais</p>
      <FormLabel>Nome</FormLabel>

      <Input
        isInvalid={errors.name ? true : false}
        type="name"
        {...register('name')}
        placeholder={'Ex: Samuel Leão'}
      />
      {!errors.name ? (
        <FormHelperText>Entre com seu nome</FormHelperText>
      ) : (
        <FormHelperText color="red">
          {(errors.name as FieldError).message}
        </FormHelperText>
      )}

      <FormLabel>Email</FormLabel>
      <Input
        isInvalid={errors.email ? true : false}
        type="email"
        {...register('email')}
        placeholder={'Ex: samuel@kenzie.com.br'}
      />
      {!errors.email ? (
        <FormHelperText>Entre com seu email</FormHelperText>
      ) : (
        <FormHelperText color="red">
          {(errors.email as FieldError).message}
        </FormHelperText>
      )}

      <FormLabel>CPF</FormLabel>
      <Input
        isInvalid={errors.cpf ? true : false}
        type="cpf"
        {...register('cpf')}
        placeholder={'000.000.000-00'}
      />
      {!errors.cpf ? (
        <FormHelperText>Entre com seu cpf</FormHelperText>
      ) : (
        <FormHelperText color="red">
          {(errors.cpf as FieldError).message}
        </FormHelperText>
      )}

      <FormLabel>Telefone</FormLabel>
      <Input
        isInvalid={errors.tel ? true : false}
        type="tel"
        {...register('tel')}
        placeholder={'(DDD)90000-0000'}
      />
      {!errors.tel ? (
        <FormHelperText>Entre com seu telefone</FormHelperText>
      ) : (
        <FormHelperText color="red">
          {(errors.tel as FieldError).message}
        </FormHelperText>
      )}

      <FormLabel>Data de Aniversário</FormLabel>
      <Input
        isInvalid={errors.birthDate ? true : false}
        type="birthDate"
        {...register('birthDate')}
        placeholder={'00/00/00'}
      />
      {!errors.birthDate ? (
        <FormHelperText>Entre com seu birthDate</FormHelperText>
      ) : (
        <FormHelperText color="red">
          {(errors.birthDate as FieldError).message}
        </FormHelperText>
      )}

      <p>Informações de Endereço</p>
      <FormLabel>CEP</FormLabel>
      <Input
        isInvalid={errors.cep ? true : false}
        type="cep"
        {...register('cep')}
        placeholder={'00000.000'}
      />
      {!errors.cep ? (
        <FormHelperText>Entre com seu cep</FormHelperText>
      ) : (
        <FormHelperText color="red">
          {(errors.cep as FieldError).message}
        </FormHelperText>
      )}

      <FormLabel>State</FormLabel>
      <Input
        isInvalid={errors.state ? true : false}
        type="state"
        {...register('state')}
        placeholder={'Digitar estado'}
      />
      {!errors.state ? (
        <FormHelperText>Entre com seu estado</FormHelperText>
      ) : (
        <FormHelperText color="red">
          {(errors.state as FieldError).message}
        </FormHelperText>
      )}

      <FormLabel>Cidade</FormLabel>
      <Input
        isInvalid={errors.city ? true : false}
        type="city"
        {...register('city')}
        placeholder={'Digitar cidade'}
      />
      {!errors.city ? (
        <FormHelperText>Entre com sua cidade</FormHelperText>
      ) : (
        <FormHelperText color="red">
          {(errors.city as FieldError).message}
        </FormHelperText>
      )}

      <FormLabel>Rua</FormLabel>
      <Input
        isInvalid={errors.street ? true : false}
        type="street"
        {...register('street')}
        placeholder={'Digitar rua'}
      />
      {!errors.street ? (
        <FormHelperText>Entre com sua rua</FormHelperText>
      ) : (
        <FormHelperText color="red">
          {(errors.street as FieldError).message}
        </FormHelperText>
      )}

      <FormLabel>Número</FormLabel>
      <Input
        isInvalid={errors.number ? true : false}
        type="number"
        {...register('number')}
        placeholder={'Digitar número'}
      />
      {!errors.number ? (
        <FormHelperText>Entre com seu númeror</FormHelperText>
      ) : (
        <FormHelperText color="red">
          {(errors.number as FieldError).message}
        </FormHelperText>
      )}
      <FormLabel>Complemento</FormLabel>
      <Input
        isInvalid={errors.complement ? true : false}
        type="complement"
        {...register('complement')}
        placeholder={'Ex: apart 307'}
      />
      {!errors.complement ? (
        <FormHelperText>Entre com seu complemento</FormHelperText>
      ) : (
        <FormHelperText color="red">
          {(errors.complement as FieldError).message}
        </FormHelperText>
      )}

      <FormLabel>Tipo de conta</FormLabel>
      <Button>comprador</Button>
      <Button>anunciante</Button>
      <FormLabel>Senha</FormLabel>
      <Input
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

      <FormLabel>Confirmar senha</FormLabel>
      <Input
        isInvalid={errors.passwordConfirm ? true : false}
        type="passwordConfirm"
        {...register('passwordConfirm')}
        placeholder={'Confirmar Senha'}
      />
      {!errors.passwordConfirm ? (
        <FormHelperText>Digite sua senha</FormHelperText>
      ) : (
        <FormHelperText color="red">
          {(errors.passwordConfirm as FieldError).message}
        </FormHelperText>
      )}
      <Button type="submit">Finalizar Cadatsro</Button>
    </FormControl>
  )
}
