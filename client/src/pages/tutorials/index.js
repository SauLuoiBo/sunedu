import React from "react";
import Head from "next/head";
import PricingWave from "../../components/Wave/PricingWave";

const index = () => {
  return (
    <>
      <Head>
        <title>Luyện tập - Sun Education</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <PricingWave />
      Luyện tập
    </>
  );
};

export default index;
