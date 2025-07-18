import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1C1C1E] text-white py-12 mt-16">
      <div className="max-w-6xl mx-auto px-4 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-semibold text-[#FF7A01]">About Me</h3>
            <p className="text-gray-400 mt-2">I'm</p>
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
                <a href="#about" className="hover:text-[#FF7A01]">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#FF7A01]">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#FF7A01]">
                  Contact
                </a>
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
                  href="mailto:someone@example.com"
                  className="hover:text-[#FF7A01]"
                >
                  someone@example.com
                </a>
              </li>
              <li>
                Phone:{" "}
                <a href="tel:+1234567890" className="hover:text-[#FF7A01]">
                  +1 234 567 890
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
