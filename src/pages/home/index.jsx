// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState, useRef, Fragment } from 'react';
import { CardDonation } from '../../components/card_donation';
import { CardMission } from '../../components/card_mission';
import { Loading } from '../../components/loading';
import { baseUrl } from '../../util';
import {
  Container,
  Title,
  Subtitle,
  ContainerCardMission,
  ContainerCard,
  ContainerScroll,
  ButtonScroll,
  Right,
  Left,
  ContainerLoading,
  CardPan,
  Photo,
  TitlePan,
  ContainerLeftPan,
  TitleDescription,
  Description,
  LinkText,
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
          <div style={{ padding: 45 }}>
            <Title>Nossa motivação</Title>
            <Subtitle>Juntos podemos eliminar a fome do mundo</Subtitle>
          </div>
          <ContainerCardMission>
            <Subtitle>Nosso principal objetivo</Subtitle>
            <CardMission
              title="Ajude refugiados da siria"
              total={500}
              valueDonation={500}
              photo="https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production+Library/2020/21-04-2020_WFP_Syria_2.jpg/image1170x530cropped.jpg"
            />
            <ContainerScroll>
              <ButtonScroll>
                <Left onMouseOver={() => handleScroll('left')} />
              </ButtonScroll>
              <Subtitle>
                Passe o mouse sobre as setas para realizar rolagem da
                lista,conforme mantem mouse em movimento nas setas, lista
                continua movimento.
              </Subtitle>
              <ButtonScroll>
                <Right onMouseOver={() => handleScroll('right')} />
              </ButtonScroll>
            </ContainerScroll>
            <Subtitle>Doe e continue doando para ser nosso campeão</Subtitle>
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
            <CardPan>
              <Photo src="https://www.nobelprize.org/uploads/2020/10/wfp-3_2-credit-scaled.jpg" />
              <ContainerLeftPan>
                <TitlePan>PAM recebeu o Premio Nobel da paz</TitlePan>
                <TitleDescription>
                  PAM e o laureado com o Premio Nobel da paz 2020
                </TitleDescription>
                <Description>
                  Sem paz não podemos acabar com a fome do mundo, enquanto
                  houver fome, nunca teremos um mundo em paz.
                  <Description>
                    Programa Mundial de Alimentos(PAM) e o braço da assistência
                    alimentar das Nações Unidas e a maior organização
                    humanitária do mundo que trata da fome e promove a seguranca
                    alimentar.
                  </Description>
                  A PAM todos os anos fornece assistência alimentar a uma média
                  de 91,4 milhões de pessoas em 83 países. A erradicação da fome
                  é um dos mais maiores{' '}
                  <LinkText href="https://unric.org/pt/Objetivos-de-Desenvolvimento-Sustentavel/">
                    17 Objetivos de Desenvolvimento Sustentável{' '}
                  </LinkText>
                  adotadas pelos 193 Estados-Membros das Nações Unidas em 2015.
                  <Description>
                    Ficamos honrados com esse prêmio e estamos gratos por
                    fazerem parte da comunidade OUR FOOD.
                  </Description>
                </Description>
              </ContainerLeftPan>
            </CardPan>
          </ContainerCardMission>
        </Fragment>
      )}
    </Container>
  );
}
