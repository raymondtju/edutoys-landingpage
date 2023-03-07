import React from "react";
import Image from "next/image";
import clsx from "clsx";

import hero from "/public/assets/images/index-hero.png";
import circle from "/public/assets/svg/circle-header.svg";
import hat from "/public/assets/images/hat.png";
import horse from "/public/assets/images/horse.png";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import { Nunito } from "next/font/google";
const font = Nunito({ subsets: ["latin"] });

function SearchBar() {
  return (
    <>
      <div
        className={clsx(
          "md:flex-row flex mx-auto justify-center md:rounded-[51px] bg-primaryColour xl:p-5 xl:space-x-6 drop-shadow-custom items-center w-fit",
          "lg:p-4 lg:space-x-4 px-3 py-4 space-x-0 flex-col rounded-3xl"
        )}
      >
        <p
          className={clsx(
            `h-6 font-semibold leading-6 tracking-wide xl:text-custom32px ${font.className} text-white md:mb-0`,
            `lg:text-xl text-lg mb-2`
          )}
        >
          Find your product
        </p>
        <div
          className={clsx(
            "flex flex-wrap md:mx-0 mx-auto items-center md:pl-3 pl-0"
          )}
        >
          <div
            className={clsx(
              "bg-white rounded-full xl:px-6 xl:py-4 w-full md:w-auto",
              "lg:px-4 lg:py-3 px-3 py-2"
            )}
          >
            <input
              type="text"
              className={clsx(
                `focus:outline-none font-semibold xl:text-custom24px placeholder:text-lg placeholder:text-secondaryColour ${font.className}`,
                `lg:text-xl text-lg `
              )}
              placeholder="Search"
            />
          </div>
          <button
            className={clsx(
              "bg-[#FBE628] rounded-full xl:p-4 flex mt-2 md:mt-0 md:ml-3 ml-0",
              "p-2"
            )}
          >
            <MagnifyingGlassIcon
              className={clsx(
                "xl:w-10 xl:h-10 items-center stroke-1",
                "lg:w-8 lg:h-8 w-6 h-6"
              )}
            />
            <span className="flex px-2 md:hidden">Search</span>
          </button>
        </div>
      </div>
    </>
  );
}

function Header() {
  return (
    <>
      <header className={clsx("relative my-6")}>
        <Image
          src={hat}
          alt="hat"
          className={clsx(
            "absolute xl:left-0 xl:inset-y-2/4",
            "lg:left-64 md:left-48 sm:left-32 left-0 inset-y-full"
          )}
        />
        <div
          className={clsx(
            `xl:pt-36 xl:px-10 xl:text-left`,
            "pt-24 text-center"
          )}
        >
          <h1
            className={clsx(
              `font-bold xl:text-[64px] text-primaryColour ${font.className} relative inline-flex xl:mx-0 xl:px-10 xl:py-2 xl:pb-0 `,
              `mx-auto sm:text-[64px] text-[48px] px-4`
            )}
            style={{
              backgroundImage: "url('/assets/svg/line.svg')",
              backgroundRepeat: "no-repeat",
              rotate: "-8.72deg",
              backgroundSize: "contain",
            }}
          >
            <Image
              src={horse}
              alt="horse"
              className={clsx(
                "absolute xl:-top-4 xl:-right-4 xl:scale-100",
                "lg:scale-75 md:scale-50 sm:scale-50 scale-[40%] -right-8 -top-8"
              )}
            />
            Fun to care,
          </h1>
          <h1
            className={clsx(
              `font-black md:text-[64px] ${font.className} text-[#FBA628] xl:ml-16`,
              `ml-0 text-[60px]`
            )}
          >
            Comfy Feel
          </h1>
          <p
            className={clsx(
              `font-medium xl:text-xl text-secondaryColour max-w-[389px] ${font.className} xl:mx-0 xl:pt-0`,
              `mx-auto pt-4 sm:text-lg text-base`
            )}
          >
            Mauris aliquet enim quis odio lacinia, id viverra elit convallis.
            Nunc nulla massa elit
          </p>
          <button
            className={clsx(
              `bg-primaryColour rounded-lg text-white sm:px-7 sm:py-4 uppercase font-bold mt-8`,
              `px-6 py-3`
            )}
          >
            Shop Now
          </button>
        </div>
        <Image
          src={hero}
          alt="hero-image"
          className={clsx(
            "hidden",
            "xl:absolute xl:flex xl:-right-10 xl:top-0 xl:z-0"
          )}
          priority
        />
        <Image
          src={circle}
          alt="circle"
          className={clsx(
            "hidden",
            "xl:absolute xl:flex xl:-right-10 xl:top-0 xl:-z-10"
          )}
        />
      </header>
      <div className="mt-40">
        <SearchBar />
      </div>
    </>
  );
}

export default Header;
