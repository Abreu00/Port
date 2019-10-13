import React from "react";
import GlobalStyle from "./Globals/styles";
import { ThemeProvider } from "styled-components";
import theme from "./Globals/theme";
import Main from "./pages/Main/";
import { Provider } from "./context";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider>
        <GlobalStyle />
        <Main></Main>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
