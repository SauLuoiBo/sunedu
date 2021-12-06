import React from "react";
import styled from "styled-components";
import { CoursesCard } from "..";

const LivestreamCard = () => {
  return (
    <Wrapper>
      <CoursesCard />
    </Wrapper>
  );
};

export default LivestreamCard;

const Wrapper = styled.div`
  position: relative;
  max-width: 938px;
  min-width: 280px;
  width: 100%;
  display: grid;
  grid-template-columns: 240px auto;
  gap: 20px;
  padding: 20px;
  backdrop-filter: blur(40px) saturate(120%) brightness(120%);
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.6);
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 0px 0.5px inset;
`;
