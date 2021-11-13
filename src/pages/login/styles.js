import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ContainerLoading = styled.div`
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 100vh;
`;

export const Title = styled.h1`
  font-weight: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
  font-size: 30px;
  line-height: 35px;
  margin-bottom: 20px;
  padding: 20px 45px;
`;

export const Error = styled.h3`
  font-weight: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.colors.red};
  font-size: 20px;
  line-height: 23px;
`;

export const Subtitle = styled.small`
  font-weight: ${({ theme }) => theme.fonts.light};
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  line-height: 25px;
  padding: 20px 45px;
`;

export const ContainerLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px 45px;
`;

export const WrapLogin = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.grayLight};
  box-shadow: 0px 0px 40px 16px rgba(0, 0, 0, 0.22);
  color: ${({ theme }) => theme.colors.whiteVariant};
  width: 35%;
  padding: 20px;
  justify-content: center;
  align-items: flex-start;
  gap: 50px;
  border-radius: 4px;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 20px;
  line-height: 25px;
  font-weight: ${({ theme }) => theme.fonts.medium};
`;

export const Input = styled.input`
  background: transparent;
  color: ${({ theme }) => theme.colors.whiteThird};
  outline: none !important;
  width: 100%;
  font-weight: ${({ theme }) => theme.fonts.bold};
  font-size: 20px;
  line-height: 25px;
  border-bottom-width: 5px;
  border-bottom-color: ${({ theme }) => theme.colors.red};
  border-bottom-style: groove;
  &::placeholder {
    font-weight: ${({ theme }) => theme.fonts.light};
    color: ${({ theme }) => theme.colors.whiteVariant};
    font-size: 17px;
    line-height: 19px;
  }
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: white;
  width: 35%;
  padding: 20px;
  gap: 20px;
  border-radius: 4px;
`;

export const TitleText = styled.h3`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 30px;
  line-height: 35px;
  font-weight: ${({ theme }) => theme.fonts.bold};
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.grayLight};
  font-size: 25px;
  line-height: 30px;
  font-weight: ${({ theme }) => theme.fonts.medium};
`;

export const DescriptionColor = styled.h3`
  color: ${({ theme }) => theme.colors.grayLight};
  font-size: 25px;
  line-height: 30px;
  font-weight: ${({ theme }) => theme.fonts.bold};
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.grayLight};
  font-size: 15px;
  line-height: 20px;
  font-weight: ${({ theme }) => theme.fonts.regular};
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.green};
  }
`;

export const ButtonSubmit = styled.span`
  width: 100%;
  border: none;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

export const ContainerButtonSubmit = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 20px;
`;

export const TextButton = styled.span`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 25px;
  line-height: 30px;
  font-weight: ${({ theme }) => theme.fonts.medium};
`;
