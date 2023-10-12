import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    color: ${({ theme }) => theme.COLORS.DARK_400};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
    outline: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
    background: none;
  }

  button, a {
    cursor: pointer;
  }
`