import styled from 'styled-components';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

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

// export const ContainerCard = styled(Carousel)`
//   display: flex;
//   margin-top: 20px;
//   box-shadow: 7.9px 15.8px 15.8px hsl(0deg 0% 0% / 0.25);
// `;

export const ContainerSection = styled.div`
  display: flex;
  height: 100%;
  gap: 25px;
  justify-content: center;
  align-items: center;
  transform: rotateY(calc(var(--offset) * 50deg))
    scaleY(calc(1 + var(--abs-offset) * -0.4))
    translateZ(calc(var(--abs-offset) * -30rem))
    translateX(calc(var(--offset) / var(--abs-offset) * -5rem));
`;

export const Button = styled.button`
  border-color: none;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

export const Left = styled(AiOutlineLeft)`
  color: ${({ theme }) => theme.colors.white};
  width: 30px;
  height: 30px;
  box-shadow: 7.9px 15.8px 15.8px hsl(0deg 0% 0% / 0.25);
  border-radius: 15px;
`;

export const Right = styled(AiOutlineRight)`
  color: ${({ theme }) => theme.colors.white};
  width: 30px;
  height: 30px;
  box-shadow: 7.9px 15.8px 15.8px hsl(0deg 0% 0% / 0.25);
  border-radius: 15px;
`;
