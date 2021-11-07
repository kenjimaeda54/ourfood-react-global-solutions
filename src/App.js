import React from "react";
import { Loading } from "./Loading";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Loading />
    </ThemeProvider>
  );
}

export default App;
