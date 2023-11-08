import {
  Title,
  Container,
  BrandLogo,
  Blur,
  Header,
  Avatar,
  CellphoneBG,
  Subtitle,
  QuestionIcon,
  SmartWatchBG,
  Products,
  Foot
} from './Catalog.styles'

import { QuestionButton } from '../QuestionButton/index'

import Logo from '../../assets/Logo.png'
import Memoji from '../../assets/memoji.png'
import Cellphone from '../../assets/cellphones.png'
import SmartWatch from '../../assets/smartwatch.png'
import QuestionIconSvg from '../../icons/questionIcon.svg'
import WhatsApp from '../../icons/Atendimento.png'

import iPhone11 from '../../assets/iphone11.png'
import iPhone12 from '../../assets/iphone12.png'
import iPhone13 from '../../assets/iphone13.png'
import iPhone14 from '../../assets/iphone14.png'
import iPhone15 from '../../assets/iphone15.png'
import iPhone14PMax from '../../assets/iphone14promax.png'
import iPhone15P from '../../assets/iphone15pro.png'
import iPhone15PMax from '../../assets/iphone15promax.png'

import { Product } from '../Product'

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
  }
]

export interface ProductListProps {
  image: string
  name: string
  value: string
  card: string
  valueSecond?: string
  cardSecond?: string
}

const ProductList: Array<ProductListProps> = [
  {
    image: iPhone11,
    name: 'iPhone 11',
    value: '64GB: R$2.700 à vista',
    card: '12x de R$260 nos cartões',
    valueSecond: '128GB: R$3.100 à vista',
    cardSecond: '12x de R$300 nos cartões'
  },
  {
    image: iPhone12,
    name: 'iPhone 12',
    value: '64GB: R$3.200 à vista',
    card: '12x de R$310 nos cartões',
    valueSecond: '128GB: R$3.700 à vista',
    cardSecond: '12x de R$360 nos cartões'
  },
  {
    image: iPhone13,
    name: 'iPhone 13',
    value: '128GB: R$3.900 à vista',
    card: '12x de R$380 nos cartões',
    valueSecond: '256GB: R$4.700 à vista',
    cardSecond: '12x de R$460 nos cartões'
  },
  {
    image: iPhone14,
    name: 'iPhone 14',
    value: '128GB: R$4.400 à vista',
    card: '12x de R$430 nos cartões',
    valueSecond: '256GB: R$5.200 à vista',
    cardSecond: '12x de R$510 nos cartões'
  },
  {
    image: iPhone15,
    name: 'iPhone 15',
    value: '128GB: R$5.700 à vista',
    card: '12x de R$560 nos cartões',
    valueSecond: '256GB: R$6.300 à vista',
    cardSecond: '12x de R$620 nos cartões'
  },
  {
    image: iPhone14PMax,
    name: 'iPhone 14 Pro Max',
    value: '128GB: R$6.850 à vista',
    card: '12x de R$670 nos cartões',
    valueSecond: '256GB: R$7.400 à vista',
    cardSecond: '12x de R$725 nos cartões'
  },
  {
    image: iPhone15P,
    name: 'iPhone 15 Pro',
    value: '128GB: R$6.700 à vista',
    card: '12x de R$660 nos cartões',
    valueSecond: '256GB: R$7.300 à vista',
    cardSecond: '12x de R$720 nos cartões'
  },
  {
    image: iPhone15PMax,
    name: 'iPhone 15 Pro Max',
    value: '256GB: R$8.400 à vista',
    card: '12x de R$820 nos cartões',
    valueSecond: '512GB: R$9.000 à vista',
    cardSecond: '12x de R$880 nos cartões'
  }
]

export function Catalog() {
  return (
    <Container>
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

      <Products>
        <h2>
          CATÁLOGO <br></br>
          <span> Lacrados com 01 ano de Garantia</span>
        </h2>
        {ProductList.map((productList, index) => (
          <Product
            key={index}
            image={productList.image}
            name={productList.name}
            value={productList.value}
            card={productList.card}
            valueSecond={productList.valueSecond}
            cardSecond={productList.cardSecond}
          />
        ))}
      </Products>

      <Foot>
        <h1>
          Se interessou por <span>algum produto</span> ou ainda possui
          <span> alguma dúvida?</span>
        </h1>

        <a href="https://wa.me/55082993271667">
          <img src={WhatsApp} />
        </a>
      </Foot>
    </Container>
  )
}
