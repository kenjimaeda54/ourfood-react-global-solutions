import React from 'react';
import {
  Container,
  Effect,
  Section,
  TitleSection,
  Description,
  ColorDescription,
} from './styles';

export function About() {
  return (
    <Container>
      <Section>
        <TitleSection>
          <Effect> Uor Food </Effect>
        </TitleSection>
        <Description>
          UOR Food, surgiu apos a iniciativa grupo de alunos da faculdade
          diminui o desperdício de alimentos é acabar com a fome do mundo.
        </Description>
      </Section>
      <Section>
        <TitleSection>
          <Effect> Motivação </Effect>
        </TitleSection>
        <Description>
          Quanto mais doar, mais recompensas vai receber é sera o primeiro na
          lista dos doadores, atualizado, divulgado na página inicial. Sua
          empresa além de ser divulgado na nossa aplicação, motivara pessoas que
          acreditam nessa causa fazer compras no seu comércio, com isso toda
          comunidade ganha.
        </Description>
      </Section>
      <Section>
        <TitleSection>
          <Effect> Quem pode doar? </Effect>
        </TitleSection>
        <Description>
          Todos são livres para doar resgatar suas recompensas, caso você possua
          empresa deseja cadastrar é bem-vindo. Existe opção no momento de
          cadastro de perfil para esta situação.
        </Description>
      </Section>
      <Section>
        <TitleSection>
          <Effect> Como Funciona? </Effect>
        </TitleSection>
        <Description>
          Através dos acessos na plataforma e sócios, mantemos recompensas, elas
          podem ser adquiridos a parti numero de doações, cada doação gera
          pontos e posteriormente pode ser trocado por produtos no software ou
          em lojas conveniadas.
        </Description>
      </Section>
      <Section>
        <TitleSection>
          <Effect> Software? </Effect>
        </TitleSection>
        <Description>
          <ColorDescription>Pagina inicial:</ColorDescription> Nesta página esta
          nossos doadores, por ordem crescente de doações.
        </Description>
        <Description>
          <ColorDescription>Pagina premio:</ColorDescription> Nesta seção existe
          dois momentos, primeiro momento é anonimo, vai conseguir visualizar as
          recompensas disponíveis, mas não vão poder selecionar. No momento
          logado poderá trocar seus pontos pelos produtos visualizados
        </Description>
        <Description>
          <ColorDescription>Pagina perfil:</ColorDescription>Poderá visualizar
          seu perfil e editar as informações contidas também excluir seu perfil
          se desejar.
        </Description>
        <Description>
          <ColorDescription>Pagina login e cadastro:</ColorDescription>
          São destinadas a cadastrar e logar usando seu perfil.
        </Description>
      </Section>
    </Container>
  );
}
