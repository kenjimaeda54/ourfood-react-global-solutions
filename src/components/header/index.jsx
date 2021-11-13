import React, { useEffect, useState, Fragment } from 'react';
import { keyStorage } from '../../util';
import {
  Container,
  ContainerUser,
  Logout,
  TitleName,
  Photo,
  ContainerPunctuation,
  SubTitle,
  Punctuation,
  Anchor,
} from './styles';

export function Header() {
  const [user, setUser] = useState({});
  const [haveUser, setHaveUser] = useState(false);

  useEffect(() => {
    const getName = sessionStorage.getItem(keyStorage);
    const setUserName = getName ? JSON.parse(getName) : '';
    if (setUserName === '') {
      setHaveUser(false);
    } else {
      setHaveUser(true);
      const { name, punctuation, link } = setUserName;
      setUser({
        name,
        link,
        punctuation,
      });
    }
  }, []);

  return (
    <Container>
      {haveUser ? (
        <Fragment>
          <ContainerUser>
            <Logout />
            <Photo src={user.link} width={20} height={20} />
            <TitleName>{name}</TitleName>
          </ContainerUser>
          <ContainerPunctuation>
            <SubTitle>Pontos:</SubTitle>
            <Punctuation>0</Punctuation>
          </ContainerPunctuation>
        </Fragment>
      ) : (
        <Anchor to="/login">Login</Anchor>
      )}
    </Container>
  );
}
