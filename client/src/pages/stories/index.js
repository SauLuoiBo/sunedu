import React from "react";
import PricingWave from "../../components/Wave/PricingWave";
import { CustomerStories, Stories } from "../../containers/StoriesPage";

const index = () => {
  return (
    <>
      <PricingWave />
      <CustomerStories />
      <Stories />
    </>
  );
};

export default index;
