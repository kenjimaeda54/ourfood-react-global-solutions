import React, { Fragment } from 'react';
import {
  Container,
  Title,
  WrapTitle,
  LocationText,
  DonationText,
} from './styles';

// eslint-disable-next-line react/prop-types
export function CardDonation({ number, name, photo, location, donation }) {
  return (
    <Fragment>
      {number % 2 === 0 ? (
        <Container>
          <img
            width={400}
            height={300}
            src={photo}
            style={{
              borderRadius: '10px',
            }}
          />
          <WrapTitle>
            <Title>{name}</Title>
            {location && <LocationText>{location}</LocationText>}
            <DonationText>Pontos:{donation}</DonationText>
          </WrapTitle>
        </Container>
      ) : (
        <Container>
          <WrapTitle>
            <Title>{name}</Title>
            {location && <LocationText>{location}</LocationText>}
            <DonationText>Pontos:{donation}</DonationText>
          </WrapTitle>
          <img
            width={400}
            height={300}
            src={photo}
            style={{
              borderRadius: '10px',
            }}
          />
        </Container>
      )}
    </Fragment>
  );
}
