import React from "react";
import Image from "next/image";

import Layout from "@/components/Layout";
import SubHeader from "@/components/SubHeader";
import offerbg from "/public/assets/images/bg-offer.png";
import offerimg from "/public/assets/images/offerimg.png";

import { Nunito } from "next/font/google";
import clsx from "clsx";
const font = Nunito({ subsets: ["latin"] });

const OurOfferData = [
  {
    title: "New Born & Baby Care Shop",
    desc: "Mauris vitae erat non nisi consequat",
    svg: "/assets/svg/offer/kincir.svg",
    bg: "#FFF8EF",
    colour: "#FBA628",
  },
  {
    title: "Toodlers Clothing",
    desc: "Duis eget suscipit nibh, et condimentum risus",
    svg: "/assets/svg/offer/apple.svg",
    bg: "#F6F7FF",
    colour: "#8988F7",
  },
  {
    title: "Toys and Games",
    desc: "Phasellus ultricies urna tortor, a porttitor",
    svg: "/assets/svg/offer/abc.svg",
    bg: "#F6FEFE",
    colour: "#16BCA9",
  },
];

function OurOffer() {
  return (
    <div
      className="bg-center bg-no-repeat bg-cover py-14"
      style={{
        backgroundImage: `url(${offerbg.src})`,
      }}
    >
      <Layout>
        <SubHeader part="Our Offer" align="center" />

        <div className="grid items-center grid-cols-1 gap-4 md:grid-cols-2 md:gap-0">
          <Image src={offerimg} alt="boneka" priority />
          <div className="space-y-4">
            {OurOfferData.map((item, index) => (
              <div
                className={clsx(`flex items-cen
            ter px-5 py-6 border-dashed rounded-lg max-w-[467px] space-x-4`)}
                key={index}
                style={{
                  borderColor: `${item.colour}`,
                  borderWidth: "1px",
                  backgroundColor: `${item.bg}`,
                }}
              >
                <Image
                  src={item.svg}
                  alt="isvg"
                  className="w-auto h-auto"
                  width={70}
                  height={70}
                />
                <div className={clsx(`${font.className} font-bold`)}>
                  <h1
                    className={clsx(`text-2xl font-bold`)}
                    style={{
                      color: `${item.colour}`,
                    }}
                  >
                    {item.title}
                  </h1>
                  <p className="mt-2 text-secondaryColour ">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default OurOffer;
