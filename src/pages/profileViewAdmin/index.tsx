import { Box, useDisclosure } from '@chakra-ui/react'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'

import { UserArea } from './UserArea'
import { VehiclesCarousel } from './VehiclesCarousel'
import { ModalCreateAd } from '../../components/Modals/ModalCreateAd/index'

const ProfileViewAdmin = () => {
  const countCards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box w="100%">
        <ModalCreateAd isOpen={isOpen} onClose={onClose} />
        <Header />

        <UserArea onOpen={onOpen} />

        <VehiclesCarousel title="Carros" vehicles={countCards} />
        <VehiclesCarousel title="Motos" vehicles={countCards} />

        <Footer />
      </Box>
    </>
  )
}

export default ProfileViewAdmin
