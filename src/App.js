import React from "react";
import GlobalStyle from "./Globals/styles";
import { ThemeProvider } from "styled-components";
import theme from "./Globals/theme";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Sidebar></Sidebar>
    </ThemeProvider>
  );
}

export default App;
