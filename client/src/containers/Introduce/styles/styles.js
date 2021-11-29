import styled from "styled-components";

export const Wrapper = styled.section`
  position: relative;

  background: linear-gradient(
    189.16deg,
    rgb(67, 22, 219) 13.57%,
    rgb(144, 118, 231) 98.38%
  );

  transform: translateY(-15rem);
`;

export const WrapperInner = styled.div`
  position: relative;
  transform: translateY(15rem);
  overflow: hidden;
`;

export const BackgroundBlur = styled.div`
  position: absolute;
  width: 100%;
  height: 800px;
  backdrop-filter: blur(60px);
  top: 0;
`;

export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 880px;
  top: -20rem;
  /* height: 890px; */
  background: linear-gradient(
    189.16deg,
    rgb(67, 22, 219) 13.57%,
    rgb(144, 118, 231) 98.38%
  );
  z-index: -5;
`;

export const BackgroundWave1 = styled.div`
  position: absolute;
  width: 100%;
  background-position: center top;
  background-repeat: no-repeat;
  background-size: 100%;
  top: 137px;
  height: 900px;
  background-image: url("./background/hero-wave1.svg");
  /* top: -15rem; */
  backdrop-filter: blur(60px);
`;

export const BackgroundWave2 = styled.div`
  position: absolute;
  width: 100%;
  background-position: center top;
  background-repeat: no-repeat;
  background-size: 100%;
  top: 380px;
  left: 0px;
  height: 600px;
  background-image: url("./background/hero-wave2.svg");
  /* top: -15rem; */
`;
