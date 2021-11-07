import React, { useState } from 'react';
import {
  Container,
  Title,
  TitleButton,
  Subtitle,
  ContainerNavigation,
  Button,
  Home,
  Product,
  Donate,
  About,
} from './styles';

export function Aside() {
  const [mouse, setMouse] = useState(false);
  const [id, setId] = useState(0);

  function handleHiddenMessage() {
    setId(0);
    setMouse(false);
  }

  function handleShowMessage(id) {
    setId(id);
    setMouse(true);
  }

  return (
    <Container>
      <Title>
        <Subtitle> UOR FOOD</Subtitle>
      </Title>
      <ContainerNavigation>
        <div
          onMouseOut={handleHiddenMessage}
          onMouseOver={() => handleShowMessage(1)}
        >
          <Button>
            <TitleButton showMessage={id === 1 && mouse}> Home</TitleButton>
            <Home />
          </Button>
        </div>
        <div
          onMouseOut={handleHiddenMessage}
          onMouseOver={() => handleShowMessage(2)}
        >
          <Button>
            <TitleButton showMessage={id === 2 && mouse}> Produtos</TitleButton>
            <Product />
          </Button>
        </div>
        <div
          onMouseOut={handleHiddenMessage}
          onMouseOver={() => handleShowMessage(3)}
        >
          <Button>
            <TitleButton showMessage={id === 3 && mouse}> Doar</TitleButton>
            <Donate />
          </Button>
        </div>
        <div
          onMouseOut={handleHiddenMessage}
          onMouseOver={() => handleShowMessage(4)}
        >
          <Button>
            <TitleButton showMessage={id === 4 && mouse}> Sobre</TitleButton>
            <About />
          </Button>
        </div>
      </ContainerNavigation>
    </Container>
  );
}
