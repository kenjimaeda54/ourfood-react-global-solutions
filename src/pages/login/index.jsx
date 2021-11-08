import React from 'react';
import {
  Container,
  Title,
  Subtitle,
  ContainerLogin,
  WrapLogin,
  Label,
  Input,
  TitleText,
  ContainerText,
  Description,
  Button,
} from './styles';

export function Login() {
  return (
    <Container>
      <Title>Login</Title>
      <Subtitle>
        Faca, seu login fortaleça nossa comunidade na busca de acabar com fome
        do mundo
      </Subtitle>
      <ContainerLogin>
        <ContainerText>
          <TitleText>Login</TitleText>
          <Description>
            Seja bem vindo, vamos acabar com a fome do mundo juntos
          </Description>
          <Button>Cadastrar?</Button>
        </ContainerText>
        <WrapLogin>
          <Label>Email</Label>
          <Input autoFocus />
          <Label>Senha</Label>
          <Input autoFocus />
        </WrapLogin>
      </ContainerLogin>
    </Container>
  );
}
