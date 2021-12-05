import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  width: 100%;
  column-gap: 2rem;
  align-items: ${(props) => props.align || null};

  .child-1 {
    width: 50rem;
  }

  .child-2 {
    width: 100%;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    .child-1 {
      width: 40rem;
    }
  }
  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: column;

    .child-1 {
      width: 100%;
    }
  }
`;

export const WrapperTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;

  .child-1 {
    display: flex;
    width: 100%;
    padding: 0 auto;
    align-items: center;
    justify-content: center;
  }

  .child-2 {
    width: 100%;
  }
`;

export const ContentWrapper = styled.div`
  max-width: 40rem;
  /* margin: 0 auto; */
  /* padding: 200px 30px; */
  display: flex;
  justify-content: start;
  align-items: ${(props) => (props.textAlign ? "center" : "flex-start")};
  flex-direction: column;
  text-align: ${(props) => (props.textAlign ? "center" : null)};
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
