import React from "react";
import { Button, HandbookCard, View } from "../../components";
import {
  ContentWrapper,
  HeroWrapper,
  ViewWrapper,
  Wrapper,
} from "./styles/styles";

const index = () => {
  return (
    <Wrapper className="container">
      <ViewWrapper>
        <HeroWrapper>
          <h5>Làm bài tập mỗi ngày</h5>
          <h3>Luyện tập mỗi ngày để tiến xa hơn</h3>
          <p>
            Once you’ve completed the courses, learn from our quick design and
            code tutorials to strengthen your knowledge{" "}
          </p>
          <Button.Menu
            link="/tutorials"
            icon="./icons/menu/tutorials.svg"
            text="Start tutorials"
          />
        </HeroWrapper>
        <ContentWrapper>
          <HandbookCard link="/" />
          <HandbookCard link="/" colorOne="red" colorTwo="blue" />
        </ContentWrapper>
      </ViewWrapper>
    </Wrapper>
  );
};

export default index;
