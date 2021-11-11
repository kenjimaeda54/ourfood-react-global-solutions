import React, { useEffect, useState } from 'react';
import { keyStorage } from '../../util';
import {
  Container,
  TitleName,
  ContainerPunctuation,
  SubTitle,
  Punctuation,
} from './styles';

export function Header() {
  const [name, setName] = useState('');

  useEffect(() => {
    const getName = localStorage.getItem(keyStorage);
    const setUserName = getName ? JSON.parse(getName) : '';
    setName(setUserName);
  }, []);

  return (
    <Container>
      <TitleName>{name}</TitleName>
      <ContainerPunctuation>
        <SubTitle>Pontos:</SubTitle>
        <Punctuation>0</Punctuation>
      </ContainerPunctuation>
    </Container>
  );
}
