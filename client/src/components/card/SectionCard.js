import React from "react";
import styled from "styled-components";
import { Text } from "../../styles";
import Link from "next/link";

const SectionCard = (props) => {
  const { number, name, des, seen } = props;
  return (
    <Link href="/">
      <Wrapper>
        <div className="number">
          <Text.BodyMain themeText={true}>{number || "1"}</Text.BodyMain>
          {seen ? <img src="./icons/button/check.svg" /> : null}
        </div>
        <div className="content-section-card">
          <Text.Medium themeText={true} weight={true} line={2}>
            {name || "name"}
          </Text.Medium>
          <Text.Medium themeText={true} line={2}>
            {des || "des"}
          </Text.Medium>
        </div>
      </Wrapper>
    </Link>
  );
};

export default SectionCard;

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 46px auto;
  gap: 10px;
  width: 100%;
  min-width: 220px;
  max-width: 320px;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;

  :hover {
    background: rgba(0, 0, 0, 0.2);
  }

  .number {
    position: relative;
    width: 36px;
    height: 36px;
    background: rgba(68, 66, 178, 0.1);
    border-radius: 50px;
    display: grid;
    -webkit-box-align: center;
    place-items: center;

    img {
      height: 18px;
      width: 18px;
      margin: 0px;
      position: absolute;
      top: 0;
      right: -10px;
      background: linear-gradient(
        200.44deg,
        rgb(67, 22, 219) 13.57%,
        rgb(144, 118, 231) 98.38%
      );
      border-radius: 50%;
      padding: 3px;
    }
  }

  .content-section-card {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-content: flex-start;
    width: 100%;
  }
`;
