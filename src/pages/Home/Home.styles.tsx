import styled from 'styled-components'

export const Products = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 0px 20px;
  max-width: 1100px;

  @media (min-width: 760px) {
    margin: 0 auto;
    width: 100%;
    padding: 0 20px;
  }

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

export const CatalogGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 14px;

  @media (min-width: 560px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const Card = styled.div`
  background: #222;
  border: 1px solid #2e2e2e;
  border-radius: 14px;
  padding: 1.1rem;
  transition: border-color 0.2s;

  &:hover {
    border-color: #444;
  }
`

export const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 14px;
  gap: 8px;
`

export const ProductTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #fff;
`

export const Dots = styled.div`
  display: flex;
  gap: 6px;
  flex-shrink: 0;
`

export const Dot = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.15);
  flex-shrink: 0;
`

export const Tier = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 8px 0;

  & + & {
    border-top: 1px solid #2a2a2a;
  }
`

export const TierLabel = styled.span`
  font-size: 11px;
  color: #888;
  font-weight: 600;
`

export const TierPrice = styled.span`
  text-align: right;

  .cash {
    font-size: 14px;
    color: #fff;
    font-weight: 700;
  }

  .inst {
    display: block;
    font-size: 11px;
    color: #888;
    margin-top: 1px;
  }
`

export const Foot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
  text-align: center;
  gap: 40px;
  margin-top: 30px;

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
  background: rgba(34, 34, 34, 0.9);
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

export const AdminCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  label {
    color: #888;
    font-size: 11px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    margin-top: 8px;
  }

  input {
    background: #1a1a1a;
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

export const ColorPicker = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 4px;
`

export const ColorOption = styled.button<{ selected: boolean }>`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid ${p => p.selected ? '#cfa75e' : 'rgba(255,255,255,0.15)'};
  box-shadow: ${p => p.selected ? '0 0 0 2px rgba(207,167,94,0.3)' : 'none'};
  transition: all 0.15s;
  padding: 0;
`

export const SaveBar = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin: 10px 0 20px;

  button {
    padding: 12px 24px;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    font-family: inherit;
  }

  .cancel {
    border: 1px solid #444;
    background: #222;
    color: #fff;
  }

  .save {
    border: none;
    background: #fff;
    color: #111;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
`
