import React from "react";
import styled from "styled-components";
import { View } from "../../components";

const index = () => {
  return (
    <Wrapper className="container">
      <View.Title
        title="Chất lượng đã được kiểm chứng "
        des="2,000 học sinh trên cả nước"
        content="Nhiều thầy cô giáo trẻ chưa có nhiều kinh nghiệm giảng dậy, chất"
      />
    </Wrapper>
  );
};

export default index;

const Wrapper = styled.section`
  display: block;
`;
