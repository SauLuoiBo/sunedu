import React from "react";
import styled from "styled-components";
import { Button } from "..";
import { Text } from "../../styles";

const StoryCard = (props) => {
  const { name, des, share } = props;
  return (
    <Wrapper>
      <div className="a"></div>
      <TitleWrapper className="b">
        <div className="avatar">
          <img src="./icons/subjects/math.png" />
        </div>
        <AuthorInfor>
          <Text.BodyIntro>{name || "Name"}</Text.BodyIntro>
          <div className="authorCV">
            <Text>{des || "description"}</Text>
          </div>
        </AuthorInfor>
      </TitleWrapper>
      <ContentWrapper className="c">
        <Text>{share || "share"}</Text>
        <Button.Goto text="Doc tiep" link="/stories" />
      </ContentWrapper>
    </Wrapper>
  );
};

StoryCard.Story = function StoryCardStory(props) {
  const { name, des, share } = props;
  return (
    <StoryWrapper>
      <TitleWrapper>
        <div className="avatar">
          <img src="./icons/subjects/math.png" alt="avatar" />
        </div>
      </TitleWrapper>

      <Text.BodyMain>{name || "Name"}</Text.BodyMain>
      <Text.Caption2>{des || "description"}</Text.Caption2>
      <Text.Medium>{share || "share"}</Text.Medium>
    </StoryWrapper>
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

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-areas:
      "b b"
      "a a"
      "c c";
  }

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

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: flex-start;
  width: 100%;
`;

const StoryWrapper = styled.div`
  width: 100%;
  min-width: 20rem;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
  background: rgba(15, 14, 71, 0.5);
  box-shadow: rgb(255 255 255 / 20%) 0px 0px 0px 0.5px inset;
  align-content: flex-start;
  padding: 3rem;
`;
