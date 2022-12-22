import { Flex, ButtonGroup, Text, Box, border } from '@chakra-ui/react'
import { Textarea } from '../../Textarea'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Input } from '../../Input'

import { Button } from './Button'
import { createAdSchema } from '../../../schemas/advertisement'
import { zodResolver } from '@hookform/resolvers/zod'
import { isValidURL } from '../../../utils/validateUrl'
import { mask, unMask } from 'remask'
import { patterns } from '../../../utils/patternMaskPrice'

interface CreateAd {
  title: string
  year: string
  km: string
  description: string
  price: string
  image: string
  extraInputImages: string
}

interface CreateAdProps {
  onClose: () => void
}

export const CreateAdForm = ({ onClose }: CreateAdProps) => {
  const [activeItem, setActiveItem] = useState('Venda')
  const [activeVehicle, setActiveVehicle] = useState('Carro')
  const [extraInput, setExtraInput] = useState<number[]>([])
  const [extraImages, setExtraImages] = useState<string[]>([])
  const [maskValue, setMaskValue] = useState('')

  const maskPrice = (inputValue: string) => {
    const originalValue = unMask(inputValue)
    const maskedValue = mask(originalValue, patterns)

    setMaskValue(maskedValue)
  }

  const handleExtraImages = () => {
    if (!!extraInput.length) {
      return setExtraInput([
        ...extraInput,
        extraInput[extraInput.length - 1] + 1
      ])
    }
    return setExtraInput([...extraInput, 1])
  }

  const handleClick = (item: string) => {
    setActiveItem(item)
  }

  const handleVehicle = (item: string) => {
    setActiveVehicle(item)
  }

  const {
    formState: { errors },
    register,
    handleSubmit
  } = useForm<CreateAd>({
    resolver: zodResolver(createAdSchema)
  })

  const urlSelector = (stringList: string[]) => {
    const validURls = stringList.filter(image => isValidURL(image))

    return validURls
  }

  const handleCreateAd = (data: CreateAd) => {
    const { image, extraInputImages, ...cleanData } = data

    const imagesExtra = urlSelector(extraImages)

    const formateData = {
      ...cleanData,
      type: activeVehicle.toLowerCase(),
      images: [image, extraInputImages, ...imagesExtra]
    }

    console.log(formateData)
  }

  return (
    <Flex
      flexDir="column"
      gap="2"
      as="form"
      onSubmit={handleSubmit(handleCreateAd)}
    >
      <Text fontWeight="500" fontSize="1.4rem" color="#000">
        Tipo de anuncio
      </Text>

      <ButtonGroup w="100%" display="flex" justifyContent="space-between">
        <Button
          content="Venda"
          isActive={activeItem === 'Venda'}
          onClick={e => handleClick(e.currentTarget.innerText)}
        />
        <Button
          content="Leilão"
          isActive={activeItem === 'Leilão'}
          onClick={e => handleClick(e.currentTarget.innerText)}
        />
      </ButtonGroup>

      <Text my="15px" fontWeight="500" fontSize="1.4rem" color="#000">
        Informações do veículo
      </Text>

      <Text fontWeight="500" fontSize="1.4rem" color="var(--grey1)">
        Tipo de anuncio
      </Text>
      <Box display="flex" flexDir="column" gap="25px">
        <Input
          label="Título"
          placeholder="Digitar título"
          {...register('title')}
          error={errors.title}
        />

        <Flex gap="5px" flexDir={['column', 'column', 'row', 'row']}>
          <Flex gap="5px">
            <Input
              label="Ano"
              placeholder="Digitar ano"
              type="text"
              error={errors.year}
              {...register('year')}
            />

            <Input
              label="Quilometragem"
              placeholder="0"
              {...register('km')}
              error={errors.km}
            />
          </Flex>
          <Box>
            <Input
              value={maskValue}
              label="Preço"
              placeholder="Digitar preço"
              w={['100%', '100%', '', '']}
              {...register('price')}
              error={errors.price}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                maskPrice(event.target.value)
              }
            />
          </Box>
        </Flex>

        <Textarea
          label="Descrição"
          placeholder="Digitar descrição"
          {...register('description')}
          error={errors.description}
        />

        <Text fontWeight="500" fontSize="1.4rem" color="var(--grey1)">
          Tipo de veículo
        </Text>

        <ButtonGroup w="100%" display="flex" justifyContent="space-between">
          <Button
            content="Carro"
            isActive={activeVehicle === 'Carro'}
            onClick={e => handleVehicle(e.currentTarget.innerText)}
          />
          <Button
            content="Moto"
            isActive={activeVehicle === 'Moto'}
            onClick={e => handleVehicle(e.currentTarget.innerText)}
          />
        </ButtonGroup>

        <Input
          label="Imagem da capa"
          placeholder="Inserir URL da imagem"
          {...register('image')}
          error={errors.image}
        />

        <Input
          label="1º imagem da galeria"
          placeholder="Inserir URL da imagem"
          {...register('extraInputImages')}
          error={errors.extraInputImages}
        />

        {!!extraInput.length &&
          extraInput.map(() => (
            <Input
              onChangeCapture={e =>
                setExtraImages([...extraImages, e.currentTarget.value])
              }
              key={extraInput[extraInput.length - 1]}
              label="Imagem extra"
              placeholder="Inserir URL da imagem"
              name="imageUrl"
            />
          ))}
      </Box>

      <Button
        content="Adicionar campo para imagens da galeria"
        onClick={handleExtraImages}
        p="5px 5px"
        bg="var(--brand4)"
        border="1.5px solid var(--brand4)"
        fontSize={['1rem', '1.2rem', '1.4rem']}
        color="var(--brand1)"
        my="20px"
        w={['100%', '100%', '80%', '80%']}
      />

      <ButtonGroup w="100%" justifyContent="flex-end" my="15px">
        <Button
          onClick={onClose}
          content="Cancelar"
          bg="var(--grey6)"
          border="1.5px solid var(--grey6)"
          color="var(--grey2)"
        />

        <Button
          content="Criar anúncio"
          type="submit"
          bg="var(--brand3)"
          borderColor="var(--brand3)"
          color="var(--brand4)"
          _hover={{
            bg: 'var(--brand1)',
            transition: '0.6s'
          }}
        />
      </ButtonGroup>
    </Flex>
  )
}
