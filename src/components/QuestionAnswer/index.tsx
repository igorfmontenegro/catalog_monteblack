import { Container } from './QuestionAnswer.styles'

interface QuestionAnswerProps {
  answer: string
  children: string
}

export function QuestionAnswer(props: QuestionAnswerProps) {
  return <Container> {props.answer} </Container>
}
