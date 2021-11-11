import React from 'react';
import { Container, Load, Bar } from './styles';

export function Loading() {
  return (
    <Container>
      <Load>
        <Bar />
      </Load>
    </Container>
  );
}
