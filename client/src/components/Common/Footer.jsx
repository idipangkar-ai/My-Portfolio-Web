import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1C1C1E] text-white py-12 mt-16">
      <div className="max-w-6xl mx-auto px-4 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-semibold text-[#FF7A01]">About Me</h3>
            <p className="text-gray-400 mt-2">
              Software Development Engineer | Frontend Heavy Full-Stack | @FISI
              Ltd Since-2023
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-2xl font-semibold text-[#FF7A01]">
              Quick Links
            </h3>
            <ul className="mt-4 text-gray-400">
              <li>
                <a href="#home" className="hover:text-[#FF7A01]">
                  Home
                </a>
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
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-2xl font-semibold text-[#FF7A01]">Contact</h3>
            <ul className="mt-4 text-gray-400">
              <li>
                Email:{" "}
                <a
                  href="mailto:idipangkar5@gmail.com"
                  className="hover:text-[#FF7A01]"
                >
                  idipangkar5@gmail.com
                </a>
              </li>
              <li>
                Phone:{" "}
                <a href="tel:+918837388307" className="hover:text-[#FF7A01]">
                  +91 883***83*7
                </a>
              </li>
            </ul>
          </div>

          {/* Social Icons Section */}
          <div className="flex gap-6 justify-center md:justify-start items-center">
            <a
              href="#"
              className="text-gray-400 hover:text-[#FF7A01] transition-all"
            >
              <FaFacebook size={30} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#FF7A01] transition-all"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#FF7A01] transition-all"
            >
              <FaTwitter size={30} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#FF7A01] transition-all"
            >
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-700 pt-4 text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Dipangkar Hajong. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
