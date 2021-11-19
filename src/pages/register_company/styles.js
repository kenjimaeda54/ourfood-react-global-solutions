import styled from 'styled-components';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

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
  font-size: 20px;
  line-height: 25px;
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.colors.red};
`;

export const Subtitle = styled.small`
  font-weight: ${({ theme }) => theme.fonts.light};
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  line-height: 25px;
  padding: 20px 45px;
`;

export const ContainerButtonSelect = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  width: 60%;
`;

export const SectionOption = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

export const TextSelect = styled.span`
  font-weight: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.white};
  font-size: 17px;
  line-height: 20px;
`;

export const ContainerOption = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

export const TextOption = styled.span`
  font-weight: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
  font-size: 17px;
  line-height: 20px;
`;

export const ButtonSelect = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.green};
  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.green : 'transparent'};
  cursor: pointer;
  &: hover {
    opacity: 0.7;
  }
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
  font-family: ${({ theme }) => theme.fonts.medium};
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
  height: 90%;
  justify-content: space-evenly;
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
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.grayLight};
  width: 90%;
  font-size: 25px;
  line-height: 30px;
  margin: 10px;
  font-family: ${({ theme }) => theme.fonts.medium};
  text-align: justify;
`;

export const Tips = styled.small`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fonts.light};
  font-size: 19px;
  line-height: 23px;
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 15px;
  align-items: flex-start;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export const Unlocked = styled(FaRegEyeSlash)`
  color: ${({ theme }) => theme.colors.yellow};
  width: 25px;
  height: 25px;
`;

export const Locked = styled(FaRegEye)`
  color: ${({ theme }) => theme.colors.yellow};
  width: 25px;
  height: 25px;
`;
