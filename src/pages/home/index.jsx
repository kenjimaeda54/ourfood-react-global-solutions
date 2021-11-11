// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState, useRef } from 'react';
import { CardDonation } from '../../components/card_donation';
import { baseUrl } from '../../util';
import {
  Container,
  Title,
  Subtitle,
  ContainerCard,
  ContainerScroll,
  ButtonScroll,
  Right,
  Left,
} from './styles';

export function Home() {
  // eslint-disable-next-line no-unused-vars
  const [orderedList, setOrderedList] = useState([]);
  const scrollRef = useRef(null);

  async function getUser() {
    try {
      const response = await fetch(`${baseUrl}/users`);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  function handleScroll(type) {
    if (type === 'right') {
      scrollRef.current.scrollLeft += 300;
    } else {
      scrollRef.current.scrollLeft -= 300;
    }
  }
  return (
    <Container>
      <Title>Quem acredita na causa</Title>
      <Subtitle>Doe e continue doando para ser nosso campeão</Subtitle>
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
      <ContainerCard ref={scrollRef}>
        {orderedList.map((itens, index) => (
          <CardDonation
            key={itens.id}
            name={itens.name}
            photo={itens.photo}
            number={index}
            donation={itens.donation}
            location={itens.location}
          />
        ))}
        ;
      </ContainerCard>
    </Container>
  );
}
