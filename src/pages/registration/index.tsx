import {
  ButtonGroup,
  FormControl,
  FormHelperText,
  Heading,
  Text
} from '@chakra-ui/react'

import { Button } from '../../components/Modals/ModalCreateAd/Button'
import { Input } from '../../components/Input'
import { FieldError, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { validacoesYup } from '../../schemas'
import { Flex, Box, useDisclosure } from '@chakra-ui/react'
import { Textarea } from '../../components/Textarea'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Label } from './components/Label'
import { useState } from 'react'
import { mask, unMask } from 'remask'
import {
  cpfPattern,
  birthDatePattern,
  cepPattern,
  phonePattern
} from '../../utils/registerMasks'
import { ICreateUser } from '../../interfaces/IUser'
import { useUser } from '../../providers/UserProvider'
import { createUserSchema } from '../../schemas/index'
import { zodResolver } from '@hookform/resolvers/zod'
import { ModalSuccessRegister } from '../../components/Modals/ModalSuccessRegister/index'
import { ModalErrorRegister } from '../../components/Modals/ModalErrorRegister'

export default function Registration() {
  const [activeItem, setActiveItem] = useState('Comprador')
  const [loading, setLoading] = useState(false)

  const [maskCpf, setMaskCpf] = useState('')
  const [maskPhone, setMaskPhone] = useState('')
  const [maskBirthDate, setMaskBirthDate] = useState('')
  const [maskCep, setMaskCep] = useState('')

  const { signUp } = useUser()

  const handleMaskCpf = (cpf: string) => {
    const originalValue = unMask(cpf)
    const maskedValue = mask(originalValue, cpfPattern)

    setMaskCpf(maskedValue)
  }

  const handleMaskPhone = (phone: string) => {
    const originalValue = unMask(phone)
    const maskedValue = mask(originalValue, phonePattern)

    setMaskPhone(maskedValue)
  }

  const handleMaskBirthDate = (date: string) => {
    const originalValue = unMask(date)
    const maskedValue = mask(originalValue, birthDatePattern)

    setMaskBirthDate(maskedValue)
  }

  const handleMaskCep = (cep: string) => {
    const originalValue = unMask(cep)
    const maskedValue = mask(originalValue, cepPattern)

    setMaskCep(maskedValue)
  }

  const handleActiveButton = (item: string) => {
    setActiveItem(item)
  }

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ICreateUser>({
    resolver: zodResolver(createUserSchema)
  })

  const {
    isOpen: isSuccessModalOpen,
    onClose: onSuccessModalClose,
    onOpen: onSuccessModalOpen
  } = useDisclosure()

  const {
    isOpen: isErrorModalOpen,
    onClose: onErrorModalClose,
    onOpen: onErrorModalOpen
  } = useDisclosure()

  const handleForm = (data: ICreateUser) => {
    console.log(data)

    setLoading(true)
    signUp(data, onSuccessModalOpen, onErrorModalOpen)
      .then(() => {
        setLoading(false)
      })

      .catch(() => setLoading(false))
  }

  return (
    <>
      <ModalSuccessRegister
        isOpen={isSuccessModalOpen}
        onClose={onSuccessModalClose}
      />
      <ModalErrorRegister
        isOpen={isErrorModalOpen}
        onClose={onErrorModalClose}
      />
      <Flex
        w="100%"
        flexDir="column"
        justifyContent="space-between"
        justifyItems="center"
        gap="35px"
      >
        <Header />
        <FormControl
          alignSelf="center"
          w={['90%', '70%', '411px', '411px']}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'flex-start'}
          padding={['22px 24px', '30px 35px']}
          gap="20px"
          borderRadius={'4px'}
          backgroundColor={'var(--grey10)'}
          as="form"
          onSubmit={handleSubmit(handleForm)}
        >
          <Heading as="h2" fontWeight="500" fontSize="2.4rem" lineHeight="30px">
            Cadastro
          </Heading>
          <Text
            color="#000000"
            fontWeight="500"
            fontSize="1.4rem"
            lineHeight="24px"
            fontStyle="normal"
          >
            Informações pessoais
          </Text>
          <Label content=" Nome" />
          <Input
            mt="-10px"
            error={errors.name}
            {...register('name')}
            placeholder="Ex: Samuel Leão"
          />
          <Label content="Email" />
          <Input
            mt="-10px"
            error={errors.email}
            {...register('email')}
            placeholder={'Ex: samuel@kenzie.com.br'}
          />
          <Label content="CPF" />
          <Input
            value={maskCpf}
            mt="-10px"
            error={errors.cpf}
            {...register('cpf')}
            placeholder={'000.000.000-00'}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleMaskCpf(event.target.value)
            }
          />
          <Label content="Celular" />

          <Input
            value={maskPhone}
            mt="-10px"
            error={errors.phone}
            {...register('phone')}
            placeholder="(DDD) 90000-0000"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleMaskPhone(event.target.value)
            }
          />
          <Label content="Data de Nascimento" />

          <Input
            value={maskBirthDate}
            mt="-10px"
            error={errors.birthDate}
            {...register('birthDate')}
            placeholder={'00/00/0000'}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleMaskBirthDate(event.target.value)
            }
          />
          <Label content="Descrição" />

          <Textarea
            error={errors.bio}
            mt="-10px"
            {...register('bio')}
            placeholder="Digitar descrição"
            h="90px"
          />
          <Text
            color="#000000"
            fontWeight="500"
            fontSize="1.4rem"
            lineHeight="24px"
            fontStyle="normal"
            my="5px"
          >
            Informações de Endereço
          </Text>
          <Label content="CEP" />

          <Input
            value={maskCep}
            mt="-10px"
            error={errors.cep}
            {...register('cep')}
            placeholder="00000-000"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleMaskCep(event.target.value)
            }
          />
          <Flex w="100%" gap="10px">
            <Box>
              <Label content="Estado" />

              <Input
                error={errors.state}
                {...register('state')}
                placeholder={'Digitar estado'}
              />
            </Box>

            <Box>
              <Label content="Cidade" />
              <Input
                error={errors.city}
                {...register('city')}
                placeholder="Digitar cidade"
              />
            </Box>
          </Flex>
          <Label content="Rua" />

          <Input
            mt="-10px"
            error={errors.street}
            {...register('street')}
            placeholder={'Digitar rua'}
          />
          <Flex w="100%" gap="10px">
            <Box>
              <Label content="Número" />

              <Input
                error={errors.number}
                type="number"
                {...register('number')}
                placeholder={'Digitar número'}
              />
            </Box>
            <Box>
              <Label content="Complemento" />

              <Input
                error={errors.complement}
                {...register('complement')}
                placeholder={'Ex: apart 307'}
              />
            </Box>
          </Flex>
          <Text
            color="#000000"
            fontWeight="500"
            fontSize="1.4rem"
            lineHeight="24px"
            fontStyle="normal"
          >
            Tipo de conta
          </Text>

          <ButtonGroup w="100%" display="flex" gap="10px">
            <Button
              fontSize={['1rem', '1.4rem']}
              w="50%"
              border="1px solid var(--grey4)"
              isActive={activeItem === 'Comprador'}
              onClick={e => handleActiveButton(e.currentTarget.innerText)}
              content="Comprador"
            />

            <Button
              fontSize={['1rem', '1.4rem']}
              isActive={activeItem === 'Anunciante'}
              onClick={e => handleActiveButton(e.currentTarget.innerText)}
              w="50%"
              border="1px solid var(--grey4)"
              content="Anunciante"
            />
          </ButtonGroup>

          <Label content="Senha" />

          <Input
            mt="-10px"
            error={errors.password}
            type="password"
            {...register('password')}
            placeholder={'Digitar Senha'}
          />

          <Label content="Confirmar senha" />
          <Input
            type="password"
            mt="-10px"
            error={errors.passwordConfirm}
            {...register('passwordConfirm')}
            placeholder={'Confirmar Senha'}
          />
          <Button
            isLoading={loading}
            display="flex"
            justifyContent="center"
            alignItems="center"
            w="100%"
            border="none"
            backgroundColor={'var(--brand1)'}
            color={'var(--whiteFixed)'}
            type="submit"
            content="Finalizar Cadastro"
          />
        </FormControl>
        <Footer />
      </Flex>
    </>
  )
}
