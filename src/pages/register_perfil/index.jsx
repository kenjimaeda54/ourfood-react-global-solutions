import React, { useRef, useEffect } from 'react';
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
  ButtonSubmit,
  ContainerButtonSubmit,
  TextButton,
} from './styles';

export function RegisterProfile() {
  const nameRef = useRef(null);

  useEffect(() => {
    nameRef.current?.focus();
  }, []);

  return (
    <Container>
      <Title>Cadastro de perfil</Title>
      <Subtitle>
        Faca seu cadastro para acessar todos recursos disponíveis
      </Subtitle>
      <ContainerLogin>
        <ContainerText>
          <TitleText>Cadastro</TitleText>
          <div>
            <Description>
              Seja bem-vindo, faca o seu cadastro e juntos acabaremos com a fome
              do mundo.
            </Description>
            <Description>
              Vamos armazenar seu nome, email, senha para futuras consultas.
            </Description>
          </div>
        </ContainerText>
        <WrapLogin>
          <Label>Name</Label>
          <Input placeholder="Marina" autoFocus ref={nameRef} />
          <Label>Email</Label>
          <Input placeholder="joxx@gmail.com" />
          <Label>Senha</Label>
          <Input placeholder="12Ab343" />
          <Label>Photo</Label>
          <Input placeholder="https://github.com/nomegithub.png" autoFocus />
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
