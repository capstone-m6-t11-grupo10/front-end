import { Box, Card, Flex } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import api, { settingVehicles } from '../../services/api'
import { VehiclesCarousel } from '../profileViewAdmin/VehiclesCarousel'
import MockLeilao, { vehiclesList } from '../../components/mockLeilao'
import { Footer } from '../../components/Footer'
import { BannerHome } from '../../components/BannerHome'
import { noVehicleMocked } from '../../mocks/mocksVehicles'

const Home = () => {
  const [vehicles, setVehicles] = useState({ carros: [], motos: [] })

  useEffect(() => {
    settingVehicles(setVehicles)
  }, [])

  const isOwnerSellerPerfil = false

  const propsMoto = {
    isOwnerSellerPerfil: false,
    vehicles: vehicles.motos,
    title: 'Motos'
  }
  const propsCarro = {
    isOwnerSellerPerfil: false,
    vehicles: vehicles.carros ? vehicles.carros : noVehicleMocked,
    title: 'Carros'
  }
  const propsLeilao = {
    title: 'Leilao',
    isOwnerSellerPerfil: false,
    leilao: vehiclesList
  }

  return (
    <Flex w="100%" flexDir="column" justifyItems="center">
      <Header />
      <BannerHome />
      <VehiclesCarousel props={propsLeilao} />
      <VehiclesCarousel props={propsCarro} />
      <VehiclesCarousel props={propsMoto} />
      <Footer />
    </Flex>
  )
}

export default Home
