import styled from 'styled-components'

export const Products = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin: 0px 20px;
  h2 {
    color: #ffffff;
    border: 2px solid #ffffff;
    border-radius: 10px;
    padding: 10px;
    text-align: center;

    span {
      font-size: 18px;
      font-weight: 300;
    }
  }
`

export const Foot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
  text-align: center;
  gap: 40px;
  margin-bottom: 100px;

  h1 {
    width: 300px;
    font-size: 22px;
    font-weight: 500;

    @media (min-width: 760px) {
      width: 500px;
    }
  }

  span {
    font-weight: 600;
  }

  img {
    display: block;
    margin: auto;
    width: 300px;
  }
`
