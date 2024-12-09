"use client";
import Image, { StaticImageData } from "next/image";
import briefcase from "@/public/briefcase.jpg";
import SectionHeading from "./components/SectionHeading";
import Link from "next/link";
import * as data from "./data";
import { workList } from "./data";
import useVisibleItems from "./hooks/useVisibleItems";

function WorkSection() {
  const { visibleItems, toggleVisibility } = useVisibleItems(workList, 2);

  return (
    <>
      <SectionHeading hanldeButtonClick={toggleVisibility} image={briefcase}>
        {data.workTitle}
      </SectionHeading>

      <div className="flex flex-col gap-12 mt-5">
        {visibleItems.map((work) => (
          <Work
            key={work.id}
            title={work.title}
            url={work.url}
            image={work.image}
          >
            <p className="text-xs mt-1.5 opacity-90">{work.locationPeriod}</p>
            <p className="text-xs opacity-90 mt-px">{work.description}</p>
          </Work>
        ))}
      </div>
    </>
  );
}

export default WorkSection;

interface WorkProps {
  image: StaticImageData;
  children: React.ReactNode;
  url: string;
  title: string;
}

function Work({ image, children, url, title }: WorkProps) {
  return (
    <div className="flex gap-8 p-2 rounded-md">
      <Link target="_blank" href={url}>
        <Image
          src={image}
          className="size-16 border shadow-sm shadow-black rounded "
          alt="isro"
        />
      </Link>
      <div>
        <p className="text-md text-zinc-600 font-semibold">{title}</p>
        {children}
      </div>
    </div>
  );
}
