"use client";

import { ProjectList } from "./data";
import ProjectCard from "./components/ProjectCard";
import * as data from "./data";
import SectionHeading from "./components/SectionHeading";
import useVisibleItems from "./hooks/useVisibleItems";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
        <Tabs defaultValue="top" className="p-1 my-3 mt-6">
          <div className="w-full flex justify-center">
            <TabsList className="">
              <TabsTrigger  value="top">
                Top
              </TabsTrigger>
              <TabsTrigger  value="aiml">
                Aiml
              </TabsTrigger>
              <TabsTrigger value="ds">
                Data Science
              </TabsTrigger>
              <TabsTrigger value="wd">
                Web Dev
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="top">
            <div className="grid md:grid-cols-2 mt-3 lg:grid-cols-3 xl:grid-cols-4 md:p-0 gap-4">
              {visibleItems
                .filter((p) => p.tag === "top")
                .map((p) => (
                  <ProjectCard
                    key={p.id}
                    id={p.id}
                    description={p.description}
                    image={p.image}
                    tech={p.tech}
                    title={p.title}
                    url={p.url}
                    github={p.github}
                  />
                ))}
            </div>
          </TabsContent>
          <TabsContent value="aiml">
            <div className="grid md:grid-cols-2 mt-3 lg:grid-cols-3 xl:grid-cols-4 md:p-0 gap-4">
              {ProjectList
                .filter((p) => p.category === "aiml")
                .map((p) => (
                  <ProjectCard
                    key={p.id}
                    id={p.id}
                    description={p.description}
                    image={p.image}
                    tech={p.tech}
                    title={p.title}
                    url={p.url}
                    github={p.github}
                  />
                ))}
            </div>
          </TabsContent>
          <TabsContent value="ds">
            <div className="grid md:grid-cols-2 mt-3 lg:grid-cols-3 xl:grid-cols-4 md:p-0 gap-4">
              {ProjectList
                .filter((p) => p.category === "data science")
                .map((p) => (
                  <ProjectCard
                    key={p.id}
                    id={p.id}
                    description={p.description}
                    image={p.image}
                    tech={p.tech}
                    title={p.title}
                    url={p.url}
                    github={p.github}
                  />
                ))}
            </div>
          </TabsContent>
          <TabsContent value="wd">
            <div className="grid md:grid-cols-2 mt-3 lg:grid-cols-3 xl:grid-cols-4 md:p-0 gap-4">
              {ProjectList
                .filter((p) => p.category === "webdev")
                .map((p) => (
                  <ProjectCard
                    key={p.id}
                    id={p.id}
                    description={p.description}
                    image={p.image}
                    tech={p.tech}
                    title={p.title}
                    url={p.url}
                    github={p.github}
                  />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}

export default ProjectSection;
