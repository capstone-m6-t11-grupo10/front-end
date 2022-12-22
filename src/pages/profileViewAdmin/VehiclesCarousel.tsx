import { Box, Flex, Heading } from '@chakra-ui/react'
import { CardVehicle } from '../../components/cardVehicle/cardVehicle'
import { IVehicle } from '../../interfaces/IVehicle'
import { vehicleMocked } from '../../mocks/mocksVehicles'

interface VehiclesCarousel {
  props: {
    vehicles: IVehicle[]

    title: string

    isOwnerSellerPerfil: boolean
  }
}


export const VehiclesCarousel = ({ props }: VehiclesCarousel) => {

  const { title, vehicles, isOwnerSellerPerfil } = props


  return (
    <Box paddingX={['25px', '45px']} mt="100px">
      <Heading as="h2" fontFamily="Lexend" fontSize="2.4rem" color="black">
        {title}
      </Heading>

      <Flex
        overflow="auto"
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
        {vehicles.map((vehicle) => (
          <CardVehicle key={vehicle.uuid} props={{ vehicle, isOwnerSellerPerfil }} />
        ))}
      </Flex>
    </Box>
  )
}
