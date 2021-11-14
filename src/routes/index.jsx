import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './app.routes';
import { Layout } from '../components/layout';
import { keyStorageEmail } from '../util';
import { AuthRoutes } from './auth.routes';

export function Routes() {
  const [user, setUser] = useState('');

  useEffect(() => {
    const user = localStorage.getItem(keyStorageEmail);
    const data = user ? JSON.parse(user) : '';
    setUser(data);
  }, []);

  return (
    <BrowserRouter>
      <Layout>{user.length > 3 ? <AuthRoutes /> : <AppRoutes />}</Layout>
    </BrowserRouter>
  );
}
