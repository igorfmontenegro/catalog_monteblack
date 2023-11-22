import { QuestionIcon, Subtitle } from './Duvidas.styles'

import QuestionIconSvg from '../../icons/questionIcon.svg'
import { QuestionButton } from '../../components/QuestionButton'

interface QuestionsProps {
  question: string
  answer: string
}

const QuestionsCommon: Array<QuestionsProps> = [
  {
    question: 'Os aparelhos têm garantia?',
    answer:
      'Sim! Todos nossos aparelhos lacrados possuem 01 ano de Garantia Apple. Ou seja, qualquer problema que der no celular, a própria Apple irá resolver.'
  },
  {
    question: 'Quais são as formas de pagamento?',
    answer:
      'O pagamento pode ser à vista (dinheiro ou pix) ou nos cartões em até 12x (com juros).'
  },
  {
    question: 'Aceitam meu celular usado como entrada?',
    answer: 'Aceitamos mediante avaliação prévia.'
  },
  {
    question: 'Vocês fazem entrega?',
    answer:
      'Sim, fazemos! Entregamos em mãos para grande parte de Maceió. Para outros municípios, consultar disponibilidade.'
  },
  {
    question: 'O aparelho tem nota fiscal?',
    answer:
      'A maioria dos nossos aparelhos possui nota fiscal. Caso for o caso de não ter, avisaremos previamente.'
  },
  {
    question: 'Vocês trabalham com iPhone de Vitrine?',
    answer:
      'NÃO! iPhone de Vitrine não existe, na maioria das vezes são celulares recondicionados (com peças trocadas).'
  },
  {
    question: 'Divide no boleto?',
    answer:
      'Não. Apenas no cartão de crédito, onde haverá os juros da maquineta.'
  }
]

function Duvidas() {
  return (
    <>
      <Subtitle>
        <QuestionIcon src={QuestionIconSvg} />
        DÚVIDAS FREQUENTES
      </Subtitle>

      {QuestionsCommon.map((questionsCommon, index) => (
        <QuestionButton
          key={index}
          question={questionsCommon.question}
          answer={questionsCommon.answer}
        />
      ))}
    </>
  )
}

export default Duvidas
