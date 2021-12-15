import React from "react";
import styled from "styled-components";
import { Text } from "../../styles";

const QuestCard = (props) => {
  const { number, current, answer, onClick } = props;
  const [border, setBorder] = React.useState(false);
  React.useEffect(() => {
    if (current === number) {
      setBorder(true);
    } else setBorder(false);
  }, [current]);
  return (
    <Wrapper border={border} onClick={onClick}>
      <Text.BodyIntro themeText={true}>Câu {number || 100}</Text.BodyIntro>
      <div className="answer">
        <Text.Caption themeText={true}>Trả lời:</Text.Caption>
        <Text.BodyIntro themeText={true}>{answer || ""}</Text.BodyIntro>
      </div>
    </Wrapper>
  );
};

export default QuestCard;

const Wrapper = styled.div`
  padding: 10px;
  background-color: white;
  height: fit-content;
  width: 100%;
  cursor: pointer;
  border-radius: 2rem;
  display: grid;
  grid-gap: 1.5rem;
  :hover {
    transform: scale(1.01) translateY(-3px);
  }
  ${(props) =>
    props.border ? `border: blue solid 5px;` : `border: white solid 5px;`};

  .answer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
  }
`;
