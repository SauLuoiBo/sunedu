import React from "react";
import styled from "styled-components";
import { Button, PurchaseButton } from "../../../components";
import Link from "next/link";

const HeroSection = () => {
	return (
		<Wrapper>
			<Title>
				Học tập <br /> và luyện thi đại học môn <span>Toán</span>{" "}
			</Title>
			<p>
				Don’t skip design. Learn design and code, by building real apps with
				React and Swift. Complete courses about the best tools.
			</p>
			<PurchaseButton />
			<a href="/sđasd">sđâsd</a>
		</Wrapper>
	);
};

export default HeroSection;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	align-items: flex-start;
`;

const Title = styled.h1`
	color: red;
	background: linear-gradient(180deg, #730040 0%, #301cbe 100%);
	background-clip: text;
	-webkit-background-clip: text;
	color: transparent;

	span {
		background: linear-gradient(180deg, #ffd7ff 0%, #ffb6ff 100%);
		background-clip: text;
		-webkit-background-clip: text;
		color: transparent;
	}

	@media (max-width: 450px) {
		font-size: 48px;
	}
`;
