import React from "react";
import { View } from "../../components";

import {
  Background,
  BackgroundBlur,
  BackgroundWave1,
  BackgroundWave2,
  Wrapper,
  WrapperInner,
} from "./styles/styles";
import { Button } from "../../components";

const Introduce = () => {
  return (
    <Wrapper>
      <Background />

      <BackgroundWave1 />
      <BackgroundWave2 />
      <BackgroundBlur />
      <WrapperInner className="container">
        <Button.Link link="/ko" text="ha" />
        <Button link="/ko" text="ha" />
        <Button link="/ko" text="ha" />
      </WrapperInner>
    </Wrapper>
  );
};

export default Introduce;
