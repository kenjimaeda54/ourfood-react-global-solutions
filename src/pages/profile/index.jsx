/* eslint-disable no-unused-vars */
import React, { useEffect, useState, Fragment, useRef } from 'react';
import { useCustomContext } from '../../hooks/useCustomContext';
import { Loading } from '../../components/loading';
import {
  Container,
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
} from './styles';

export function Profile() {
  const { userProfile } = useCustomContext();
  const [email, setEmail] = useState('');
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState('');
  const [punctuation, setPunctuation] = useState('');
  const [donation, setDonation] = useState('');
  const [mounted, setMounted] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(true);
  const [typeInput, setTypeInput] = useState('password');
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    if (!mounted && Object.keys(userProfile).length > 0) {
      setPhoto(userProfile.photo);
      setPassword(userProfile.password);
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

  function handleFocus(type) {
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

  const handleEdit = () => setDisable(false);
  const handleBlur = () => setDisable(true);

  return (
    <Container>
      {loading ? (
        <ContainerLoading>
          <Loading />
        </ContainerLoading>
      ) : (
        <Fragment>
          <Section>
            <Photo src={userProfile.photo} />
            <ContainerField>
              <ContainerInput>
                <TitleField>Nome:</TitleField>
                <Input
                  autoFocus
                  disabled={disable}
                  onBlur={handleBlur}
                  ref={nameRef}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Button
                  onMouseOut={() => handleFocus('name')}
                  onMouseOver={() => handleFocus('name')}
                  onClick={handleEdit}
                >
                  <Edit />
                </Button>
              </ContainerInput>
              <ContainerInput>
                <TitleField>Email:</TitleField>
                <Input
                  autoFocus
                  disabled={disable}
                  onBlur={handleBlur}
                  ref={emailRef}
                  value={email}
                  onChange={(e) => setEmail(e.target.email)}
                />
                <Button
                  onMouseOut={() => handleFocus('email')}
                  onMouseOver={() => handleFocus('email')}
                  onClick={handleEdit}
                >
                  <Edit />
                </Button>
              </ContainerInput>
              <ContainerInput>
                <TitleField>Password:</TitleField>
                <Input
                  autoFocus
                  disabled={disable}
                  ref={passwordRef}
                  onBlur={handleBlur}
                  type={typeInput}
                  value={password}
                  onChange={(e) => setPassword(e.target.password)}
                />
                <ContainerIcon>
                  <Button
                    onMouseOut={() => handleFocus('password')}
                    onMouseOver={() => handleFocus('password')}
                    onClick={handleEdit}
                  >
                    <Edit />
                  </Button>
                  <Button onClick={handlePassword}>
                    {typeInput === 'password' ? <Unlocked /> : <Locked />}
                  </Button>
                </ContainerIcon>
              </ContainerInput>
              <Footer>
                <FooterValue>
                  <TitleFooter>Doações:</TitleFooter>
                  <SubTitleFooter>{donation}</SubTitleFooter>
                </FooterValue>
                <FooterValue>
                  <TitleFooter>Pontuações:</TitleFooter>
                  <SubTitleFooter>{punctuation}</SubTitleFooter>
                </FooterValue>
              </Footer>
            </ContainerField>
          </Section>
        </Fragment>
      )}
    </Container>
  );
}
