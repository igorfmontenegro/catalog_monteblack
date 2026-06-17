import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  background-color: #222;
  border: 1px solid #2e2e2e;
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  padding: 14px 16px;
  cursor: pointer;
  border-radius: 12px;
  transition: border-color 0.2s, background-color 0.2s;

  &:hover {
    border-color: #cfa75e;
    background-color: #262626;
  }

  svg {
    width: 18px;
    height: 18px;
    color: #cfa75e;
    flex-shrink: 0;
  }
`
