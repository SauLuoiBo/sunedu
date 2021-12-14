import React from "react";
import styled from "styled-components";
import { Text } from "../../styles";
import Image from "next/image";

const Feature = (props) => {
  const { textOne, textTwo, textThree } = props;
  return (
    <div className="feature-Row ">
      <Image src="/icons/button/check.svg" height={24} width={24} alt="check" />
      <Text.Medium line={1}>
        <span>{textOne || ""}</span> {textTwo || ""}{" "}
        <span>{textThree || ""}</span>
      </Text.Medium>
    </div>
  );
};

const PricingCard = (props) => {
  const { title, price, pay } = props;
  return (
    <Wrapper>
      <div className="pricing-background" />
      <div className="pricing-content">
        <TextWrapper>
          <Text.Caption2>{title || "Basic"}</Text.Caption2>
          <Text.Subtitle>{price || "Miễn phí"}</Text.Subtitle>
          <Text.Medium>{pay || "Trial"}</Text.Medium>
          <div className="features-Wrapper ">
            {" "}
            <Feature textOne="" textTwo="Khoá học" textThree="Miễn phí" />
            <Feature textOne="" textTwo="Bài tập" textThree="Miễn phí" />
            <Feature textOne="" textTwo="Đáp án," textThree="lời giải" />
            <Feature textOne="" textTwo="Blog," textThree="profile" />
          </div>
        </TextWrapper>
      </div>
    </Wrapper>
  );
};

export default PricingCard;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    -webkit-box-pack: none;
  }

  .pricing-background {
    position: absolute;
    max-width: 360px;
    width: 100%;
    height: 426px;
    background: linear-gradient(
      rgba(108, 207, 238, 0.5) 0%,
      rgba(76, 127, 228, 0.5) 100%
    );
    border-radius: 0px 60px 60px;
    transform: matrix(0.99, -0.14, 0.15, 0.99, 0, 0);
    transform-origin: left top;
    z-index: -1;
  }

  :hover {
    transform: translateY(-5px);
    .pricing-background {
      transform: matrix(0.88, -0.3, 0.05, 0.99, 0, 0);
    }
  }

  .pricing-content {
    max-width: 360px;
    min-width: 240px;
    width: 100%;
    height: 426px;
    background: rgba(31, 31, 71, 0.6);
    box-shadow: rgb(0 0 0 / 25%) 0px 40px 80px,
      rgb(255 255 255 / 15%) 0px 0px 0px 0.5px inset;
    backdrop-filter: blur(40px);
    padding: 50px 20px;
    border-radius: 0px 60px 60px;
    z-index: 2;
  }
`;

const TextWrapper = styled.div`
  text-align: center;

  .features-Wrapper {
    display: grid;
    row-gap: 8px;
    width: 100%;
    margin: 23px auto 0px;
    justify-items: center;
  }

  .feature-Row {
    display: grid;
    width: 60%;
    grid-gap: 2rem;
    grid-template-columns: 24px auto;

    align-items: center;
    text-align: left;

    @media ${(props) => props.theme.breakpoints.sm} {
      width: 80%;
    }
  }
`;
