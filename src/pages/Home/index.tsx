import { Products, Foot } from './Home.styles'

import WhatsApp from '../../icons/Atendimento.png'

import iPhone13 from '../../assets/iphone13.png'
import iPhone14 from '../../assets/iphone14.png'
import iPhone15 from '../../assets/iphone15.png'
import iPhone16 from '../../assets/iphone16.png'
import iPhone16P from '../../assets/iphone15pro.png'
import iPhone16PMax from '../../assets/iphone15promax.png'

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
    value: '128GB: R$3.300 à vista',
    card: '12x de R$325 nos cartões',
    valueSecond: '256GB: R$3.700 à vista',
    cardSecond: '12x de R$365 nos cartões'
  },
  {
    image: iPhone14,
    name: 'iPhone 14',
    value: '128GB: R$3.800 à vista',
    card: '12x de R$370 nos cartões',
    valueSecond: '256GB: R$4.200 à vista',
    cardSecond: '12x de R$410 nos cartões'
  },
  {
    image: iPhone15,
    name: 'iPhone 15',
    value: '128GB: R$4.250 à vista',
    card: '12x de R$420 nos cartões',
    valueSecond: '256GB: R$4.900 à vista',
    cardSecond: '12x de R$480 nos cartões'
  },
  {
    image: iPhone16,
    name: 'iPhone 16',
    value: '128GB: R$4.950 à vista',
    card: '12x de R$490 nos cartões',
    valueSecond: '256GB: R$5.900 à vista',
    cardSecond: '12x de R$580 nos cartões'
  },
  {
    image: iPhone16P,
    name: 'iPhone 16 Pro',
    value: '128GB: R$6.300 à vista',
    card: '12x de R$620 nos cartões',
    valueSecond: '256GB: R$6.700 à vista',
    cardSecond: '12x de R$660 nos cartões'
  },
  {
    image: iPhone16PMax,
    name: 'iPhone 16 Pro Max',
    value: '256GB: R$7.000 à vista',
    card: '12x de R$690 nos cartões',
    valueSecond: '512GB: R$9.000 à vista',
    cardSecond: '12x de R$890 nos cartões'
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
