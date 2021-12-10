import React from "react";
import { Wrapper, WrapperTwo } from "./styles/button";
import Link from "next/link";
import styled from "styled-components";
import { Text } from "../../styles";
import Image from "next/image";

const Button = (props) => {
  const { icon, text, width } = props;
  return (
    <Wrapper full={width}>
      {icon ? <img src={icon} /> : ""}
      {text ? <p>{text}</p> : null}
    </Wrapper>
  );
};

Button.Link = function ButtonLink(props) {
  const { icon, text, link, width } = props;
  return (
    <Link href={link}>
      <Wrapper full={width}>
        {icon ? (
          <div className="img">
            <Image
              src={icon}
              alt="Landscape picture"
              width={24}
              height={24}
              layout="responsive"
            />
          </div>
        ) : null}
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

Button.Search = function ButtonSearch(props) {
  const { text } = props;
  return (
    <SearchWrapper>
      <label>
        <SearchIcon>
          <img src="./icons/menu/search.svg" />
        </SearchIcon>
        <input
          type="text"
          placeholder="Search"
          name="search"
          value={text}
          disabled
        />
      </label>
    </SearchWrapper>
  );
};

Button.Goto = function ButtonGoto(props) {
  const { icon, text, link } = props;
  return (
    <Link href={link || "/"}>
      <GotoWrapper>
        <Text>{text || "text"}</Text>
      </GotoWrapper>
    </Link>
  );
};

export default Button;

const GotoWrapper = styled.div`
  text-transform: uppercase;
  padding: 8px 15px;
  background: linear-gradient(
    rgba(24, 32, 79, 0.4) 0%,
    rgba(24, 32, 79, 0.4) 100%
  );
  box-shadow: rgb(0 0 0 / 15%) 0px 20px 40px,
    rgb(0 0 0 / 20%) 0px 0px 0px 0.5px inset;
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    transform: translateY(-3px);
  }
`;

const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 4.4rem;

  input {
    height: 100%;
    width: 100%;
    background: linear-gradient(
      rgba(99, 106, 150, 0.4) 0%,
      rgba(182, 186, 214, 0.25) 100%
    );
    border: none;
    border-radius: 30px;
    box-shadow: rgb(0 0 0 / 15%) 0px 20px 40px,
      rgb(255 255 255 / 30%) 0px 0px 0px 0.5px inset;
    box-sizing: border-box;
    padding: 10px 42px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 130%;
    color: rgb(255, 255, 255);
    transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  z-index: 2;
  top: 10px;
  left: 10px;

  img {
    width: 24px;
    height: 24px;
    margin: 0px;
  }
`;
