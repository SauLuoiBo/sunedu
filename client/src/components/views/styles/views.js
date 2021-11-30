import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 50rem auto;
  max-width: 100%;
  grid-row-gap: 2rem;

  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: 30rem auto;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }
`;
