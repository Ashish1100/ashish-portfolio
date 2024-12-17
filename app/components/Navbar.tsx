"use client";
import { useState, useEffect, useRef } from "react";
import { navMenuItems } from "../data";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close the menu if the click is outside of the nav menu
  useEffect(() => {
    const handleClickOutside = (event: { target: unknown }) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        isMenuOpen
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

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
    <nav className="relative">
      {/* Hamburger Icon */}
      <button
        onClick={toggleMenu}
        className={`fixed top-4 right-4 z-50 text-2xl ${isMenuOpen ? `text-gray-100 hover:text-gray-300` : 'text-gray-700 hover:text-gray-800'  }  focus:outline-none`}
      >
        {isMenuOpen ? "✖" : "☰"}
      </button>

      {/* Full-Screen Menu (Sliding from right to left) */}
      <div
        ref={menuRef} // Add reference to detect clicks outside
        className={`fixed top-0 right-0 bottom-0 bg-gray-600 text-white z-40 flex flex-col items-center justify-center gap-6 w-[60%] lg:w-[20%] transition-transform duration-300 ease-in-out ${
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
