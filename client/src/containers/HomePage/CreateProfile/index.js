import React from "react";
import { CertificateCard, View } from "../../../components";
import { Card, CardsWrapper, ViewWrapper, Wrapper } from "./styles/styles";

const index = () => {
  return (
    <Wrapper className="container">
      <View reverse={true}>
        <View.Child_1>
          <View.Title
            title="Đăng ký học"
            des="Nhận ngay chứng chỉ"
            content="After passing a test, we’ll award you with an online certificate. You can add them to your profile after completing the courses."
            button="View Profile"
            themeText={true}
          />
        </View.Child_1>
        <View.Child_2>
          <CardsWrapper>
            <Card className="card" top="10rem" right="5rem">
              <CertificateCard
                colorOne="rgb(117, 224, 230)"
                colorTwo="rgb(57, 19, 184)"
              />
            </Card>
            <Card
              className="card"
              top="8rem"
              right="8rem"
              colorOne="rgba(51, 253, 241, 0.1)"
              colorTwo="rgba(200, 96, 0, 0.1) "
            >
              <CertificateCard />
            </Card>
            <Card className="card" top="5rem" right="17rem">
              <CertificateCard
                colorOne="rgba(51, 168, 253, 0.2)"
                colorTwo="rgba(76, 0, 200, 0.2)"
              />
            </Card>
            <Card className="card" top="1rem" right="30rem">
              <CertificateCard />
            </Card>
          </CardsWrapper>
        </View.Child_2>
      </View>
    </Wrapper>
  );
};

export default index;
