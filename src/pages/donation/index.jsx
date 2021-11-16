// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState, useRef, Fragment } from 'react';
import { CardMission } from '../../components/card_mission';
import { Loading } from '../../components/loading';
import { baseUrl } from '../../util';
import { Redirect } from 'react-router-dom';
import { useCustomContext } from '../../hooks/useCustomContext';
import {
  Container,
  ContainerLoading,
  Title,
  Subtitle,
  ContainerCardMission,
} from './styles';

export function Donation() {
  const { userProfile } = useCustomContext();
  const [donation, setDonation] = useState([]);
  const [loading, setLoading] = useState(true);
  const [redirect, setRedirect] = useState(false);
  const [description, setDescription] = useState('');
  const [id, setId] = useState(0);
  const [route, setRoute] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        const response = await fetch(`${baseUrl}/donations`, {
          signal: controller.signal,
        });
        const data = await response.json();
        setDonation(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
    return () => {
      controller.abort();
    };
  }, []);

  function handleNavigate(pathname, id) {
    if (Object.keys(userProfile).length === 0) {
      setRedirect(true);
      setRoute('/login');
      setDescription('Para realizar doação,por favor faça seu login.');
      return;
    }
    setRedirect(true);
    setId(id);
    setDescription(handleDescriptionRoute(id));
    setRoute(pathname);
  }

  function handleDescriptionRoute(value) {
    const titles = {
      1: 'acabar com a fome na Síria',
      2: 'acabar com a fome no mundo',
      3: 'acabar com a fome na Nicarágua',
      4: 'acabar coma a fome em Madagascar',
    };
    function getTitle(index) {
      return titles[index];
    }
    return getTitle(value);
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
            <Title>Doacao</Title>
            <Subtitle>
              Ajude uma causa específica ou acabar com a fome do mundo.
            </Subtitle>
          </div>
          {donation.map((item) => (
            <ContainerCardMission key={item.id}>
              <CardMission
                titleHelp={item.title}
                total={item.totalDonation}
                valueDonation={item.valueDonation}
                photo={item.photo}
                onClick={() => handleNavigate('/doacao/formulario', item.id)}
              />
            </ContainerCardMission>
          ))}
        </Fragment>
      )}
      {redirect && (
        <Redirect
          to={{
            pathname: route,
            state: { description, id },
          }}
        />
      )}
    </Container>
  );
}
