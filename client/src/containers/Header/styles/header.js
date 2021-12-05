import styled from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  margin: 5rem 0;
  position: relative;
  width: 100%;
  z-index: 1;
`;

export const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: center;
  gap: 2rem;

  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
`;
