import { Box, Card, Flex, useDisclosure } from '@chakra-ui/react';
import { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import api, { settingUser, settingVehicles } from '../../services/api'
import { VehiclesCarousel } from '../profileViewAdmin/VehiclesCarousel'
import MockLeilao, { vehiclesList } from '../../components/mockLeilao'
import { Footer } from '../../components/Footer'
import { BannerHome } from '../../components/BannerHome'
import { noVehicleMocked } from '../../mocks/mocksVehicles'
import { ModalAdminEditProfile } from '../../components/Modals/ModalAdminEditProfile/index';
import { IUser } from '../../interfaces/IUser';

const Home = () => {
  const [vehicles, setVehicles] = useState({ carros: [], motos: [] })

  const [userInfo, setUserInfo] = useState({} as IUser)

  useEffect(() => {
    settingUser(setUserInfo)
    settingVehicles(setVehicles)
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

  const { onOpen, onClose, isOpen } = useDisclosure()

  return (
    <>
      <ModalAdminEditProfile isOpen={isOpen} onClose={onClose} setUserInfo={setUserInfo} userInfo={userInfo} />
      <Flex w="100%" flexDir="column" justifyItems="center">
        <Header onEditUserOpen={onOpen} />
        <BannerHome to={'motos'} />
        <VehiclesCarousel props={propsLeilao} />
        <VehiclesCarousel props={propsCarro} />
        <VehiclesCarousel props={propsMoto} />
        <Footer />
      </Flex>
    </>
  )
}

export default Home
