import React from "react";
import styled from "styled-components";
import { Text } from "../../styles";

const StoryCard = () => {
  return (
    <Wrapper>
      <div></div>

      <TitleWrapper className="b">
        <div className="avatar">
          <img src="./icons/subjects/math.png" />
        </div>
        <AuthorInfor>
          <Text.BodyIntro>Do TIen Dai</Text.BodyIntro>
          <div className="authorCV">
            <Text>Senior iOS Developer at 3PDevelopment</Text>
          </div>
        </AuthorInfor>
      </TitleWrapper>
    </Wrapper>
  );
};

export default StoryCard;

const Wrapper = styled.div`
  display: grid;
  background: rgba(15, 14, 71, 0.3);
  box-shadow: rgb(255 255 255 / 20%) 0px 0px 0px 0.5px inset;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto;
  gap: 2rem;
  width: 100%;
  padding: 2rem;
  border-radius: 2rem;
  max-width: 58rem;
  grid-auto-flow: row;
  grid-template-areas:
    "a b"
    "a c"
    "a c";

  .a {
    grid-area: a;
  }

  .b {
    grid-area: b;
  }

  .c {
    grid-area: c;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  column-gap: 2rem;

  .avatar {
    display: flex;
    width: fit-content;
    justify-content: center;
    align-items: center;
    img {
      width: 5rem;
      height: 5rem;
    }
  }
`;

const AuthorInfor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.7rem;

  .authorCV {
    width: 100%;
    background: rgba(68, 66, 178, 0.1);
    border-radius: 0.5rem;
    padding: 0.5rem;
  }
`;
