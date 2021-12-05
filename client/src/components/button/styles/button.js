import styled from "styled-components";

export const Wrapper = styled.button`
  padding: 1rem 2rem 1rem 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: ${(props) => (props.width ? "flex-start" : "space-between")};
  align-content: center;
  gap: 1rem;
  border: none;
  background-color: transparent;
  transition: all 0.3s ease-in-out 0s;
  width: ${(props) => (props.width ? "100%" : "fit-content")};
  cursor: pointer;
  background-blend-mode: overlay;
  background-attachment: scroll;
  border-radius: 1rem;
  position: relative;
  z-index: 10;

  img {
    height: 2.4rem;
    width: 2.4rem;
  }

  p {
    font-weight: 500;
    font-size: 1.5rem;
    color: var(--color-text2);
    /* overflow: hidden;
		text-overflow: clip; */
  }

  :hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    p {
      transform: translate(0px, -1px);
    }
  }
`;

export const WrapperTwo = styled.button`
  display: flex;
  background: linear-gradient(
    rgba(24, 32, 79, 0.4) 0%,
    rgba(24, 32, 79, 0.4) 100%
  );
  box-shadow: rgb(0 0 0 / 15%) 0px 20px 40px,
    rgb(0 0 0 / 20%) 0px 0px 0px 0.5px inset;
  border-radius: 30px;
  border: none;
  padding: 10px 30px 10px 12px;
  cursor: pointer;
  width: fit-content;

  img {
    width: 24px;
    height: 24px;
    margin: auto;
  }

  p {
    font-style: normal;
    font-size: 15px;
    font-weight: normal;
    line-height: 130%;
    text-align: center;
    color: rgb(255, 255, 255);
    margin: auto auto auto 8px;
  }

  :hover {
    background: linear-gradient(
      rgba(24, 32, 79, 0.4) 0%,
      rgba(24, 32, 79, 0.6) 70%
    );
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    transform: translateY(-3px);
    p {
      transform: translate(0px, -1px);
    }
    img {
      transform: scale(1.1);
    }
  }
`;
