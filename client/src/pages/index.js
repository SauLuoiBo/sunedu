import Head from "next/head";
import { Button } from "../components";
import { Introduce, Introduction, Tutorials } from "../containers";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sun Education</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Introduce />
        <Tutorials />
      </main>
    </>
  );
}
