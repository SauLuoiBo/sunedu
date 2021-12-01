import React from "react";
import styled from "styled-components";

const CertificateCard = (props) => {
  const { title, des, subjects, colorOne, colorTwo } = props;
  return (
    <Wrapper colorOne={colorOne} colorTwo={colorTwo}>
      <InfoWrapper>
        <TextWrapper>
          <p className="title">{title || "Học viên toán"}</p>
          <p className="des">{des || "Certificate"}</p>
        </TextWrapper>
        <PlaceWrapper>
          <Place width="30%" height="0.4rem" />
          <Place width="50%" height="0.4rem" />
          <Place width="40%" height="0.4rem" />
          <Place width="70%" height="0.8rem" opacity="0.4" />
        </PlaceWrapper>
      </InfoWrapper>
      <IconWrapper>
        <img
          src={
            subjects
              ? `./icons/subjects/${subjects}.png`
              : `./icons/subjects/math.png`
          }
        />
      </IconWrapper>
    </Wrapper>
  );
};

export default CertificateCard;

const Wrapper = styled.div`
  --color-one: ${(props) => props.colorOne || `rgba(253, 63, 51, 0.6)`};
  --color-two: ${(props) => props.colorTwo || `rgba(76, 0, 200, 0.6)`};
  width: 33.5rem;
  height: 22rem;
  background: radial-gradient(
    218.51% 281.09% at 100% 100%,
    var(--color-one) 0%,
    var(--color-two) 45.83%,
    var(--color-two) 100%
  );
  box-shadow: rgb(39 77 153 / 20%) 0px 30px 60px,
    rgb(255 255 255 / 30%) 0px 0px 0px 0.5px inset;
  cursor: pointer;
  border-radius: 3rem;
  backdrop-filter: blur(2rem);
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 2rem;
  :hover {
    transform: translateY(-2rem);
  }
`;

const InfoWrapper = styled.div`
  width: 23rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const IconWrapper = styled.div`
  img {
    width: 4.4rem;
    height: 4.4rem;
  }
`;

const TextWrapper = styled.div`
  display: block;

  .title {
    font-size: 1.5rem;
    text-transform: uppercase;
  }

  .des {
    font-size: 1.3rem;
  }
`;

const PlaceWrapper = styled.div`
  width: 100%;
  display: block;
  height: fit-content;
`;

const Place = styled.div`
  width: ${(props) => props.width || `100%`};
  height: ${(props) => props.height || `0.4rem`};
  border-radius: 2px;
  background: white;
  opacity: ${(props) => props.opacity || `0.3`};
  margin: 1rem 0;
`;
