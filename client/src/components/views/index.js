import React from "react";
import { Button } from "..";
import { ContentWrapper, Wrapper, WrapperTwo } from "./styles/views";

const View = ({ children, ...restProps }) => {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

View.Column = function ViewColumn({ children }) {
  return <WrapperTwo className="child-1">{children}</WrapperTwo>;
};

View.Child_1 = function ViewChild_1({ children }) {
  return <div className="child-1">{children}</div>;
};

View.Child_2 = function ViewChild_2({ children }) {
  return <div className="child-2">{children}</div>;
};

View.Title = function ViewTitle(props) {
  const { title, des, content, link, icon, button, textAlign } = props;
  return (
    <ContentWrapper textAlign={textAlign}>
      <h5>{title || "Title"}</h5>
      <h3>{des || "description"}</h3>
      <p>{content || "content"}</p>

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
