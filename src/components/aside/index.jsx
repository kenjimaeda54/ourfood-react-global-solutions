import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { keyStorage } from '../../util';
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
  LogIn,
} from './styles';

export function Aside() {
  const [mouse, setMouse] = useState(false);
  const [id, setId] = useState(0);
  const [haveUser, setHaveUser] = useState(false);

  function handleHiddenMessage() {
    setId(0);
    setMouse(false);
  }

  function handleShowMessage(id) {
    setId(id);
    setMouse(true);
  }

  useEffect(() => {
    const getUser = localStorage.getItem(keyStorage);
    const setUserStorage = getUser ? JSON.parse(getUser) : ' ';
    if (setUserStorage === '') {
      setHaveUser(false);
    } else {
      setHaveUser(true);
    }
  }, []);

  return (
    <Container>
      <Title>
        <Subtitle> OUR FOOD</Subtitle>
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
            to="/cadastro"
            style={{
              textDecoration: 'none',
            }}
          >
            <Button>
              <TitleButton showMessage={id === 3 && mouse}>
                Cadastro
              </TitleButton>
              <LogIn />
            </Button>
          </Link>
        </div>
        <div
          onMouseOut={handleHiddenMessage}
          onMouseOver={() => handleShowMessage(4)}
        >
          {haveUser ? (
            <Link
              to="/login"
              style={{
                textDecoration: 'none',
              }}
            >
              <Button>
                <TitleButton showMessage={id === 4 && mouse}> Doar</TitleButton>
                <Donate />
              </Button>
            </Link>
          ) : (
            <Link
              to="/doacao"
              style={{
                textDecoration: 'none',
              }}
            >
              <Button>
                <TitleButton showMessage={id === 4 && mouse}> Doar</TitleButton>
                <Donate />
              </Button>
            </Link>
          )}
        </div>
        <div
          onMouseOut={handleHiddenMessage}
          onMouseOver={() => handleShowMessage(5)}
        >
          <Link
            to="/sobre"
            style={{
              textDecoration: 'none',
            }}
          >
            <Button>
              <TitleButton showMessage={id === 5 && mouse}> Sobre</TitleButton>
              <About />
            </Button>
          </Link>
        </div>
      </ContainerNavigation>
    </Container>
  );
}
