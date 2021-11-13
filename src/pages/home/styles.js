import styled from 'styled-components';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;
export const Title = styled.h1`
  font-weight: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
  font-size: 30px;
  line-height: 35px;
  margin-bottom: 20px;
`;

export const ContainerLoading = styled.div`
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 100vh;
`;

export const ContainerCardMission = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 20px 45px;
`;

export const Subtitle = styled.small`
  font-weight: ${({ theme }) => theme.fonts.light};
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  line-height: 25px;
`;

export const ContainerScroll = styled.div`
  margin-top: 40px;
  display: flex;
  width: 100%;
  justify-content: space-between;
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
  padding-right: 10px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  overflow-x: hidden;
  scroll-behavior: smooth;
`;

export const CardPan = styled.div`
  display: flex;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
`;

export const Photo = styled.img`
  width: 60%;
  height: 100%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const ContainerLeftPan = styled.div`
  display: flex;
  width: 40%;
  flex-direction: column;
  padding: 20px 20px;
  align-items: flex-start;
`;

export const TitlePan = styled.h3`
  font-weight: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.grayLight};
  font-size: 27px;
  line-height: 30px;
`;

export const TitleDescription = styled.h3`
  font-weight: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.grayLight};
  font-size: 27px;
  line-height: 30px;
  margin: 20px 0px;
`;

export const Description = styled.p`
  width: 95%;
  margin: 15px 0px;
  font-weight: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.grayLight};
  font-size: 20px;
  line-height: 23px;
  text-align: justify;
`;

export const LinkText = styled.a`
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.colors.yellow};
  font-weight: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.grayLight};
  font-size: 20px;
  line-height: 23px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
