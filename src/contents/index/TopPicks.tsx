import clsx from "clsx";
import React from "react";

import { Nunito } from "next/font/google";

import Vector1 from "/public/assets/svg/Vector-1.svg";
import Vector2 from "/public/assets/svg/Vector-2.svg";
import Vector3 from "/public/assets/svg/Vector-3.svg";
import Vector4 from "/public/assets/svg/Vector-4.svg";
import Vector5 from "/public/assets/svg/Vector-5.svg";

const TopPickData = [
  {
    bg: Vector1,
    image: "/assets/images/toppick1.png",
    title: "Boneka",
  },
  {
    bg: Vector2,
    image: "/assets/images/toppick2.png",
    title: "Dorongan",
  },
  {
    bg: Vector3,
    image: "/assets/images/toppick3.png",
    title: "Mobilan",
  },
  {
    bg: Vector4,
    image: "/assets/images/toppick4.png",
    title: "Puzzle",
  },
  {
    bg: Vector5,
    image: "/assets/images/toppick5.png",
    title: "Populer",
  },
];

import Image from "next/image";
import SubHeader from "@/components/SubHeader";

function TopPicks() {
  return (
    <div className={clsx("mx-auto mt-16")}>
      <SubHeader
        part="Top Picks"
        title="Shop by Category"
        description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
        align={"center"}
      />

      <div
        className={clsx(
          "mt-16 pb-24 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-8 gap-x-4"
        )}
      >
        {TopPickData.map((data, index) => {
          return (
            <div key={index}>
              <div className="relative">
                <Image
                  src={data.bg}
                  alt="Vector1"
                  className="mx-auto my-auto"
                />

                <Image
                  src={data.image}
                  alt={data.title}
                  className="absolute inset-0 w-auto h-auto mx-auto my-auto"
                  width={100}
                  height={100}
                />
              </div>
              <p
                className={clsx(
                  "text-custom16px font-semibold mt-5 text-center bg-primaryColour rounded-full text-white w-fit mx-auto px-4 py-2"
                )}
              >
                {data.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TopPicks;
