import { Box, Flex, Heading } from '@chakra-ui/react'
import { vehicleMocked } from '../../mocks/mocksVehicles'
import { CardVehicle } from '../../components/cardVehicle/CardVehicle'

interface VehiclesCarousel {
  // Alterar o tipo para array de veículos
  //quando a integração com a API for feita
  vehicles: number[]

  title: string
}

export const VehiclesCarousel = ({ title, vehicles }: VehiclesCarousel) => {
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
        {vehicles.map(() => (
          <CardVehicle props={vehicleMocked} />
        ))}
      </Flex>
    </Box>
  )
}
