import styled from "styled-components";

export const Wrapper = styled.button`
  padding: 1rem 2rem 1rem 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: center;
  gap: 1rem;
  border: none;
  background-color: transparent;
  transition: all 0.3s ease-in-out 0s;
  width: fit-content;
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

export const Kaaa = styled.div`
  width: 28rem;
  height: 7.7rem;
  padding: 1.2rem;
  background: linear-gradient(180deg, #ffffff 0%, #d9dfff 100%);
  cursor: pointer;
  :hover {
    background-color: red;
  }
`;
