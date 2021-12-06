import React from "react";
import styled from "styled-components";
import RandomWave from "./RandomWave";
import { Wrapper } from "./styles";

const PricingWave = () => {
  return (
    <Wrapper>
      <Background />
      <Mask />
      <RandomWave />
    </Wrapper>
  );
};

export default PricingWave;

const Background = styled.div`
  z-index: -1;
  position: absolute;
  width: 100%;
  top: 0px;
  background: linear-gradient(
    148.9deg,
    #52ecab 22.28%,
    rgba(163, 250, 213, 0.526042) 50.2%,
    rgba(255, 255, 255, 0) 81.19%
  );
  background-blend-mode: darken;
  height: 1000px;
  mix-blend-mode: normal;
`;

const Mask = styled.div`
  position: absolute;
  width: 100%;
  height: 600px;
  background: linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0) 100%);
  z-index: -1;
`;
