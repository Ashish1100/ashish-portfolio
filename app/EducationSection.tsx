"use client";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "./components/SectionHeading";
import { educationData, educationTitleImage, educationTitle } from "./data";
import useVisibleItems from "./hooks/useVisibleItems";

function EducationSection() {
  const { visibleItems, toggleVisibility } = useVisibleItems(educationData, 2);

  return (
    <>
      <SectionHeading
        hanldeButtonClick={toggleVisibility}
        image={educationTitleImage}
      >
        {educationTitle}
      </SectionHeading>

      <div className="flex flex-col gap-12 mt-5">
        {visibleItems.map((education) => (
          <div key={education.id} className="flex gap-8 p-2 rounded-md">
            <Link href={education.link}>
              <Image
                src={education.image}
                className="size-16 border rounded-md shadow-sm shadow-black"
                alt={education.university}
              />
            </Link>
            <div className="flex-1">
              <p className="text-md text-zinc-600 font-semibold">
                {education.university}
              </p>
              <p className="text-xs mt-1.5 opacity-80">{education.degree}</p>
              <p className="text-styling">{education.duration}</p>
              <p className="text-styling">{education.location}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default EducationSection;
