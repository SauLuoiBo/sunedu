import React from "react";
import { Wrapper, WrapperTwo } from "./styles/button";
import Link from "next/link";

const Button = (props) => {
  const { icon, text } = props;
  return (
    <Wrapper>
      {icon ? <img src={icon} /> : ""}
      {text ? <p>{text}</p> : null}
    </Wrapper>
  );
};

Button.Link = function ButtonLink(props) {
  const { icon, text, link } = props;
  return (
    <Link href={link}>
      <Wrapper>
        {icon ? <img src={icon} /> : null}
        {text ? <p>{text}</p> : null}
      </Wrapper>
    </Link>
  );
};

Button.Purchase = function ButtonPurchase(props) {
  const { icon, text, link } = props;
  return (
    <Link href={link}>
      <Wrapper>
        {icon ? <img src={icon} /> : null}
        {text ? <p>{text}</p> : null}
      </Wrapper>
    </Link>
  );
};

Button.Menu = function ButtonMenu(props) {
  const { icon, text, link } = props;
  return (
    <Link href={link}>
      <WrapperTwo>
        {icon ? <img src={icon} /> : null}
        {text ? <p>{text}</p> : null}
      </WrapperTwo>
    </Link>
  );
};

export default Button;
