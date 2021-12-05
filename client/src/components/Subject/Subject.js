import React from "react";
import styled from "styled-components";

const Subject = (props) => {
  const { subject, size } = props;
  return (
    <Wrapper size={size}>
      <img
        src={
          subject
            ? `./icons/subjects/${subject}.png`
            : `./icons/subjects/math.png`
        }
      />
    </Wrapper>
  );
};

export default Subject;

const Wrapper = styled.div`
  display: block;
  width: var(--size);
  height: var(--size);
  cursor: pointer;

  --size: ${(props) => props.size || "4.4rem"};

  img {
    width: var(--size);
    height: var(--size);
  }
`;
