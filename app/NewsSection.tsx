"use client";

import { newsData, newsTitleImage, newsTitle } from "./data";
import SectionHeading from "./components/SectionHeading";
import useVisibleItems from "./hooks/useVisibleItems";

import { FaRegNewspaper } from "react-icons/fa";



function NewsSection() {
  const { visibleItems, toggleVisibility } = useVisibleItems(newsData, 3);

  return (
    <>
      <div>
        <SectionHeading
          hanldeButtonClick={toggleVisibility}
          image={newsTitleImage}
        >
          {newsTitle}
        </SectionHeading>
        <div className="flex flex-col gap-12 mt-5">
          {visibleItems.map((news, index) => (
            <News key={index} date={news.date}>
              {news.content}
            </News>
          ))}
        </div>
      </div>
    </>
  );
}

export default NewsSection;

function News({ children, date }: { children: React.ReactNode; date: string }) {
  return (
    <div className="flex gap-3 p-2 rounded-md items-center ">
  
        <div className="">
          <FaRegNewspaper size={25}/>
        </div>

      <div>
        <p className="text-sm">
          {children}
          <span className="text-xs ml-2">{date}</span>
        </p>
      </div>
    </div>
  );
}
