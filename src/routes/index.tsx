import { Route, Routes } from 'react-router-dom'

import GlobalStyle from '../styles/global'

import Home from '../pages/home'

import Login from '../pages/login'

import Registration from '../pages/registration'
import { ModalAdminEditProfile } from '../components/ModalAdminEditProfile'

const Router = () => (
  <>
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/registration" element={<Registration />} />

      <Route path="/edit-profile" element={<ModalAdminEditProfile />} />

      <Route path="/login" element={<Login />} />
    </Routes>
  </>
)

export default Router
