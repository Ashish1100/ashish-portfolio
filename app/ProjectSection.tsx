"use client";

import { ProjectList } from "./data";
import ProjectCard from "./components/ProjectCard";
import * as data from "./data";
import SectionHeading from "./components/SectionHeading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function ProjectSection() {
  return (
    <>
      <div>
        <SectionHeading buttonUrl="/projects" image={data.projectTitleImage}>
          {data.projectTitle}
        </SectionHeading>
        <Tabs defaultValue="aiml" className="p-1 my-3 mt-6">
          <div className="w-full mx-auto flex sm:justify-center sm:overflow-hidden overflow-x-scroll rounded-md">
            <TabsList className="">
              <TabsTrigger value="aiml">AIML</TabsTrigger>
              <TabsTrigger value="genai">Gen AI & LLMs</TabsTrigger>
              <TabsTrigger value="mlops">MLOps</TabsTrigger>
              <TabsTrigger value="qml">QML</TabsTrigger>
              <TabsTrigger value="more">More</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="aiml">
            <div className="grid md:grid-cols-2 mt-3 lg:grid-cols-3 xl:grid-cols-4 md:p-0 gap-4">
              {ProjectList.slice(0, 4)
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
          <TabsContent value="genai">
            <div className="grid md:grid-cols-2 mt-3 lg:grid-cols-3 xl:grid-cols-4 md:p-0 gap-4">
              {ProjectList.filter((p) => p.category === "genai").map((p) => (
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
          <TabsContent value="mlops">
            <div className="grid md:grid-cols-2 mt-3 lg:grid-cols-3 xl:grid-cols-4 md:p-0 gap-4">
              {ProjectList.filter((p) => p.category === "mlops").map((p) => (
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
          <TabsContent value="qml">
            <div className="grid md:grid-cols-2 mt-3 lg:grid-cols-3 xl:grid-cols-4 md:p-0 gap-4">
              {ProjectList.filter((p) => p.category === "qml").map((p) => (
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
          <TabsContent value="more">
            <div className="grid md:grid-cols-2 mt-3 lg:grid-cols-3 xl:grid-cols-4 md:p-0 gap-4">
              {ProjectList.filter((p) => p.category === "more").map((p) => (
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
