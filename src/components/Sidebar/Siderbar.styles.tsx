import styled from 'styled-components'

interface ContainerProps {
  sidebar: boolean | string
}

export const Container = styled.div<ContainerProps>`
  background-color: #000000;
  position: fixed;
  height: 100%;
  top: 0px;
  right: 0px;
  width: 90%;
  right: ${(props) => (props.sidebar ? '0' : '-100%')};
  animation: showSidebar 0.4s;

  > svg {
    position: fixed;
    color: #ffffff;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 90%;
    }
  }
`

export const Content = styled.div`
  margin-top: 100px;

  a {
    text-decoration: none;
  }
`
