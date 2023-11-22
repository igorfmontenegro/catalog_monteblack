import { StyledButton } from './Button.styles'

interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  action: string
}

export function Button(props: ButtonProps) {
  return <StyledButton onClick={props.onClick}>{props.action}</StyledButton>
}
