import React, { useEffect, useState } from 'react';
import { Card } from '../../components/card';
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
      <ContainerSection>
        <Button>
          <Left />
        </Button>
        {orderedList.map}
        <Button>
          <Right />
        </Button>
      </ContainerSection>
    </Container>
  );
}
