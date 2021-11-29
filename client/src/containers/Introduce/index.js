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
import { HeroIntro } from "../Hero";

const Introduce = () => {
  return (
    <Wrapper>
      <Background />

      <BackgroundWave1 />
      <BackgroundWave2 />
      <BackgroundBlur />
      <WrapperInner className="container">
        <View>
          <HeroIntro />
        </View>
      </WrapperInner>
    </Wrapper>
  );
};

export default Introduce;
