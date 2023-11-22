import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  input {
    font-family: inherit;
    font-size: 16px;
    padding-left: 10px;
    border-radius: 7px;
    border: 1.9px solid #ffffff;
    background: #ffffff;
    height: 50px;
    margin-bottom: 25px;
    outline: none;
  }

  label {
    color: #ffffff;
    font-weight: 500;
  }
`
