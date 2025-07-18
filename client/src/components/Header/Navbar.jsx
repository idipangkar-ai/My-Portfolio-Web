import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiMenu,
  FiSettings,
  FiUser,
  FiStar,
  FiBriefcase,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiX,
  FiArrowRight,
} from "react-icons/fi";

const NavBar = () => {
  const [isLeftOpen, setIsLeftOpen] = useState(false);
  const [isRightOpen, setIsRightOpen] = useState(false);

  const closeMenus = () => {
    setIsLeftOpen(false);
    setIsRightOpen(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) closeMenus();
  };

  return (
    <>
      {/* Overlay */}
      {(isLeftOpen || isRightOpen) && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={handleOverlayClick}
        />
      )}
      {/* Left Drawer */}
      <div
        className={`fixed bg-[var(--color-gray-1)] top-0 left-0 h-full w-64 shadow-md z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isLeftOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Icon */}
        <button
          onClick={closeMenus}
          className="bg-[var(--color-gray-2)] w-[95%] h-12 rounded-full absolute top-2 right-2 flex justify-end items-center pr-2 group transition-all duration-300 mx-auto"
        >
          <span className="bg-[var(--color-gray-5)] text-white rounded-full p-2 text-xl transform transition-transform duration-300 group-hover:rotate-180 group-hover:scale-110">
            <FiX />
          </span>
        </button>

        <div className="pt-16 p-4 flex flex-col justify-between h-full">
          {/* Top Icons */}
          <div>
            <div className="flex justify-around mb-6 text-xl text-white">
              <FiUser />
              <FiStar />
              <FiBriefcase />
            </div>
            <h2 className="text-lg font-bold mb-4">Menu</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/" onClick={closeMenus}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={closeMenus}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" onClick={closeMenus}>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={closeMenus}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Bottom Icons */}
          <div className="flex justify-around mt-6 text-xl text-white">
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <FiGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FiLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FiTwitter />
            </a>
          </div>
        </div>
      </div>
      {/* Right Drawer */}
      <div
        className={`fixed bg-[var(--color-gray-1)] top-0 right-0 h-full w-64 shadow-md z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isRightOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Icon */}
        <button
          onClick={closeMenus}
          className="bg-[var(--color-gray-2)] w-[95%] h-12 rounded-full absolute top-2 left-2 flex justify-start items-center pl-2 group transition-all duration-300 mx-auto"
        >
          <span className="bg-[var(--color-gray-5)] text-white rounded-full p-2 text-xl transform transition-transform duration-300 group-hover:rotate-180 group-hover:scale-110">
            <FiX />
          </span>
        </button>

        <div className="pt-16 p-4 flex flex-col justify-between h-full">
          {/* Top Icons */}
          <div>
            <div className="flex justify-around mb-6 text-xl text-white">
              <FiUser />
              <FiStar />
              <FiBriefcase />
            </div>
            <h2 className="text-lg font-bold mb-4">Settings</h2>
            <p className="text-sm text-gray-300">Coming soon...</p>
          </div>

          {/* Bottom Icons */}
          <div className="flex justify-around mt-6 text-xl text-white">
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <FiGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FiLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FiTwitter />
            </a>
          </div>
        </div>
      </div>
      {/* Navbar */}

      <nav className="dh-bg-blur-i absolute gradient-bottom-border rounded-full w-[96%] md:w-[99%] mx-auto my-2 shadow-lg z-20">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Left: Hamburger + Logo */}
          <div className="flex items-center gap-4">
            <button
              className="md:hidden text-2xl"
              onClick={() => setIsLeftOpen(true)}
            >
              <FiMenu />
            </button>
            <div className="flex items-center gap-2 font-bold text-xl">
              <img
                src="https://avatars.githubusercontent.com/u/142708646?s=400&u=2a67c5784bf343e1f5a46057fb6393fc7048c60e&v=4"
                alt="Logo"
                className="h-8 w-8 rounded-full"
              />
              <span>Dipangkar H</span>
            </div>
          </div>

          {/* Center: Desktop Nav */}
          <ul className="hidden md:flex gap-6 text-[var(--color-white-7)] font-medium">
            <li>
              <Link to="/" className="hover:text-[var(--color-white-1)]">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/aboutdetail"
                className="hover:text-[var(--color-white-1)]"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/projectdetail"
                className="hover:text-[var(--color-white-1)]"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contactdetail"
                className="hover:text-[var(--color-white-1)]"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Right: CTA + Settings */}
          <div className="flex items-center gap-4">
            {/* Show on md+ only */}
            <Link to="/contact" className="hidden md:block">
              <div className="group bg-[var(--color-gray-2)] rounded-full px-4 py-2 hover:bg-[var(--color-gray-5)] font-semibold transition-colors duration-300 cursor-pointer flex items-center gap-2">
                <span className="gradient-text">Get in Touch</span>
                <span className="rounded-full transition-all duration-300 transform group-hover:translate-x-1">
                  <FiArrowRight />
                </span>
              </div>
            </Link>

            {/* Settings icon (mobile only) */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setIsRightOpen(true)}
            >
              <FiSettings />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
