import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './app.routes';
import { Layout } from '../components/layout';

export function Routes() {
  return (
    <BrowserRouter>
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  );
}
