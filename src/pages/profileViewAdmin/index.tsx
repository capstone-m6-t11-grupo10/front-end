import { Box, useDisclosure } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { settingProfileView, settingVehicles } from '../../services/api'

import { UserArea } from './UserArea'
import { VehiclesCarousel } from './VehiclesCarousel'
import { ModalCreateAd } from '../../components/Modals/ModalCreateAd/index'
import { userMocked } from '../../mocks/mocksUser'

const ProfileViewAdmin = () => {

  const [vehicles, setVehicles] = useState({ carros: [], motos: [] })
  const [userInfo, setUserInfo] = useState(userMocked)

  const id = 'd26027b8-d124-4004-afd1-f117495dd570'

  useEffect(() => {
    settingVehicles(setVehicles)
    settingProfileView({ setUserInfo, id })
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

        <UserArea setUserInfo={setUserInfo} userInfo={userInfo} onOpen={onOpen} />

        <VehiclesCarousel props={propsCarro} />
        <VehiclesCarousel props={propsMoto} />

        <Footer />
      </Box>
    </>
  )
}

export default ProfileViewAdmin
