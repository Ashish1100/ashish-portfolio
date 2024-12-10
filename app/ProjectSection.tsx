"use client";

import { ProjectList } from "./data";
import ProjectCard from "./components/ProjectCard";
import * as data from "./data";
import SectionHeading from "./components/SectionHeading";
import useVisibleItems from "./hooks/useVisibleItems";

function ProjectSection() {
  const { visibleItems, toggleVisibility } = useVisibleItems(ProjectList, 4);
  

  return (
    <>
      <div>
        <SectionHeading
          hanldeButtonClick={toggleVisibility}
          image={data.projectTitleImage}
        >
          {data.projectTitle}
        </SectionHeading>

        <div className="mt-6 ">
          <div className="grid sm:grid-cols-2 grid-flow-row  lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
            {visibleItems.map(
              ({ description, github, id, image, tech, url, title }) => (
                <ProjectCard
                  description={description}
                  github={github}
                  id={id}
                  image={image}
                  tech={tech}
                  title={title}
                  key={id}
                  url={url}
                />
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectSection;
