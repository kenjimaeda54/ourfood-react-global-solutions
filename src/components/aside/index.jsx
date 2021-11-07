import React from "react";
import {
  Container,
  Title,
  ContainerNavigation,
  Button,
  TitleButton,
} from "./styles";

export function Aside() {
  return (
    <Container>
      <Title>UOR FOOD</Title>
      <ContainerNavigation>
        <Button>
          <TitleButton> Home</TitleButton>
        </Button>
        <Button>
          <TitleButton> Produtos</TitleButton>
        </Button>
        <Button>
          <TitleButton> Doar</TitleButton>
        </Button>
        <Button>
          <TitleButton> Sobre</TitleButton>
        </Button>
      </ContainerNavigation>
    </Container>
  );
}
