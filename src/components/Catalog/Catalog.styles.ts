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

  @media (min-width: 760px) {
    display: none;
  }
`

export const SmartWatchBG = styled.img`
  width: 30px;
  position: absolute;
  top: 250px;
  right: 0px;

  @media (min-width: 760px) {
    display: none;
  }
`

export const BrandLogo = styled.img`
  width: 150px;
  margin-top: 30px;
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
export const QuestionIcon = styled.img`
  width: 22px;
  margin-left: 30px;
`

export const Subtitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  gap: 10px;
  font-size: 12px;
  font-weight: 600;
  color: #ffffff;
`

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
    margin-bottom: 50px;
  }
`
