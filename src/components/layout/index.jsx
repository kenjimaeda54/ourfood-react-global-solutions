import React from "react";
import { Container } from "./styles";
import { Header } from "../header";
import { Aside } from "../aside";
import { Section } from "../section";

export function Layout({ children }) {
  return (
    <Container>
      <Header />
      <Aside />
      <Section>{children}</Section>
    </Container>
  );
}
