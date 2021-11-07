import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 45px;
`;

export const Title = styled.h1`
  font-weight: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
  font-size: 30px;
  line-height: 35px;
  margin-bottom: 20px;
`;

export const Subtitle = styled.small`
  font-weight: ${({ theme }) => theme.fonts.light};
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  line-height: 25px;
`;

export const ContainerCard = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`;
