import { Products, Foot } from './Home.styles'

import WhatsApp from '../../icons/Atendimento.png'

import iPhone13 from '../../assets/iphone13.png'
import iPhone14 from '../../assets/iphone14.png'
import iPhone15 from '../../assets/iphone15.png'
import iPhone16 from '../../assets/iphone16.png'
import iPhone17P from '../../assets/iphone17pro.png'
import iPhone17PMax from '../../assets/iphone17promax.png'

import { Product } from '../../components/Product'

export interface ProductListProps {
  image: string
  name: string
  condition?: string
  value: string
  card: string
  valueSecond?: string
  cardSecond?: string
}

const ProductList: Array<ProductListProps> = [
  {
    image: iPhone13,
    name: 'iPhone 13',
    value: '128GB: R$3.100 à vista',
    card: '12x de R$315 nos cartões',
    valueSecond: '256GB: R$3.500 à vista',
    cardSecond: '12x de R$345 nos cartões'
  },
  {
    image: iPhone14,
    name: 'iPhone 14',
    value: '128GB: R$3.500 à vista',
    card: '12x de R$340 nos cartões',
    valueSecond: '256GB: R$3.900 à vista',
    cardSecond: '12x de R$380 nos cartões'
  },
  {
    image: iPhone15,
    name: 'iPhone 15',
    value: '128GB: R$3.750 à vista',
    card: '12x de R$370 nos cartões',
    valueSecond: '256GB: R$4.600 à vista',
    cardSecond: '12x de R$450 nos cartões'
  },
  {
    image: iPhone16,
    name: 'iPhone 16',
    value: '128GB: R$4.500 à vista',
    card: '12x de R$440 nos cartões',
    valueSecond: '256GB: R$5.500 à vista',
    cardSecond: '12x de R$540 nos cartões'
  },
  {
    image: iPhone17P,
    name: 'iPhone 17 Pro',
    value: '256GB: R$9.800 à vista',
    card: '12x de R$970 nos cartões',
    valueSecond: '512GB: R$11.500 à vista',
    cardSecond: '12x de R$1.130 nos cartões'
  },
  {
    image: iPhone17PMax,
    name: 'iPhone 17 Pro Max',
    value: '256GB: R$10.200 à vista',
    card: '12x de R$990 nos cartões',
    valueSecond: '512GB: R$12.000 à vista',
    cardSecond: '12x de R$1.190 nos cartões'
  }
]

function Home() {
  return (
    <>
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
    </>
  )
}

export default Home
