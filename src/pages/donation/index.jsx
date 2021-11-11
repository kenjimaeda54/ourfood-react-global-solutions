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

export function Donation() {
  const nameRef = useRef(null);

  useEffect(() => {
    nameRef.current?.focus();
  }, []);

  return (
    <Container>
      <Title>Faça sua doação</Title>
      <Subtitle>Vamos juntos acabar com a fome do mundo</Subtitle>
      <ContainerLogin>
        <ContainerText>
          <TitleText>Doação</TitleText>
          <div>
            <Description>
              Ao doar você não vai poder editar ou deletar os produtos, doado.
            </Description>
            <Description>Doando você ira ajudar famílias.</Description>
          </div>
        </ContainerText>
        <WrapLogin>
          <Label>Nome do produto</Label>
          <Input type="text" placeholder="Arroz" autoFocus ref={nameRef} />
          <Label>Validate</Label>
          <Input placeholder="12/10" />
          <Label>Quantity</Label>
          <Input placeholder=" 10" />
          <Label>Photo</Label>
          <Input placeholder="https://www.google.com/img.png" autoFocus />
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
