import React, { useState } from 'react';
import {
  Container,
  Button,
  Left,
  IconClose,
  ContainerIcon,
  Icon,
  Title,
  WrapTitle,
  LocationText,
  DonationText,
} from './styles';

// eslint-disable-next-line react/prop-types
export function CardDonation({ name, photo, location, donation }) {
  const [isTouch, setIsTouch] = useState(false);

  const handleVisibleHeader = () => setIsTouch((old) => !old);

  return (
    <Container photoUser={photo}>
      <WrapTitle isTouch={isTouch}>
        <Left>
          <Title>{name}</Title>
          {location && <LocationText>{location}</LocationText>}
          <DonationText>Pontos:{donation}</DonationText>
        </Left>
        <div>
          <Button onClick={handleVisibleHeader}>
            <IconClose />
          </Button>
        </div>
      </WrapTitle>
      <Button onClick={handleVisibleHeader}>
        <ContainerIcon isTouch={isTouch}>
          <Icon />
        </ContainerIcon>
      </Button>
    </Container>
  );
}
