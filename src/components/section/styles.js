import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  grid-area: SC;
  overflow-y: scroll;
  height: calc(100vh - 90px);
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;
