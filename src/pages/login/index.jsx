import React, { useRef, useEffect, useState, Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { baseUrl } from '../../util';
import { Loading } from '../../components/loading';
import {
  Container,
  ContainerLoading,
  Error,
  Title,
  Subtitle,
  ContainerLogin,
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
} from './styles';

export function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const location = useLocation();
  const [locationState, setLocationState] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

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
      const response = await fetch(`${baseUrl}/users/email=${email}`, {
        signal: controller.signal,
      });
      const data = await response.json();
      if (data.length === 0) {
        setError(true);
      } else {
        const password = data.find((user) => user.password === password);
        console.log(password);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyboard(event) {
    if (event.keyCode === 13) {
      emailRef.current?.blur();
      passwordRef.current?.focus();
    }
  }

  useEffect(() => {
    handleLocationState();
    emailRef.current?.focus();
  }, []);

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
              {error && <Error>Confira seus dados e digite novamente</Error>}
              <Label>Email</Label>
              <Input
                value={email}
                onKeyDown={(event) => handleKeyboard(event)}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="joaoxxx@gmail.com"
                autoFocus
                ref={emailRef}
              />
              <Label>Senha</Label>
              <Input
                ref={passwordRef}
                autoFocus
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="1234adf"
              />
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
