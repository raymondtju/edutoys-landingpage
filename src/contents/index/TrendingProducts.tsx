import clsx from "clsx";
import React from "react";

import SubHeader from "@/components/SubHeader";

import populerbg from "/public/assets/images/bg-populer.png";
import Image from "next/image";
import Layout from "@/components/Layout";

const TrendingProductsData = [
  {
    image: "/assets/images/trending/image 14.png",
    title: "Running Man' Pirate Barrel Games",
    price: "$25",
  },
  {
    image: "/assets/images/trending/image 14-1.png",
    title: "MIISOO Baby Walker",
    price: "$25",
  },
  {
    image: "/assets/images/trending/image 14-2.png",
    title: "Magnetic Drawing Board",
    price: "$25",
  },
  {
    image: "/assets/images/trending/image 14-3.png",
    title: "Donut Tower Stacking",
    price: "$25",
  },
  {
    image: "/assets/images/trending/image 14-4.png",
    title: "Kawat Kepik / Wire",
    price: "$25",
  },
  {
    image: "/assets/images/trending/image 14-5.png",
    title: "Pink Ombre",
    price: "$25",
  },
  {
    image: "/assets/images/trending/image 14-6.png",
    title: "Stress Ball 3D Squishy",
    price: "$25",
  },
  {
    image: "/assets/images/trending/image 14-7.png",
    title: "New Fidget Pop Its Toys Push Bubble",
    price: "$25",
  },
];

function TrendingProducts() {
  return (
    <div
      className={clsx("bg-center bg-no-repeat bg-cover py-14")}
      style={{
        backgroundImage: `url(${populerbg.src})`,
      }}
    >
      <Layout>
        <SubHeader
          part="Trending Products"
          title="Popular Product"
          description="Simple, transparent pricing that grows with you. Try any plan free for 30 days."
          align="left"
        />

        <div className="flex justify-end">
          <div className="space-x-2 p-1 border-[1px] rounded-lg bg-white">
            <button className="px-4 py-2 bg-[#00AFED] text-white rounded-lg">
              Sale Product
            </button>
            <button
              className={clsx(
                `px-4 py-2 rounded-lg`,
                `hover:bg-[#00AFED] hover:text-white duration-300`
              )}
            >
              Top Product
            </button>
            <button
              className={clsx(
                `px-4 py-2 rounded-lg`,
                `hover:bg-[#00AFED] hover:text-white duration-300`
              )}
            >
              Popular Product
            </button>
          </div>
        </div>

        <div
          className={clsx(
            `grid xl:grid-cols-4 gap-6 mt-12`,
            `lg:grid-cols-3 md:grid-cols-2 grid-cols-1`
          )}
        >
          {TrendingProductsData.map((data, index) => {
            return (
              <div
                className="relative flex justify-center pb-24 pt-4 bg-white border-[1px] border-[#C7C7C7] rounded-lg cursor-pointer"
                key={index}
              >
                <Image
                  src={data.image}
                  alt={data.title}
                  width={220}
                  height={220}
                  className="w-auto h-auto"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 bg-[#FAF6F9] h-1/4 rounded-t-lg border-t-[1px] border-[#C7C7C7] space-y-1 p-2">
                  <span className="block text-xl font-bold text-center text-primaryColour">
                    {data.price}
                  </span>
                  <span className="block text-sm font-medium text-center">
                    {data.title}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </Layout>
    </div>
  );
}

export default TrendingProducts;
