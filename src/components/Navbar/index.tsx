import Image from "next/image";
import React, { useState } from "react";
import clsx from "clsx";

import logo from "/public/assets/images/logo.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navItems = [
  {
    title: "Home",
    href: "#",
  },
  {
    title: "Products",
    href: "#",
  },
  {
    title: "Resources",
    href: "#",
  },
  {
    title: "Pricing",
    href: "#",
  },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <nav
      className={clsx(
        `flex justify-between mt-9 ${isOpen && "relative"}`,
        `duration-200 transition-all`
      )}
    >
      <div className={clsx(`flex items-center`)}>
        <Image src={logo} alt="logo" />
        <ul
          className={clsx(
            `md:ml-7 md:flex md:flex-row md:space-x-8 md:mt-0 md:static md:bg-transparent md:rounded-0 md:py-0 md:w-full md:border-0`,
            `${
              isOpen
                ? "absolute top-0 flex mt-14 border-[1px] bg-white rounded-lg z-10 py-4 w-5/12 right-0 overflow-hidden opacity-100"
                : "hidden"
            } flex-col`,
            `duration-200 transition-all`
          )}
        >
          {navItems.map((navItem, index) => (
            <li
              key={index}
              className={clsx(
                `${isOpen && "flex justify-end mx-2 mb-1"}`,
                `md:mx-0 md:mb-0`
              )}
            >
              {navItem.title}
            </li>
          ))}
        </ul>
      </div>
      <div
        className={clsx(
          `md:flex md:flex-row flex-col items-center space-x-3 hidden`
        )}
      >
        <button className={clsx(`px-4 py-3 rounded-lg`)}>Log in</button>
        <button
          className={clsx(`px-4 py-3 bg-[#7F56D9] text-white rounded-xl`)}
        >
          Sign up
        </button>
      </div>
      <div
        className={clsx(
          "flex items-center p-2 border-[1px] rounded-lg md:hidden"
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <XMarkIcon className="w-6 h-6" />
        ) : (
          <Bars3Icon className="w-6 h-6" />
        )}
      </div>
    </nav>
  );
}

export default Navbar;
