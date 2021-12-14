import React from "react";
import styled from "styled-components";
import Image from "next/image";

const ButtonRound = ({ ...restProps }) => {
  return (
    <Wrapper {...restProps}>
      <img src="./icons/button/star.svg" />
    </Wrapper>
  );
};

ButtonRound.Close = function Close({ ...restProps }) {
  return (
    <CloseWrapper {...restProps}>
      <Image src="/icons/button/x.svg" width={16} height={16} />
    </CloseWrapper>
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

const CloseWrapper = styled.div`
  position: relative;
  display: grid;
  width: 36px;
  height: 36px;
  -webkit-box-pack: center;
  place-content: center;
  background: linear-gradient(
    360deg,
    rgba(99, 106, 150, 0.4) 0%,
    rgba(182, 186, 214, 0.5) 100%
  );
  box-sizing: border-box;
  box-shadow: rgb(0 0 0 / 15%) 0px 20px 40px,
    rgb(255 255 255 / 30%) 0px 0px 0px 0.5px inset;
  backdrop-filter: blur(40px);
  border-radius: 30px;
  cursor: pointer;
`;
