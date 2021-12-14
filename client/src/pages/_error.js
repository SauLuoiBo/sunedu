import React from "react";
import { View } from "../components";
import styled from "styled-components";
import PricingWave from "../components/Wave/PricingWave";
import Image from "next/image";

const NotFound = () => {
  return (
    <>
      <PricingWave />
      <section className="container">
        <View reverse={true}>
          <View.Child_1>
            <View.Title
              title="Page not found"
              des="Oh No, ERROR 404"
              content="Có lẽ Shine Edu bị hỏng trên trang này. Quay trở về trang chủ!!!"
              button="HomePage"
              link="/"
            />
          </View.Child_1>
          <View.Child_2>
            <ImageWrapper>
              <Image width={50} height={50} src="/background/error.svg" />
            </ImageWrapper>
          </View.Child_2>
        </View>
      </section>
    </>
  );
};

export default NotFound;

const ImageWrapper = styled.div`
  display: block;
  height: 600px;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    transform: scale(1.5);
  }
`;
