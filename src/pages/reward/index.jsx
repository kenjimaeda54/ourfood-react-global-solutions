/* eslint-disable no-unused-vars */
import React, { useState, useRef, Fragment, useEffect } from 'react';
import { listProducts } from '../../util';
import { CardProduct } from '../../components/card_product';
import { Redirect } from 'react-router-dom';
import { baseUrl } from '../../util';
import { Loading } from '../../components/loading';
import {
  Container,
  ContainerLoading,
  Title,
  Subtitle,
  ButtonAdd,
  TextAdd,
  ContainerScroll,
  Right,
  Left,
  ButtonScroll,
  ContainerCardProduct,
  ContainerValue,
  ValuePunctuation,
  ValueTitle,
  Thing,
  Value,
  Button,
  Minus,
  Plus,
  ContainerFooter,
  ButtonDonation,
  TextButton,
  Small,
} from './styles';
import { useCustomContext } from '../../hooks/useCustomContext';

export function Reward() {
  const { userProfile } = useCustomContext();
  const scrollRef = useRef(null);
  const [value, setValue] = useState(0);
  const [isLogged, setIsLogged] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [idProduct, setIdProduct] = useState(0);
  const [personalUser, setPersonalUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        if (userProfile.show) {
          const response = await fetch(
            `${baseUrl}/users/id=${userProfile.userId}`,
            {
              signal: controller.signal,
            },
          );
          const personalUser = await response.json();
          const { name, photo, email, password, punctuation, donation, id } =
            personalUser.find((it) => id.id === userProfile.userId);
          return setPersonalUser({
            id,
            name,
            photo,
            email,
            password,
            punctuation,
            donation,
          });
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
    return () => controller.abort();
  }, []);

  function handleHaveUser() {
    if (userProfile.id) {
      setIsLogged(true);
    } else {
      setRedirect(true);
    }
  }

  function handleScroll(type) {
    if (type === 'right') {
      scrollRef.current.scrollLeft += 300;
    } else {
      scrollRef.current.scrollLeft -= 300;
    }
  }

  async function handleChange(idProduct) {
    try {
      setLoading(true);
      const products = listProducts.find((product) => product.id === idProduct);
      if (userProfile.userId) {
        await fetch(`${baseUrl}/rewards`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            photo: products.photo,
            title: products.name,
            userId: userProfile.userId,
          }),
        });
        await fetch(`${baseUrl}/companies/${userProfile.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: userProfile.name,
            email: userProfile.email,
            photo: userProfile.photo,
            donation: userProfile.donation,
            punctuation: userProfile.punctuation - products.punctuation,
            userId: userProfile.userId,
            show: userProfile.show,
          }),
        });
        await fetch(`${baseUrl}/users/${personalUser.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            photo: personalUser.photo,
            punctuation: personalUser.punctuation - products.punctuation,
            donation: personalUser.donation,
            name: personalUser.name,
            password: personalUser.password,
          }),
        });
      } else {
        await fetch(`${baseUrl}/rewards`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            photo: products.photo,
            title: products.name,
            userId: userProfile.id,
          }),
        });
        await fetch(`${baseUrl}/users/${userProfile.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            photo: userProfile.photo,
            punctuation: userProfile.punctuation - products.punctuation,
            donation: userProfile.donation,
            name: userProfile.name,
            password: userProfile.password,
          }),
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      window.location.href = `/`;
      setLoading(false);
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
          <Title>Aqui fica as recompensas</Title>
          <Subtitle>Precisa estar logado para resgatar os pontos</Subtitle>
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
          <ContainerCardProduct ref={scrollRef}>
            {listProducts.map((product) => (
              <CardProduct
                key={product.id}
                name={product.name}
                photo={product.photo}
                punctuation={product.punctuation}
                logged={isLogged}
              >
                {isLogged ? (
                  <ContainerFooter>
                    {idProduct === product.id && (
                      <Small>
                        Apos selecionado o produto precisa sair e novamente
                        retornar se deseja selecionar outro.
                      </Small>
                    )}
                    <ContainerValue>
                      <ValueTitle>Seus pontos:</ValueTitle>
                      <ValuePunctuation>
                        {userProfile.punctuation}
                      </ValuePunctuation>
                    </ContainerValue>
                    <ButtonDonation
                      disabled={
                        userProfile.punctuation < product.punctuation
                          ? true
                          : false
                      }
                      canChange={userProfile.punctuation > product.punctuation}
                      onClick={() => handleChange(product.id)}
                    >
                      <TextButton>Trocar</TextButton>
                    </ButtonDonation>
                  </ContainerFooter>
                ) : (
                  <ButtonAdd onClick={handleHaveUser}>
                    <TextAdd>Trocar os pontos?</TextAdd>
                  </ButtonAdd>
                )}
              </CardProduct>
            ))}
          </ContainerCardProduct>
        </Fragment>
      )}
      {redirect && <Redirect to="/login" />}
    </Container>
  );
}
