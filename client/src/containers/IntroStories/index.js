import React from "react";
import styled from "styled-components";
import { View } from "../../components";

const IntroStories = () => {
  return (
    <Wrapper className="container">
      <View reverse={true}>
        <View.Child_1>
          <View.Title
            title="Chất lượng đã được kiểm chứng "
            des="2,000 học sinh trên cả nước"
            content="Nhiều thầy cô giáo trẻ chưa có nhiều kinh nghiệm giảng dậy, chất lượng đào tạo chưa tốt. Họ sử dụng các khóa học, hệ sinh thái của chúng tôi để giúp đào tạo học sinh mới và mở rộng bộ kỹ năng học tập."
            button="Các chia sẻ khác "
            link="stories"
          />
        </View.Child_1>
        <View.Child_2></View.Child_2>
      </View>
    </Wrapper>
  );
};

export default IntroStories;

const Wrapper = styled.section`
  display: block;
`;
