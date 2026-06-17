import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  margin: auto;
  display: flex;
  width: 100vw;
  max-width: 1360px;
  flex-direction: column;
  align-items: stretch;
  gap: 40px;
  margin-bottom: 120px;
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
  display: block;
  width: 150px;
  margin: 30px auto 0;
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

export const HeroCard = styled.div`
  background: #222;
  border-radius: 16px;
  padding: 1.5rem;
  margin: 0 20px;
  box-sizing: border-box;
  text-align: center;

  @media (min-width: 760px) {
    margin: 0 auto;
    width: 100%;
    max-width: 1320px;
    padding: 1.5rem 20px;
  }
`

export const HeroTitle = styled.h1`
  font-size: 21px;
  font-weight: 700;
  color: #fff;
  line-height: 1.3;
  margin-bottom: 4px;

  span {
    color: #cfa75e;
  }
`

export const HeroStats = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 14px 0 18px;
  flex-wrap: wrap;
`

export const HeroStat = styled.div``

export const HeroStatNum = styled.div`
  font-size: 17px;
  font-weight: 700;
  color: #fff;
`

export const HeroStatLabel = styled.div`
  font-size: 10px;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-top: 1px;
`

export const HeroDivider = styled.div`
  height: 1px;
  background: #2a2a2a;
  margin: 16px 0;
`

export const HeroRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`

export const HeroAvatar = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: #ffffff;
  flex-shrink: 0;
  object-fit: cover;
`

export const HeroText = styled.div`
  font-size: 14px;
  color: #ccc;
  line-height: 1.5;

  strong {
    color: #fff;
  }
`

export const HeroSub = styled.div`
  font-size: 11px;
  color: #cfa75e;
  margin-top: 2px;
  font-weight: 600;
`
