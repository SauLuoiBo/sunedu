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

export const ContentWrapper = styled.div`
  max-width: 40rem;
  /* margin: 0 auto; */
  /* padding: 200px 30px; */
  display: flex;
  justify-content: start;
  align-items: flex-start;
  flex-direction: column;
  gap: 2rem;

  h5 {
    text-transform: uppercase;
    font-size: 1.7rem;
    font-weight: 400;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    text-align: center;
    align-content: center;
    align-items: center;
    margin: 0 auto;
  }
`;
