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
  TitleDonation,
  Subtitle,
  ContainerCardMission,
  ContainerLoading,
  ContainerFooter,
  WrapTitle,
  TitleFooter,
  SubtitleFooter,
  Button,
  TitleButton,
  ContainerReward,
} from './styles';

export function ProfileDonation() {
  const [loading, setLoading] = React.useState(true);
  const { userProfile } = useCustomContext();
  const [productsUser, setProductsUser] = useState([]);
  const [rewardUser, setRewardUser] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        const url = await fetch(`${baseUrl}/products`, {
          signal: controller.signal,
        });
        const urlReward = await fetch(`${baseUrl}/rewards`, {
          signal: controller.signal,
        });
        const response = await url.json();
        const reward = await urlReward.json();
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
          setProductsUser(response.filter((it) => it.userId === id));
          setRewardUser(reward.filter((it) => it.userId === id));
          return;
        }
        setProductsUser(response.filter((it) => it.userId === userProfile.id));
        setRewardUser(reward.filter((it) => it.userId === userProfile.id));
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
            <Title>Sua lista de doações e recompensas</Title>
            <Subtitle>
              Continue doando. Quanto mais doações, mais pontos vai arrecadar
            </Subtitle>
          </div>
          <TitleDonation>Suas doações</TitleDonation>
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
          <TitleDonation>Suas recompensas</TitleDonation>
          <ContainerReward>
            {rewardUser.map((it) => (
              <CardProduct key={it.id} name={it.title} photo={it.photo} />
            ))}
          </ContainerReward>
        </Fragment>
      )}
      ;
    </Container>
  );
}
