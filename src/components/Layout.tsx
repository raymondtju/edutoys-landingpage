import clsx from "clsx";
import React from "react";

function Layout({ children }: any) {
  return (
    <div
      className={clsx(
        `max-w-[1440px] mx-auto overflow-hidden px-4`,
        `xl:px-[112px] lg:px-[80px] md:px-[40px] sm:px-[24px]`
      )}
    >
      {children}
    </div>
  );
}

export default Layout;
