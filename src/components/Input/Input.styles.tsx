import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  input[type='text'] {
    font-family: inherit;
    font-size: 16px;
    padding-left: 10px;
    border-radius: 7px;
    border: 1.9px solid #ffffff;
    background: #ffffff;
    height: 50px;
    width: 100%;
    margin-bottom: 25px;
    outline: none;
  }

  input[type='checkbox'] {
    height: 50px;
    width: 50px;
    margin-bottom: 25px;
    border: 1px solid #000000;
  }

  label {
    color: #ffffff;
    font-weight: 500;
  }
`
