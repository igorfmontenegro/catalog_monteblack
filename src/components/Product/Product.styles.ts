import styled from 'styled-components'

export const ContainerProduct = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  border: 1px solid #333;
  border-radius: 20px;
  width: 90vw;
  max-width: 560px;
  background: linear-gradient(180deg, #1c1c1c 0%, #161616 100%);
  overflow: hidden;
  transition: border-color 0.2s;

  &:hover {
    border-color: #555;
  }

  & + & {
    margin-top: -25px;
  }

  &:last-child {
    margin-bottom: 20px;
  }
`

export const ContainerImage = styled.div`
  background-color: #ffffff;
  padding: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ProductImage = styled.img`
  height: 120px;
`

export const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: flex-start;
  justify-content: center;
  padding: 16px 20px;
`

export const ProductDescription = styled.div`
  color: #ddd;
  width: 100%;

  h4 {
    font-size: 14px;
    font-weight: 600;
    color: #fff;
  }


  p {
    font-size: 12px;
    color: #999;
    margin-top: 2px;
  }
`

export const ProductName = styled.h3`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 6px;
  color: #fff;

  span {
    font-weight: 400;
    color: #999;
    font-size: 13px;
  }
`
