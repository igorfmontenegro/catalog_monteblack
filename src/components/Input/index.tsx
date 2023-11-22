import { InputHTMLAttributes } from 'react'
import { Container } from './Input.styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export function Input(props: InputProps) {
  return (
    <Container>
      <label> {props.label} </label>
      <input type={props.type} {...props}></input>
    </Container>
  )
}
