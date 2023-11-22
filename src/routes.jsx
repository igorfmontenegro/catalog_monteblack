import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Calculadora from './pages/Calculadora'
import Duvidas from './pages/Duvidas'
import Layout from './pages/Layout'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/duvidas" element={<Duvidas />} />
          <Route path="/calculadora" element={<Calculadora />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
