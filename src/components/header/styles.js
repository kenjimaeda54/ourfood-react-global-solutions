import styled from 'styled-components';

export const Container = styled.div`
  grid-area: HD;
  display: flex;
  background-color: ${({ theme }) => theme.colors.third};
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
  justify-content: space-between;
  align-items: center;
  padding: 0px 50px;
`;

export const TitleName = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fonts.bold};
  font-size: 25px;
  line-height: 35px;
`;

export const ContainerPunctuation = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const SubTitle = styled.span`
  font-weight: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  line-height: 25px;
`;

export const Punctuation = styled(SubTitle)`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fonts.bold};
`;
