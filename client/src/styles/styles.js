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

Text.TextTitle = function TextTitleH4({ children, ...restProps }) {
  return <TextTitle {...restProps}>{children}</TextTitle>;
};

Text.Link = function TextLinkA(props) {
  const { link, target, themeText, size } = props;
  return (
    <TextLink
      href={link || "/"}
      size={size}
      target={target}
      themeText={themeText}
    >
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

Text.Main = function Main({ children, ...restProps }) {
  return <TextMain {...restProps}>{children}</TextMain>;
};

Text.Subtitle = function Subtitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

export default Text;

const TextNormal = styled.p`
  font-size: 13px;
  line-height: 130%;
  overflow: hidden;
  -webkit-line-clamp: ${(props) => props.line || null};
  -webkit-box-orient: vertical;
  font-weight: ${(props) => (props.weight ? "600" : "400")};
  color: ${(props) => (props.themeText ? " " : "rgba(255, 255, 255, 0.7)")};
`;

const TextMedium = styled.p`
  font-size: 15px;
  line-height: 130%;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: ${(props) => props.line || null};
  -webkit-box-orient: vertical;
  font-weight: ${(props) => (props.weight ? "600" : "400")};
  color: ${(props) => (props.themeText ? " " : "rgba(255, 255, 255, 0.7)")};

  span {
    font-weight: bold;
  }
`;

const TextMain = styled.p`
  font-size: 13px;
  line-height: 130%;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: ${(props) => props.line || null};
  -webkit-box-orient: vertical;
  font-weight: ${(props) => (props.weight ? "600" : "400")};
  color: ${(props) => (props.themeText ? " " : "rgba(255, 255, 255, 0.7)")};

  span {
    font-weight: bold;
  }
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
  font-size: 15px;
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
  font-size: 20px;
  line-height: 140%;
  color: ${(props) => (props.themeText ? "" : "rgba(255, 255, 255, 0.7)")};
`;

const TextLink = styled.a`
  font-size: ${(props) => props.size || "13px"};
  line-height: 130%;
  font-weight: 600;
  color: ${(props) =>
    props.themeText ? "rgb(0, 207, 253);" : "rgba(255, 255, 255, 0.7)"};
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
  font-size: 40px;
  line-height: 120%;
  color: ${(props) => (props.themeText ? "" : "rgba(255, 255, 255, 0.7)")};
`;

const TextTitle = styled.h4`
  font-size: 30px;
  line-height: 120%;
  overflow: hidden;
  -webkit-line-clamp: ${(props) => props.line || null};
  -webkit-box-orient: vertical;
  color: ${(props) => (props.themeText ? "" : "rgba(255, 255, 255, 0.7)")};
`;

const SubTitle = styled.h1`
  font-size: 60px;
  line-height: 120%;
  overflow: hidden;
  -webkit-line-clamp: ${(props) => props.line || null};
  -webkit-box-orient: vertical;
  color: ${(props) => (props.themeText ? "" : "rgba(255, 255, 255, 0.7)")};
  line-height: 95px;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 50px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 34px;
  }
`;
