import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 450px;
  gap: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 19px 38px ${({ theme }) => theme.colors.primary},
    0 15px 12px ${({ theme }) => theme.colors.primary};
  min-height: 450px;
  border-radius: 10px;
`;

export const WrapTitle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 10px;
  height: 100%;
  gap: 5px;
  justify-content: space-evenly;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.green};
  font-weight: ${({ theme }) => theme.fonts.bold};
  font-size: 25px;
  line-height: 35px;
`;

export const Price = styled.p`
  color: ${({ theme }) => theme.colors.green};
  font-weight: ${({ theme }) => theme.fonts.regular};
  font-size: 15px;
  line-height: 20px;
`;

export const Punctuation = styled.span`
  color: ${({ theme }) => theme.colors.green};
  font-weight: ${({ theme }) => theme.fonts.bold};
  font-size: 15px;
  line-height: 20px;
`;

export const ContainerChildren = styled.div`
  width: 100%;
  margin-bottom: 10px;
  padding: 0px 10px;
`;
