import React from "react";
import PricingWave from "../../components/Wave/PricingWave";
import styled from "styled-components";
import { LivestreamCard, View } from "../../components";

const index = () => {
  return (
    <>
      <PricingWave />
      <Wrapper className="container">
        <View.Column>
          <View.Child_1>
            <View.Title
              textAlign={true}
              title="LONG UNSCRIPTED CONTENT"
              des="Livestreams and online workshops"
              content="Tương tác, đặt câu hỏi và theo dõi với hàng trăm khán giả trực tiếp"
            />
          </View.Child_1>
          <View.Child_1>
            <LivestreamCard />
          </View.Child_1>
        </View.Column>
      </Wrapper>
    </>
  );
};

export default index;

const Wrapper = styled.section`
  display: block;
`;
