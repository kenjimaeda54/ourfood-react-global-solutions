import React, { useRef, useEffect, useState, Fragment } from 'react';
import { baseUrl, keyStorageEmail } from '../../util';
import { Loading } from '../../components/loading';
import {
  Container,
  Error,
  ContainerLoading,
  Title,
  Subtitle,
  Tips,
  ContainerInput,
  ContainerLogin,
  WrapLogin,
  Label,
  Input,
  TitleText,
  ContainerText,
  Description,
  Button,
  Unlocked,
  Locked,
} from './styles';

export function RegisterProfile() {
  const nameRef = useRef(null);
  const passwordRef = useRef(null);
  const emailRef = useRef(null);
  const photoRef = useRef(null);
  const [tips, setTips] = useState(false);
  const [id, setId] = useState(0);
  const [typeInput, setTypeInput] = useState('password');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    nameRef.current?.focus();
  }, []);

  function handleFocus(id) {
    setTips(true);
    setId(id);
  }

  function handleSubmit(event) {
    if (event.keyCode === 13 && handleValidate() === '') {
      setLoading(true);
      handleFetchUser();
      return;
    }
    setError(handleValidate());
  }

  async function handleFetchUser() {
    try {
      localStorage.setItem(
        keyStorageEmail,
        JSON.stringify(emailRef.current.value),
      );
      const profile = {
        name: nameRef.current.value,
        password: passwordRef.current.value,
        email: emailRef.current.value,
        photo: photoRef.current.value,
      };

      await fetch(`${baseUrl}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profile),
      });
    } catch (error) {
      console.log(error);
    } finally {
      window.location.href = '/';
      setLoading(false);
    }
  }

  function handleValidate() {
    if (
      nameRef.current?.value === '' ||
      passwordRef.current?.value === '' ||
      emailRef.current?.value === '' ||
      photoRef.current?.value === ''
    ) {
      return 'Preencha todos os campos';
    } else if (
      nameRef.current?.value.length.length < 3 ||
      passwordRef.current?.value.length < 6 ||
      emailRef.current?.value.length < 5 ||
      photoRef.current?.value.length < 5
    ) {
      return 'Confira se todos os campos estão inseridos corretamente';
    } else {
      return '';
    }
  }

  function handleKey(event, type) {
    if (event.keyCode === 13 && type === 'name') {
      nameRef.current?.blur();
      emailRef.current?.focus();
      return;
    } else if (event.keyCode === 13 && type === 'email') {
      emailRef.current?.blur();
      photoRef.current?.focus();
      return;
    }
    if (event.keyCode === 13) {
      photoRef.current?.blur();
      passwordRef.current?.focus();
    }
  }

  const handleBlur = () => {
    setTips(false);
    setError('');
  };

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
          <Title>Cadastro de perfil</Title>
          <Subtitle>
            Faca seu cadastro para acessar todos recursos disponíveis
          </Subtitle>
          <ContainerLogin>
            <ContainerText>
              <TitleText>Cadastro</TitleText>
              <div>
                <Description>
                  Seja bem-vindo, faca o seu cadastro e juntos acabaremos com a
                  fome do mundo.
                </Description>
                <Description>
                  Vamos armazenar seu nome, email, senha para futuras consultas.
                </Description>
              </div>
            </ContainerText>
            <WrapLogin>
              {error.length > 3 && <Error>{error}</Error>}
              <ContainerInput>
                <Label>Name</Label>
                <Input
                  onFocus={() => handleFocus(1)}
                  onBlur={handleBlur}
                  onKeyDown={(e) => handleKey(e, 'name')}
                  placeholder="Bia"
                  autoFocus
                  ref={nameRef}
                />
                {tips && id === 1 && (
                  <Fragment>
                    <Tips>Nomes são aceitos acima de 3 letras.</Tips>
                    <Tips>Apos concluir este campo pode digitar enter.</Tips>
                  </Fragment>
                )}
              </ContainerInput>
              <ContainerInput>
                <Label>Email</Label>
                <Input
                  onFocus={() => handleFocus(2)}
                  type="email"
                  onBlur={handleBlur}
                  onKeyDown={(e) => handleKey(e, 'email')}
                  ref={emailRef}
                  placeholder="joxx@gmail.com"
                  autoFocus
                />
                {id === 2 && tips && (
                  <Fragment>
                    <Tips>Email são aceitos acima de 5 letras.</Tips>
                    <Tips>Apos concluir este campo pode digitar enter.</Tips>
                  </Fragment>
                )}
              </ContainerInput>
              <ContainerInput>
                <Label>Foto</Label>
                <Input
                  onFocus={() => handleFocus(3)}
                  onBlur={handleBlur}
                  onKeyDown={(e) => handleKey(e, 'photo')}
                  ref={photoRef}
                  placeholder="https://github.com/nomegithub.png"
                  autoFocus
                />
                {id === 3 && tips && (
                  <Fragment>
                    <Tips>Fotos são aceitos acima de 5 letras.</Tips>
                    <Tips>Apos concluir este campo pode digitar enter.</Tips>
                  </Fragment>
                )}
              </ContainerInput>
              <ContainerInput>
                <Label>Senha</Label>
                <Input
                  type={typeInput}
                  onFocus={() => handleFocus(4)}
                  onBlur={handleBlur}
                  onKeyDown={(e) => handleSubmit(e)}
                  ref={passwordRef}
                  placeholder="12Ab343"
                  autoFocus
                />
                {id === 4 && tips && (
                  <Fragment>
                    <Tips>Senhas são aceitos acima de 6 letras.</Tips>
                    <Tips>
                      Apos concluir este campo aperte enter para registrar.
                    </Tips>
                  </Fragment>
                )}
                <Button onClick={handleTypeInput}>
                  {typeInput === 'password' ? <Unlocked /> : <Locked />}
                </Button>
              </ContainerInput>
            </WrapLogin>
          </ContainerLogin>
        </Fragment>
      )}
    </Container>
  );
}
