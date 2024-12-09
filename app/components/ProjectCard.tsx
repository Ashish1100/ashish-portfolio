"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

interface Props {
  id: number;
  image: string | StaticImageData;
  title: string;
  description: string;
  tech: (string | StaticImageData)[];
  url?: string | undefined;
  github: string;
}

const ProjectCard = ({
  id,
  image,
  title,
  description,
  tech,
  url,
  github,
}: Props) => {
  return (
    <div data-aos="fade-up" className=" border relative bg-zinc-100 text-black rounded overflow-hidden">
      <div className="absolute -left-1.5 top-0">
        <span className="w-3 h-[1.2px] bg-black bg-opacity-70 absolute"></span>
        <span className="w-3 h-[1.2px] rotate-90 bg-black  bg-opacity-70 absolute"></span>
      </div>

      <div className="absolute bottom-0 right-1">
        <span className="w-3 h-[1.2px] bg-black bg-opacity-70 absolute"></span>
        <span className="w-3 h-[1.2px] rotate-90 bg-black  bg-opacity-70 absolute"></span>
      </div>

      <Link href={`/projects/${id}`} className="border-b">
        <Image className="object-cover md:h-[180px]" src={image} alt={title} />
      </Link>

      <div className="p-4">
        <div className="flex justify-between items-center">
          <Link href={`/projects/${id}`}>
            <h3 className=" font-bold my-3 hover:text-violet-500 ">{title}</h3>
          </Link>
          {url && (
            <a
              className="rounded bg-green-100  text-green-800 text-xs me-2 px-2.5 py-0.5 dark:bg-green-900 dark:text-green-300"
              href={url}
              target="_blank"
            >
              Live
            </a>
          )}
        </div>

        <p className="opacity-80 text-sm">{description}</p>

        <div className="flex justify-between items-center mt-3 gap-1">
          <div className="flex relative ">
            {tech.map((t, i) => (
              <div
                key={i}
                className={`p-[3px] bg-white border-[0.5px] border-gray-500 rounded-full ${
                  i !== 0 ? "-ml-2" : ""
                }`}
              >
                <Image
                  className="rounded-full"
                  width={21}
                  height={21}
                  key={i}
                  src={t}
                  alt={i + ""}
                />
              </div>
            ))}
          </div>
          <a
            href={github}
            target="_blank"
            className="p-2  text-sm  bg-zinc-100 hover:bg-zinc-300 rounded-md"
          >
            <GoArrowUpRight />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
