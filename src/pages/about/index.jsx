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
          <Effect> Our Food </Effect>
        </TitleSection>
        <Description>
          OUR Food, surgiu apos a iniciativa grupo de alunos da faculdade
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
          Inicialmente a proposta era empresas, comércios e afins, que possuíam
          alimentos próximo à validade doar. Nós percebemos a necessidade de
          agregar a comunidade. Então todos são livres para doar e resgatar seus
          pontos. Caso deseje cadastrar empresa, nos disponibilizamos um recurso
          para este objetivo.
        </Description>
      </Section>
      <Section>
        <TitleSection>
          <Effect> Como os produtos chegam as pessoas? </Effect>
        </TitleSection>
        <Description>
          Trabalhamos em conjunto com a organização PAM, na página de doação,
          poderá visualizar as principais causas do momento, elas são
          selecionadas conforme o Programa Mundial de Alimentos. Se optar por
          alguma dessas causas os produtos vão chegar ate essas famílias por
          intermédio do Programa.
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
        <div>
          <ColorDescription>Pagina inicial:</ColorDescription>
          <Description>
            Nesta página esta nossos doadores, por ordem crescente de doações.
          </Description>
        </div>
        <div>
          <ColorDescription>Pagina premio:</ColorDescription>
          <Description>
            Nesta seção existe dois momentos, primeiro momento é anonimo, vai
            conseguir visualizar as recompensas disponíveis, mas não vão poder
            selecionar. No momento logado poderá trocar seus pontos pelos
            produtos visualizados
          </Description>
        </div>
        <div>
          <ColorDescription>Pagina perfil:</ColorDescription>
          <Description>
            Poderá visualizar seu perfil e editar as informações contidas também
            excluir seu perfil se desejar.
          </Description>
        </div>
        <div>
          <ColorDescription>Pagina login e cadastro:</ColorDescription>
          <Description>
            São destinadas a cadastrar e logar usando seu perfil.
          </Description>
        </div>
      </Section>
    </Container>
  );
}
