import { Box, Flex, Heading } from '@chakra-ui/react'
import { NoVehiclesCard } from '../../components/cardNoVehicle'
import { CardVehicle } from '../../components/cardVehicle/cardVehicle'
import { CardVehicleLeilao } from '../../components/cardVehicle/cardVehicleLeilao'
import { vehiclesList } from '../../components/mockLeilao'
import { IVehicle, IVehicleLeilao } from '../../interfaces/IVehicle'
import { noVehicleMocked, vehicleMocked } from '../../mocks/mocksVehicles'

interface VehiclesCarousel {
  props: {
    vehicles?: IVehicle[]

    title: string

    isOwnerSellerPerfil: boolean

    leilao?: IVehicleLeilao[]
    id?: string
  }
}

export const VehiclesCarousel = ({ props }: VehiclesCarousel) => {
  const { title, vehicles, isOwnerSellerPerfil, leilao, id } = props

  let noVechiles = false

  if (vehicles?.length === 0) {
    noVechiles = true
  }

  return (
    <Box paddingX={['25px', '45px']} mt="100px">
      <Heading
        id={id}
        as="h2"
        fontFamily="Lexend"
        fontSize="2.4rem"
        color="black"
      >
        {title}
      </Heading>

      <Flex
        overflowY="auto"
        w="100%"
        justifyContent="flex-start"
        maxW="1600px"
        gap="45px"
        mt="35px"
        css={{
          '&::-webkit-scrollbar': {
            width: '4px',
            height: '4px'
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'var(--grey4)',
            borderRadius: '24px'
          }
        }}
      >
        {leilao?.map(vehicle => (
          <CardVehicleLeilao key={vehicle.id} props={vehicle} />
        ))}
        {vehicles?.map(vehicle => (
          <CardVehicle
            key={vehicle.id}
            props={{ vehicle, isOwnerSellerPerfil }}
          />
        ))}

        {noVechiles && (
          // <CardVehicle key='01234' props={{ vehicle: noVehicleMocked, isOwnerSellerPerfil: false }} />
          <NoVehiclesCard />
        )}
      </Flex>
    </Box>
  )
}
