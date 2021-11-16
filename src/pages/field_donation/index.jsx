import React, { useRef, useEffect, useState, Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import { useCustomContext } from '../../hooks/useCustomContext';
import { baseUrl } from '../../util';
import { Loading } from '../../components/loading';
import {
  Container,
  ContainerLoading,
  Title,
  Tips,
  Subtitle,
  ContainerLogin,
  WrapLogin,
  Label,
  Input,
  TitleText,
  ContainerText,
  Description,
  DescriptionColor,
  ButtonSubmit,
  ContainerButtonSubmit,
  TextButton,
  Thing,
  Button,
  Minus,
  Plus,
  Value,
  ContainerPoint,
  Point,
  PointReal,
} from './styles';

export function FieldDonation() {
  const nameRef = useRef(null);
  const photoRef = useRef(null);
  const { userProfile } = useCustomContext();
  const location = useLocation();
  const { description, id } = location?.state;
  const [value, setValue] = useState(0);
  const [tips, setTips] = useState(false);
  const [loading, setLoading] = useState(true);
  const [personalProfile, setPersonalProfile] = useState({});
  const [quantity, setQuantity] = useState(0);
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    nameRef.current?.focus();
    (async () => {
      try {
        const donationResponse = await fetch(`${baseUrl}/donations/${id}`);
        const donation = await donationResponse.json();
        const { valueDonation } = donation.find((item) => item.id === id);
        setQuantity(valueDonation);
        if (userProfile.show) {
          const response = await fetch(
            `${baseUrl}/users/id=${userProfile.userId}`,
          );
          const data = await response.json();
          const { id, name, email, password, punctuation, donation, photo } =
            data.find((it) => it.id === userProfile.userId);
          return setPersonalProfile({
            id,
            name,
            email,
            password,
            punctuation,
            donation,
            photo,
          });
        }
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

  function handleToggle(type) {
    if (type === 'plus') {
      setValue((old) => old + 1);
      return;
    }
    if (value > 0) {
      return setValue((old) => old - 1);
    }
  }

  async function handleDonate() {
    try {
      console.log(nameRef.current.value);
      setLoading(true);
      await fetch(`${baseUrl}/donations/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          valueDonation: quantity + value,
        }),
      });
      if (userProfile.show) {
        await fetch(`${baseUrl}/companies/${userProfile.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: userProfile.id,
            photo: userProfile.photo,
            punctuation: userProfile.punctuation + value * 3,
            donation: userProfile.donation + value,
            name: userProfile.name,
            email: userProfile.email,
            show: userProfile.show,
            userId: userProfile.userId,
          }),
        });
        await fetch(`${baseUrl}/users/${userProfile.userId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            punctuation: personalProfile.punctuation + value * 3,
            donation: personalProfile.donation + value,
            name: personalProfile.name,
            email: personalProfile.email,
            password: personalProfile.password,
            photo: personalProfile.photo,
          }),
        });
        await fetch(`${baseUrl}/products`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            photo: photo,
            title: name,
            quantity: value,
            userId: userProfile.userId,
          }),
        });
      } else {
        await fetch(`${baseUrl}/users/${userProfile.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            photo: userProfile.photo,
            punctuation: userProfile.punctuation + value * 3,
            donation: userProfile.donation + value,
            name: userProfile.name,
            email: userProfile.email,
            password: userProfile.password,
          }),
        });
        await fetch(`${baseUrl}/products`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            photo: photo,
            title: name,
            quantity: value,
            userId: userProfile.id,
          }),
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      window.location.href = '/';
      setLoading(false);
    }
  }
  function handleKey(event) {
    if (event.keyCode === 13) {
      nameRef.current.blur();
      photoRef.current.focus();
    }
  }

  const handleFocus = () => setTips(true);
  const handleBlur = () => setTips(false);

  return (
    <Container>
      {loading ? (
        <ContainerLoading>
          <Loading />
        </ContainerLoading>
      ) : (
        <Fragment>
          <Title>Faça sua doação</Title>
          <Subtitle>Vamos juntos acabar com a fome do mundo</Subtitle>
          <ContainerLogin>
            <ContainerText>
              <TitleText>Doação</TitleText>
              <div>
                <Description>
                  Ao doar você não vai poder editar ou deletar os produtos,
                  doado.
                </Description>
                <Description>Doando você ira ajudar famílias é</Description>
                <DescriptionColor> {description} </DescriptionColor>
              </div>
            </ContainerText>
            <WrapLogin>
              <Label>Nome do produto</Label>
              <div style={{ width: '100%' }}>
                <Input
                  onKeyDown={(e) => handleKey(e)}
                  placeholder="Arroz"
                  autoFocus
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  ref={nameRef}
                />
                {tips && <Tips>Pode digitar enter apos preencher o campo</Tips>}
              </div>
              <Label>Photo</Label>
              <Input
                ref={photoRef}
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
                placeholder="https://www.google.com/img.png"
              />
              <div>
                <Label>Quantity</Label>
                <Thing>
                  <Button onClick={() => handleToggle('plus')} type={'plus'}>
                    <Plus />
                  </Button>
                  <Value>{value}</Value>
                  <Button onClick={() => handleToggle('minus')} type={'minus'}>
                    <Minus />
                  </Button>
                </Thing>
              </div>
              <ContainerPoint>
                <Point>Pontos:</Point>
                <PointReal>{value === 0 ? 0 : value * 3}</PointReal>
              </ContainerPoint>
              <ButtonSubmit
                canDonation={value > 0}
                disabled={value > 0 ? false : true}
                onClick={handleDonate}
              >
                <ContainerButtonSubmit>
                  <TextButton>Doar</TextButton>
                </ContainerButtonSubmit>
              </ButtonSubmit>
            </WrapLogin>
          </ContainerLogin>
        </Fragment>
      )}
    </Container>
  );
}
