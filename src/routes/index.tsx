import { Route, Routes } from 'react-router-dom'

import GlobalStyle from '../styles/global'

import Home from '../pages/home'

import Registration from '../pages/registration'
const Router = () => (
  <>
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/registration" element={<Registration />} />
    </Routes>
  </>
)

export default Router
