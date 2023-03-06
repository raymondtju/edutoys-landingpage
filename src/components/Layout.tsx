import clsx from "clsx";
import React from "react";

function Layout({ children }: any) {
  return (
    <div className={clsx(`max-w-[1440px] mx-auto px-[112px] overflow-hidden`)}>
      {children}
    </div>
  );
}

export default Layout;
