import GlobalStyle from '../styles/global'

import { Route, Routes } from 'react-router-dom'
import { ModalAdminEditProfile } from '../components/Modals/ModalAdminEditProfile'

import Home from '../pages/home'
import Login from '../pages/login'
import Registration from '../pages/registration'
import ProfileViewAdmin from '../pages/profileViewAdmin'

import DetailedVeicle from '../pages/detailedVehicle'

import { BannerHome } from '../components/BannerHome'

const Router = () => (
  <>
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/registration" element={<Registration />} />

      <Route path="/edit-profile" element={<ModalAdminEditProfile />} />

      <Route path="/login" element={<Login />} />

      <Route path="/profile" element={<ProfileViewAdmin />} />


      <Route path="/detailedVeicle" element={<DetailedVeicle />} />

      <Route path="/banner" element={<BannerHome />} />

    </Routes>
  </>
)

export default Router
