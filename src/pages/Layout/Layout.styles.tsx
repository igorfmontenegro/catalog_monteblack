import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  margin: auto;
  display: flex;
  width: 100vw;
  max-width: 700px;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`
export const Blur = styled.div`
  position: absolute;
  top: -50px;
  left: 35%;
  border-radius: 9999px;
  background-color: #ffffff;
  filter: blur(100px);
  opacity: 0.5;
  height: 140px;
  width: 140px;
`

export const CellphoneBG = styled.img`
  width: 150px;
  position: absolute;
  top: -20px;
  left: -90px;
  overflow: hidden;
  z-index: -1;

  @media (min-width: 760px) {
    display: none;
  }
`

export const SmartWatchBG = styled.img`
  width: 30px;
  position: absolute;
  top: 250px;
  right: 0px;
  z-index: -1;

  @media (min-width: 760px) {
    display: none;
  }
`

export const BrandLogo = styled.img`
  width: 150px;
  margin-top: 30px;
`

export const Menu = styled.div`
  position: absolute;
  margin-top: 32px;
  right: 50px;
  svg {
    position: absolute;
    color: white;
    width: 35px;
    height: 35px;
    cursor: pointer;
  }
`

export const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
`

export const Title = styled.h1`
  font-size: 22px;
  width: 220px;
  font-weight: 500;
  color: #ffffff;

  span {
    font-weight: 600;
  }
`

export const Avatar = styled.img`
  height: 120px;
  background-color: #ffffff;
  border-radius: 100px;
`
