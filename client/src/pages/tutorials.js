import React from "react";
import Head from "next/head";
import PricingWave from "../components/Wave/PricingWave";
import styled from "styled-components";
import { HandbookCard, Plan, View } from "../components";
import SectionCard from "../components/card/SectionCard";
import { TutorialsPlan } from "../containers/tutorialsPage";
styled;

const Tutorials = () => {
  return (
    <>
      <Head>
        <title>Luyện tập - Sun Education</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <PricingWave />
      <Wrapper className="container">
        <View align="flex-end">
          <View.Child_1>
            <View.Title
              title="240+ bài luyện tập"
              des="Đầy đủ hướng dẫn với các videos, PDF chi tiết"
              content="Tìm các mẹo và thủ thuật hay nhất trong các hướng dẫn nhỏ về các dạng bài thi, lý thuyết, bài tập."
            />
          </View.Child_1>
          <View.Child_2></View.Child_2>
        </View>
      </Wrapper>
      <Wrapper className="container">
        <TutorialsPlan />
      </Wrapper>
    </>
  );
};

export default Tutorials;

const Wrapper = styled.section`
  display: block;
`;

const TutorialsWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 300px auto;
  grid-gap: 3rem;
  justify-items: center;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
  }

  .content {
    display: block;
    width: 100%;
    overflow: hidden;
  }
`;
