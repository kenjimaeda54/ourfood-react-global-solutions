import styled from 'styled-components';

export const Container = styled.div`
  float: left;
  width: 100px;
  height: 100px;
  margin: 0 10px 10px 0;
  padding: 20px 20px 20px;
  border-radius: 5px;
  text-align: center;
`;

export const Bar = styled.div`
  float: left;
  width: 34px;
  height: 12px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.lightBlue};
  animation: loadingJ 2s cubic-bezier(0.17, 0.37, 0.43, 0.67) infinite;
  @keyframes loadingJ {
    0%,
    100% {
      transform: translate(0, 0);
    }

    50% {
      transform: translate(160px, 0);
      background-color: ${({ theme }) => theme.colors.red};
      width: 25px;
    }
  }
`;

export const Load = styled.div`
  animation-delay: 1.56s;
`;
