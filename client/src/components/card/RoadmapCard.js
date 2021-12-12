import React from "react";
import styled from "styled-components";
import { Text } from "../../styles";
import Image from "next/image";
import { CoursesCard } from "..";
import SectionCard from "./SectionCard";

const RoadmapCard = (props) => {
  const { title, colorOne, colorTwo, titleIcon } = props;
  return (
    <Wrapper>
      <TitleWrapper colorOne={colorOne} colorTwo={colorTwo}>
        <div className="content-wrapper">
          <div>
            <Image
              src={`/illustrations/${titleIcon || CoursesCard.svg}`}
              width={200}
              height={200}
            />
          </div>
          <Text.BodyIntro>Upcoming {title || "Courses"} </Text.BodyIntro>
          <Text.Caption> 2021 - 2022</Text.Caption>
        </div>
      </TitleWrapper>
      <SectionWrapper>
        <SectionCard />
        <SectionCard />
        <SectionCard />
        <SectionCard />
        <SectionCard />
        <SectionCard />
      </SectionWrapper>
    </Wrapper>
  );
};

export default RoadmapCard;

const Wrapper = styled.div`
  width: fit-content;
  padding: 20px;
  background: rgba(15, 14, 71, 0.3);
  box-shadow: rgb(255 255 255 / 20%) 0px 0px 0px 0.5px inset;
  border-radius: 20px;
  display: grid;
  gap: 20px;
`;

const TitleWrapper = styled.div`
  --color-One: ${(props) => props.colorOne || "rgb(255, 115, 115)"};
  --color-Two: ${(props) => props.colorTwo || "rgb(73, 30, 184)"};
  max-width: 400px;
  min-width: 200px;
  background: linear-gradient(var(--color-One) 0%, var(--color-Two) 100%);
  border-radius: 10px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  box-shadow: rgb(0 0 0 / 5%) 0px 1px 3px, rgb(73 39 172 / 30%) 0px 20px 40px;

  .content-wrapper {
    display: grid;
    gap: 10px;
    max-width: 200px;
    margin: 20px 60px;
    text-align: center;
  }
`;

const SectionWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  overflow-y: auto;

  -webkit-mask-box-image: linear-gradient(
    rgb(255, 255, 255) 80%,
    rgba(255, 255, 255, 0) 100%
  );
  ::-webkit-scrollbar {
    display: none;
  }
  max-height: 30rem;
`;
