import { Box, Card, Flex } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import api, { settingVehicles } from '../../services/api'
import { VehiclesCarousel } from '../profileViewAdmin/VehiclesCarousel'
import MockLeilao, { vehiclesList } from '../../components/mockLeilao'
import { Footer } from '../../components/Footer'
import { BannerHome } from '../../components/BannerHome'
import { noVehicleMocked } from '../../mocks/mocksVehicles'
import { IVehicle, IVehicleState } from '../../interfaces/IVehicle/index';

const Home = () => {

  const [vehicles, setVehicles] = useState<IVehicleState>({} as IVehicleState)
  const [currentId, setCurrentId] = useState('')
  useEffect(() => {
    settingVehicles(setVehicles)
    console.log(vehicles)
  }, [])

  const isOwnerSellerPerfil = false

  const propsMoto = {
    isOwnerSellerPerfil: false,
    vehicles: vehicles.motos,
    title: 'Motos',
    id: 'motos'
  }
  const propsCarro = {
    isOwnerSellerPerfil: false,
    vehicles: vehicles.carros,
    title: 'Carros',
    id: 'carros'
  }
  const propsLeilao = {
    title: 'Leilao',
    isOwnerSellerPerfil: false,
    leilao: vehiclesList,
    id: 'leilao'
  }

  return (
    <Flex w="100%" flexDir="column" justifyItems="center">
      <Header setCurrentId={setCurrentId} />
      <BannerHome to={'motos'} />
      <VehiclesCarousel props={propsLeilao} />
      <VehiclesCarousel props={propsCarro} />
      <VehiclesCarousel props={propsMoto} />
      <Footer />
    </Flex>
  )
}

export default Home
