import React from "react";
import styled from "styled-components";

const RandomWave = () => {
  return (
    <RandomWaveWrapper>
      <svg
        width="2111"
        height="406"
        viewBox="0 0 2111 406"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="wave1">
            <path
              d="M617.571 52.3448C455.069 12.9849 230.295 -26.7175 122.477 27.3338L1 171.397L78.0714 310.959L347.056 405L788.047 386.492L1502.62 310.959L2023.23 292.45L2110 178.4C2110 178.4 2110 93.3628 2077.33 93.3628C2044.67 93.3628 2019.72 28.9344 1838.97 52.3448C1755.5 67.2771 1717.94 83.4038 1579.69 52.3448C1464.39 52.5542 1429.34 89.5755 1302.5 33C1214.97 46.8538 1235.61 -25.2346 974.856 93.3628C836.879 88.1347 759.413 84.4521 617.571 52.3448Z"
              fill="#19563D"
              stroke="black"
            />
          </clipPath>
        </defs>
      </svg>
    </RandomWaveWrapper>
  );
};

export default RandomWave;

const RandomWaveWrapper = styled.div`
  top: 32rem;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: -1;
  overflow: hidden;
  transform-origin: left top;
  clip-path: url(#wave1);
  top: 400px;
  height: 300px;
  background: linear-gradient(
    238.32deg,
    rgb(22, 77, 219) 15.81%,
    rgba(48, 136, 216, 0.4) 68.31%
  );
  opacity: 0.5;
`;
