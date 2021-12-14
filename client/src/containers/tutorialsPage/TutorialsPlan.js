import styled from "styled-components";
import React from "react";
import { HandbookCard, Plan } from "../../components";
import SectionCard from "../../components/card/SectionCard";

const TutorialsPlan = () => {
  return (
    <div>
      <TutorialsWrapper>
        <HandbookCard />
        <div className="content">
          <Plan title="30 bài luyện tập">
            <SectionCard />
            <SectionCard />
            <SectionCard />
            <SectionCard />
            <SectionCard />
            <SectionCard />
            <SectionCard />
            <SectionCard />
            <SectionCard />
            <SectionCard />
            <SectionCard />
          </Plan>
        </div>
      </TutorialsWrapper>
    </div>
  );
};

export default TutorialsPlan;

const TutorialsWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 300px auto;
  grid-gap: 3rem;
  justify-items: center;

  .content {
    display: block;
    width: 100%;
    overflow: hidden;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
  }
`;
