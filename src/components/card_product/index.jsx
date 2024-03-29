import React from 'react';
import {
  Container,
  Title,
  WrapTitle,
  Punctuation,
  ContainerChildren,
} from './styles';

// eslint-disable-next-line react/prop-types
export function CardProduct({ name, photo, punctuation, children }) {
  return (
    <Container>
      <img
        width={450}
        height={300}
        src={photo}
        style={{
          borderRadius: '10px',
        }}
      />
      <WrapTitle>
        <Title>{name}</Title>
        {punctuation && (
          <Punctuation>Pontos exigidos:{punctuation}</Punctuation>
        )}
      </WrapTitle>
      <ContainerChildren>{children}</ContainerChildren>
    </Container>
  );
}
