import React from "react";
import GlobalStyle from "./Globals/styles";
import { ThemeProvider } from "styled-components";
import theme from "./Globals/theme";
import { Provider as Translator } from "./context";
import { Provider } from "react-redux";
import store from "./store";
import Routes from "./router";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Translator>
        <Provider store={store}>
          <Routes />
        </Provider>
      </Translator>
    </ThemeProvider>
  );
}

export default App;
