import Navbar from "@/components/Navbar";
import Header from "./Header";
import TopPicks from "./TopPicks";
import TrendingProducts from "./TrendingProducts";
import Layout from "@/components/Layout";
import OurOffer from "./OurOffer";

import baby1 from "/public/assets/images/babies/1.png";
import baby2 from "/public/assets/images/babies/2.png";
import baby3 from "/public/assets/images/babies/3.png";
import Image from "next/image";
import Footer from "@/components/Footer";

function IndexContent() {
  return (
    <>
      <Layout>
        <Navbar />
        <Header />
        <TopPicks />
      </Layout>
      <TrendingProducts />
      <OurOffer />

      <div className="relative flex w-full my-20 space-x-10 overflow-x-auto snap-x scroll">
        <Image src={baby2} alt="" className="mx-4 rounded-3xl snap-start" />
        <Image src={baby1} alt="" className="mx-4 rounded-3xl snap-start" />
        <Image src={baby3} alt="" className="mx-4 rounded-3xl snap-start" />
        <Image src={baby3} alt="" className="mx-4 rounded-3xl snap-start" />
        <Image src={baby3} alt="" className="mx-4 rounded-3xl snap-start" />
        <Image src={baby3} alt="" className="mx-4 rounded-3xl snap-start" />
        <Image src={baby3} alt="" className="mx-4 rounded-3xl snap-start" />
        <Image src={baby3} alt="" className="mx-4 rounded-3xl snap-start" />
        <Image src={baby3} alt="" className="mx-4 rounded-3xl snap-start" />
        <Image src={baby3} alt="" className="mx-4 rounded-3xl snap-start" />
        <Image src={baby3} alt="" className="mx-4 rounded-3xl snap-start" />
      </div>

      <Footer />
    </>
  );
}

export default IndexContent;
