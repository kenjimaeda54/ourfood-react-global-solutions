/* eslint-disable no-unused-vars */
import React, { useEffect, useState, Fragment, useRef } from 'react';
import { useCustomContext } from '../../hooks/useCustomContext';
import { Loading } from '../../components/loading';
import { Link } from 'react-router-dom';
import {
  Container,
  SectionPhoto,
  ContainerLoading,
  ContainerInput,
  Button,
  Section,
  Photo,
  ContainerField,
  TitleField,
  Unlocked,
  Locked,
  Edit,
  Input,
  ContainerIcon,
  Footer,
  FooterValue,
  SubTitleFooter,
  TitleFooter,
  ButtonDonation,
  TextDonation,
  ContainerProfile,
  ContainerFooter,
  ButtonPerfil,
} from './styles';
import { baseUrl } from '../../util';

export function Profile() {
  const { userProfile } = useCustomContext();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState('');
  const [punctuation, setPunctuation] = useState('');
  const [donation, setDonation] = useState('');
  const [mounted, setMounted] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(true);
  const [typeInput, setTypeInput] = useState('password');
  const [disable, setDisable] = useState(true);
  const [isActivity, setIsActivity] = useState(false);
  const [id, setId] = useState(0);
  const [salveEdit, setSalveEdit] = useState(false);

  useEffect(() => {
    if (!mounted && Object.keys(userProfile).length > 0) {
      setPhoto(userProfile.photo);
      setPassword(userProfile?.password);
      setPunctuation(userProfile.punctuation);
      setDonation(userProfile.donation);
      setName(userProfile.name);
      setEmail(userProfile.email);
      setLoading(false);
    }
    return () => {
      setMounted(true);
    };
  }, [email, mounted, password, photo, userProfile]);

  function handlePassword() {
    if (typeInput === 'password') {
      return setTypeInput('text');
    }
    setTypeInput('password');
  }

  function handleMouse(type) {
    switch (type) {
      case 'password':
        passwordRef.current?.focus();
        break;
      case 'email':
        emailRef.current?.focus();
        break;
      default:
        nameRef.current?.focus();
        break;
    }
  }

  function handleEdit(id) {
    setDisable(false);
    setIsActivity(true);
    setId(id);
  }
  function handleBlur() {
    setDisable(true);
    setIsActivity(false);
    if (
      email !== userProfile.email ||
      password !== userProfile.password ||
      name !== userProfile.name
    ) {
      setSalveEdit(true);
    } else {
      setSalveEdit(false);
    }
  }

  function handleKey(event) {
    if (event.keyCode === 13) {
      passwordRef.current?.blur();
      emailRef.current?.blur();
      nameRef.current?.blur();
      return;
    }
  }

  async function handleChange() {
    try {
      setLoading(true);
      if (password) {
        const profile = {
          email,
          password,
          name,
          photo,
          punctuation,
          donation,
        };
        await fetch(`${baseUrl}/users/${userProfile.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },

          body: JSON.stringify(profile),
        });
      } else {
        const profile = {
          email,
          name,
          photo,
          punctuation,
          donation,
          show: userProfile.show,
          userId: userProfile.userId,
        };
        await fetch(`${baseUrl}/companies/${userProfile.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },

          body: JSON.stringify(profile),
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      window.location.href = '/';
      setLoading(false);
    }
  }

  async function handleProfile() {
    try {
      setLoading(true);
      const response = await fetch(`${baseUrl}/users/id=${userProfile.userId}`);
      const data = await response.json();
      const { photo, password, punctuation, donation, name, email } = data.find(
        (it) => it.id === userProfile.userId,
      );
      setPhoto(photo);
      setPassword(password);
      setPunctuation(punctuation);
      setDonation(donation);
      setName(name);
      setEmail(email);
    } catch (error) {
      console.log(error);
    } finally {
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
          <Section>
            <SectionPhoto>
              <Photo src={userProfile.photo} />

              {salveEdit && (
                <ButtonDonation onClick={handleChange}>
                  <TextDonation>Salvar alterações </TextDonation>
                </ButtonDonation>
              )}
            </SectionPhoto>
            <ContainerField>
              <ContainerInput>
                <TitleField>Nome:</TitleField>
                <Input
                  isActivity={isActivity && id === 1}
                  autoFocus
                  disabled={disable}
                  onBlur={handleBlur}
                  onKeyDown={(e) => handleKey(e)}
                  ref={nameRef}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {!disable && id === 1 && (
                  <TitleField>Apos concluir digitar enter</TitleField>
                )}
                <Button
                  onMouseOut={() => handleMouse('name')}
                  onMouseOver={() => handleMouse('name')}
                  onClick={() => handleEdit(1)}
                >
                  <Edit />
                </Button>
              </ContainerInput>
              <ContainerInput>
                <TitleField>Email:</TitleField>
                <Input
                  isActivity={isActivity && id === 2}
                  autoFocus
                  disabled={disable}
                  onBlur={handleBlur}
                  onKeyDown={(e) => handleKey(e)}
                  ref={emailRef}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {!disable && id === 2 && (
                  <TitleField>Apos concluir digitar enter</TitleField>
                )}
                <Button
                  onMouseOut={() => handleMouse('email')}
                  onMouseOver={() => handleMouse('email')}
                  onClick={() => handleEdit(2)}
                >
                  <Edit />
                </Button>
              </ContainerInput>
              {password && (
                <ContainerInput>
                  <TitleField>Password:</TitleField>
                  <Input
                    isActivity={isActivity && id === 3}
                    autoFocus
                    disabled={disable}
                    ref={passwordRef}
                    onBlur={handleBlur}
                    onKeyDown={(e) => handleKey(e)}
                    type={typeInput}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {!disable && id === 3 && (
                    <TitleField>Apos concluir digitar enter</TitleField>
                  )}
                  <ContainerIcon>
                    <Button
                      onMouseOut={() => handleMouse('password')}
                      onMouseOver={() => handleMouse('password')}
                      onClick={() => handleEdit(3)}
                    >
                      <Edit />
                    </Button>
                    <Button onClick={handlePassword}>
                      {typeInput === 'password' ? <Unlocked /> : <Locked />}
                    </Button>
                  </ContainerIcon>
                </ContainerInput>
              )}
              <Footer>
                {password ? (
                  <Fragment>
                    <FooterValue>
                      <TitleFooter>Doações:</TitleFooter>
                      <SubTitleFooter>{donation}</SubTitleFooter>
                    </FooterValue>
                    <FooterValue>
                      <TitleFooter>Pontuações:</TitleFooter>
                      <SubTitleFooter>{punctuation}</SubTitleFooter>
                    </FooterValue>
                  </Fragment>
                ) : (
                  <ContainerProfile>
                    <ContainerFooter>
                      <FooterValue>
                        <TitleFooter>Doações:</TitleFooter>
                        <SubTitleFooter>{donation}</SubTitleFooter>
                      </FooterValue>
                      <FooterValue>
                        <TitleFooter>Pontuações:</TitleFooter>
                        <SubTitleFooter>{punctuation}</SubTitleFooter>
                      </FooterValue>
                    </ContainerFooter>
                    <ButtonPerfil onClick={handleProfile}>
                      <TextDonation>Seu perfil </TextDonation>
                    </ButtonPerfil>
                  </ContainerProfile>
                )}
              </Footer>
              <Link to="/perfil/doacao" style={{ textDecoration: 'none' }}>
                <ButtonDonation>
                  <TextDonation>Doações </TextDonation>
                </ButtonDonation>
              </Link>
            </ContainerField>
          </Section>
        </Fragment>
      )}
    </Container>
  );
}
