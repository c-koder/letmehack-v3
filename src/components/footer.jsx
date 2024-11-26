import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white ">
      {/* Top Section */}
      <div className="container mx-auto max-w-[1600px] py-16 lg:flex ">
        {/* Logo and Description */}
        <div className="flex  w-full lg:w-1/4 py-6 lg:px-8 flex-col justify-between  ">
          <div className="flex flex-col items-center lg:items-start py-4 lg:py-0">
              <img src="/logo.png" alt="Let Me Hack Logo" className="mb-4" />
              <p className="text-sm mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
          </div>
          <div className="text-center lg:text-start py-2 lg:py-0">
            <p className="text-base font-semibold">LET ME HACK ECO V3.0</p>
          </div>
        </div>

        {/* About Us section */}
        <div className="flex flex-col items-center lg:items-start  w-full lg:w-1/4 py-6 ">
          <h3 className="font-bold text-lg mb-4">About us</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Whatsapp
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Telephone
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col text-center lg:text-start justify-between w-full lg:w-1/4 py-6">
          <div>
              <h3 className="font-bold text-lg mb-4">Contact us</h3>
              <p className="text-sm mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
          </div>
          <p className="text-sm font-semibold">+94 764508047</p>
        </div>

        {/* Social Media Icons */}
        <div className="flex lg:items-end w-full md:w-3/4 lg:w-1/4 px-16 lg:px-0 py-4 mx-auto lg:mx-0 justify-around">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-white hover:text-gray-400 text-3xl " />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-white hover:text-gray-400 text-3xl " />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-white hover:text-gray-400 text-3xl " />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-white hover:text-gray-400 text-3xl lg:text-4xl" />
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 py-8">
        <div className="text-center">
          <p className="text-sm">Copyright © 2024 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
