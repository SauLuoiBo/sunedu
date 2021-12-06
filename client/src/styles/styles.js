import React from "react";
import styled from "styled-components";

const Text = ({ children, ...restProps }) => {
  return <TextNormal {...restProps}>{children}</TextNormal>;
};

Text.Caption = function Caption({ children, ...restProps }) {
  return <TextCaption {...restProps}>{children}</TextCaption>;
};

Text.Caption2 = function Caption2({ children, ...restProps }) {
  return <TextCaption2 {...restProps}>{children}</TextCaption2>;
};

Text.Body = function TextBody({ children, ...restProps }) {
  return (
    <TextNormal weight={true} {...restProps}>
      {children}
    </TextNormal>
  );
};

Text.Title = function TextTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Text.Link = function TextLinkA(props) {
  const { link, target, theme } = props;
  return (
    <TextLink href={link || "/"} target={target} themeText={theme}>
      {props.text}
    </TextLink>
  );
};

Text.BodyIntro = function TextBodyIntroH({ children, ...restProps }) {
  return <TextBodyIntro {...restProps}>{children}</TextBodyIntro>;
};

Text.BodyMain = function TextBodyMainP({ children, ...restProps }) {
  return <BodyMain {...restProps}>{children}</BodyMain>;
};

Text.Medium = function TextMediumP({ children, ...restProps }) {
  return <TextMedium {...restProps}>{children}</TextMedium>;
};

export default Text;

const TextNormal = styled.p`
  font-size: 13px;
  line-height: 130%;
  -webkit-line-clamp: ${(props) => props.line || null};
  -webkit-box-orient: vertical;
  font-weight: ${(props) => (props.weight ? "600" : "400")};
  color: ${(props) => (props.themeText ? " " : "rgba(255, 255, 255, 0.7)")};
`;

const TextMedium = styled.p`
  font-size: 1.5rem;
  line-height: 130%;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: ${(props) => props.line || null};
  -webkit-box-orient: vertical;
  font-weight: ${(props) => (props.weight ? "600" : "400")};
  color: ${(props) => (props.themeText ? " " : "rgba(255, 255, 255, 0.7)")};
`;

const TextCaption = styled.p`
  font-size: 1.5rem;
  line-height: 1.8rem;
  font-weight: 400;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: ${(props) => props.line || null};
  -webkit-box-orient: vertical;
  text-transform: uppercase;
  color: ${(props) => (props.themeText ? "" : "rgba(255, 255, 255, 0.7)")};
`;

const TextCaption2 = styled.p`
  font-size: 1.5rem;
  line-height: 1.8rem;
  text-transform: uppercase;
  font-weight: 600;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: ${(props) => props.line || null};
  -webkit-box-orient: vertical;
  color: ${(props) => (props.themeText ? "" : "rgba(255, 255, 255, 0.7)")};
`;

const BodyMain = styled.p`
  font-size: 2rem;
  line-height: 140%;
  color: ${(props) => (props.themeText ? "" : "rgba(255, 255, 255, 0.7)")};
`;

const TextLink = styled.a`
  font-size: 1.3rem;
  line-height: 130%;
  font-weight: 600;
  color: ${(props) => (props.themeText ? "" : "rgba(255, 255, 255, 0.7)")};
  text-decoration: none;
`;

const TextBodyIntro = styled.h3`
  font-size: 2.4rem;
  line-height: 140%;
  font-weight: bold;
  /* text-align: center; */
  color: ${(props) => (props.themeText ? "" : "rgb(255, 255, 255)")};
  margin: 0px;
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => props.line || null};
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Title = styled.h1`
  font-size: 4rem;
  line-height: 120%;
  color: ${(props) => (props.themeText ? "" : "rgba(255, 255, 255, 0.7)")};
`;
