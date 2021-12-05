import React from "react";
import styled from "styled-components";

const Section = ({ children }) => {
  return <div>{children}</div>;
};

export default Section;

const Wrapper = styled.section`
  display: block;
`;
