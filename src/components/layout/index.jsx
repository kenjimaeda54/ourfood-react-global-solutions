import React from 'react';
import { Container } from './styles';
import { Header } from '../header';
import { Aside } from '../aside';
import { Section } from '../section';

// eslint-disable-next-line react/prop-types
export function Layout({ children }) {
  return (
    <Container>
      <Header />
      <Aside />
      <Section>{children}</Section>
    </Container>
  );
}
