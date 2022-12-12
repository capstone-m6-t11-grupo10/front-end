import { Route, Routes } from 'react-router-dom'

import GlobalStyle from '../styles/global'

import Home from '../pages/home'

const Router = () => (
  <>
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </>
)

export default Router
