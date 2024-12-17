import BlogsSection from "./BlogsSection";
import Navbar from "./components/Navbar";
import ContactSection from "./ContactSection";
import EducationSection from "./EducationSection";
import HeroSection from "./HeroSection";
import InterestSection from "./InterestSection";
import NewsSection from "./NewsSection";
import ProjectSection from "./ProjectSection";
import PublicationSection from "./PublicationSection";
import WorkSection from "./WorkSection";

const Home = () => {
  console.log("hello world");

  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="max-w-4xl md:h-screen mx-auto flex md:items-center md:justify-center p-2">
        <HeroSection />
      </div>
      <div
        id="experience"
        className="max-w-6xl  mx-auto flex flex-col  px-4 py-8"
      >
        <hr className="mb-5" />
        <WorkSection />
      </div>
      <div
        id="education"
        className="max-w-6xl  mx-auto flex flex-col  px-4 py-8"
      >
        <hr className="mb-5" />
        <EducationSection />
      </div>
      <div id="project" className="max-w-6xl mx-auto flex flex-col  px-4 py-8">
        <hr className="mb-5" />
        <ProjectSection />
      </div>
      <div
        id="publication"
        className="max-w-6xl mx-auto flex flex-col  px-4 py-8"
      >
        <hr className="mb-5" />
        <PublicationSection />
      </div>
      <div id="news" className="max-w-6xl mx-auto flex flex-col  px-4 py-8">
        <hr className="mb-5" />
        <NewsSection />
      </div>
      <div id="interest" className="max-w-6xl mx-auto flex flex-col  px-4 py-8">
        <hr className="mb-5" />
        <InterestSection />
      </div>
      <div id="blogs" className="max-w-6xl  mx-auto flex flex-col  px-4 py-8">
        <hr className="mb-5" />
        <BlogsSection />
      </div>
      <div id="contact" className="max-w-6xl mx-auto flex flex-col  px-4 py-8">
        <hr className="mb-5" />
        <ContactSection />
      </div>
      
    </div>
  );
};

export default Home;
