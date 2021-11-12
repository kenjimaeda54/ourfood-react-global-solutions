// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState, useRef, Fragment } from 'react';
import { CardMission } from '../../components/card_mission';
import { Container, Title, Subtitle, ContainerCardMission } from './styles';

export function Donation() {
  return (
    <Container>
      <div style={{ padding: 45 }}>
        <Title>Doacao</Title>
        <Subtitle>
          Ajude uma causa específica ou as criancas no mundo todo.
        </Subtitle>
      </div>
      <ContainerCardMission>
        <Subtitle>Nosso principal objetivo</Subtitle>
        <CardMission
          titleHelp="Ajude refugiados na Síria"
          total={500}
          valueDonation={500}
          photo="https://cdn.revistaforum.com.br/wp-content/uploads/2015/06/fome.jpg"
        />
        <CardMission
          titleHelp="Ajude acabar com a fome no Paquistão"
          total={500}
          valueDonation={500}
          photo="https://cdn.revistaforum.com.br/wp-content/uploads/2015/06/fome.jpghttps://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production+Library/2020/21-04-2020_WFP_Syria_2.jpg/image1170x530cropped.jpghttps://cdn.revistaforum.com.br/wp-content/uploads/2015/06/fome.jpg"
        />
      </ContainerCardMission>
    </Container>
  );
}
