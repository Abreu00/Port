import React from "react";
import NextApp from "next/app";
import GlobalStyle from "../Globals/styles";
import { ThemeProvider } from "styled-components";
import theme from "../Globals/theme";
import { Provider } from "../context";

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle></GlobalStyle>
        <Provider>
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    );
  }
}
