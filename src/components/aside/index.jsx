import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
          <Link
            to="/"
            style={{
              textDecoration: 'none',
            }}
          >
            <Button>
              <TitleButton showMessage={id === 1 && mouse}> Home</TitleButton>
              <Home />
            </Button>
          </Link>
        </div>
        <div
          onMouseOut={handleHiddenMessage}
          onMouseOver={() => handleShowMessage(2)}
        >
          <Link
            to="/recompensa"
            style={{
              textDecoration: 'none',
            }}
          >
            <Button>
              <TitleButton showMessage={id === 2 && mouse}>Premios</TitleButton>
              <Product />
            </Button>
          </Link>
        </div>
        <div
          onMouseOut={handleHiddenMessage}
          onMouseOver={() => handleShowMessage(3)}
        >
          <Link
            to="/login"
            style={{
              textDecoration: 'none',
            }}
          >
            <Button>
              <TitleButton showMessage={id === 3 && mouse}> Doar</TitleButton>
              <Donate />
            </Button>
          </Link>
        </div>
        <div
          onMouseOut={handleHiddenMessage}
          onMouseOver={() => handleShowMessage(4)}
        >
          <Link
            to="/sobre"
            style={{
              textDecoration: 'none',
            }}
          >
            <Button>
              <TitleButton showMessage={id === 4 && mouse}> Sobre</TitleButton>
              <About />
            </Button>
          </Link>
        </div>
      </ContainerNavigation>
    </Container>
  );
}
