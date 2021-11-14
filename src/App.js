import React from 'react';
import GlobalStyle from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { Routes } from './routes';
import { ProviderUser } from './hooks';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ProviderUser>
        <GlobalStyle />
        <Routes />
      </ProviderUser>
    </ThemeProvider>
  );
}

export default App;
