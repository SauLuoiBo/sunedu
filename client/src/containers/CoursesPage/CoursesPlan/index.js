import React from "react";
import styled from "styled-components";
import { CoursesCard, View } from "../../../components";
import { Text } from "../../../styles";

const CoursesPlan = (props) => {
  const { subject } = props;
  return (
    <Wrapper>
      <View>
        <View.Child_1>
          <Text.BodyIntro themeText={true}>
            Môn {subject || Toán}{" "}
          </Text.BodyIntro>
        </View.Child_1>
      </View>
      <View.Column>
        <View.Child_1>
          <CoursesWrapper>
            <CoursesCard />
            <CoursesCard />
            <CoursesCard />
            <CoursesCard />
            <CoursesCard />
            <CoursesCard />
          </CoursesWrapper>
        </View.Child_1>
      </View.Column>
    </Wrapper>
  );
};

export default CoursesPlan;

const Wrapper = styled.div`
  display: block;
  width: 100%;
  padding: 1rem;
  border-radius: 1rem;
  background: rgba(15, 14, 71, 0.3);
  box-shadow: rgb(255 255 255 / 20%) 0px 0px 0px 0.5px inset;
  margin: 2rem 0;
`;

const CoursesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
  width: 100%;
  padding: 2rem 0;
  border-top: solid 1px;
  margin-top: 1rem;

  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: repeat(1, 1fr);
    padding: 2rem 2rem;
  }
`;
