import React from "react";
import styled from "styled-components";
import { Button } from "../../components";
import { Text } from "../../styles";

const data = [
  {
    link: "/courses",
    icon: "./icons/menu/courses.svg",
    text: "Home",
  },
  {
    link: "/courses",
    icon: "./icons/menu/courses.svg",
    text: "Tài liệu",
  },
  {
    link: "/courses",
    icon: "./icons/menu/courses.svg",
    text: "Khoá học",
  },
  {
    link: "/courses",
    icon: "./icons/menu/search.svg",
    text: "Tìm kiếm",
  },
  {
    link: "/courses",
    icon: "./icons/menu/tutorials.svg",
    text: "Luyện tập",
  },
  {
    link: "/courses",
    icon: "./icons/menu/profile.svg",
    text: "Tài khoản",
  },
  {
    link: "/courses",
    icon: "./icons/menu/pricing.svg",
    text: "Đăng ký",
  },
  {
    link: "/courses",
    icon: "./icons/menu/courses.svg",
    text: "Trung tâm",
  },
  {
    link: "/courses",
    icon: "./icons/menu/courses.svg",
    text: "Giấy phép",
  },
];

const Footer = () => {
  return (
    <Wrapper>
      <FooterWrapper>
        <LinkWrapper>
          {data.map((data, index) => (
            <div>
              <Button.Link
                link={data.link}
                icon={data.icon}
                text={data.text}
                width={true}
              />
            </div>
          ))}
        </LinkWrapper>
        <CreditWrapper>
          <Text theme={false}>
            Site made with React, Gatsby, Netlify and Contentful. Learn how.
          </Text>
          <Text>Design+Code © 2021</Text>
          <Text>
            <Text.Link text="Term and Service" link="/link" target="_blank" /> -{" "}
            <Text.Link text="Privacy Policy" link="/link" target="_blank" />
          </Text>
          <Text>
            Need help?{" "}
            <Text.Link
              text="Contact Us"
              link="mailto:dai.dotien@gmail.com"
              target="_blank"
            />
          </Text>
        </CreditWrapper>
      </FooterWrapper>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  background-color: rgb(30, 19, 87);
  position: relative;
  width: 100%;
  /* height: 640px; */
  display: block;
  padding-top: 250px;
`;

const FooterWrapper = styled.div`
  position: relative;
  width: fit-content;
  max-width: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  padding: 0px 2rem;
  box-sizing: border-box;
  justify-content: space-between;
  grid-column-gap: 5rem;
  grid-row-gap: 2rem;
  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

const LinkWrapper = styled.div`
  display: grid;
  max-width: 33rem;
  grid-template-columns: 1fr 1fr;
  gap: 0px;
  margin: 0 auto;

  div {
    width: 100%;
  }
`;

const CreditWrapper = styled.div`
  display: block;
  max-width: 26rem;
  color: rgba(255, 255, 255, 0.7);
  padding: 6rem 0px;
  font-size: 13px;

  p {
    margin: 2rem 0;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    text-align: center;
    max-width: 27rem;
    padding: 2rem 0px;
  }
`;
