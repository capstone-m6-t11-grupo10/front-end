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
  const { isOpen: isVehicleEdit, onOpen: onVehicleEdit, onClose: onVehicleEditClose } = useDisclosure()
  const { isOpen: isEditUserOpen, onOpen: onEditUserOpen, onClose: onEditUserClose } = useDisclosure()


  useEffect(() => {
    settingUser(setUserInfo)
    settingVehicles(setVehicles)
    settingProfileView({ setUserInfo })
  }, []);

  const isOwnerSellerPerfil = true

  const propsMoto = { isOwnerSellerPerfil, vehicles: vehicles.motos, title: 'Motos' }
  const propsCarro = { isOwnerSellerPerfil, vehicles: vehicles.carros, title: 'Carros' }
  const propsUserArea = { setUserInfo, userInfo, onOpen: onVehicleEdit }
  const propsModalCreateAd = { vehicles, setVehicles, isOpen: isVehicleEdit, onClose: onVehicleEditClose }


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
