import styled from 'styled-components';

export const Container = styled.div`
  grid-area: AS;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-right-color: ${({ theme }) => theme.colors.withe};
  border-right-width: 0.1px;
  border-right-style: solid;
`;

export const Title = styled.h3``;

export const ContainerNavigation = styled.div``;

export const Button = styled.button``;

export const TitleButton = styled.span``;
