import React, { useState, useRef } from 'react';
import { listProducts } from '../../util';
import { CardProduct } from '../../components/card_product';
import { Redirect } from 'react-router-dom';
import {
  Container,
  Title,
  Subtitle,
  ButtonAdd,
  TextAdd,
  ContainerScroll,
  Right,
  Left,
  ButtonScroll,
  ContainerCardProduct,
  Thing,
  Value,
  Button,
  Minus,
  Plus,
} from './styles';
import { useCustomContext } from '../../hooks/useCustomContext';

export function Reward() {
  const { userProfile } = useCustomContext();
  const scrollRef = useRef(null);
  const [value, setValue] = useState(0);
  const [isLogged, setIsLogged] = useState(false);
  const [redirect, setRedirect] = useState(false);

  function handleHaveUser() {
    if (userProfile) {
      setRedirect(true);
    } else {
      setIsLogged(true);
    }
  }

  function handleToggle(type) {
    if (value === 0 && type === 'minus') return;
    if (type === 'plus') {
      return setValue((old) => old + 1);
    } else {
      return setValue((old) => old - 1);
    }
  }

  function handleScroll(type) {
    if (type === 'right') {
      scrollRef.current.scrollLeft += 300;
    } else {
      scrollRef.current.scrollLeft -= 300;
    }
  }

  return (
    <Container>
      <Title>Aqui fica as recompensas</Title>
      <Subtitle>Precisa estar logado para resgatar os pontos</Subtitle>
      <ContainerScroll>
        <ButtonScroll>
          <Left onMouseOver={() => handleScroll('left')} />
        </ButtonScroll>
        <Subtitle>
          Passe o mouse sobre as setas para realizar rolagem da lista,conforme
          mantem mouse em movimento nas setas, lista continua movimento.
        </Subtitle>
        <ButtonScroll>
          <Right onMouseOver={() => handleScroll('right')} />
        </ButtonScroll>
      </ContainerScroll>
      <ContainerCardProduct ref={scrollRef}>
        {listProducts.map((product) => (
          <CardProduct
            key={product.id}
            name={product.name}
            photo={product.photo}
            punctuation={product.punctuation}
            logged={isLogged}
          >
            {isLogged ? (
              <Thing>
                <Button onClick={() => handleToggle('plus')} type={'plus'}>
                  <Plus />
                </Button>
                <Value>{value}</Value>
                <Button onClick={() => handleToggle('minus')} type={'minus'}>
                  <Minus />
                </Button>
              </Thing>
            ) : (
              <ButtonAdd onClick={handleHaveUser}>
                <TextAdd>Trocar os pontos?</TextAdd>
              </ButtonAdd>
            )}
          </CardProduct>
        ))}
      </ContainerCardProduct>
      {redirect && <Redirect to="/login" />}
    </Container>
  );
}
