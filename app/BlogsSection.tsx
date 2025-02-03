
import SectionHeading from "./components/SectionHeading";
import * as data from "./data";
import { blogsData } from "./data"; // Import the blogs data

import { PiBookOpenTextDuotone } from "react-icons/pi";


function BlogsSection() {
  return (
    <div>
      <SectionHeading buttonUrl="/blogs" image={data.blogTitleImage}>
        {data.blogTitle}
      </SectionHeading>

      <div className="flex flex-col gap-12 mt-5">
        {blogsData.map((blog) => (
          <div key={blog.id} className="flex gap-4 p-2 rounded-md items-center">
            <PiBookOpenTextDuotone size={25}/>

            <div className="text-sm">
              <span className="">{blog.title}</span>
              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline inline mx-2 underline-offset-4"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogsSection;
