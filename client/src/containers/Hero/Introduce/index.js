import React from "react";
import styled, { keyframes } from "styled-components";
import { PurchaseButton } from "../../../components";

const HeroIntro = () => {
  return (
    <Wrapper>
      {/* <WaveBackground /> */}
      <ContentWrapper>
        <TextWrapper>
          <Title>
            Luyện thi
            <br /> Đại học <span>Toán</span> <br /> Khối A, B, C, D
          </Title>
          <Description>
            Đừng bỏ lỡ con đường đại học. Học tập, luyện tập mỗi ngày với trung
            tâm giáo dục của chúng tôi. Bằng phương pháp học bằng tư duy, giải
            quyết vấn đề tận gốc rễ, các thầy cô tại Trung tâm HNC sẽ đồng hành
            cùng các bạn với mục tiêu đạt kết quả cao nhất trong các kỳ thi.
          </Description>
          <PurchaseButton
            title="Bắt đầu học online"
            subtitle="120+ giờ học trực tuyến"
          />
          <PurchaseButton
            title="Đăng ký học offline"
            subtitle="Học trực tiếp tại các lớp"
          />
        </TextWrapper>
        {/* <MockupAnimation /> */}
      </ContentWrapper>
    </Wrapper>
  );
};

export default HeroIntro;

const animation = keyframes`
  0% { opacity: 0; transform: translateY(-10px); filter: blur(10px); }
  100% { opacity: 1; transform: translateY(0px); filter: blur(0px); }
`;

const Wrapper = styled.div`
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  /* padding: 200px 30px; */
  display: grid;
  grid-template-columns: 360px auto;

  @media (max-width: 450px) {
    grid-template-columns: auto;
    gap: 60px;
    padding: 150px 20px 250px;
  }
`;

const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;

  > * {
    opacity: 0;
    animation: ${animation} 1s forwards;

    :nth-child(1) {
      animation-delay: 0s;
    }
    :nth-child(2) {
      animation-delay: 0.2s;
    }
    :nth-child(3) {
      animation-delay: 0.4s;
    }
  }
`;

const Title = styled.h1`
  color: var(--color-text);
  background: linear-gradient(180deg, #730040 0%, #301cbe 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  line-height: 8rem;

  span {
    background: linear-gradient(180deg, #ffd7ff 0%, #ffb6ff 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  @media (max-width: 450px) {
    font-size: 48px;
  }
`;

const Description = styled.p``;
