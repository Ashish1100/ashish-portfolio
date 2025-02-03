import { MdOutlinePhoneIphone } from "react-icons/md";
import SectionHeading from "./components/SectionHeading";
import * as data from "./data";
import { blogsData } from "./data"; // Import the blogs data
import blog5 from '@/public/blog_5.png';
import Image from "next/image"

function BlogsSection() {
  return (
    <div>
      <SectionHeading buttonUrl="/blogs" image={data.blogTitleImage}>
        {data.blogTitle}
      </SectionHeading>

      <div className="flex flex-col gap-12 mt-5">
        {blogsData.map((blog) => (
          <div key={blog.id} className="flex gap-8 p-2 rounded-md">
            <div className="w-9 mt-1">
            <Image className="size-6" width={14} height={14} src={blog5} alt="news icon" />
            </div>

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
