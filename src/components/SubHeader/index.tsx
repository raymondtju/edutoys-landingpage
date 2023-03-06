import React from "react";

import { Nunito } from "next/font/google";
import clsx from "clsx";
const font = Nunito({ subsets: ["latin"] });

interface SubHeaderProps {
  part: string;
  title?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

function SubHeader({
  part,
  title,
  description,
  align,
  className,
}: SubHeaderProps) {
  return (
    <div className={clsx(`text-${align} ${className}`)}>
      <p className={clsx("text-custom16px font-semibold text-primaryColour")}>
        {part}
      </p>
      <h2 className={clsx(`text-4xl font-bold ${font.className} mt-3`)}>
        {title}
      </h2>
      <p
        className={clsx(
          `text-custom20px text-secondaryColour mt-5 w-8/12`,
          `${align === "center" ? "mx-auto" : ""}`
        )}
      >
        {description}
      </p>
    </div>
  );
}

export default SubHeader;
