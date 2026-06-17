import { Outlet, useLocation } from 'react-router-dom'
import { useState } from 'react'

import {
  Blur,
  BrandLogo,
  CellphoneBG,
  Container,
  Menu,
  SmartWatchBG,
  HeroCard,
  HeroTitle,
  HeroStats,
  HeroStat,
  HeroStatNum,
  HeroStatLabel,
  HeroDivider,
  HeroRow,
  HeroAvatar,
  HeroText,
  HeroSub
} from './Layout.styles'

import Logo from '../../assets/Logo.png'
import Memoji from '../../assets/memoji.png'
import Cellphone from '../../assets/cellphones.png'
import SmartWatch from '../../assets/smartwatch.png'
import { FaBars } from 'react-icons/fa'
import Sidebar from '../../components/Sidebar'

const PAGE_GREETINGS: Record<string, string> = {
  '/': 'Separei os modelos disponíveis pra você ↓',
  '/calculadora': 'Calcule as taxas de juros você mesmo através da nossa calculadora.',
  '/duvidas': 'Separei as perguntas mais frequentes pra te ajudar.'
}

function Layout() {
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)
  const location = useLocation()

  const isHome = location.pathname === '/'
  const greeting = PAGE_GREETINGS[location.pathname] || PAGE_GREETINGS['/']

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

      <HeroCard>
        {isHome && (
          <>
            <HeroTitle>
              Importados <span>lacrados</span>,<br />com garantia real
            </HeroTitle>

            <HeroStats>
              <HeroStat>
                <HeroStatNum>12 meses</HeroStatNum>
                <HeroStatLabel>de garantia</HeroStatLabel>
              </HeroStat>
              <HeroStat>
                <HeroStatNum>100%</HeroStatNum>
                <HeroStatLabel>procedência verificada</HeroStatLabel>
              </HeroStat>
              <HeroStat>
                <HeroStatNum>+3.000</HeroStatNum>
                <HeroStatLabel>aparelhos vendidos</HeroStatLabel>
              </HeroStat>
            </HeroStats>

            <HeroDivider />
          </>
        )}

        <HeroRow>
          <HeroAvatar src={Memoji} />
          <div>
            <HeroText>Olá! Sou o <strong>Igor</strong>, da Monteblack.</HeroText>
            <HeroSub>{greeting}</HeroSub>
          </div>
        </HeroRow>
      </HeroCard>

      <Outlet />
    </Container>
  )
}

export default Layout
