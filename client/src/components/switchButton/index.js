import React from "react";
import styled from "styled-components";
import { Text } from "../../styles";

const SwitchButton = (props) => {
  const { pos } = props;
  return (
    <Wrapper pos={pos}>
      <div className="content">
        <Text.BodyMain themeText={true}>Thẻ tháng</Text.BodyMain>
      </div>
      <div className="content">
        <Text.BodyMain themeText={true}> Thẻ năm </Text.BodyMain>
      </div>

      <span />
    </Wrapper>
  );
};

export default SwitchButton;

const Wrapper = styled.label`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 3rem;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  cursor: pointer;
  width: fit-content;
  min-width: 43px;
  background: linear-gradient(
    rgba(24, 32, 79, 0.4) 0%,
    rgba(24, 32, 79, 0.25) 100%
  );
  border-radius: 30px;
  border: none;
  box-sizing: border-box;
  box-shadow: rgb(0 0 0 / 15%) 0px 20px 40px,
    rgb(0 0 0 / 30%) 0px 0px 0px 0.5px inset;
  transition: all 0.5s ease-in-out 0s;
  margin: 0px auto;
  padding: 12.5px 24px;

  .content {
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span {
    position: absolute;
    z-index: 0;
    ${(props) => (props.pos ? `left: 50%;` : `left: 4px;`)}

    transform: ${(props) => (props.pos ? `translateX(-4px)` : null)};
    right: 4px;
    width: 50%;
    height: 45px;
    box-sizing: border-box;
    background: rgb(255, 255, 255);
    border-radius: 30px;
    transition: all 0.5s ease-in-out 0s;
  }
`;
