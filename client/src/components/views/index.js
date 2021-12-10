import React from "react";
import { Button } from "..";
import { Text } from "../../styles";
import {
  ContentWrapper,
  Wrapper,
  WrapperRow,
  WrapperTwo,
} from "./styles/views";

const View = ({ children, ...restProps }) => {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

View.Column = function ViewColumn({ children, ...restProps }) {
  return <WrapperTwo {...restProps}>{children}</WrapperTwo>;
};

View.Row = function ViewRow({ children, ...restProps }) {
  return <WrapperRow {...restProps}>{children}</WrapperRow>;
};

View.Child_1 = function ViewChild_1({ children }) {
  return <div className="child-1">{children}</div>;
};

View.Child_2 = function ViewChild_2({ children }) {
  return <div className="child-2">{children}</div>;
};

View.Title = function ViewTitle(props) {
  const { title, des, content, link, icon, button, textAlign, themeText } =
    props;
  return (
    <ContentWrapper textAlign={textAlign}>
      <Text.Caption2 themeText={themeText}>{title || "Title"}</Text.Caption2>
      <Text.Title themeText={themeText}>{des || "description"}</Text.Title>
      <Text.BodyMain themeText={themeText}>
        {content || "content"}
      </Text.BodyMain>

      {button ? (
        <Button.Menu
          link={link || "/tutorials"}
          icon={icon || "./icons/menu/tutorials.svg"}
          text={button || "Start tutorials"}
        />
      ) : null}
    </ContentWrapper>
  );
};

View.Div = function ViewDiv({ children }) {
  return <div className="child-2">{children}</div>;
};

export default View;
