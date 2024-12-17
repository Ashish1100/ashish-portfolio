"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import Button from "./Button";

interface Props {
  image: StaticImageData;
  children: React.ReactNode;
  hanldeButtonClick?: () => void;
  buttonVisibility?: boolean;
  buttonUrl?: string;
}

const SectionHeading = ({
  children,
  image,
  hanldeButtonClick = () => {},
  buttonVisibility = true,
  buttonUrl,
}: Props) => {
  return (
    <div className="flex justify-between w-full h-fit">
      <h2 className="text-xl flex items-center gap-2 ">
        {" "}
        <Image className="size-4 mb-1" src={image} alt="Experience" />{" "}
        {children}
      </h2>
      {buttonVisibility && (
        <Button url={buttonUrl} handleClick={hanldeButtonClick} />
      )}
    </div>
  );
};

export default SectionHeading;
