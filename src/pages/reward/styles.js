import styled from 'styled-components';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
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

export const ButtonAdd = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export const TextAdd = styled.small`
  font-weight: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.red};
  font-size: 20px;
  line-height: 25px;
  margin-bottom: 20px;
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
  height: 100%;
  padding-left: 45px;
  padding-right: 10px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  min-height: 600px;
  gap: 20px;
  overflow-y: hidden;
  overflow-x: hidden;
  scroll-behavior: smooth;
`;

export const ContainerFooter = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  gap: 20px;
`;

export const ContainerValue = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const ValuePunctuation = styled.span`
  font-weight: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.yellow};
  font-size: 20px;
  line-height: 25px;
`;

export const ValueTitle = styled.h3`
  font-weight: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.green};
  font-size: 20px;
  line-height: 25px;
`;

export const Thing = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 120px;
  justify-content: space-between;
  border-radius: 5px;
  align-items: center;
`;

export const Small = styled.small`
  font-weight: ${({ theme }) => theme.fonts.light};
  color: ${({ theme }) => theme.colors.green};
  font-size: 13px;
  line-height: 17px;
`;

export const Value = styled.span`
  font-weight: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.yellow};
  font-size: 20px;
  line-height: 25px;
`;

export const ButtonDonation = styled.button`
  padding: 10px 2px;
  opacity: ${({ canChange }) => (canChange ? 1 : 0.5)};
  border-radius: 4px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.yellow};
  cursor: ${({ canChange }) => (canChange ? 'pointer' : 'no-drop')};
  &:hover {
    opacity: ${({ canChange }) => (canChange ? 0.7 : 0.5)};
  }
`;

export const TextButton = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fonts.medium};
  font-size: 19px;
  line-height: 23px;
`;
