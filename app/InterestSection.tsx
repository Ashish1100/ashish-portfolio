import CodeBlock from "./components/CodeBlock";
import List from "./components/List";
import SectionHeading from "./components/SectionHeading";
import * as data from "./data";

function InterestSection() {
  return (
    <>
      <div>
        <SectionHeading
          buttonVisibility={false}
          image={data.interestTitleImage}
        >
          {data.interestTitle}
        </SectionHeading>

        <div className="mt-6 flex flex-col justify-center items-center gap-3">
          <div className="flex flex-col gap-3 ">
            <List />

            {/* Marquee Text */}
            <p className="text-center my-4 overflow-hidden relative w-full">
              <span className="inline-block whitespace-nowrap animate-marquee text-sm">
                Ideas Become Reality! → Let&apos;s Go
              </span>
            </p>

            <CodeBlock />
          </div>
        </div>
      </div>
    </>
  );
}

export default InterestSection;
