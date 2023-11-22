import { Outlet } from 'react-router-dom'
import { useState } from 'react'

import {
  Avatar,
  Blur,
  BrandLogo,
  CellphoneBG,
  Container,
  Header,
  Menu,
  SmartWatchBG,
  Title
} from './Layout.styles'

import Logo from '../../assets/Logo.png'
import Memoji from '../../assets/memoji.png'
import Cellphone from '../../assets/cellphones.png'
import SmartWatch from '../../assets/smartwatch.png'
import { FaBars } from 'react-icons/fa'
import Sidebar from '../../components/Sidebar'

function Layout() {
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)

  return (
    <Container>
      <Menu>
        <FaBars onClick={showSidebar} />
        {sidebar && <Sidebar active={setSidebar} />}
      </Menu>

      <BrandLogo src={Logo} />
      <Blur />
      <CellphoneBG src={Cellphone} />
      <SmartWatchBG src={SmartWatch} />
      <Header>
        <Title>
          Você está perto de encontrar o <span>iPhone perfeito</span> pra você!
        </Title>
        <Avatar src={Memoji} />
      </Header>

      <Outlet />
    </Container>
  )
}

export default Layout
