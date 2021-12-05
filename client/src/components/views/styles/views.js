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
