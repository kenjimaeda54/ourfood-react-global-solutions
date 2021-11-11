import styled from 'styled-components';
import { FiChevronUp } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${({ photoUser }) => photoUser});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  min-width: 450px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 19px 38px ${({ theme }) => theme.colors.primary},
    0 15px 12px ${({ theme }) => theme.colors.primary};
  min-height: 400px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const WrapTitle = styled.div`
  display: ${({ isTouch }) => (isTouch ? 'flex' : 'none')};
  justify-content: space-between;
  align-items: flex-start;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  min-width: 450px;
  padding: 10px 20px;
  animation: animated 1s ease-in-out;
  @keyframes animated {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }

  gap: 10px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export const ContainerIcon = styled.div`
  display: flex;
  display: ${({ isTouch }) => (isTouch ? 'none' : 'flex')};
  align-items: flex-end;
  justify-content: flex-end;
  padding: 20px;
`;

export const Icon = styled(FiChevronUp)`
  color: ${({ theme }) => theme.colors.whiteThird};
  width: 40px;
  height: 40px;
`;

export const IconClose = styled(AiOutlineClose)`
  color: ${({ theme }) => theme.colors.red};
  width: 20px;
  height: 20px;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.red};
  font-weight: ${({ theme }) => theme.fonts.bold};
  font-size: 25px;
  line-height: 35px;
`;

export const LocationText = styled.p`
  color: ${({ theme }) => theme.colors.red};
  font-weight: ${({ theme }) => theme.fonts.regular};
  font-size: 15px;
  line-height: 20px;
`;

export const DonationText = styled.span`
  color: ${({ theme }) => theme.colors.red};
  font-weight: ${({ theme }) => theme.fonts.bold};
  font-size: 15px;
  line-height: 20px;
`;
