import React from "react";
import Image from "next/image";
import tick from "../../public/correct.png";

const List = () => {
  return (
    <div className="text-xs px-0">
      <div className="p-1 h-fit border relative bg-zinc-100 bg-opacity-50 ">
        

        {[
          "Developing ML/DL Models",
          "Generative AI & LLMs",
          "Research and Innovation",
          "Solving and Optimizing Problems",
        ].map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center mx-2 mb-2 last:mb-0"
          >
            <Image
              className="size-3"
              src={tick || "/placeholder.svg"}
              alt="tick"
            />
            <p className="relative inline-flex items-center w-full px-4 py-2 text-xs font-medium text-black">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
