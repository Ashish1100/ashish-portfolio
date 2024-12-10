"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const CodeBlock = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="max-w-[700px] m-auto border relative text-sm fnt">
      <div className="px-5 py-5 flex items-center justify-between border-b">
        <div className="opacity-50">Python</div>
        <span className="opacity-50 text-xs">main.py</span>
      </div>
      <div className="px-5 py-8 border-zinc-600 overflow-hidden">
        <code className="block text-sm">
          <div data-aos="fade" data-aos-delay="100">
            <span className="text-blue-600">{`data = {`}</span>
          </div>
          <div data-aos="fade" data-aos-delay="200">
            <span className="ml-5 text-green-600">{`'name': `}</span>
            <span className="text-red-600">{`'Ashish Saha',`}</span>
          </div>
          <div data-aos="fade" data-aos-delay="300">
            <span className="ml-5 text-green-600">{`'skills': `}</span>
            <span className="text-purple-600">{`['AI/ML', 'LLMs', 'Gen AI'],`}</span>
          </div>
          <div data-aos="fade" data-aos-delay="400">
            <span className="ml-5 text-green-600">{`'socials': `}</span>
            <span className="text-purple-600">{`['LinkedIn', 'GitHub'],`}</span>
          </div>
          <div data-aos="fade" data-aos-delay="500">
            <span className="ml-5 text-green-600">{`'problem solver': `}</span>
            <span className="text-blue-600">{`True,`}</span>
          </div>
          <div data-aos="fade" data-aos-delay="600">
            <span>{` `}</span>
          </div>
          <div data-aos="fade" data-aos-delay="700">
            <span className="ml-5 text-green-600">{`'hire': `}</span>
            <span className="text-blue-600">{`lambda `}</span>
            <span className="text-orange-600">{`s: (`}</span>
          </div>
          <div data-aos="fade" data-aos-delay="800">
            <span className="ml-10">{`s['problem solver'] `}</span>
            <span className="text-blue-600">{`and`}</span>
          </div>
          <div data-aos="fade" data-aos-delay="900">
            <span className="ml-10">{`len(s['skills']) `}</span>
            <span className="text-blue-600">{`>= 3`}</span>
          </div>
          <div data-aos="fade" data-aos-delay="1000">
            <span className="ml-5 text-orange-600">{`)`}</span>
          </div>
          <div data-aos="fade" data-aos-delay="1100">
            <span className="text-blue-600">{`}`}</span>
          </div>
          <div>&nbsp;</div>
          <div data-aos="fade" data-aos-delay="1200">
            <span className="text-blue-600">{`is_hireable = `}</span>
            <span className="text-purple-600">{`data['hire'](data)`}</span>
          </div>
          <div data-aos="fade" data-aos-delay="1300">
            <span className="text-blue-600">{`print(`}</span>
            <span className="text-purple-600">{`is_hireable`}</span>
            <span className="text-blue-600">{`)`}</span>
          </div>
        </code>
      </div>
    </div>
  );
};

export default CodeBlock;
