import { Route, Routes } from 'react-router-dom'

import GlobalStyle from '../styles/global'

import Home from '../pages/home'

import Registration from '../pages/registration'
import { ModalAdminEditProfile } from '../components/ModalAdminEditProfile'
const Router = () => (
  <>
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/registration" element={<Registration />} />
      <Route path="/edit-profile" element={<ModalAdminEditProfile />} />
    </Routes>
  </>
)

export default Router
