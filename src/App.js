import React from "react";
import GlobalStyle from "./Globals/styles";
import { ThemeProvider } from "styled-components";
import theme from "./Globals/theme";
import { Provider } from "./context";
import Routes from "./routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Provider>
        <Routes />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
