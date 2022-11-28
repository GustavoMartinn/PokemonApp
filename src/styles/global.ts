import { createGlobalStyle } from 'styled-components'

//creatGlobalStyle using theme

export default createGlobalStyle<{ theme: ThemeType }>`
  * {
    font-family: 'Cursive', 'Roboto', sans-serif;
  }
  body {
    margin: 0;
    background: ${({ theme }) => theme?.backgroundColor};
    color: ${({ theme }) => theme?.textColor};
    font-family: sans-serif;
    overflow-x: hidden;
  }
`
