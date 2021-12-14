import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { Text } from "../../styles";

const Form = ({ children, ...restProps }) => {
  return <FormWrapper {...restProps}>{children}</FormWrapper>;
};

Form.Input = function Input(props) {
  const { icon, type, placeholder } = props;
  return (
    <InputWrapper>
      <label htmlFor={type || "email"}>
        <div className="icon-wrapper">
          {" "}
          <Image
            src={`/icons/button/${icon || "envelope-blue.svg"}`}
            alt="icon"
            width={20}
            height={20}
          />
        </div>
        <input
          name={type || "email"}
          type={type || "email"}
          placeholder={placeholder || "Email address"}
          autoComplete="on"
          required=""
        />
      </label>
    </InputWrapper>
  );
};

Form.Submit = function Submit(props) {
  const { onSubmit } = props;
  return (
    <SubmitWrapper type="submit" onSubmit={onSubmit}>
      <div style={{ width: "fit-content", margin: "0px auto" }}>
        {" "}
        <Text.Medium themeText={true} weight={true}>
          Đăng ký
        </Text.Medium>
      </div>
    </SubmitWrapper>
  );
};

export default Form;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 44px;

  .icon-wrapper {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    position: absolute;
    top: 4px;
    left: 4px;
    width: 36px;
    height: 36px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    z-index: 1;
  }

  input {
    height: 100%;
    width: 100%;
    background: linear-gradient(
      rgba(99, 106, 150, 0.8) 0%,
      rgba(182, 186, 214, 0.6) 100%
    );
    border: none;
    border-radius: 30px;
    box-shadow: rgb(0 0 0 / 15%) 0px 20px 40px,
      rgb(255 255 255 / 30%) 0px 0px 0px 0.5px inset;
    box-sizing: border-box;
    padding: 10px 42px 10px 56px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 130%;
    color: white;
    -webkit-text-fill-color: rgb(255, 255, 255);
    :focus {
      font-size: 16px;
      outline: none;
      padding-left: 42px;
      box-shadow: rgb(47 184 255 / 30%) 0px 10px 40px,
        rgb(47 184 255) 0px 0px 0px 1px inset;
      background: linear-gradient(
        rgba(24, 32, 79, 0.4) 0%,
        rgba(24, 32, 79, 0.25) 100%
      );
      transition: all 5000s ease-in-out 0s;
    }

    -internal-autofill-selected {
      appearance: menulist-button;
      background-image: none !important;
      background-color: -internal-light-dark(
        rgb(255, 255, 255),
        rgb(59, 59, 59)
      ) !important;
      color: -internal-light-dark(black, white) !important;
    }
  }
`;

const SubmitWrapper = styled.button`
  background: linear-gradient(
    91.4deg,
    rgb(47, 184, 255) 0%,
    rgb(158, 236, 217) 100%
  );
  border: none;
  border-radius: 30px;
  box-shadow: rgb(147 231 221 / 30%) 0px 20px 40px;
  cursor: pointer;
  display: grid;
  text-align: center;
  padding: 12px 0px;
  width: 100%;
  position: relative;
  -webkit-box-pack: center;
  justify-content: center;
`;

const FormWrapper = styled.form`
  display: grid;
  gap: 20px;
  margin: 0px;
`;
