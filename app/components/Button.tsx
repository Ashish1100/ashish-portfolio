"use client";

import { MdArrowOutward } from "react-icons/md";

interface Props {
  handleClick: () => void;
}

const Button = ({ handleClick }: Props) => {
  return (
    <button
      onClick={handleClick}
      className="opacity-70 text-xs px-2 py-1 h-6 rounded-md  hover:-translate-y-[1px] transition-all underline underline-offset-4 flex items-center justify-center gap-1 hover:text-blue-600"
    >
      Show all
      <MdArrowOutward />
    </button>
  );
};

export default Button;
