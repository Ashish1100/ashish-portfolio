import React from "react"
import Image from "next/image"
import tick from "../../public/correct.png"

const List = () => {
  return (
    <div className="text-xs px-0">
      <div className="p-1 h-fit border relative bg-gray-800 bg-opacity-50 ">
        <div className="absolute -left-1 top-0">
          <span className="w-3 h-[1.2px] bg-black absolute"></span>
          <span className="w-3 h-[1.2px] rotate-90 bg-black absolute"></span>
        </div>
        <div className="absolute right-1 top-0">
          <span className="w-3 h-[1.2px] bg-black absolute"></span>
          <span className="w-3 h-[1.2px] rotate-90 bg-black absolute"></span>
        </div>
        <div className="absolute -left-1 bottom-0">
          <span className="w-3 h-[1.2px] bg-black absolute"></span>
          <span className="w-3 h-[1.2px] rotate-90 bg-black absolute"></span>
        </div>
        <div className="absolute bottom-0 right-1">
          <span className="w-3 h-[1.2px] bg-black absolute"></span>
          <span className="w-3 h-[1.2px] rotate-90 bg-black absolute"></span>
        </div>

        {[
          "Developing ML/DL Models",
          "Generative AI & LLMs",
          "Research and Innovation",
          "Solving and Optimizing Problems",
        ].map((item, index) => (
          <div key={index} className="flex justify-between items-center mx-2 mb-2 last:mb-0">
            <Image className="size-3" src={tick || "/placeholder.svg"} alt="tick" />
            <p className="relative inline-flex items-center w-full px-4 py-2 text-xs font-medium text-white">{item}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default List

