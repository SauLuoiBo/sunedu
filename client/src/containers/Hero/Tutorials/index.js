import React from "react";
import styled from "styled-components";
import { Button } from "../../../components";

const HeroTutorials = () => {
  return (
    <Wrapper>
      <h5>Làm bài tập mỗi ngày</h5>
      <h3>Luyện tập mỗi ngày để tiến xa hơn</h3>
      <p>
        Once you’ve completed the courses, learn from our quick design and code
        tutorials to strengthen your knowledge{" "}
      </p>
      <Button.Menu
        link="/tutorials"
        icon="./icons/menu/tutorials.svg"
        text="Start tutorials"
      />
    </Wrapper>
  );
};

export default HeroTutorials;

const Wrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  /* padding: 200px 30px; */
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h5 {
    text-transform: uppercase;
    font-size: 1.7rem;
    font-weight: 400;
  }
`;
