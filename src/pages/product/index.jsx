import React, { useState } from 'react';
import {
  Container,
  Title,
  Subtitle,
  ContainerCardProduct,
  Thing,
  Value,
  Button,
  Minus,
  Plus,
} from './styles';
import { CardProduct } from '../../components/card_product';

export function Product() {
  const [value, setValue] = useState(0);

  function handleToggle(type) {
    if (value === 0 && type === 'minus') return;
    if (type === 'plus') {
      return setValue((old) => old + 1);
    } else {
      return setValue((old) => old - 1);
    }
  }

  return (
    <Container>
      <Title>Aqui fica as recompensas</Title>
      <Subtitle>Precisa estar logado para resgatar os pontos</Subtitle>
      <ContainerCardProduct>
        <CardProduct
          name="Arroz"
          photo="https://github.com/kenji.png"
          punctuation={3}
        >
          <Thing>
            <Button onClick={() => handleToggle('plus')} type={'plus'}>
              <Plus />
            </Button>
            <Value>{value}</Value>
            <Button onClick={() => handleToggle('minus')} type={'minus'}>
              <Minus />
            </Button>
          </Thing>
        </CardProduct>
      </ContainerCardProduct>
    </Container>
  );
}
