// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState, useRef, Fragment } from 'react';
import { CardDonation } from '../../components/card_donation';
import { Loading } from '../../components/loading';
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
  ContainerLoading,
} from './styles';

export function Home() {
  // eslint-disable-next-line no-unused-vars
  const [orderedList, setOrderedList] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef(null);

  useEffect(() => {
    const controller = new AbortController();
    async function getUser() {
      try {
        const response = await fetch(`${baseUrl}/users`, {
          signal: controller.signal,
        });
        const data = await response.json();
        console.log(data);
        setOrderedList(data.sort((a, b) => b.punctuation - a.punctuation));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getUser();
    return () => {
      controller.abort();
    };
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
      {loading ? (
        <ContainerLoading>
          <Loading />
        </ContainerLoading>
      ) : (
        <Fragment>
          <Title>Quem acredita na causa</Title>
          <Subtitle>Doe e continue doando para ser nosso campeão</Subtitle>
          <ContainerScroll>
            <ButtonScroll>
              <Left onMouseOver={() => handleScroll('left')} />
            </ButtonScroll>
            <Subtitle>
              Passe o mouse sobre as setas para realizar rolagem da
              lista,conforme mantem mouse em movimento nas setas, lista continua
              movimento.
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
                donation={itens.punctuation}
                location={itens.location}
              />
            ))}
            ;
          </ContainerCard>
        </Fragment>
      )}
    </Container>
  );
}
