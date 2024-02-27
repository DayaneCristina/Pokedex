import { createGlobalStyle } from "styled-components";
import background from "../components/assets/fundo-pokedex.jpg";

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, html {
    height: 100%;
  }

  body {
    background-image: url(${background});
    background-size: contain;
    background-repeat-y: no-repeat;
    background-repeat-x: repeat;
    background-attachment: fixed;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

export default GlobalStyle;