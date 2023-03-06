import React, { Fragment } from "react";
import Layout from "../Layout";

import footerbg from "/public/assets/images/bg-footer.png";
import logo from "/public/assets/images/big-logo.png";
import clsx from "clsx";
import Image from "next/image";

const linksData = [
  {
    title: "Product",
    links: [
      {
        title: "Overview",
        href: "#",
      },
      {
        title: "Features",
        href: "#",
      },
      {
        title: "Solutions",
        href: "#",
        badge: "New",
      },
      {
        title: "Tutorials",
        href: "#",
      },
      {
        title: "Pricing",
        href: "#",
      },
      {
        title: "Releases",
        href: "#",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        title: "About Us",
        href: "#",
      },
      {
        title: "Careers",
        href: "#",
      },
      {
        title: "Press",
        href: "#",
      },
      {
        title: "News",
        href: "#",
      },
      {
        title: "Media Kit",
        href: "#",
      },
      {
        title: "Contact",
        href: "#",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        title: "Blog",
        href: "#",
      },
      {
        title: "Newsletter",
        href: "#",
      },
      {
        title: "Events",
        href: "#",
      },
      {
        title: "Help Center",
        href: "#",
      },
      {
        title: "Tutorials",
        href: "#",
      },
      {
        title: "Support",
        href: "#",
      },
    ],
  },
];

function Footer() {
  return (
    <div
      className="bg-center bg-no-repeat bg-cover py-14"
      style={{
        backgroundImage: `url(${footerbg.src})`,
      }}
    >
      <Layout>
        <div className="grid grid-cols-2">
          <Image src={logo} alt="logo" className="w-[251px]" />

          <div className="flex">
            {linksData.map((link, index) => (
              <Fragment key={index}>
                <div className={clsx("flex-1")}>
                  <div
                    className={clsx(
                      "mb-4 text-secondaryColour font-semibold text-sm"
                    )}
                  >
                    {link.title}
                  </div>
                  <ul
                    className={clsx("flex flex-col text-[#667085] font-medium")}
                  >
                    {link.links.map((item, index) => (
                      <li className="flex items-center mb-3" key={index}>
                        <a href="#" target="_blank">
                          {item.title}
                        </a>
                        {item.badge && (
                          <span className="bg-[#ECFDF3] text-[#027A48] rounded-2xl py-0.5 px-2 text-xs ml-1">
                            New
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
        <div className="flex justify-end mt-[110px]">
          <div className="font-normal text-secondaryColour">
            <span>© 2023, Raymond Tju</span>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Footer;
