import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import theme from "./theme";
import { Layout } from "./components/layout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout />
    </ThemeProvider>
  );
}

export default App;
