import React from "react";
import Head from "next/head";
import PricingWave from "../../components/Wave/PricingWave";

const Courses = () => {
  return (
    <>
      <Head>
        <title>Khoá học - Sun Education</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <PricingWave />
    </>
  );
};

export default Courses;
