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

export const Photo = styled.img`
  width: 60%;
  height: 100%;
`;
