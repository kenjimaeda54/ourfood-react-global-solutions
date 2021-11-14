import styled from 'styled-components';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { BiEditAlt } from 'react-icons/bi';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Section = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 80%;
  align-items: center;
`;

export const SectionPhoto = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const ContainerLoading = styled.div`
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 100vh;
`;

export const Photo = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 50px 50px 0px ${({ theme }) => theme.colors.primary};
`;

export const ContainerField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  box-shadow: 0px 50px 50px 0px ${({ theme }) => theme.colors.primary};
`;

export const TitleField = styled.h3`
  font-weight: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.white};
  font-size: 17px;
  line-height: 20px;
`;

export const Input = styled.input`
  background-color: transparent;
  font-weight: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.whiteVariant};
  font-size: 23px;
  line-height: 28px;
  border-bottom-width: ${({ isActivity }) => (isActivity ? 2 : 0)}px;
  border-bottom-color: ${({ isActivity, theme }) =>
    isActivity ? theme.colors.red : 'transparent'};
  border-bottom-style: solid;
`;

export const ContainerIcon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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

export const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export const Edit = styled(BiEditAlt)`
  color: ${({ theme }) => theme.colors.yellow};
  width: 25px;
  height: 25px;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const FooterValue = styled.div`
  display: flex;
  width: 45%;
  padding: 15px 0px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.lightBlue};
  justify-content: center;
  align-items: center;
`;

export const SubTitleFooter = styled.span`
  font-weight: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
  font-size: 23px;
  line-height: 28px;
  text-align: center;
  margin-bottom: 2px;
  margin-left: 5px;
`;

export const TitleFooter = styled(TitleField)``;

export const ButtonDonation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.lightBlue};
  padding: 19px 0px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export const TextDonation = styled.small`
  font-weight: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.white};
  font-size: 17px;
  line-height: 20px;
`;
