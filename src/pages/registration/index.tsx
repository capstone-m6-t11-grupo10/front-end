import {
  Button,
  FormControl,
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
    <FormControl
      w={'411px'}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'flex-start'}
      padding={'44px 48px'}
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
        Cadastro
      </h2>
      <p
        style={{
          color: '#000000',
          fontWeight: '500',
          fontSize: '14px',
          lineHeight: '24px',
          fontStyle: 'normal'
        }}
      >
        Informações pessoais
      </p>
      <FormLabel
        style={{
          color: 'var(--grey1)',
          fontWeight: '500',
          fontSize: '14px',
          lineHeight: '17px',
          fontStyle: 'normal'
        }}
      >
        Nome
      </FormLabel>

      <Input
        w={'315px'}
        h={'48px'}
        borderRadius={'4px'}
        padding={'0px 16px 0px 16px'}
        gap={'10px'}
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

      <FormLabel
        style={{
          color: 'var(--grey1)',
          fontWeight: '500',
          fontSize: '14px',
          lineHeight: '17px',
          fontStyle: 'normal'
        }}
      >
        Email
      </FormLabel>
      <Input
        w={'315px'}
        h={'48px'}
        borderRadius={'4px'}
        padding={'0px 16px 0px 16px'}
        gap={'10px'}
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

      <FormLabel
        style={{
          color: 'var(--grey1)',
          fontWeight: '500',
          fontSize: '14px',
          lineHeight: '17px',
          fontStyle: 'normal'
        }}
      >
        CPF
      </FormLabel>
      <Input
        w={'315px'}
        h={'48px'}
        borderRadius={'4px'}
        padding={'0px 16px 0px 16px'}
        gap={'10px'}
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

      <FormLabel
        style={{
          color: 'var(--grey1)',
          fontWeight: '500',
          fontSize: '14px',
          lineHeight: '17px',
          fontStyle: 'normal'
        }}
      >
        Telefone
      </FormLabel>
      <Input
        w={'315px'}
        h={'48px'}
        borderRadius={'4px'}
        padding={'0px 16px 0px 16px'}
        gap={'10px'}
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

      <FormLabel
        style={{
          color: 'var(--grey1)',
          fontWeight: '500',
          fontSize: '14px',
          lineHeight: '17px',
          fontStyle: 'normal'
        }}
      >
        Data de Aniversário
      </FormLabel>
      <Input
        w={'315px'}
        h={'48px'}
        borderRadius={'4px'}
        padding={'0px 16px 0px 16px'}
        gap={'10px'}
        isInvalid={errors.birthDate ? true : false}
        type="birthDate"
        {...register('birthDate')}
        placeholder={'00/00/00'}
      />
      {!errors.birthDate ? (
        <FormHelperText>Entre com sua data de aniversário</FormHelperText>
      ) : (
        <FormHelperText color="red">
          {(errors.birthDate as FieldError).message}
        </FormHelperText>
      )}

      <p
        style={{
          color: '#000000',
          fontWeight: '500',
          fontSize: '14px',
          lineHeight: '24px',
          fontStyle: 'normal'
        }}
      >
        Informações de Endereço
      </p>
      <FormLabel
        style={{
          color: 'var(--grey1)',
          fontWeight: '500',
          fontSize: '14px',
          lineHeight: '17px',
          fontStyle: 'normal'
        }}
      >
        CEP
      </FormLabel>
      <Input
        w={'315px'}
        h={'48px'}
        borderRadius={'4px'}
        padding={'0px 16px 0px 16px'}
        gap={'10px'}
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
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <FormLabel
          style={{
            color: 'var(--grey1)',
            fontWeight: '500',
            fontSize: '14px',
            lineHeight: '17px',
            fontStyle: 'normal'
          }}
        >
          Estado
        </FormLabel>
        <Input
          w={'315px'}
          h={'48px'}
          borderRadius={'4px'}
          padding={'0px 16px 0px 16px'}
          gap={'10px'}
          isInvalid={errors.state ? true : false}
          type="state"
          {...register('state')}
          placeholder={'Digitar estado'}
        />
        <>
          {!errors.state ? (
            <FormHelperText>Entre com seu estado</FormHelperText>
          ) : (
            <FormHelperText color="red">
              {(errors.state as FieldError).message}
            </FormHelperText>
          )}
        </>

        <>
          <FormLabel
            style={{
              color: 'var(--grey1)',
              fontWeight: '500',
              fontSize: '14px',
              lineHeight: '17px',
              fontStyle: 'normal'
            }}
          >
            Cidade
          </FormLabel>
          <Input
            w={'315px'}
            h={'48px'}
            borderRadius={'4px'}
            padding={'0px 16px 0px 16px'}
            gap={'10px'}
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
        </>
      </div>

      <FormLabel
        style={{
          color: 'var(--grey1)',
          fontWeight: '500',
          fontSize: '14px',
          lineHeight: '17px',
          fontStyle: 'normal'
        }}
      >
        Rua
      </FormLabel>
      <Input
        w={'315px'}
        h={'48px'}
        borderRadius={'4px'}
        padding={'0px 16px 0px 16px'}
        gap={'10px'}
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

      <FormLabel
        style={{
          color: 'var(--grey1)',
          fontWeight: '500',
          fontSize: '14px',
          lineHeight: '17px',
          fontStyle: 'normal'
        }}
      >
        Número
      </FormLabel>
      <Input
        w={'315px'}
        h={'48px'}
        borderRadius={'4px'}
        padding={'0px 16px 0px 16px'}
        gap={'10px'}
        isInvalid={errors.number ? true : false}
        type="number"
        {...register('number')}
        placeholder={'Digitar número'}
      />
      {!errors.number ? (
        <FormHelperText>Entre com seu número</FormHelperText>
      ) : (
        <FormHelperText color="red">
          {(errors.number as FieldError).message}
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
        Complemento
      </FormLabel>
      <Input
        w={'315px'}
        h={'48px'}
        borderRadius={'4px'}
        padding={'0px 16px 0px 16px'}
        gap={'10px'}
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

      <FormLabel
        style={{
          color: 'var(--grey1)',
          fontWeight: '500',
          fontSize: '14px',
          lineHeight: '17px',
          fontStyle: 'normal'
        }}
      >
        Tipo de conta
      </FormLabel>
      <div style={{ display: 'flex' }}>
        <Button
          w={'152px'}
          h={'48px'}
          padding={'12px 28px 12px 28px'}
          gap={'10px'}
          borderRadius={'4px'}
          backgroundColor={'var(--brand1)'}
          color={'var(--whiteFixed)'}
          fontWeight={600}
          fontSize={'16px'}
          marginRight={'10px'}
        >
          Comprador
        </Button>
        <Button
          w={'152px'}
          h={'48px'}
          padding={'12px 28px 12px 28px'}
          gap={'10px'}
          borderRadius={'4px'}
          borderStyle={'1px solid var(--grey4)'}
          backgroundColor={'var(--grey4'}
          color={'var(--grey0)'}
          fontWeight={600}
          fontSize={'16px'}
          marginLeft={'10px'}
        >
          Anunciante
        </Button>
      </div>
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
        w={'315px'}
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

      <FormLabel
        style={{
          color: 'var(--grey1)',
          fontWeight: '500',
          fontSize: '14px',
          lineHeight: '17px',
          fontStyle: 'normal'
        }}
      >
        Confirmar senha
      </FormLabel>
      <Input
        w={'315px'}
        h={'48px'}
        borderRadius={'4px'}
        padding={'0px 16px 0px 16px'}
        gap={'10px'}
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
      <Button
        w={'315px'}
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
        Finalizar Cadastro
      </Button>
    </FormControl>
  )
}
