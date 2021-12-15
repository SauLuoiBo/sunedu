import React from "react";
import Link from "next/link";
import { Button, Logo } from "../../components";
import { ModalSignIn } from "../Modal";
import { Navbar, Wrapper } from "./styles/header";

const Header = () => {
  const [showSignIn, setShowSignIn] = React.useState(false);

  return (
    <>
      {showSignIn && <ModalSignIn close={() => setShowSignIn(false)} />}

      <Wrapper className="container">
        <Link href="/">
          <div>
            <Logo />
          </div>
        </Link>
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
          <Button.Link
            link="/blog"
            icon="/icons/menu/calendar.svg"
            text="Blog"
          />
          <Button.Link
            link="/livestreams"
            icon="/icons/menu/livestreams.svg"
            text="Livestreams"
          />
          <Button icon="/icons/menu/more.svg" />
          <div onClick={() => setShowSignIn(!showSignIn)}>
            <Button icon="/icons/menu/account.svg" />
          </div>
        </Navbar>
      </Wrapper>
    </>
  );
};

export default Header;
