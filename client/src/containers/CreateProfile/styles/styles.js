import styled from "styled-components";

export const Wrapper = styled.section`
  position: relative;
  z-index: 10;
  margin-top: 20rem;
`;

export const ViewWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.7fr;
  max-width: 100%;
  grid-row-gap: 2rem;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
  }
`;

export const CardsWrapper = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 200px;
  z-index: 100;

  :hover {
    .card {
      transform: translateX(-2rem) rotate(-3deg);
    }
  }
`;

export const Card = styled.div`
  position: absolute;
  top: ${(props) => props.top || 0};
  right: ${(props) => props.right || 0};
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  transform-origin: bottom;
`;
