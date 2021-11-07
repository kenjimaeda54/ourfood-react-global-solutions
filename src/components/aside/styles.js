import styled from 'styled-components';
import { AiOutlineHome } from 'react-icons/ai';
import { BiDonateHeart, BiBook } from 'react-icons/bi';
import { MdProductionQuantityLimits } from 'react-icons/md';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 10px;
  grid-area: AS;
  background-color: ${({ theme }) => theme.colors.third};
  border-top-right-radius: 15px;
`;

export const Title = styled.h3`
  margin-bottom: 10.5rem;
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fonts.bold};
  margin-bottom: 20px;
  font-size: 25px;
  line-height: 35px;
`;

export const Subtitle = styled.span`
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

export const ContainerNavigation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin-top: 20px;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export const TitleButton = styled.span`
  display: ${({ showMessage }) => (showMessage ? 'flex' : 'none')};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fonts.bold};
  font-size: 15px;
  line-height: 25px;
`;

export const Home = styled(AiOutlineHome)`
  color: ${({ theme }) => theme.colors.white};
  width: 25px;
  height: 25px;
`;

export const Product = styled(MdProductionQuantityLimits)`
  width: 25px;
  height: 25px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Donate = styled(BiDonateHeart)`
  width: 25px;
  height: 25px;
  color: ${({ theme }) => theme.colors.white};
`;

export const About = styled(BiBook)`
  width: 25px;
  height: 25px;
  color: ${({ theme }) => theme.colors.white};
`;
