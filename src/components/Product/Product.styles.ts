import styled from 'styled-components'

export const ContainerProduct = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  border: 3px solid #ffffff;
  border-radius: 25px;
  width: 90vw;
  max-width: 560px;

  & + & {
    margin-top: -30px;
  }

  &:last-child {
    margin-bottom: 20px;
  }
`

export const ContainerImage = styled.div`
  background-color: #ffffff;
  padding: 15px;
  border-radius: 20px;
  text-align: center;
`

export const ProductImage = styled.img`
  height: 120px;
`

export const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
`

export const ProductDescription = styled.div`
  color: #ffffff;

  h4 {
    font-size: 14px;
    font-weight: 500;
  }

  p {
    font-size: 12px;
  }
`

export const ProductName = styled.h3`
  font-size: 16px;
  margin-bottom: 10px;
`
