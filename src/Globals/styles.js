import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body,
  #root {
    height: 130%;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Lato', sans-serif;
    color: ${props => props.theme.font.color};
    background: ${props => props.theme.background};
    padding-left: ${props => props.theme.sidebar.width}; 
  }

  a {
    color: inherit;
  }

`;