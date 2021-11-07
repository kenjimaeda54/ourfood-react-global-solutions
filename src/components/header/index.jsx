import React from 'react';
import {
  Container,
  TitleName,
  ContainerPunctuation,
  SubTitle,
  Punctuation,
} from './styles';

export function Header() {
  return (
    <Container>
      <TitleName>Beatriz</TitleName>
      <ContainerPunctuation>
        <SubTitle>Pontos:</SubTitle>
        <Punctuation>0</Punctuation>
      </ContainerPunctuation>
    </Container>
  );
}
