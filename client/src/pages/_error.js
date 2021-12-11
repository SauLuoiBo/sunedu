import React from "react";
import { View } from "../components";
import styled from "styled-components";
import PricingWave from "../components/Wave/PricingWave";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();
  const [number, setNumber] = React.useState(20);

  let timerOut = setTimeout(() => router.push("/"), 20000);

  let timerSec = setTimeout(() => {
    setNumber(number - 1);
    console.log(number);
  }, 1000);

  React.useEffect(() => {
    return () => {
      clearTimeout(timerOut);
    };
  }, []);

  React.useEffect(() => {
    return () => {
      clearTimeout(timerSec);
    };
  }, [number]);

  return (
    <>
      <PricingWave />
      <section className="container">
        <View reverse={true}>
          <View.Child_1>
            <View.Title title="Page not found" des="Oh No, ERROR 404" />
          </View.Child_1>
          <View.Child_2>
            <ImageWrapper>
              <img src="/background/error.svg" />
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
