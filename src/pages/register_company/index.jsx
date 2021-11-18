/* eslint-disable no-unused-vars */
import React, { useRef, useEffect, useState, Fragment } from 'react';
import { baseUrl, keyStorageEmail } from '../../util';
import { Loading } from '../../components/loading';
import { useCustomContext } from '../../hooks/useCustomContext';
import {
  Container,
  Error,
  ContainerLoading,
  Title,
  Subtitle,
  Tips,
  ContainerButtonSelect,
  SectionOption,
  TextSelect,
  ContainerOption,
  TextOption,
  ButtonSelect,
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

export function RegisterCompany() {
  const nameRef = useRef(null);
  const { userProfile } = useCustomContext();
  const emailRef = useRef(null);
  const photoRef = useRef(null);
  const [tips, setTips] = useState(false);
  const [id, setId] = useState(0);
  const [typeInput, setTypeInput] = useState('password');
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSelect, setIsSelect] = useState(0);

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

  console.log(userProfile.id);

  async function handleFetchUser() {
    try {
      const profile = {
        name: nameRef.current.value,
        email: email,
        photo: photoRef.current.value,
        userId: userProfile.id,
        show: isSelect,
      };

      await fetch(`${baseUrl}/companies`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profile),
      });
      handleWithStorage();
    } catch (error) {
      console.log(error);
    } finally {
      window.location.href = '/';
      setLoading(false);
    }
  }

  function handleWithStorage() {
    if (isSelect === 1) {
      localStorage.removeItem(keyStorageEmail);
      localStorage.setItem(keyStorageEmail, JSON.stringify(email));
      return;
    }
    return;
  }

  function handleValidate() {
    if (
      nameRef.current?.value === '' ||
      emailRef.current?.value === '' ||
      photoRef.current?.value === ''
    ) {
      return 'Preencha todos os campos';
    } else if (
      nameRef.current?.value.length.length < 3 ||
      emailRef.current?.value.length < 5 ||
      photoRef.current?.value.length < 5 ||
      isSelect === 0
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

  const handleSelectProfile = (id) => setIsSelect(id);

  return (
    <Container>
      {loading ? (
        <ContainerLoading>
          <Loading />
        </ContainerLoading>
      ) : (
        <Fragment>
          <Title>Cadastro da empresa</Title>
          <Subtitle>
            Faça o cadastro da sua empresa,este campo e opcional
          </Subtitle>
          <ContainerLogin>
            <ContainerText>
              <TitleText>Cadastro da empresa</TitleText>
              <div>
                <Description>
                  Seja bem-vindo novamente, nesta sessão pode registrar uma
                  empresa.
                </Description>
                <Description>
                  Apos optar por divulgar os dados da companhia não poderá
                  escolher novamente perfil pessoal , inclusive sera este perfil
                  apresentado na tela inicial.
                </Description>
                <Description>
                  Apos registrar o email não é possível alterar
                </Description>
              </div>
            </ContainerText>
            <WrapLogin>
              {error.length > 3 && <Error>{error}</Error>}
              {userProfile.show !== 1 && (
                <ContainerButtonSelect>
                  <TextSelect>Deseja divulgar sua empresa?</TextSelect>
                  <SectionOption>
                    <ContainerOption>
                      <TextOption>Sim</TextOption>
                      <ButtonSelect
                        isSelected={isSelect === 1}
                        onClick={() => handleSelectProfile(1)}
                      />
                    </ContainerOption>
                    <ContainerOption>
                      <TextOption>Não</TextOption>
                      <ButtonSelect
                        isSelected={isSelect === 2}
                        onClick={() => handleSelectProfile(2)}
                      />
                    </ContainerOption>
                  </SectionOption>
                </ContainerButtonSelect>
              )}
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
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
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
                  ref={photoRef}
                  onKeyDown={(e) => handleSubmit(e)}
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
            </WrapLogin>
          </ContainerLogin>
        </Fragment>
      )}
    </Container>
  );
}
