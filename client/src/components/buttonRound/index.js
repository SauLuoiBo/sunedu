import React from "react";
import styled from "styled-components";

const ButtonRound = ({ ...restProps }) => {
  return (
    <Wrapper {...restProps}>
      <img src="./icons/button/star.svg" />
    </Wrapper>
  );
};

export default ButtonRound;

const Wrapper = styled.div`
  width: fit-content;
  height: fit-content;
  --size: ${(props) => props.size || "3rem"};
  display: flex;
  padding: 0.2rem;

  background: ${(props) =>
    props.chage ? "rgba(250, 250, 250, 0.7)" : "rgba(0, 0, 0, 0.2)"};
  border-radius: 30px;
  cursor: pointer;
  border: none;
  justify-content: center;
  align-items: center;

  :hover {
    transform: scale(1.1);
  }

  img {
    width: var(--size);
    height: var(--size);
    transform: scale(0.9);
  }
`;
