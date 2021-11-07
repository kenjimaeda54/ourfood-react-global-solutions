import styled from 'styled-components';

export const Container = styled.div`
  grid-area: HD;
  display: flex;
  background-color: ${({ theme }) => theme.colors.third};
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
`;
