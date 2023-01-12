import { Box, useDisclosure } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { settingProfileView, settingVehicles } from '../../services/api'

import { UserArea } from './UserArea'
import { VehiclesCarousel } from './VehiclesCarousel'
import { ModalCreateAd } from '../../components/Modals/ModalCreateAd/index'
import { userMocked } from '../../mocks/mocksUser'
import { IVehicleState } from '../../interfaces/IVehicle'



const ProfileViewAdmin = () => {

  const [vehicles, setVehicles] = useState<IVehicleState>({} as IVehicleState)
  const [userInfo, setUserInfo] = useState(userMocked)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const id = 'df7b5399-e596-4b98-95eb-9a776017da0d'

  useEffect(() => {
    settingVehicles(setVehicles)
    settingProfileView({ setUserInfo, id })
  }, [onClose]);

  const isOwnerSellerPerfil = true

  const propsMoto = { isOwnerSellerPerfil, vehicles: vehicles.motos, title: 'Motos' }
  const propsCarro = { isOwnerSellerPerfil, vehicles: vehicles.carros, title: 'Carros' }
  const propsUserArea = { setUserInfo, userInfo, onOpen }
  const propsModalCreateAd = { vehicles, setVehicles, isOpen, onClose }


  return (
    <>
      <Box w="100%">
        <ModalCreateAd props={propsModalCreateAd} />
        <Header />

        <UserArea props={propsUserArea} />

        <VehiclesCarousel props={propsCarro} />
        <VehiclesCarousel props={propsMoto} />

        <Footer />
      </Box>
    </>
  )
}

export default ProfileViewAdmin
