import { FaTimes, FaBook, FaCalculator, FaQuestionCircle } from 'react-icons/fa'
import { Container, Content } from './Siderbar.styles'
import SidebarItem from '../SiderbarItem'
import { Link } from 'react-router-dom'

interface SidebarProps {
  active: (value: boolean) => void
}

const Sidebar = ({ active }: SidebarProps) => {
  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container sidebar={'true'}>
      <FaTimes onClick={closeSidebar} />
      <Content>
        <Link to="/" onClick={closeSidebar}>
          <SidebarItem Icon={FaBook} Text="Catálogo" />
        </Link>
        <Link to="/calculadora" onClick={closeSidebar}>
          <SidebarItem Icon={FaCalculator} Text="Calculadora de Taxas" />
        </Link>
        <Link to="/duvidas" onClick={closeSidebar}>
          <SidebarItem Icon={FaQuestionCircle} Text="Dúvidas" />
        </Link>
      </Content>
    </Container>
  )
}

export default Sidebar
