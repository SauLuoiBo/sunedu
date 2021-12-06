import React from "react";
import { View } from "../../../components";

import {
  Background,
  BackgroundBlur,
  BackgroundWave1,
  BackgroundWave2,
  Wrapper,
  WrapperInner,
} from "./styles/styles";
import { HeroIntro } from "../../Hero";

const Introduce = () => {
  return (
    <Wrapper>
      <Background />
      <BackgroundWave1 />
      <BackgroundWave2 />
      <BackgroundBlur />
      <WrapperInner className="container">
        <View>
          <View.Child_1>
            <HeroIntro />
          </View.Child_1>
          <View.Child_2>
            <p>adshsadk</p>
          </View.Child_2>
        </View>
      </WrapperInner>
    </Wrapper>
  );
};

export default Introduce;
