import { ProjectList } from "@/app/data";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import githubLogo from "@/public/github.png";

interface Props {
  params: { id: string };
}

const ProjectDetailPage = ({ params: { id } }: Props) => {
  const project = ProjectList.find((p) => p.id === parseInt(id));

  return (
    <div className="px-[1rem] md:px-[9rem] mt-[2.3rem]">
      <Link href={"../"}>
        <MdOutlineKeyboardBackspace className="mb-7 opacity-60" size={30} />
      </Link>

      <div className="flex justify-between flex-col lg:flex-row">
        <p className="text-2xl sm:text-3xl font-bold">{project?.title}</p>
      </div>

      <div className="p-4  sm:p-4  rounded-lg flex flex-col xl:flex-row-reverse gap-x-11 gap-y-4 mt-5 bg-zinc-50">
        <div className="h-fit overflow-hidden  rounded-md flex-1 bg-zinc-100 p-3 md:mr-6 md:mt-6">
          {project?.image && (
            <Image
              className="rounded object-cover w-full p-3"
              src={project?.image}
              alt={project.title}
            />
          )}

          <div className=" p-6">
            <div className="flex gap-3 items-center justify-between">
              <Link
                href={project?.url || "#"}
                target="_blank"
                className="border cursor-pointer border-black/60 size-fit px-3 rounded-full text-sm flex gap-1.5 items-center hover:bg-zinc-300"
              >
                Live
                <div className="size-1.5 bg-green-400 rounded-full"></div>
              </Link>

              <a href={project?.github} target="_blank" className="  text-sm">
                <Image
                  src={githubLogo}
                  alt="github"
                  width={20}
                  height={20}
                  className="opacity-70 hover:opacity-100"
                />
              </a>
              <a
                href={project?.ppt}
                target="_blank"
                className=" bg-black opacity-75 hover:opacity-100 text-white text-sm px-5 cursor-pointer rounded-sm"
              >
                PPT
              </a>
              <a
                href={project?.report}
                target="_blank"
                className=" bg-black opacity-75 hover:opacity-100 text-white text-sm px-5 cursor-pointer rounded-sm"
              >
                Report
              </a>
            </div>
          </div>
        </div>

        <div className="text-zinc-700 dark:text-white lg:w-[60%] p-6">
          <p className="p-1 bg-purple-100 text-purple-800  text-xs font-bold me-2 px-2.5 py-1 rounded dark:bg-purple-900 dark:text-purple-300 w-fit">
            {project?.category}
          </p>

          <div>
            <p className="opacity-50 text-sm mt-4">Description</p>
            <p className="mt-1 xl:mr-[3rem] dark:text-zinc-300 w-full">
              {project?.detailedDescription}
            </p>
          </div>
          <div>
            <p className="opacity-50 text-sm mt-4 mb-2">Features</p>
            <ul>
              {project?.features?.map((f, i) => (
                <li className="dark:text-zinc-300" key={i}>{`${
                  i + 1
                }.  ${f}`}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="opacity-50 text-sm mt-5">Status</p>
            <div className="flex items-center gap-2">
              <div className="size-1.5 rounded-full bg-[#50E3C2]"></div>
              <p>{project?.url ? "Live" : "Ready"}</p>
            </div>
          </div>

          <div>
            <p className="opacity-50 text-sm mt-5">Tech Stack</p>
            <div className="flex gap-2 mt-2">
              {project?.tech.map((t, i) => (
                <div
                  key={i}
                  className="p-2 px-2 dark:bg-zinc-900 bg-zinc-200 rounded-md w-fit flex-wrap"
                >
                  <Image
                    className="rounded-sm"
                    width={20}
                    height={20}
                    key={i}
                    src={t}
                    alt={i + ""}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
