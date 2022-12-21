import { Box } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { settingVehicles } from '../../services/api'

import { UserArea } from './UserArea'
import { VehiclesCarousel } from './VehiclesCarousel'

const ProfileViewAdmin = () => {

  const [vehicles, setVehicles] = useState({ carros: [], motos: [] })

  useEffect(() => {
    settingVehicles(setVehicles)
  }, []);

  const isOwnerSellerPerfil = true

  const propsMoto = { isOwnerSellerPerfil, vehicles: vehicles.motos, title: 'Motos' }
  const propsCarro = { isOwnerSellerPerfil, vehicles: vehicles.carros, title: 'Carros' }

  return (
    <Box w="100%">
      <Header />

      <UserArea />

      <VehiclesCarousel props={propsCarro} />
      <VehiclesCarousel props={propsMoto} />

      <Footer />
    </Box>
  )
}

export default ProfileViewAdmin
