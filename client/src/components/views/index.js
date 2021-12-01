import React from "react";
import { Button } from "..";
import { ContentWrapper, Wrapper } from "./styles/views";

const View = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

View.Title = function ViewTitle(props) {
  const { title, des, content, link, icon, button } = props;
  return (
    <ContentWrapper>
      <h5>{title || "Title"}</h5>
      <h3>{des || "description"}</h3>
      <p>{content || "content"}</p>
      <Button.Menu
        link={link || "/tutorials"}
        icon={icon || "./icons/menu/tutorials.svg"}
        text={button || "Start tutorials"}
      />
    </ContentWrapper>
  );
};

export default View;
