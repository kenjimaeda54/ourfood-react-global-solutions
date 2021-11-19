import React, { useEffect, useState, useRef, Fragment } from 'react';
import { CardDonation } from '../../components/card_donation';
import { CardMission } from '../../components/card_mission';
import { Loading } from '../../components/loading';
import { baseUrl } from '../../util';
import { Redirect } from 'react-router-dom';
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
import { useCustomContext } from '../../hooks/useCustomContext';

export function Home() {
  const { userProfile } = useCustomContext();
  const [orderedList, setOrderedList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mission, setMission] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const [description, setDescription] = useState('');
  const [route, setRoute] = useState('');
  const scrollRef = useRef(null);

  useEffect(() => {
    async function getUser() {
      try {
        const responseUser = await fetch(`${baseUrl}/users`);
        const responseDonation = await fetch(`${baseUrl}/donations/1`);
        const dataUser = await responseUser.json();
        const dataDonation = await responseDonation.json();
        setOrderedList(dataUser.sort((a, b) => b.punctuation - a.punctuation));
        setMission(dataDonation);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getUser();
    return () => {
      setLoading(true);
      setOrderedList([]);
      setMission([]);
    };
  }, []);

  function handleScroll(type) {
    if (type === 'right') {
      scrollRef.current.scrollLeft += 300;
    } else {
      scrollRef.current.scrollLeft -= 300;
    }
  }

  // eslint-disable-next-line no-unused-vars
  function handleNavigate(pathname, text) {
    if (Object.keys(userProfile).length === 0) {
      setRedirect(true);
      setRoute('/login');
      setDescription('Para realizar doação,por favor faça seu login.');
      return;
    }
    setRedirect(true);
    setDescription(text);
    setRoute(pathname);
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
            {mission.map((item) => (
              <CardMission
                onClick={() =>
                  handleNavigate(
                    '/doacao/formulario',
                    ' acabar com a fome na Síria',
                  )
                }
                key={item.id}
                titleHelp={item.title}
                total={item.totalDonation}
                valueDonation={item.valueDonation}
                photo={item.photo}
              />
            ))}

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
                </Description>
                <Description>
                  Programa Mundial de Alimentos(PAM) e o braço da assistência
                  alimentar das Nações Unidas e a maior organização humanitária
                  do mundo que trata da fome e promove a seguranca alimentar.
                </Description>
                <Description>
                  A PAM todos os anos fornece assistência alimentar a uma média
                  de 91,4 milhões de pessoas em 83 países. A erradicação da fome
                  é um dos mais maiores{' '}
                  <LinkText href="https://unric.org/pt/Objetivos-de-Desenvolvimento-Sustentavel/">
                    17 Objetivos de Desenvolvimento Sustentável{' '}
                  </LinkText>
                  adotadas pelos 193 Estados-Membros das Nações Unidas em 2015.
                </Description>
                <Description>
                  Ficamos honrados com esse prêmio e estamos gratos por fazerem
                  parte da comunidade OUR FOOD.
                </Description>
              </ContainerLeftPan>
            </CardPan>
            {redirect && (
              <Redirect
                to={{
                  pathname: route,
                  state: { description },
                }}
              />
            )}
          </ContainerCardMission>
        </Fragment>
      )}
    </Container>
  );
}
