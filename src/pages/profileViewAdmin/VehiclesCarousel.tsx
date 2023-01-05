import { Box, Flex, Heading } from '@chakra-ui/react'
import { CardVehicle } from '../../components/cardVehicle/cardVehicle'
import { CardVehicleLeilao } from '../../components/cardVehicle/cardVehicleLeilao'
import { vehiclesList } from '../../components/mockLeilao'
import { IVehicle, IVehicleLeilao } from '../../interfaces/IVehicle'
import { vehicleMocked } from '../../mocks/mocksVehicles'

interface VehiclesCarousel {
  props: {
    vehicles?: IVehicle[]

    title: string

    isOwnerSellerPerfil: boolean

    leilao?: IVehicleLeilao[]
  }
}

export const VehiclesCarousel = ({ props }: VehiclesCarousel) => {
  const { title, vehicles, isOwnerSellerPerfil, leilao } = props

  return (
    <Box paddingX={['25px', '45px']} mt="100px">
      <Heading as="h2" fontFamily="Lexend" fontSize="2.4rem" color="black">
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
          <CardVehicleLeilao key={vehicle.uuid} props={vehicle} />
        ))}
        {vehicles?.map(vehicle => (
          <CardVehicle
            key={vehicle.uuid}
            props={{ vehicle, isOwnerSellerPerfil }}
          />
        ))}
      </Flex>
    </Box>
  )
}
