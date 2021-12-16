import styled from "styled-components";
import React from "react";
import { Text } from "../../styles";

const AnswerCard = (props) => {
  const { answer, choose, onClick } = props;
  return (
    <Wrapper onClick={onClick}>
      <IconWrapper className="icon">
        <div className="elip" />
        {choose === answer && <div className="choose" />}
      </IconWrapper>
      <Text.BodyMain themeText={true}>Đáp án {answer || "A"}</Text.BodyMain>
    </Wrapper>
  );
};

export default AnswerCard;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 8px;
  cursor: pointer;
  align-items: center;

  position: relative;
  width: fit-content;
  height: 48px;
  min-width: 151px;

  background: linear-gradient(180deg, #ffffff 0%, #d9dfff 100%);
  border: 0.5px solid rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 20px 40px rgba(23, 0, 102, 0.2);
  backdrop-filter: blur(30px);
  border-radius: 20px;

  :hover {
    transform: scale(1.05) translateY(-3px);
  }
`;

const IconWrapper = styled.div`
  position: static;
  width: 40px;
  height: 40px;
  left: 4px;
  top: 4px;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  align-self: flex-start;
  flex-grow: 0;
  /* margin: 0px 10px; */
  .elip {
    position: absolute;
    width: 40px;
    height: 40px;
    left: 4px;
    top: 4px;
    border-radius: 20px;
    border: #9076e7 solid 2px;

    background: rgba(68, 66, 178, 0.1);
    box-shadow: 0px 10px 20px rgba(182, 153, 255, 0.3);
  }
  .choose {
    position: absolute;
    width: 32px;
    height: 32px;
    left: 8px;
    top: 8px;
    border-radius: 20px;

    /* Gradient 9 */

    background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%);
    box-shadow: 0px 10px 20px rgba(182, 153, 255, 0.3);
  }
`;
