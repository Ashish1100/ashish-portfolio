import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

interface Props {
  handleSubmit: (formData: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }) => void;
}

const Form = ({ handleSubmit }: Props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Easing function for the animation
      once: true, // Run animation only once
    });
  }, []);

  return (
    <form
      data-aos="fade-down"
      className="bg-white p-4 w-full md:max-w-sm border border-gray-300 rounded-lg shadow-md"
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        handleSubmit({
          name: formData.get("name") as string,
          email: formData.get("email") as string,
          subject: formData.get("subject") as string,
          message: formData.get("message") as string,
        });
      }}
    >
      <h2
        className="text-lg font-semibold mb-4 text-gray-700 text-center"
        data-aos="fade-down"
      >
        Contact Me
      </h2>

      {/* Name */}
      <div className="mb-3" data-aos="fade-down" data-aos-delay="100">
        <label className="block text-gray-600 text-sm font-medium mb-1">
          Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="w-full p-2 border bg-gray-300/20 border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>

      {/* Email */}
      <div className="mb-3" data-aos="fade-down" data-aos-delay="200">
        <label className="block text-gray-600 text-sm font-medium mb-1">
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="Enter your valid email"
          className="w-full p-2 border border-gray-300 bg-gray-300/20 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>

      {/* Subject */}
      <div className="mb-3" data-aos="fade-down" data-aos-delay="300">
        <label className="block text-gray-600 text-sm font-medium mb-1">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          placeholder="Enter the subject"
          className="w-full p-2 border border-gray-300 bg-gray-300/20 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>

      {/* Message */}
      <div className="mb-3" data-aos="fade-down" data-aos-delay="400">
        <label className="block text-gray-600 text-sm font-medium mb-1">
          Message
        </label>
        <textarea
          name="message"
          placeholder="Your message"
          className="w-full p-2 border border-gray-300 bg-gray-300/20 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows={3}
          required
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-2 bg-[#7BD3EA] font-semibold rounded-md hover:bg-[#6ee485] transition duration-200"
        data-aos="fade-down"
        data-aos-delay="500"
      >
        Send Message
      </button>
    </form>
  );
};

export default Form;
