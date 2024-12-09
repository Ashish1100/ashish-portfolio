"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const CodeBlock = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      easing: "ease-in-out", // Easing function for the animation
      // Trigger the animation only once when it comes into view
    });
  }, []);

  const code = `
data = {
  'name': 'Ashish Saha',
  'skills': ['AI/ML', 'LLMs', 'Gen AI'],
  'socials': ['LinkedIn', 'GitHub'],
  'problem solver': True,
    
  'hire': lambda s: (
    s['problem solver'] and 
    len(s['skills']) >= 3
  )
}

is_hireable = data['hire'](data)
print(is_hireable)
`;

  return (
    <div className="max-w-[700px] m-auto border relative text-sm">
      <div className="px-5 py-5 flex items-center justify-between border-b">
        <div className="opacity-50">Python</div>
        <span className="opacity-50 text-xs">main.py</span>
      </div>
      <div className="px-5 py-8 border-zinc-600 overflow-hidden">
        <pre>
          {code.split("\n").map((line, index) => (
            <code key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              {line}
              <br />
            </code>
          ))}
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;
