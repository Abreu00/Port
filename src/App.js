import React from "react";
import GlobalStyle from "./Globals/styles";
import { ThemeProvider } from "styled-components";
import theme from "./Globals/theme";
import Main from "./pages/Main/";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Main></Main>
    </ThemeProvider>
  );
}

export default App;
