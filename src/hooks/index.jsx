import React from 'react';
import { UserProvider } from './useCustomContext';

// eslint-disable-next-line react/prop-types
export function ProviderUser({ children }) {
  return <UserProvider>{children}</UserProvider>;
}
