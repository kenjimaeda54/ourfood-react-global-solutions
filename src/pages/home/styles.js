import styled from 'styled-components';
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
  padding: 20px 45px;
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

export const ContainerCard = styled.div`
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
