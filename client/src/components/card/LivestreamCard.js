import React from "react";
import styled from "styled-components";
import { CoursesCard } from "..";
import { Text } from "../../styles";
import SectionCard from "./SectionCard";

const LivestreamCard = (props) => {
  const { lives } = props;
  return (
    <Wrapper>
      <CoursesCard />
      <div>
        <Text.Caption themeText={true}>{lives || "1"} LIVESTREAMS</Text.Caption>
        <div className="content-livestreams">
          <SectionCard seen={true} />
          <SectionCard
            name="My Design Process"
            des="Learn tips and tricks to create Ul assets."
          />
          <SectionCard />
          <SectionCard />
          <SectionCard />
          <SectionCard />
          <SectionCard />
          <SectionCard />
          <SectionCard />
          <SectionCard />
          <SectionCard />
        </div>
      </div>
    </Wrapper>
  );
};

export default LivestreamCard;

const Wrapper = styled.div`
  position: relative;
  max-width: 938px;
  min-width: 280px;
  display: grid;
  grid-template-columns: 240px auto;
  gap: 20px;
  padding: 20px;
  margin: 0 auto;
  backdrop-filter: blur(40px) saturate(120%) brightness(120%);
  border-radius: 20px;
  background: rgba(15, 14, 71, 0.3);
  box-shadow: rgb(255 255 255 / 20%) 0px 0px 0px 0.5px inset;
  backdrop-filter: blur(40px) saturate(120%) brightness(100%);
  overflow: hidden;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: repeat(1, 1fr);
  }

  .content-livestreams {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    overflow-y: auto;

    -webkit-mask-box-image: linear-gradient(
      rgb(255, 255, 255) 80%,
      rgba(255, 255, 255, 0) 100%
    );
    ::-webkit-scrollbar {
      display: none;
    }
    max-height: 34rem;

    @media ${(props) => props.theme.breakpoints.md} {
      grid-template-columns: repeat(1, 1fr);
    }
    @media ${(props) => props.theme.breakpoints.sm} {
      -webkit-mask-box-image: none;
  }
`;
