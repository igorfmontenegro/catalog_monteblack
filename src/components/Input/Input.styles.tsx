import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  input[type='text'] {
    font-family: inherit;
    font-size: 16px;
    padding: 0 14px;
    border-radius: 10px;
    border: 1px solid #333;
    background: #222;
    color: #fff;
    height: 48px;
    width: 100%;
    box-sizing: border-box;
    outline: none;
    transition: border-color 0.2s;

    &:focus {
      border-color: #cfa75e;
    }

    &::placeholder {
      color: #555;
    }
  }

  label {
    color: #ccc;
    font-size: 13px;
    font-weight: 600;
  }
`
