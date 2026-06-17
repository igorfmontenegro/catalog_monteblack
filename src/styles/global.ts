import { createGlobalStyle } from 'styled-components'
 
export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
#root{
    min-height: 100vh;
    width: 100%;
    overflow-x: hidden;
}
body{
    background-color: #1a1a1a;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    color: #fff;
}
`
