import React from "react";
import { View } from "../../../components";

import { Wrapper, WrapperInner } from "./styles/styles";
import { HeroIntro } from "../../Hero";
import PricingWave from "../../../components/Wave/PricingWave";

const Introduce = () => {
  return (
    <Wrapper>
      <PricingWave />
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
