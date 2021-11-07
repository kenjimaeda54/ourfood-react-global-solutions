import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 450px;
  gap: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 19px 38px ${({ theme }) => theme.colors.primary},
    0 15px 12px ${({ theme }) => theme.colors.primary};
  height: 400px;
  border-radius: 10px;
`;

export const WrapTitle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.green};
  font-weight: ${({ theme }) => theme.fonts.bold};
  font-size: 25px;
  line-height: 35px;
`;

export const LocationText = styled.p`
  color: ${({ theme }) => theme.colors.green};
  font-weight: ${({ theme }) => theme.fonts.regular};
  font-size: 15px;
  line-height: 20px;
`;

export const DonationText = styled.span`
  color: ${({ theme }) => theme.colors.green};
  font-weight: ${({ theme }) => theme.fonts.bold};
  font-size: 15px;
  line-height: 20px;
`;
