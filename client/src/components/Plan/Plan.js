import styled from "@emotion/styled";
import React from "react";
import { Children } from "react";
import { Text } from "../../styles";

const Plan = ({ children }, props) => {
  const { title } = props;
  return (
    <Wrapper>
      <Text.Caption> {title || "title"}</Text.Caption>
      <PlanWrapper>{children}</PlanWrapper>
    </Wrapper>
  );
};

export default Plan;

const Wrapper = styled.div`
  display: block;
  width: 100%;
  overflow: hidden;
  padding: 20px;
  margin: 0 auto;
  backdrop-filter: blur(40px) saturate(120%) brightness(120%);
  border-radius: 20px;
  background: rgba(15, 14, 71, 0.3);
  box-shadow: rgb(255 255 255 / 20%) 0px 0px 0px 0.5px inset;
  backdrop-filter: blur(40px) saturate(120%) brightness(100%);
  -webkit-mask-box-image: linear-gradient(
    rgb(255, 255, 255) 80%,
    rgba(255, 255, 255, 0) 100%
  );
`;

const PlanWrapper = styled.div`
  margin: 20px 0;
  width: 100%;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  overflow-y: auto;
  /* padding: 20px;
  margin: 0 auto; */
  /* backdrop-filter: blur(40px) saturate(120%) brightness(120%);
  border-radius: 20px;
  background: rgba(15, 14, 71, 0.3);
  box-shadow: rgb(255 255 255 / 20%) 0px 0px 0px 0.5px inset;
  backdrop-filter: blur(40px) saturate(120%) brightness(100%); */
  justify-items: center;

  /* -webkit-mask-box-image: linear-gradient(
    rgb(255, 255, 255) 80%,
    rgba(255, 255, 255, 0) 100%
  ); */
  ::-webkit-scrollbar {
    display: none;
  }
  max-height: 34rem;
`;
