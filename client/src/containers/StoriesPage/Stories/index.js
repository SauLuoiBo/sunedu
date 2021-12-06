import React from "react";
import styled from "styled-components";
import { StoryCard, View } from "../../../components";
import LogoMath from "../../../assets/svg/math.svg";
import LogoPhysical from "../../../assets/svg/physical.svg";
import LogoChemistry from "../../../assets/svg/chemistry.svg";
import LogoEnglish from "../../../assets/svg/english.svg";
import LogoLiterature from "../../../assets/svg/literature.svg";
import LogoBiology from "../../../assets/svg/biology.svg";
import { Text } from "../../../styles";

const Stories = () => {
  return (
    <Wrapper className="container">
      <View.Column>
        <View.Child_1>
          <View.Title
            themeText={true}
            title="Chất lượng đã được kiểm chứng "
            des="2,000 học sinh trên cả nước"
            content="Nhiều thầy cô giáo trẻ chưa có nhiều kinh nghiệm giảng dậy, chất lượng đào tạo chưa tốt. Họ sử dụng các khóa học, hệ sinh thái của chúng tôi để giúp đào tạo học sinh mới và mở rộng bộ kỹ năng học tập."
          />
        </View.Child_1>
        <View.Child_1>
          <LogoWrapper>
            <div>
              <LogoMath />
            </div>
            <div>
              <LogoPhysical />
            </div>
            <div>
              <LogoChemistry />
            </div>
            <div>
              <LogoEnglish />
            </div>
            <div>
              <LogoLiterature />
            </div>
            <div>
              <LogoBiology />
            </div>
          </LogoWrapper>
        </View.Child_1>
        <View.Child_1>
          <Text.Caption2 themeText={true}>MORE TESTIMONIALS</Text.Caption2>
        </View.Child_1>
        <View.Child_1>
          <ShareWrapper>
            <StoryCard.Story
              name="Dam Manh Hung"
              des="can bo ngan hang"
              share="Tôi yêu em Hạnh nhất trên đời, cả đời này sẽ không yêu ai khác nữa"
            />
            <StoryCard.Story />
            <StoryCard.Story />
            <StoryCard.Story />
            <StoryCard.Story />
            <StoryCard.Story />
            <StoryCard.Story />
          </ShareWrapper>
        </View.Child_1>
      </View.Column>
    </Wrapper>
  );
};

export default Stories;

const Wrapper = styled.section`
  display: block;
`;

const LogoWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-row-gap: 2rem;

  div {
    display: flex;
    width: 100%;

    margin: 0 auto;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    grid-template-columns: repeat(3, auto);
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: repeat(2, auto);
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: repeat(1, auto);

    div {
      justify-content: center;
    }
  }
`;

const ShareWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 3rem;
  margin: 0px auto;
  padding: 0px 3rem;

  @media ${(props) => props.theme.breakpoints.xl} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: repeat(1, 1fr);
  }
`;
