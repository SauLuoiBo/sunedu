import React from "react";
import styled from "styled-components";
import {
  CoursesCard,
  InstructorCard,
  TeacherCard,
  View,
} from "../../../components";
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

CoursesPlan.Offline = function Offline(props) {
  return (
    <Wrapper>
      <View>
        <View.Child_1>
          <View.Title
            title="CS1: xã Đông Hội, huyện đông anh, Hà nôi"
            button="Contact"
          />
        </View.Child_1>
        <View.Child_2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.3759680374237!2d105.84440711540329!3d21.13743108943423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313500e5d811f90b%3A0xf8a02d5a749a3b73!2sSky%20Book%20%26%20Coffee!5e0!3m2!1svi!2s!4v1639167564414!5m2!1svi!2s"
            width="600"
            height="450"
            style={{ borderRadius: "2rem", width: "100%", height: "45rem" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </View.Child_2>
      </View>
      <View.Column>
        <View.Child_1>
          <TeacherWrapper>
            <InstructorCard />
            <InstructorCard />
            <InstructorCard />
            <InstructorCard />
            <InstructorCard />
            <InstructorCard />
          </TeacherWrapper>
        </View.Child_1>
      </View.Column>
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

const TeacherWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  padding-bottom: 120px;
  overflow-x: scroll;
  /* overflow: visible; */
  /* overflow-x: hidden; */
  padding: 10rem 0;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;

  ::-webkit-scrollbar {
    display: none;
  }
`;
