import Head from "next/head";
import Layout from "@/components/Layout";

import { Inter } from "next/font/google";
import IndexContent from "@/contents/index";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>EduToys Shop</title>
        <meta name="description" content="EduToys Shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/images/logo.png" />
      </Head>
      <main className={`${inter.className}`}>
        <IndexContent />
      </main>
    </>
  );
}
