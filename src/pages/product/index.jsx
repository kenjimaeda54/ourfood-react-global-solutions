import React, { useState, useRef } from 'react';
import { listProducts } from '../../util';
import {
  Container,
  Title,
  Subtitle,
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
import { CardProduct } from '../../components/card_product';

export function Product() {
  const scrollRef = useRef(null);
  const [value, setValue] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [logged, setLogged] = useState(false);

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
          mantem mouse em movimento nas setas, lista continua rolando.
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
            logged={logged}
          >
            <Thing>
              <Button
                canPlay={logged}
                disabled={logged ? false : true}
                onClick={() => handleToggle('plus')}
                type={'plus'}
              >
                <Plus />
              </Button>
              <Value>{value}</Value>
              <Button
                canPlay={logged}
                onClick={() => handleToggle('minus')}
                type={'minus'}
              >
                <Minus />
              </Button>
            </Thing>
          </CardProduct>
        ))}
      </ContainerCardProduct>
    </Container>
  );
}
