import Image from "next/image";
import React from "react";
import clsx from "clsx";

import logo from "/public/assets/images/logo.png";

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
  return (
    <nav className={clsx(`flex justify-between mt-9`)}>
      <div className={clsx(`flex items-center`)}>
        <Image src={logo} alt="logo" />
        <ul className={clsx(`ml-7 flex space-x-8`)}>
          {navItems.map((navItem, index) => (
            <li key={index}>{navItem.title}</li>
          ))}
        </ul>
      </div>
      <div className={clsx(`flex items-center space-x-3`)}>
        <button className={clsx(`px-4 py-3 rounded-lg`)}>Log in</button>
        <button
          className={clsx(`px-4 py-3 bg-[#7F56D9] text-white rounded-xl`)}
        >
          Sign up
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
