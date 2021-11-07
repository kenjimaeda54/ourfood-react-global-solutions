import styled from 'styled-components';

export const Container = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 5px;
  animation: rotate 1s infinite;
  &:before {
  }
  &:after {
    border-radius: 50%;
    content: "";
    display: block;
    height: 20px;
    width: 20px;
  }
  &:before {
    animation: ball1 1s infinite;
    background-color: ${({ theme }) => theme.colors.red};
    box-shadow: 30px 0 0 ${({ theme }) => theme.colors.yellow};
    margin-bottom: 10px;
  }
  &:after {
    animation: ball2 1s infinite;
    background-color: ${({ theme }) => theme.colors.lightBlue}};
    box-shadow: 30px 0 0 ${({ theme }) => theme.colors.lightGreen};
  }
  @keyframes rotate {
    0% {
      -webkit-transform: rotate(0deg) scale(0.8);
      -moz-transform: rotate(0deg) scale(0.8);
    }
    50% {
      -webkit-transform: rotate(360deg) scale(1.2);
      -moz-transform: rotate(360deg) scale(1.2);
    }
    100% {
      -webkit-transform: rotate(720deg) scale(0.8);
      -moz-transform: rotate(720deg) scale(0.8);
    }
  }

  @keyframes ball1 {
    0% {
      box-shadow: 30px 0 0 ${({ theme }) => theme.colors.yellow};
    }
    50% {
      box-shadow: 0 0 0 ${({ theme }) => theme.colors.yellow};
      margin-bottom: 0;
      -webkit-transform: translate(15px, 15px);
      -moz-transform: translate(15px, 15px);
    }
    100% {
      box-shadow: 30px 0 0 ${({ theme }) => theme.colors.yellow};
      margin-bottom: 10px;
    }
  }
  @keyframes ball2 {
    0% {
      box-shadow: 30px 0 0 ${({ theme }) => theme.colors.lightGreen};
    }
    50% {
      box-shadow: 0 0 0 ${({ theme }) => theme.colors.lightGreen};
      margin-top: -20px;
      -webkit-transform: translate(15px, 15px);
      -moz-transform: translate(15px, 15px);
    }
    100% {
      box-shadow: 30px 0 0 ${({ theme }) => theme.colors.lightGreen};
      margin-top: 0;
    }
  }
`;
