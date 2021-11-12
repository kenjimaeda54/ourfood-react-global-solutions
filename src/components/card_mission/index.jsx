import React from 'react';
import { Link } from 'react-router-dom';
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

// eslint-disable-next-line react/prop-types
export function CardMission({ titleHelp, photo, valueDonation, total }) {
  return (
    <Container>
      <Photo src={photo} />
      <Content>
        <TitleHelp>{titleHelp}</TitleHelp>
        <Footer>
          <TitleDonation>
            Quantidade de doações:
            <ColorDonation>
              {valueDonation} de {total}
            </ColorDonation>{' '}
          </TitleDonation>
          <ContainerBarDonation total={total}>
            <BarDonation quantity={valueDonation} />
          </ContainerBarDonation>
        </Footer>
        <Link to="/doacao">
          <Button>
            <TextButton>Doar</TextButton>
          </Button>
        </Link>
      </Content>
    </Container>
  );
}
