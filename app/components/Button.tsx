"use client";

import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  handleClick: () => void;
  url?: string;
}

const Button = ({ handleClick, url }: Props) => {
  const buttonContent = (
    <button
      onClick={handleClick}
      className="opacity-70 text-xs px-2 py-1 h-6 rounded-md hover:-translate-y-[1px] transition-all underline underline-offset-4 flex items-center justify-center gap-1 hover:text-blue-600"
    >
      Show all
      <MdArrowOutward />
    </button>
  );

  return url ? (
    <Link target="_blank" href={url}>
      {buttonContent}
    </Link>
  ) : (
    buttonContent
  );
};

export default Button;
