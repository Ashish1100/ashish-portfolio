"use client";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { newsData, newsTitleImage, newsTitle } from "./data";
import SectionHeading from "./components/SectionHeading";
import useVisibleItems from "./hooks/useVisibleItems";

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
    <div className="flex gap-8 p-2 rounded-md">
      <div className="w-9 mt-1">
        <MdOutlinePhoneIphone className="size-8" />
      </div>

      <div>
        <p>
          {children}
          <span className="text-xs ml-2">{date}</span>
        </p>
      </div>
    </div>
  );
}
