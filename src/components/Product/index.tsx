import {
  ProductDescription,
  ProductImage,
  ContainerProduct,
  ContainerDescription,
  ContainerImage,
  ProductName
} from './Product.styles'

import { ProductListProps } from '../Catalog/Catalog'

export function Product(props: ProductListProps) {
  return (
    <ContainerProduct>
      <ContainerImage>
        <ProductImage src={props.image} />
      </ContainerImage>

      <ContainerDescription>
        <ProductDescription>
          <ProductName>
            {props.name} <br></br>
            <span> {props.condition} </span>
          </ProductName>
          <h4> {props.value} </h4>
          <p> {props.card} </p>
        </ProductDescription>
        <ProductDescription>
          <h4> {props.valueSecond} </h4>
          <p> {props.cardSecond} </p>
        </ProductDescription>
      </ContainerDescription>
    </ContainerProduct>
  )
}
