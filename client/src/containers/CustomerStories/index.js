import React from "react";
import styled from "styled-components";
import { StoryCard, View } from "../../components";

const CustomerStories = () => {
  return (
    <Wrapper className="container">
      <View.Column>
        <View.Child_1>
          <View.Title
            title="Kết quả của học sinh"
            des="Những kỹ năng học sinh học được từ các khoá học của chúng tôi"
            content="Xem những kết quả mà học sinh đã học và đạt được bằng cách tham gia các khóa học từ Shine Edu."
            textAlign={true}
          />
        </View.Child_1>
        <View.Child_1>
          <StoryCard />
        </View.Child_1>
      </View.Column>
    </Wrapper>
  );
};

export default CustomerStories;

const Wrapper = styled.section`
  display: block;
`;
