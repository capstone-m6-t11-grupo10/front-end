import { Box, useDisclosure } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { settingProfileView, settingUser, settingVehicles } from '../../services/api'

import { UserArea } from './UserArea'
import { VehiclesCarousel } from './VehiclesCarousel'
import { ModalCreateAd } from '../../components/Modals/ModalCreateAd/index'
import { userMocked } from '../../mocks/mocksUser'
import { IUser } from '../../interfaces/IUser'
import { ModalAdminEditProfile } from '../../components/Modals/ModalAdminEditProfile/index';

const ProfileViewAdmin = () => {

  const [vehicles, setVehicles] = useState({ carros: [], motos: [] })
  const [userInfo, setUserInfo] = useState({} as IUser)



  useEffect(() => {
    settingUser(setUserInfo)
    settingVehicles(setVehicles)
  }, []);

  const isOwnerSellerPerfil = true

  const propsMoto = { isOwnerSellerPerfil, vehicles: vehicles.motos, title: 'Motos' }
  const propsCarro = { isOwnerSellerPerfil, vehicles: vehicles.carros, title: 'Carros' }

  const { isOpen: isUserModalOpen, onOpen: onUserModalOpen, onClose: onUserModalClose } = useDisclosure()
  const { isOpen: isEditUserOpen, onToggle: onEditUserOpen, onClose: onEditUserClose } = useDisclosure()

  return (
    <>
      <ModalAdminEditProfile
        onClose={onEditUserClose}
        setUserInfo={setUserInfo}
        isOpen={isEditUserOpen}
        userInfo={userInfo}
      />
      <Box w="100%">
        <ModalCreateAd isOpen={isUserModalOpen} onClose={onUserModalClose} />
        <Header onEditUserOpen={onEditUserOpen} />

        <UserArea setUserInfo={setUserInfo} userInfo={userInfo} onOpen={onUserModalOpen} />

        <VehiclesCarousel props={propsCarro} />
        <VehiclesCarousel props={propsMoto} />

        <Footer />
      </Box>
    </>
  )
}

export default ProfileViewAdmin
