import { createGlobalStyle } from 'styled-components'
import BrokenNoise from '../assets/broken-noise.png'

export const GlobalStyles = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
}

#root{
    height: 100vh;
    width: 100vw;
    overflow-x: hidden;
}

html{
    scroll-behavior: smooth;
}

body{
    background-color: #000000;
    background-image: url(${BrokenNoise});
    box-sizing: border-box;
    font-family: Montserrat, sans-serif;
    
}

`
