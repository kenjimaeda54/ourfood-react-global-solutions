import React, { useEffect, useState, useRef } from 'react';
import { CardDonation } from '../../components/card_donation';
import { listDonation } from '../../util';
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
  const [orderedList, setOrderedList] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    setOrderedList(listDonation.sort((a, b) => b.donation - a.donation));
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
