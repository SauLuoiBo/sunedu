import React from "react";
import { Button, View } from "../../components";
import HeroSection from "./element/HeroSection";
import {
	Background,
	BackgroundBlur,
	BackgroundWave1,
	BackgroundWave2,
	WrapperInner,
	WrapperSection,
} from "./styles/introduction";
import Link from "next/dist/client/link";

const Introduction = () => {
	return (
		<WrapperSection>
			<Background />
			<BackgroundWave1 />
			<BackgroundWave2 />
			<BackgroundBlur />
			<WrapperInner className="container">
				<View>
					<HeroSection />
					<Button.Link link="/saaa" text="sd" />
					<Link href="/sd">dsấđs</Link>
				</View>
			</WrapperInner>
		</WrapperSection>
	);
};

export default Introduction;
