/* eslint-disable react/prop-types */
import React from 'react';
import {
  Container,
  Photo,
  TitleDonation,
  ColorDonation,
  BarDonation,
  Footer,
  Content,
  ContainerBarDonation,
  Button,
  TextButton,
  TitleHelp,
} from './styles';

export function CardMission({
  titleHelp,
  photo,
  valueDonation,
  total,
  onClick,
}) {
  return (
    <Container>
      <Photo src={photo} />
      <Content>
        <TitleHelp>{titleHelp}</TitleHelp>
        <Footer>
          <div>
            <TitleDonation>Quantidade de doações:</TitleDonation>
            <ColorDonation>
              {valueDonation} de {total}
            </ColorDonation>
          </div>
          <ContainerBarDonation total={total}>
            <BarDonation quantity={valueDonation} />
          </ContainerBarDonation>
        </Footer>
        <Button onClick={onClick}>
          <TextButton>Doar</TextButton>
        </Button>
      </Content>
    </Container>
  );
}
