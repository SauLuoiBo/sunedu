import React from "react";
import styled from "styled-components";

const CertificateCard = () => {
  return (
    <Wrapper>
      <TextWrapper>
        <TitleWrapper>
          <p>HIHI</p>
          <p>HIHI</p>
        </TitleWrapper>
      </TextWrapper>
    </Wrapper>
  );
};

export default CertificateCard;

const Wrapper = styled.div`
  width: 335px;
  height: 220px;
  background: radial-gradient(
    218.51% 281.09% at 100% 100%,
    rgba(253, 63, 51, 0.6) 0%,
    rgba(76, 0, 200, 0.6) 45.83%,
    rgba(76, 0, 200, 0.6) 100%
  );
  box-shadow: rgb(39 77 153 / 20%) 0px 30px 60px,
    rgb(255 255 255 / 30%) 0px 0px 0px 0.5px inset;
  cursor: pointer;
  border-radius: 30px;
  backdrop-filter: blur(20px);
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 20px;
`;

const TextWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;
