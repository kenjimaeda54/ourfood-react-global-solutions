import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 45px;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 50px;
`;

export const TitleSection = styled.h1`
  font-weight: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
  font-size: 30px;
  line-height: 35px;
`;

export const Effect = styled.span`
  background-size: 100% 15%;
  background-repeat: repeat-x;
  background-position: left 0% bottom 10%;
  background-image: linear-gradient(
    90deg,
    hsl(284, 91%, 69%) 0%,
    hsl(284, 91%, 69%) 12.5%,
    hsl(329, 91%, 69%) 12.5%,
    hsl(284, 91%, 69%) 25%,
    hsl(14, 91%, 69%) 25%,
    hsl(14, 91%, 69%) 37.5%,
    hsl(59, 91%, 69%) 37.5%,
    hsl(104, 91%, 69%) 50%,
    hsl(104, 91%, 69%) 62.5%,
    hsl(104, 91%, 69%) 62.5%,
    hsl(149, 91%, 69%) 75%,
    hsl(149, 91%, 69%) 75%,
    hsl(149, 91%, 69%) 87.5%,
    hsl(239, 91%, 69%) 87.5%,
    hsl(239, 91%, 69%) 100%
  );
`;

export const Description = styled.p`
  width: 80%;
  font-size: 20px;
  line-height: 25px;
  text-align: justify;
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fonts.medium};
`;

export const ColorDescription = styled(Description)`
  color: ${({ theme }) => theme.colors.green};
`;
