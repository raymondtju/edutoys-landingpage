import Navbar from "@/components/Navbar";
import React from "react";
import Header from "./Header";
import TopPicks from "./TopPicks";
import TrendingProducts from "./TrendingProducts";
import Layout from "@/components/Layout";

function IndexContent() {
  return (
    <>
      <Layout>
        <Navbar />
        <Header />
        <TopPicks />
      </Layout>
      <TrendingProducts />
    </>
  );
}

export default IndexContent;
