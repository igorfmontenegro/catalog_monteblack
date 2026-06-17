import styled from 'styled-components'

interface ContainerProps {
  sidebar: boolean | string
}

export const Container = styled.div<ContainerProps>`
  background-color: #1a1a1a;
  border-left: 1px solid #2a2a2a;
  position: fixed;
  height: 100%;
  top: 0px;
  right: 0px;
  width: 90%;
  max-width: 320px;
  right: ${(props) => (props.sidebar ? '0' : '-100%')};
  transition: right 0.3s ease;
  z-index: 200;

  > svg {
    position: fixed;
    color: #888;
    width: 22px;
    height: 22px;
    margin-top: 28px;
    margin-left: 28px;
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      color: #fff;
    }
  }
`

export const Content = styled.div`
  margin-top: 90px;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  a {
    text-decoration: none;
  }
`
