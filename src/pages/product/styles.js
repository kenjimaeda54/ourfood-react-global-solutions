import styled from 'styled-components';
import { HiPlusSm } from 'react-icons/hi';
import { FiMinus } from 'react-icons/fi';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
  padding: 0px 45px;
`;

export const ContainerScroll = styled.div`
  margin-top: 40px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0px 45px;
`;

export const Right = styled(AiOutlineArrowRight)`
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Left = styled(AiOutlineArrowLeft)`
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.colors.white};
`;

export const ButtonScroll = styled.button`
  border: none;
  background-color: transparent;
  cursor: grabbing;
  &: {
    opacity: 0.5;
  }
`;

export const ContainerCardProduct = styled.div`
  padding-left: 45px;
  padding-right: 10px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  overflow-y: hidden;
  overflow-x: hidden;
  scroll-behavior: smooth;
`;

export const Thing = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 120px;
  justify-content: space-between;
  margin-bottom: 10px;
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
  cursor: pointer;
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

export const Plus = styled(HiPlusSm)`
  color: ${({ theme }) => theme.colors.white};
  width: 30px;
  height: 30px;
`;

export const Value = styled.span`
  font-weight: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.yellow};
  font-size: 20px;
  line-height: 25px;
`;
