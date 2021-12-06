import Head from "next/head";
import React from "react";

import {
  CreateProfile,
  Introduce,
  IntroStories,
  Tutorials,
  IntroCourse,
} from "../containers/HomePage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sun Education</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Introduce />
      <IntroCourse />
      <Tutorials />
      <CreateProfile />
      <IntroStories />
    </>
  );
}
