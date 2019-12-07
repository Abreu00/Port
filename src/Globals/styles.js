import { createGlobalStyle } from "styled-components";
import mediaQueries from "./mediaQueries";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Courgette|Lato&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body,
  #root {
    height: 100%;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Lato', sans-serif;
    color: ${props => props.theme.font.color};
    background: ${props => props.theme.color.primary};
    overflow-x: hidden;
  }

  a {
    color: inherit;
  }


  @media (max-width: ${mediaQueries.width.phone}) {
    /* 600px */
    html {
      font-size: 45%;
    }
  }

  @media (max-width: ${mediaQueries.width.tablet.portrait}) {
    /* 900px */
    html {
      font-size: 50%;
    }
  }

  @media (max-width: ${mediaQueries.width.tablet.landscape}) {
    /* 1200px */
    html {
      font-size: 55%;
    }
  }

  @media (min-width: ${mediaQueries.width.large}) {
    /* 1800px */
    html {
      font-size: 75%;
    }
  }


  

`;
