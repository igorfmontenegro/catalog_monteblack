import { useState } from 'react'
import { Container } from './QuestionButton.styles'
import { QuestionAnswer } from '../QuestionAnswer'

interface QuestionButtonProps {
  question: string
  answer: string
  key: number
}

export function QuestionButton(props: QuestionButtonProps) {
  const [Answer, setAnswer] = useState(false)

  function handleClickAnswer() {
    setAnswer(!Answer)
  }

  return (
    <>
      <Container onClick={handleClickAnswer}> {props.question}</Container>
      {Answer && <QuestionAnswer answer={props.answer}> </QuestionAnswer>}
    </>
  )
}
