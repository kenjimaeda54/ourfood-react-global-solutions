/* eslint-disable no-unused-vars */
import React, { useState, useRef, Fragment, useEffect } from 'react';
import { listProducts } from '../../util';
import { CardProduct } from '../../components/card_product';
import { Redirect } from 'react-router-dom';
import {
  Container,
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

  function handleChange() {
    console.log('troquei');
  }

  return (
    <Container>
      <Title>Aqui fica as recompensas</Title>
      <Subtitle>Precisa estar logado para resgatar os pontos</Subtitle>
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
                    Apos selecionado o produto precisa sair e novamente retornar
                    se deseja selecionar outro.
                  </Small>
                )}
                <ContainerValue>
                  <ValueTitle>Seus pontos:</ValueTitle>
                  <ValuePunctuation>{userProfile.punctuation}</ValuePunctuation>
                </ContainerValue>
                <ButtonDonation
                  disabled={
                    userProfile.punctuation < product.punctuation ? true : false
                  }
                  canChange={userProfile.punctuation > product.punctuation}
                  onClick={handleChange}
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
      {redirect && <Redirect to="/login" />}
    </Container>
  );
}
