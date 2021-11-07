import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  background-color: ${({ theme }) => theme.colors.primary};
  grid-template-columns: 300px auto;
  grid-template-rows: 70px auto;
  grid-template-areas:
    "AS  HD"
    "AS  SC";
  height: 100vh;
  min-height: 340px;
`;