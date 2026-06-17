import styled from 'styled-components'

export const StyledButton = styled.button`
  margin: 16px 0 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  padding: 16px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background: #fff;
  color: #111;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  transition: opacity 0.2s, transform 0.1s;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    transform: scale(0.98);
  }
`
