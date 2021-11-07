import React, { useEffect, useState } from 'react';
import { CardDonation } from '../../components/card_donation';
import { listDonation } from '../../util';
import { Container, Title, Subtitle, ContainerCard } from './styles';

export function Home() {
  const [orderedList, setOrderedList] = useState([]);

  useEffect(() => {
    setOrderedList(listDonation.sort((a, b) => b.donation - a.donation));
  }, []);

  return (
    <Container>
      <Title>Quem acredita na causa</Title>
      <Subtitle>Doe e continue doando para ser nosso campeão</Subtitle>
      <ContainerCard>
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
