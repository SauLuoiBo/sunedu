import React from "react";
import styled from "styled-components";
import { ButtonRound } from "..";
import { Text } from "../../styles";
import Subject from "../Subject/Subject";

const CoursesCard = (props) => {
  const { title, videos, hour, favorites } = props;

  return (
    <Wrapper>
      <BackgroundWrapper>
        <img src="./icons/courses/course1.png" />
        <div className="logoWrapper">
          <Subject />
          <Subject size="3.8rem" />
        </div>
      </BackgroundWrapper>
      <ContentWrapper>
        <Text.BodyIntro line={3}>{title || "Title"}</Text.BodyIntro>
        <Text.Caption theme={true}>
          {videos || 1} videos - {hour || 1} giờ học
        </Text.Caption>
        <Favorite>
          <ButtonRound />
        </Favorite>
      </ContentWrapper>
    </Wrapper>
  );
};

export default CoursesCard;

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  min-width: 20rem;
  height: 36rem;
  border-radius: 2rem;
  background: linear-gradient(
    209.21deg,
    rgb(232, 126, 114) 13.57%,
    rgb(89, 42, 121) 98.38%
  );
  /* box-shadow: rgb(89 42 121 / 30%) 0px 20px 40px, rgb(0 0 0 / 5%) 0px 1px 3px; */
  padding: 20px;

  :hover {
    transform: scale(1.1);
    box-shadow: rgb(89 0 159 / 30%) 0px 20px 40px, rgb(0 0 0 / 5%) 0px 1px 3px;
  }
`;

const BackgroundWrapper = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
  justify-items: center;

  img {
    max-width: 200px;
    width: 100%;
    height: 100%;
    margin: 0px auto;
    opacity: 1;
  }

  .logoWrapper {
    position: absolute;
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 10px;
    top: 0px;
    right: 0px;
    justify-items: center;
  }
`;

const ContentWrapper = styled.div`
  display: block;
  padding-top: 1rem;
  text-align: center;
  justify-items: center;
  p {
    margin: 1rem 0;
  }
`;

const Favorite = styled.div`
  display: block;
  width: fit-content;
  height: fit-content;
  margin: 0 auto;
`;
