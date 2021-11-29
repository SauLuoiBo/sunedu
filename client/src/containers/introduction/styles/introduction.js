import styled from "styled-components";

export const WrapperSection = styled.section`
	position: relative;
	z-index: -2;
	background: linear-gradient(
		189.16deg,
		rgb(67, 22, 219) 13.57%,
		rgb(144, 118, 231) 98.38%
	);
`;

export const WrapperInner = styled.div`
	position: relative;
	padding: 10rem 20rem;
	z-index: 10;
	overflow: hidden;
`;

export const BackgroundBlur = styled.div`
	position: absolute;
	width: 100%;
	height: 800px;
	backdrop-filter: blur(60px);
	top: 0;
	z-index: 3;
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
	z-index: 1;
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
	z-index: 5;
`;
