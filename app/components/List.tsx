import React from "react";

import tick from "../../public/correct.png";
import Image from "next/image";

const List = () => {
  return (
    <div className=" text-xs px-0 ">
      <div className=" p-1 h-fit border relative">
        <div className="absolute -left-1 top-0">
          <span className="w-3 h-[1.2px] bg-white bg-opacity-70 absolute"></span>
          <span className="w-3 h-[1.2px] rotate-90 bg-white  bg-opacity-70 absolute"></span>
        </div>

        <div className="absolute right-1 top-0">
          <span className="w-3 h-[1.2px] bg-white bg-opacity-70 absolute"></span>
          <span className="w-3 h-[1.2px] rotate-90 bg-white  bg-opacity-70 absolute"></span>
        </div>
        <div className="absolute -left-1 bottom-0">
          <span className="w-3 h-[1.2px] bg-white bg-opacity-70 absolute"></span>
          <span className="w-3 h-[1.2px] rotate-90 bg-white  bg-opacity-70 absolute"></span>
        </div>
        <div className="absolute bottom-0 right-1">
          <span className="w-3 h-[1.2px] bg-white bg-opacity-70 absolute"></span>
          <span className="w-3 h-[1.2px] rotate-90 bg-white  bg-opacity-70 absolute"></span>
        </div>

        <div className="flex justify-between items-center mx-2">
          <Image className="size-3" src={tick} alt="tick" />
          <p className="relative inline-flex items-center w-full px-4 py-2 text-xs font-medium  border-gray-200 rounded-t-lg    ">
            Developing ML/DL Models
          </p>
        </div>
        <div className="flex justify-between items-center mx-2">
          <Image className="size-3" src={tick} alt="tick" />
          <p className="relative inline-flex items-center w-full px-4 py-2 text-xs font-medium border-gray-200 rounded-t-lg    ">
            Generative AI & LLMs
          </p>
        </div>
        <div className="flex justify-between items-center mx-2">
          <Image className="size-3" src={tick} alt="tick" />
          <p className="relative inline-flex items-center w-full px-4 py-2 text-xs font-medium  border-gray-200 rounded-t-lg    ">
            Research and Innovation
          </p>
        </div>
        <div className="flex justify-between items-center mx-2">
          <Image className="size-3" src={tick} alt="tick" />
          <p className="relative inline-flex items-center w-full px-4 py-2 text-xs font-medium border-gray-200 rounded-t-lg    ">
            Solving and Optimizing Problems 
          </p>
        </div>
      </div>
    </div>
  );
};

export default List;
