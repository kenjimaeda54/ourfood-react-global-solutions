import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
  ContainerButtonSubmit,
  ButtonSubmit,
  TextButton,
} from './styles';

export function Login() {
  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

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
          <Link to="/cadastro" style={{ textDecoration: 'none' }}>
            <Button>Cadastrar?</Button>
          </Link>
        </ContainerText>
        <WrapLogin>
          <Label>Email</Label>
          <Input placeholder="joaoxxx@gmail.com" autoFocus ref={emailRef} />
          <Label>Senha</Label>
          <Input placeholder="1234adf" autoFocus />
          <ButtonSubmit>
            <ContainerButtonSubmit>
              <TextButton>Entrar</TextButton>
            </ContainerButtonSubmit>
          </ButtonSubmit>
        </WrapLogin>
      </ContainerLogin>
    </Container>
  );
}
