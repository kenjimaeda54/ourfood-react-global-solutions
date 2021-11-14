import React, { useEffect, useState, Fragment } from 'react';
import { useCustomContext } from '../../hooks/useCustomContext';
import { keyStorageEmail } from '../../util';
import {
  Container,
  LinkButton,
  ContainerUser,
  ContainerOff,
  SmallTitle,
  Logout,
  TitleName,
  Photo,
  ContainerPunctuation,
  SubTitle,
  Punctuation,
  Anchor,
} from './styles';

export function Header() {
  const { userProfile } = useCustomContext();
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState({});
  const [haveUser, setHaveUser] = useState(false);
  const [mouse, setMouse] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!mounted && Object.keys(userProfile).length > 0) {
      setHaveUser(true);
    }
    return () => {
      setMounted(true);
    };
  }, [userProfile]);

  const handleShowMessage = () => setMouse(true);

  const handleHiddenMessage = () => setMouse(false);

  function handleGoOut() {
    localStorage.removeItem(keyStorageEmail);
    window.location = '/';
  }

  return (
    <Container>
      {haveUser ? (
        <Fragment>
          <ContainerUser>
            <LinkButton to="/perfil">
              <Photo src={userProfile.photo} width={20} height={20} />
            </LinkButton>
            <ContainerOff
              onMouseOut={handleHiddenMessage}
              onMouseOver={() => handleShowMessage(1)}
              onClick={handleGoOut}
            >
              {mouse && <SmallTitle>Sair?</SmallTitle>}
              <Logout />
            </ContainerOff>
            <TitleName>{userProfile.name}</TitleName>
          </ContainerUser>
          <ContainerPunctuation>
            <SubTitle>Pontos:</SubTitle>
            <Punctuation>{userProfile.punctuation}</Punctuation>
          </ContainerPunctuation>
        </Fragment>
      ) : (
        <Anchor to="/login">Login</Anchor>
      )}
    </Container>
  );
}
