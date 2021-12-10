import React from "react";
import Head from "next/head";
import PricingWave from "../../components/Wave/PricingWave";
import styled from "styled-components";
import { View } from "../../components";
styled;

const index = () => {
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
    </>
  );
};

export default index;

const Wrapper = styled.section`
  display: block;
`;
