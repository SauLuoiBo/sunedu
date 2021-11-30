import styled from "styled-components";

export const Wrapper = styled.section`
  position: relative;
  z-index: 10;
  margin-top: 20rem;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 4rem;
  /* margin: 0 auto; */
  /* align-items: center; */
  justify-content: center;
`;

export const HeroWrapper = styled.div`
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

export const ViewWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.7fr 1fr;
  max-width: 100%;
  grid-row-gap: 2rem;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
  }
`;
