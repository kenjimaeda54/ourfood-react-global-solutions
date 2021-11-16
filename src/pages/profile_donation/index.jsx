/* eslint-disable no-unused-vars */
import React, { Fragment, useEffect, useState } from 'react';
import { CardProduct } from '../../components/card_product';
import { Link } from 'react-router-dom';
import { Loading } from '../../components/loading';
import { useCustomContext } from '../../hooks/useCustomContext';
import { baseUrl } from '../../util';
import {
  Container,
  Title,
  Subtitle,
  ContainerCardMission,
  ContainerLoading,
  ContainerFooter,
  WrapTitle,
  TitleFooter,
  SubtitleFooter,
  Button,
  TitleButton,
} from './styles';

export function ProfileDonation() {
  const [loading, setLoading] = React.useState(true);
  const { userProfile } = useCustomContext();
  const [productsUser, setProductsUser] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        const url = await fetch(`${baseUrl}/products`, {
          signal: controller.signal,
        });
        const response = await url.json();
        if (userProfile.show) {
          const fetchUrl = await fetch(
            `${baseUrl}/users/id=${userProfile.userId}`,
            {
              signal: controller.signal,
            },
          );
          const responseUser = await fetchUrl.json();
          const { id } = responseUser.find(
            (product) => product.id === userProfile.userId,
          );
          return setProductsUser(response.filter((it) => it.userId === id));
        }
        return setProductsUser(
          response.filter((it) => it.userId === userProfile.id),
        );
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
    return () => {
      controller.abort();
    };
  }, [userProfile]);

  return (
    <Container>
      {loading ? (
        <ContainerLoading>
          <Loading />
        </ContainerLoading>
      ) : (
        <Fragment>
          <div style={{ padding: 45 }}>
            <Title>Sua lista de doacoes</Title>
            <Subtitle>
              Continue doando. Quanto mais doações, mais pontos vai arrecadar
            </Subtitle>
          </div>
          <ContainerCardMission>
            {productsUser.map((product) => (
              <CardProduct
                key={product.id}
                name={product.title}
                photo={product.photo}
                logged={true}
              >
                <ContainerFooter>
                  <WrapTitle>
                    <TitleFooter> Quantidade: </TitleFooter>
                    <SubtitleFooter>{product.quantity}</SubtitleFooter>
                  </WrapTitle>
                  <Link
                    to="/doacao"
                    style={{
                      textDecoration: 'none',
                    }}
                  >
                    <Button>
                      <TitleButton>Continuar Doando</TitleButton>
                    </Button>
                  </Link>
                </ContainerFooter>
              </CardProduct>
            ))}
          </ContainerCardMission>
        </Fragment>
      )}
      ;
    </Container>
  );
}
