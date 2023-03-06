import React from "react";
import Image from "next/image";
import clsx from "clsx";

import hero from "/public/assets/images/index-hero.png";
import circle from "/public/assets/svg/circle-header.svg";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import { Nunito } from "next/font/google";
const font = Nunito({ subsets: ["latin"] });

function SearchBar() {
  return (
    <>
      <div
        className={clsx(
          "flex w-fit mx-auto justify-center rounded-[51px] bg-primaryColour p-5 space-x-6 drop-shadow-custom "
        )}
      >
        <div className={clsx("bg-[#FBE628] rounded-full p-4")}>
          <MagnifyingGlassIcon
            className={clsx("w-10 h-10 items-center stroke-1")}
          />
        </div>
        <div className={clsx("flex items-center space-x-4")}>
          <p
            className={clsx(
              `h-6 font-semibold leading-6 tracking-wide text-custom32px ${font.className} text-white`
            )}
          >
            Find your product
          </p>
          <div className={clsx("bg-white rounded-full px-6 py-4")}>
            <input
              type="text"
              className={clsx(
                `focus:outline-none font-semibold text-custom24px placeholder:text-custom24px placeholder:text-secondaryColour ${font.className}}`
              )}
              placeholder="Search"
            />
          </div>
        </div>
      </div>
    </>
  );
}

function Header() {
  return (
    <>
      <header className={clsx("relative my-6 mx-4")}>
        <div className={clsx(`pt-36`)}>
          <h1
            className={clsx(
              `font-bold text-[64px] text-primaryColour ${font.className}`
            )}
          >
            Fun to care,
          </h1>
          <h1 className={clsx(`font-black text-[64px] ${font.className}`)}>
            Comfy Feel
          </h1>
          <p
            className={clsx(
              `font-medium text-xl text-secondaryColour w-[389px] ${font.className}`
            )}
          >
            Mauris aliquet enim quis odio lacinia, id viverra elit convallis.
            Nunc nulla massa elit
          </p>
          <button
            className={clsx(
              `bg-primaryColour rounded-lg text-white px-7 py-4 uppercase font-bold mt-8`
            )}
          >
            Shop Now
          </button>
        </div>
        <Image
          src={hero}
          alt="hero-image"
          className={clsx("absolute right-0 top-0 z-0")}
        />
        <Image
          src={circle}
          alt="circle"
          className={clsx("absolute -right-10 top-0 -z-10")}
        />
      </header>
      <div className="mt-40">
        <SearchBar />
      </div>
    </>
  );
}

export default Header;
