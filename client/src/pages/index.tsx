import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | TurboDealer</title>
      </Head>
      <main>
        <h1>Home</h1>
      </main>
    </>
  );
}
