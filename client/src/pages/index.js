import Head from "next/head";
import React from "react";

import {
  CreateProfile,
  Introduce,
  IntroStories,
  Tutorials,
} from "../containers";
import IntroCourse from "../containers/IntroCourse";

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
      {/* <div>
        <iframe
          width="640"
          height="360"
          src="https://short.ink/w2TOj0y6E"
          frameBorder="0"
          scrolling="0"
          allowFullScreen
        ></iframe>
      </div> */}
    </>
  );
}
