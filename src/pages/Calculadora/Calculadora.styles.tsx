import styled from 'styled-components'

export const Title = styled.h2`
  color: #ffffff;
  border: 2px solid #ffffff;
  border-radius: 10px;
  padding: 10px;
  text-align: center;

  span {
    font-size: 18px;
    font-weight: 300;
  }
`

export const Calculator = styled.form`
  text-align: center;

  p {
    color: #ffffff;
    font-weight: 500;
  }
`

export const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  color: #ffffff;

  table {
    width: 100%;

    td,
    th {
      border: 1px solid #ffffff;
      padding: 8px 12px;
    }
  }
`
