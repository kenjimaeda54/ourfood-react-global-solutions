/* eslint-disable no-unused-vars */
import React, { useRef, useEffect, useState, Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { baseUrl, keyStorageEmail } from '../../util';
import { Loading } from '../../components/loading';
import {
  Container,
  ContainerLoading,
  Error,
  Title,
  Tips,
  Subtitle,
  ContainerLogin,
  ContainerInput,
  WrapLogin,
  Label,
  Input,
  TitleText,
  ContainerText,
  Description,
  DescriptionColor,
  Button,
  ContainerButtonSubmit,
  ButtonSubmit,
  TextButton,
  ButtonTypePassword,
  Unlocked,
  Locked,
  typeInput,
} from './styles';
import { useCustomContext } from '../../hooks/useCustomContext';

export function Login() {
  const { handleUserProfile } = useCustomContext();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');
  const location = useLocation();
  const [locationState, setLocationState] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [tips, setTips] = useState(true);
  const [typeInput, setTypeInput] = useState('password');

  function handleLocationState() {
    if (location.state !== undefined) {
      const { description } = location.state;
      return setLocationState(description);
    }
    return;
  }

  async function handleLogin() {
    const controller = new AbortController();
    setLoading(true);
    try {
      const response = await fetch(`${baseUrl}/users/email=${emailField}`, {
        signal: controller.signal,
      });
      const data = await response.json();
      if (data.length === 0) {
        return setError('Seu email esta incorreto.');
      }
      const { password, id, photo, punctuation, donation, name } = data.find(
        (user) => user.email === emailField,
      );
      if (password !== passwordField) {
        return setError('Sua senha esta incorreta.');
      } else {
        localStorage.setItem(keyStorageEmail, JSON.stringify(emailField));
        const perfilUser = {
          id,
          photo,
          punctuation,
          donation,
          name,
        };
        handleUserProfile(perfilUser);
        return (window.location.href = '/perfil');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyboard(event) {
    if (event.keyCode === 13) {
      setTips(false);
      emailRef.current?.blur();
      passwordRef.current?.focus();
    }
  }
  const handleFocus = () => setTips(true);

  const handleBlur = () => setTips(false);

  useEffect(() => {
    handleLocationState();
    emailRef.current?.focus();
  }, []);

  function handleTypeInput() {
    if (typeInput === 'password') {
      setTypeInput('text');
    } else {
      setTypeInput('password');
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
          <Title>Login</Title>
          <Subtitle>
            Faca, seu login fortaleça nossa comunidade na busca de acabar com
            fome do mundo
          </Subtitle>
          <ContainerLogin>
            <ContainerText>
              <TitleText>Login</TitleText>
              <div>
                <Description>
                  Seja bem vindo, vamos acabar com a fome do mundo juntos.
                </Description>
                {locationState && (
                  <DescriptionColor> {locationState}</DescriptionColor>
                )}
              </div>
              <Link to="/cadastro" style={{ textDecoration: 'none' }}>
                <Button>Cadastrar?</Button>
              </Link>
            </ContainerText>
            <WrapLogin>
              {error.length > 3 && <Error>{error}</Error>}
              <ContainerInput>
                <Label>Email</Label>
                <Input
                  value={emailField}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  onKeyDown={(event) => handleKeyboard(event)}
                  onChange={(e) => setEmailField(e.target.value)}
                  placeholder="joaoxxx@gmail.com"
                  autoFocus
                  ref={emailRef}
                />
                {emailField.length > 3 && tips && (
                  <Tips>Apos concluir este campo pode digitar enter.</Tips>
                )}
              </ContainerInput>
              <ContainerInput>
                <Label>Senha</Label>
                <Input
                  type={typeInput}
                  ref={passwordRef}
                  autoFocus
                  value={passwordField}
                  onChange={(e) => setPasswordField(e.target.value)}
                  placeholder="1234adf"
                />
                <ButtonTypePassword onClick={handleTypeInput}>
                  {typeInput === 'password' ? <Unlocked /> : <Locked />}
                </ButtonTypePassword>
              </ContainerInput>
              <ButtonSubmit>
                <ContainerButtonSubmit type="button" onClick={handleLogin}>
                  <TextButton>Entrar</TextButton>
                </ContainerButtonSubmit>
              </ButtonSubmit>
            </WrapLogin>
          </ContainerLogin>
        </Fragment>
      )}
    </Container>
  );
}
