import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  background-color: ${({ theme }) => theme.colors.primary};
  grid-template-columns: 90px auto;
  grid-template-rows: 70px auto;
  grid-template-areas:
    'AS  HD'
    'AS  SC';
  height: 100vh;
`;
