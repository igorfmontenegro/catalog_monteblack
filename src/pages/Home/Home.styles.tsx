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

export const AdminFab = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(34, 34, 34, 0.85);
  border: 1px solid #333;
  color: #666;
  font-size: 16px;
  cursor: pointer;
  z-index: 150;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(8px);
  transition: all 0.2s;

  &:hover {
    color: #fff;
    border-color: #888;
  }
`

export const AdminPanel = styled.div`
  border: 2px solid #444;
  border-radius: 20px;
  padding: 16px 18px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  background: #1c1c1c;
  width: 90vw;
  max-width: 560px;
  margin: 0 auto;

  strong {
    color: #fff;
    font-size: 15px;
    margin-bottom: 6px;
  }

  label {
    color: #888;
    font-size: 11px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    margin-top: 6px;
  }

  input {
    background: #111;
    border: 1px solid #333;
    border-radius: 8px;
    color: #fff;
    font-size: 14px;
    padding: 10px 12px;
    outline: none;
    font-family: inherit;

    &:focus {
      border-color: #fff;
    }
  }
`
