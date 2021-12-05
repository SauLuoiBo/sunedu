import React from "react";
import styled from "styled-components";

const Text = ({ children }) => {
  return <TextNormal>{children}</TextNormal>;
};

Text.Caption = function Caption({ children }) {
  return <TextCaption>{children}</TextCaption>;
};

Text.Body = function TextBody({ children }) {
  return <TextNormal weight={true}>{children}</TextNormal>;
};

Text.Link = function TextLinkA(props) {
  const { link, target } = props;
  return (
    <TextLink href={link || "/"} target={target}>
      {props.text}
    </TextLink>
  );
};

Text.BodyIntro = function TextBodyIntroH({ children, ...restProps }) {
  return <TextBodyIntro {...restProps}>{children}</TextBodyIntro>;
};

export default Text;

const TextNormal = styled.p`
  font-size: 13px;
  line-height: 130%;
  font-weight: ${(props) => (props.weight ? "600" : "400")};
  color: rgba(255, 255, 255, 0.7);
`;

const TextCaption = styled.p`
  font-size: 1.5rem;
  line-height: 1.8rem;
  color: rgba(255, 255, 255, 0.7);
`;

const TextLink = styled.a`
  font-size: 13px;
  line-height: 130%;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
`;

const TextBodyIntro = styled.h3`
  font-size: 2.4rem;
  line-height: 140%;
  font-weight: bold;
  text-align: center;
  color: rgb(255, 255, 255);
  margin: 0px;
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => props.line || null};
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
