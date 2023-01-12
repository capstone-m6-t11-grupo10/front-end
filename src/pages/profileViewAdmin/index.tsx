import { Box, useDisclosure } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { settingProfileView, settingUser, settingVehicles } from '../../services/api'
import { IUser } from '../../interfaces/IUser'
import { ModalAdminEditProfile } from '../../components/Modals/ModalAdminEditProfile/index';

import { UserArea } from './UserArea'
import { VehiclesCarousel } from './VehiclesCarousel'
import { ModalCreateAd } from '../../components/Modals/ModalCreateAd/index'
import { userMocked } from '../../mocks/mocksUser'
import { IVehicleState } from '../../interfaces/IVehicle'



const ProfileViewAdmin = () => {

  const [vehicles, setVehicles] = useState<IVehicleState>({} as IVehicleState)
  const [userInfo, setUserInfo] = useState({} as IUser)
  const { isOpen, onOpen, onClose } = useDisclosure()


  useEffect(() => {
    settingUser(setUserInfo)
    settingVehicles(setVehicles)
    settingProfileView({ setUserInfo })
  }, [onClose]);

  const isOwnerSellerPerfil = true

  const propsMoto = { isOwnerSellerPerfil, vehicles: vehicles.motos, title: 'Motos' }
  const propsCarro = { isOwnerSellerPerfil, vehicles: vehicles.carros, title: 'Carros' }
  const propsUserArea = { setUserInfo, userInfo, onOpen }
  const propsModalCreateAd = { vehicles, setVehicles, isOpen, onClose }

  const { isOpen: isUserModalOpen, onOpen: onUserModalOpen, onClose: onUserModalClose } = useDisclosure()
  const { isOpen: isEditUserOpen, onOpen: onEditUserOpen, onClose: onEditUserClose } = useDisclosure()

  return (
    <>
      <ModalAdminEditProfile
        onClose={onEditUserClose}
        setUserInfo={setUserInfo}
        isOpen={isEditUserOpen}
        userInfo={userInfo}
      />
      <Box w="100%">
        <ModalCreateAd props={propsModalCreateAd} />
        <Header onEditUserOpen={onEditUserOpen} />

        <UserArea props={propsUserArea} />

        <VehiclesCarousel props={propsCarro} />
        <VehiclesCarousel props={propsMoto} />

        <Footer />
      </Box>
    </>
  )
}

export default ProfileViewAdmin
