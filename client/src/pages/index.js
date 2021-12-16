import Head from "next/head";
import React from "react";
import { createClient } from "contentful";

import {
  CreateProfile,
  Introduce,
  IntroStories,
  Tutorials,
  IntroCourse,
} from "../containers/HomePage";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "exam" });

  return {
    props: {
      exam: res.items,
    },
  };
}

export default function Home({ exam }) {
  console.log(exam);
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
      <div></div>
    </>
  );
}
