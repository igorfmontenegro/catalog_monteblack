import { IconType } from 'react-icons'
import { Container } from './SidebarItem.styles'

interface SidebarItemProps {
  Icon: IconType
  Text: string
}

const SidebarItem = ({ Icon, Text }: SidebarItemProps) => {
  return (
    <Container>
      <Icon />
      {Text}
    </Container>
  )
}

export default SidebarItem
