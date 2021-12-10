import React from "react";
import { Button } from "../../components";
import { Navbar, Wrapper } from "./styles/header";

const Header = () => {
  return (
    <Wrapper className="container">
      <div>Logo</div>
      <Navbar>
        <Button.Link
          link="/courses"
          icon="/icons/menu/courses.svg"
          text="Khoá học"
        />
        <Button.Link
          link="/tutorials"
          icon="/icons/menu/tutorials.svg"
          text="Luyện tập"
        />
        <Button.Link
          link="/pricing"
          icon="/icons/menu/pricing.svg"
          text="Đăng ký"
        />
        <Button.Link link="/blog" icon="/icons/menu/calendar.svg" text="Blog" />
        <Button.Link
          link="/livestreams"
          icon="/icons/menu/livestreams.svg"
          text="Livestreams"
        />
        <Button icon="/icons/menu/more.svg" />
        <Button icon="/icons/menu/search.svg" />
      </Navbar>
    </Wrapper>
  );
};

export default Header;
