import { Box } from '@chakra-ui/react'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'

import { UserArea } from './UserArea'
import { VehiclesCarousel } from './VehiclesCarousel'

const ProfileViewAdmin = () => {
  const countCards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <Box w="100%">
      <Header />

      <UserArea />

      <VehiclesCarousel title="Carros" vehicles={countCards} />
      <VehiclesCarousel title="Motos" vehicles={countCards} />

      <Footer />
    </Box>
  )
}

export default ProfileViewAdmin
