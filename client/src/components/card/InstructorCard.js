import React from "react";
import styled from "styled-components";
import { Text } from "../../styles";

const InstructorCard = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <div className="lazyload-wrapper ">
          <img src="./avatar/teacher/teacher_1.jpeg" />
        </div>
        <Text.BodyIntro line={2}>Nguyễn Đức Trung</Text.BodyIntro>
        <Text.Caption line={1}>Giáo viên Toán</Text.Caption>
        <Text.Main line={2}>
          Trung das asd asd ads asd ads adasdasd asd ads sad sads ad sads ads{" "}
        </Text.Main>
      </ContentWrapper>
    </Wrapper>
  );
};

export default InstructorCard;

const Wrapper = styled.div`
  position: relative;
  display: block;
  min-width: 20rem;
  max-width: 30rem;
  height: 37rem;
  border-radius: 1rem;
  margin: 0 auto;
  padding-top: 6rem;
  padding-right: 2rem;
  padding-left: 2rem;
  cursor: pointer;
  background: linear-gradient(
    209.19deg,
    rgb(132, 79, 252) 13.57%,
    rgb(73, 30, 184) 98.35%
  );
  box-shadow: rgb(89 42 121 / 30%) 0px 20px 40px, rgb(0 0 0 / 5%) 0px 1px 3px;

  :hover {
    box-shadow: rgb(89 0 159 / 30%) 0px 20px 40px, rgb(0 0 0 / 5%) 0px 1px 3px;
  }
`;

const ContentWrapper = styled.div`
  display: grid;
  gap: 10px;
  width: 100%;
  height: fit-content;
  text-align: center;

  .lazyload-wrapper {
    display: block;

    img {
      width: 88px;
      height: 88px;
      margin: 0px auto;
      border-radius: 50px;
      /* animation: 1s ease 0s 1 normal forwards running jBcSpD; */
    }
  }
`;
