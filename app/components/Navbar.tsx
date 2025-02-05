"use client";
import { useState, useEffect, useRef } from "react";
import { navMenuItems } from "../data";
import LiveUserCount from "../components/LiveUserCount";
import io from "socket.io-client";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const socket = io(API_URL, { autoConnect: false });

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  // states for live user count
    const [views, setViews] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close the menu if the click is outside of the nav menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target) &&
        isMenuOpen
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);


    // Fetch live user count// logic for live view count
      function fetchLiveViewCount() {
        try {
          socket.connect();
          socket.on("count", (count) => {
            setViews(count);
          });
    
          // Show after 7sec on mount
          setTimeout(() => {
            setIsVisible(true);
          }, 10000);
          setTimeout(() => setIsVisible(false), 15000);
    
          // Show every 2 minute
          const interval = setInterval(() => {
            setIsVisible(true);
            setTimeout(() => setIsVisible(false), 10000);
          }, 160000);
    
          return () => {
            socket.disconnect();
            clearInterval(interval);
          };
        } catch (error) {
          console.log("Error in FloatingUserCount: ", error);
          setIsVisible(false);
        }
      }

      // calling the function
      fetchLiveViewCount();




    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Disable scrolling when the menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <nav className="relative ">

      {/* Live User Count */}
      <LiveUserCount views={views} isVisible={isVisible} setIsVisible={setIsVisible}/>
      
      {/* Hamburger Icon */}
      <button
        ref={buttonRef} // Add reference to the button
        onClick={toggleMenu}
        className={`fixed top-4 right-4 z-50 text-2xl ${
          isMenuOpen
            ? `text-gray-100 hover:text-gray-300`
            : "text-gray-700 hover:text-gray-800"
        } focus:outline-none`}
      >
        {isMenuOpen ? "✖" : "☰"}
      </button>

      

      {/* Full-Screen Menu (Sliding from right to left) */}
      <div
        ref={menuRef} // Add reference to detect clicks outside
        className={`fixed top-0 right-0 bottom-0 bg-[#1c2628] text-white z-40 flex flex-col items-center justify-center gap-6 w-[60%] lg:w-[20%] transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "transform translate-x-0" : "transform translate-x-full"
        }`}
      >
        {navMenuItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target={
              item.name === "About Me" || item.name === "Resume"
                ? "_blank"
                : "_self"
            }
            className="text-xl font-semibold text-gray-100 hover:text-gray-300"
            onClick={closeMenu}
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
