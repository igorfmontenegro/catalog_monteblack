import { Products, Foot } from './Home.styles'

import WhatsApp from '../../icons/Atendimento.png'

import iPhone11 from '../../assets/iphone11.png'
import iPhone12 from '../../assets/iphone12.png'
import iPhone13 from '../../assets/iphone13.png'
import iPhone14 from '../../assets/iphone14.png'
import iPhone15 from '../../assets/iphone15.png'
import iPhone14PMax from '../../assets/iphone14promax.png'
import iPhone15P from '../../assets/iphone15pro.png'
import iPhone15PMax from '../../assets/iphone15promax.png'

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
    value: '64GB: R$3.100 à vista',
    card: '12x de R$300 nos cartões',
    valueSecond: '128GB: R$3.500 à vista',
    cardSecond: '12x de R$340 nos cartões'
  },
  {
    image: iPhone13,
    name: 'iPhone 13',
    value: '128GB: R$3.750 à vista',
    card: '12x de R$360 nos cartões',
    valueSecond: '256GB: R$4.700 à vista',
    cardSecond: '12x de R$460 nos cartões'
  },
  {
    image: iPhone14,
    name: 'iPhone 14',
    value: '128GB: R$4.250 à vista',
    card: '12x de R$410 nos cartões',
    valueSecond: '256GB: R$5.200 à vista',
    cardSecond: '12x de R$510 nos cartões'
  },
  {
    image: iPhone15,
    name: 'iPhone 15',
    value: '128GB: R$5.400 à vista',
    card: '12x de R$530 nos cartões',
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
    value: '256GB: R$7.800 à vista',
    card: '12x de R$760 nos cartões',
    valueSecond: '512GB: R$9.000 à vista',
    cardSecond: '12x de R$880 nos cartões'
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
