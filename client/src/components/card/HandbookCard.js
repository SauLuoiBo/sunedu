import React from "react";
import styled from "styled-components";
import Link from "next/link";

const HandbookCard = (props) => {
  const { link, subject, title, text, des1, des2, colorOne, colorTwo } = props;

  return (
    <Link href={link}>
      <Wrapper>
        <WrapperBackground>
          <LazyLoad>
            <img
              src={
                subject
                  ? `./icons/subjects/${subject}.png`
                  : `./icons/subjects/math.png`
              }
            />
          </LazyLoad>
          <ContentWrapper>
            <p></p>
            <h3>{title || "Bài tập"} </h3>
            <p>{text || "description"}</p>
            <InfoWrapper>
              <div className="img">
                <img src="./icons/iconfile.png" />
              </div>
              <p>{des1 || "10 bài luyện tập"}</p>
            </InfoWrapper>
            <InfoWrapper>
              <div className="img">
                <img src="./icons/iconfile.png" />
              </div>
              <p>{des2 || "videos, PDF, files"}</p>
              <div className="pro">
                <p>PRO</p>
              </div>
            </InfoWrapper>
          </ContentWrapper>
        </WrapperBackground>
        <WrapperFlip colorOne={colorOne} colorTwo={colorTwo} />
      </Wrapper>
    </Link>
  );
};

export default HandbookCard;

const Wrapper = styled.div`
  position: relative;
  cursor: pointer;
`;

const WrapperBackground = styled.div`
  position: relative;
  width: 24rem;
  height: 28rem;
  backdrop-filter: blur(40px);
  border-radius: 0px 30px 40px 40px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: rgb(24 32 79 / 25%) 0px 40px 80px,
    rgb(255 255 255 / 50%) 0px 0px 0px 0.5px inset;
  z-index: 1;
  ${Wrapper}:hover & {
    transform: translateY(-3px);
  }
`;

const WrapperFlip = styled.div`
  --color-one: ${(props) => props.colorOne || "rgb(64, 141, 213)"};
  --color-two: ${(props) => props.colorTwo || "rgb(99, 11, 140)"};
  position: absolute;
  width: 22rem;
  height: 28rem;
  background: linear-gradient(var(--color-one) 0%, var(--color-two) 100%);
  border-radius: 0px 40px 40px;
  transform: skewY(8deg);
  transform-origin: left top;
  top: 0px;

  ${Wrapper}:hover & {
    transform: skewY(12deg);
    width: 20rem;
  }
`;

const LazyLoad = styled.div`
  display: block;

  img {
    position: absolute;
    width: 32px;
    height: 32px;
    top: 20px;
    right: 20px;
    /* opacity: 0; */
    /* animation: 1s ease 0s 1 normal forwards running jBcSpD; */
    /* z-index: 20; */
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  display: grid;
  gap: 1.2rem;
  text-align: left;
  /* max-width: 20rem; */

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 130%;
    margin: auto 0px;
    color: rgba(0, 0, 0, 0.7);
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  h3 {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    width: 80%;
    margin: 0px;
    color: rgb(0, 0, 0);
    text-rendering: optimizeLegibility;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    line-height: 130%;
  }
`;

const InfoWrapper = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: 32px auto 40px;

  p {
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .img {
    display: grid;
    -webkit-box-pack: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 50px;

    img {
      margin: auto;
      width: 20px;
      height: 20px;
    }
  }

  .pro {
    width: 40px;
    height: 20px;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    padding: 2px 6px;
    margin: auto 0px;
  }
`;
