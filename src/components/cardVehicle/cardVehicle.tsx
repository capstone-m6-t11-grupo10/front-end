import { Card, Image, Heading, Text, Box, HStack } from '@chakra-ui/react'
import { IPropsVehicle } from '../../interfaces/IVehicle'
import { IsActiveVehicle } from './isActive/isActive'
import { SellerData } from './SellerData'
import { AdvertiserOptions } from './AdvertiserOptions'

export const CardVehicle = ({ props }: IPropsVehicle) => {
  const {
    title,
    description,
    isActive,
    type,
    color,
    plate,
    images,
    price,
    km,
    year,
    user
  } = props

  const isOwnerSellerPerfil = true

  return (
    <Card
      w={['230px', '270px', '312px']}
      minW={['230px', '270px', '312px']}
      shadow="none"
      outline="none"
      position="relative"
    >
      <IsActiveVehicle props={{ isActive }} />
      <Image src={images} alt="Green double couch with wooden legs" />
      <Heading
        noOfLines={1}
        m="15px 0px"
        fontWeight={600}
        fontSize="1.6rem"
        color="var(--grey1)"
      >
        {title}
      </Heading>
      <Text
        noOfLines={2}
        fontWeight="400"
        fontSize="1.4rem"
        color="var(--grey2)"
      >
        {description}
      </Text>
      {!isOwnerSellerPerfil && <SellerData name={user.name} />}

      <HStack
        marginTop="10px"
        direction="row"
        gap={['2', '6']}
        fontSize={['1rem', '1.2rem', '1.4rem']}
        fontWeight="500"
        color="var(--brand1)"
      >
        <Box p="4px 8px" bg="var(--brand4)" borderRadius="4px">
          <Text>{km} km</Text>
        </Box>
        <Box p="4px 8px" bg="var(--brand4)" borderRadius="4px">
          <Text>{year}</Text>
        </Box>

        <Text
          color="var(--grey1)"
          fontWeight="500"
          fontFamily="Lexend"
          fontSize={['1.4rem', '1.6rem']}
        >
          R$ {price}
        </Text>
      </HStack>
      {isOwnerSellerPerfil && <AdvertiserOptions />}
    </Card>
  )
}
