import React from 'react';
import GlobalStyle from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { Layout } from './components/layout';
// import { Product } from './pages/product';
import { Home } from './pages/home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Home />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
