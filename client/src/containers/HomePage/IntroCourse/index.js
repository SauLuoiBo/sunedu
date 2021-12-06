import React from "react";
import { Button, CoursesCard, Subject, View } from "../../../components";

import styled from "styled-components";

const IntroCourse = () => {
  return (
    <Wrapper className="container">
      <View align="flex-end">
        <View.Child_1>
          <View.Title
            themeText={true}
            title="Hơn 120 giờ học"
            des="Học các khoá học và làm bài tập tốt nhất"
            content="Chúng tôi tập trung vào các kiến thức hàng đầu để các em học sinh có thể chuẩn bị tốt kiến thức phổ thông của mình. Sau đó, chúng tôi dạy tất cả các kỹ năng làm bài thi để các em đạt kết quả tốt nhất."
          />
        </View.Child_1>
        <View.Child_2>
          <SubjectWrapper>
            <SubjectNav>
              <Subject />
              <Subject />
              <Subject />
            </SubjectNav>
            <SearchWrapper>
              <Button.Search />
            </SearchWrapper>
          </SubjectWrapper>
        </View.Child_2>
      </View>
      <CoursesWrapper>
        <CoursesCard />
        <CoursesCard />
        <CoursesCard />
        <CoursesCard />
        <CoursesCard />
      </CoursesWrapper>
      <div className="button">
        <Button.Menu
          link="/courses"
          icon="./icons/menu/courses.svg"
          text="Danh sách khoá học"
        />
      </div>
    </Wrapper>
  );
};

export default IntroCourse;

const Wrapper = styled.section`
  width: 100%;
  display: block;
  overflow: hidden;

  .button {
    display: block;
    width: fit-content;
    justify-items: center;
    margin: 0 auto;
  }
`;

const SubjectWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  column-gap: 4rem;
  row-gap: 2rem;
  margin-top: 2rem;
`;

const SubjectNav = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 2rem;
  row-gap: 1rem;
`;

const SearchWrapper = styled.div`
  max-width: 20rem;
`;

const CoursesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(200px, 1fr));
  padding-bottom: 120px;
  overflow-x: scroll;
  /* overflow: visible; */
  /* overflow-x: hidden; */
  padding: 10rem 0;
  grid-column-gap: 2rem;
  ::-webkit-scrollbar {
    display: none;
  }
`;
