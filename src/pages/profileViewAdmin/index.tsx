import { Box, useDisclosure } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { settingVehicles } from '../../services/api'

import { UserArea } from './UserArea'
import { VehiclesCarousel } from './VehiclesCarousel'
import { ModalCreateAd } from '../../components/Modals/ModalCreateAd/index'

const ProfileViewAdmin = () => {

  const [vehicles, setVehicles] = useState({ carros: [], motos: [] })

  useEffect(() => {
    settingVehicles(setVehicles)
  }, []);

  const isOwnerSellerPerfil = true

  const propsMoto = { isOwnerSellerPerfil, vehicles: vehicles.motos, title: 'Motos' }
  const propsCarro = { isOwnerSellerPerfil, vehicles: vehicles.carros, title: 'Carros' }

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box w="100%">
        <ModalCreateAd isOpen={isOpen} onClose={onClose} />
        <Header />

        <UserArea onOpen={onOpen} />

      <VehiclesCarousel props={propsCarro} />
      <VehiclesCarousel props={propsMoto} />

        <Footer />
      </Box>
    </>
  )
}

export default ProfileViewAdmin
