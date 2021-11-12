import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.whiteThird};
  border-radius: 10px;
  justify-content: space-between;
  height: 500px;
`;

export const TitleHelp = styled.h2`
  color: ${({ theme }) => theme.colors.grayLight};
  font-weight: ${({ theme }) => theme.fonts.bold};
  font-size: 20px;
  line-height: 25px;
`;

export const Photo = styled.img`
  width: 60%;
  height: 100%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const Content = styled.div`
  display: flex;
  width: 40%;
  height: 100%;
  border-radius: 10px;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 20px;
`;

export const Footer = styled.div`
  display: flex;
  height: 100%;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.whiteVariant};
  flex-direction: column;
  padding: 20px 0px;
  gap: 20px;
  justify-content: space-evenly;
`;

export const TitleDonation = styled.h3`
  color: ${({ theme }) => theme.colors.grayLight};
  font-weight: ${({ theme }) => theme.fonts.light};
  font-size: 19px;
  line-height: 23px;
`;

export const ColorDonation = styled(TitleDonation)`
  color: ${({ theme }) => theme.colors.green};
  margin: 10px 0px;
  font-weight: ${({ theme }) => theme.fonts.bold};
`;

export const ContainerBarDonation = styled.div`
  width: ${({ total }) => total && total}px;
  height: 10px;
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.grayLight};
`;

export const BarDonation = styled.div`
  width: ${({ quantity }) => quantity && quantity}px;
  border-radius: 4px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.green};
`;

export const Button = styled.button`
  padding: 10px 2px;
  border-radius: 4px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.yellow};
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const TextButton = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fonts.medium};
  font-size: 19px;
  line-height: 23px;
`;
