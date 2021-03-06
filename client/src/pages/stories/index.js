import React from "react";
import Head from "next/head";
import PricingWave from "../../components/Wave/PricingWave";
import { CustomerStories, Stories } from "../../containers/StoriesPage";

const index = () => {
  return (
    <>
      <Head>
        <title>Chia sẻ - Sun Education</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <PricingWave />
      <CustomerStories />
      <Stories />
    </>
  );
};

export default index;
