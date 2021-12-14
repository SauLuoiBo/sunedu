import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { Text } from "../../styles";
import { ButtonRound, Form } from "../../components";
import CircularProgress from "@mui/material/CircularProgress";

const ModalSignIn = (props) => {
  const { close } = props;
  function handleSubmit(e) {
    e.preventDefault();
    console.log("You clicked submit.");
    return;
  }

  const [signIn, setSignIn] = React.useState(false);

  return (
    <Wrapper>
      <SignUpModal>
        <div className="button-wrapper" onClick={close}>
          <ButtonRound.Close />
        </div>
        <div className="Modal-cover">
          <Image src="/illustrations/teamwork.svg" height={400} width={400} />
        </div>
        {!signIn && (
          <div className="Form-wrapper">
            <Text.Title>Đăng ký</Text.Title>{" "}
            <Text.Medium>
              Truy cập hơn 120 giờ các khóa học, hướng dẫn và tệp nguồn
            </Text.Medium>
            <Text.Main>
              Bằng cách nhấp vào Đăng ký, bạn đồng ý với Điều khoản dịch vụ và
              chính sách Bảo mật của chúng tôi.
            </Text.Main>
            <Form onSubmit={(e) => handleSubmit(e)}>
              <Form.Input />
              <Form.Input
                type="password"
                icon="lock-blue.svg"
                placeholder="Password"
              />
              <Form.Submit onSubmit={(e) => handleSubmit(e)} />
            </Form>
            <div className="separator" />
            <Text.Main>
              Bạn đã có tài khoản?{" "}
              <span
                onClick={() => setSignIn(true)}
                style={{ color: "blue", cursor: "pointer" }}
              >
                Đăng nhập
              </span>{" "}
            </Text.Main>
          </div>
        )}

        {signIn && (
          <div className="Form-wrapper">
            <Text.Title>Đăng nhập</Text.Title>{" "}
            <Text.Medium>
              Truy cập hơn 120 giờ các khóa học, hướng dẫn và tệp nguồn
            </Text.Medium>
            <Text.Main>
              Bằng cách nhấp vào Đăng ký, bạn đồng ý với Điều khoản dịch vụ và
              chính sách Bảo mật của chúng tôi.
            </Text.Main>
            <Form onSubmit={(e) => handleSubmit(e)}>
              <Form.Input />
              <Form.Input
                type="password"
                icon="lock-blue.svg"
                placeholder="Password"
              />
              <Form.Submit onSubmit={(e) => handleSubmit(e)} />
            </Form>
            <div className="separator" />
            <Text.Main>
              Bạn chưa có tài khoản?{" "}
              <span
                style={{ color: "blue", cursor: "pointer" }}
                onClick={() => setSignIn(false)}
              >
                Đăng ký
              </span>{" "}
            </Text.Main>
          </div>
        )}
      </SignUpModal>
    </Wrapper>
  );
};

export default ModalSignIn;

const Wrapper = styled.section`
  display: flex;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(20px) saturate(100%);
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  z-index: 100;
  padding: 0px 20px;

  .button-wrapper {
    position: absolute;
    top: -18px;
    right: -18px;
    z-index: 101;
    background: none;
    @media ${(props) => props.theme.breakpoints.sm} {
      top: -10px;
      right: -10px;
    }
  }
`;

const SignUpModal = styled.div`
  position: relative;
  max-width: 960px;
  width: 100%;
  padding: 20px;
  display: grid;
  grid-template-columns: 360px auto;
  gap: 20px;
  justify-items: center;
  background: rgba(50, 61, 109, 0.5);
  box-shadow: rgb(255 255 255 / 30%) 0px 0px 0px 0.5px inset;
  backdrop-filter: blur(40px);
  border-radius: 20px;
  opacity: 1;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
  }

  .Modal-cover {
    display: grid;
    width: 100%;
    height: 100%;
    -webkit-box-pack: center;
    place-content: center;
    background-image: url(/background/signup-background.svg);
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 20px;
    box-shadow: rgb(255 255 255 / 30%) 0px 0px 0px 0.5px inset;
    opacity: 1;

    @media ${(props) => props.theme.breakpoints.sm} {
      display: none;
    }
  }

  .Form-wrapper {
    display: grid;
    width: 100%;
    -webkit-box-pack: start;
    justify-content: start;
    text-align: left;
    gap: 20px;
    max-width: 320px;
    padding-top: 75px;
    margin-bottom: 70.5px;
    position: relative;
    height: fit-content;
  }
  .separator {
    width: 90%;
    height: 1px;
    background: rgba(255, 255, 255, 0.2);
  }
`;
