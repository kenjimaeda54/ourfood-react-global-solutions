import styled from 'styled-components';
import { FiMinus, FiPlus } from 'react-icons/fi';

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
  gap: 30px;
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
  height: 55%;
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
  font-family: ${({ theme }) => theme.fonts.medium};
  text-align: left;
`;

export const DescriptionColor = styled.h3`
  color: ${({ theme }) => theme.colors.grayLight};
  font-size: 25px;
  line-height: 30px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const ButtonSubmit = styled.button`
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
  margin-bottom: 20px;
`;

export const TextButton = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: 25px;
  line-height: 30px;
  font-weight: ${({ theme }) => theme.fonts.medium};
`;

export const Thing = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 120px;
  justify-content: space-between;
  margin-top: 10px;
  border-radius: 5px;
  align-items: center;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.yellow};
  border-radius: 4px;
  transition: transform 0.15s;
  transform: translateZ(0);
  transition: 0.6s;
  overflow: hidden;
  cursor: pointer;
  &:focus {
    outline: 0;
  }
  &:before {
    content: '';
    display: block;
    position: absolute;
    background: rgba(255, 255, 255, 0.5);
    width: 60px;
    height: 100%;
    left: 0;
    top: 0;
    opacity: 0.5;
    filter: blur(30px);
    transform: translateX(-100px) skewX(-15deg);
  }
  &:after {
    content: '';
    display: block;
    position: absolute;
    background: rgba(255, 255, 255, 0.2);
    width: 30px;
    height: 100%;
    left: 30px;
    top: 0;
    opacity: 0;
    filter: blur(5px);
    transform: translateX(-100px) skewX(-15deg);
  }
  &:hover {
    background: ${({ type, theme }) =>
      type === 'plus' ? theme.colors.green : theme.colors.red};
  }
  &:before {
    transform: translateX(300px) skewX(-15deg);
    opacity: 0.6;
    transition: 0.7s;
  }
  &:after {
    transform: translateX(300px) skewX(-15deg);
    opacity: 1;
    transition: 0.7s;
  }
`;

export const Minus = styled(FiMinus)`
  color: ${({ theme }) => theme.colors.white};
  width: 30px;
  height: 30px;
`;

export const Plus = styled(FiPlus)`
  color: ${({ theme }) => theme.colors.white};
  width: 30px;
  height: 30px;
`;

export const Tips = styled.small`
  font-weight: ${({ theme }) => theme.fonts.light};
  color: ${({ theme }) => theme.colors.white};
  font-size: 17px;
  line-height: 20px;
`;

export const Value = styled.span`
  font-weight: ${({ theme }) => theme.fonts.light};
  color: ${({ theme }) => theme.colors.yellow};
  font-size: 20px;
  line-height: 25px;
`;

export const ContainerPoint = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const Point = styled.span`
  font-weight: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  line-height: 25px;
`;

export const PointReal = styled.h3`
  font-weight: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  line-height: 25px;
`;
