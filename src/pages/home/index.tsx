import { Box, Flex } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import api, { settingVehicles } from '../../services/api'
import { VehiclesCarousel } from '../profileViewAdmin/VehiclesCarousel'

const Home = () => {

  const [vehicles, setVehicles] = useState({ carros: [], motos: [] })

  useEffect(() => {
    settingVehicles(setVehicles)
  }, []);

  const isOwnerSellerPerfil = false

  const propsMoto = { isOwnerSellerPerfil: false, vehicles: vehicles.motos, title: 'Motos' }
  const propsCarro = { isOwnerSellerPerfil: false, vehicles: vehicles.carros, title: 'Carros' }

  return <Box >

    <Header />
    <VehiclesCarousel props={propsCarro} />
    <VehiclesCarousel props={propsMoto} />

  </Box>
}

export default Home
