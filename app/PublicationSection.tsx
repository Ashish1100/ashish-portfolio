"use client";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import SectionHeading from "./components/SectionHeading";
import * as data from "./data";
import { ReactNode } from "react";
import { publicationsData } from "./data";
import useVisibleItems from "./hooks/useVisibleItems";

function PublicationSection() {
  const { visibleItems, toggleVisibility } = useVisibleItems(
    publicationsData,
    2
  );

  return (
    <div>
      <SectionHeading
        hanldeButtonClick={toggleVisibility}
        image={data.publicationTitleImage}
      >
        {data.publicationTitle}
      </SectionHeading>

      <div className="flex flex-col gap-12 mt-5">
        {visibleItems.map((publication) => (
          <Publication
            key={publication.id}
            image={publication.image}
            title={publication.title}
            year={publication.year}
            doi={publication.doi}
          >
            {publication.conference}
          </Publication>
        ))}
      </div>
    </div>
  );
}

export default PublicationSection;

interface PublicationProps {
  title: string;
  year: number;
  children: ReactNode;
  doi: string;
  image: StaticImageData;
}

function Publication({ title, year, children, doi, image }: PublicationProps) {
  return (
    <div className="flex gap-8 p-2 rounded-md">
      <div className="flex flex-col justify-center items-center h-fit mt-1 gap-y-2">
        <Link href={"https://www.ieee.org"}>
          <Image src={image} className="size-9 border" alt="isro" />
        </Link>
        <span className="opacity-75 text-xs">{year}</span>
      </div>
      <div>
        <p className="text-md text-zinc-600 font-semibold">{title}</p>
        <p className="text-xs mt-1.5  opacity-90">
          {children}
          <Link
            target="_blank"
            href={doi}
            className="text-[#0072A9] inline-flex items-center gap-0.5 underline"
          >
            DOI <MdArrowOutward className=" inline" />
          </Link>
        </p>
      </div>
    </div>
  );
}
