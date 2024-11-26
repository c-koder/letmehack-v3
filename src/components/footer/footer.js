import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white bg-black ">
      {/* Top Section */}
      <div className="container mx-auto max-w-[1600px] pt-3 lg:pt-12 pb-3 lg:flex  ">
        {/* Logo and Description */}
        <div className="flex flex-col items-center justify-center w-full py-6 text-center lg:w-1/3 lg:px-8">
          <div className="flex flex-col items-center w-full py-4 lg:items-start lg:py-0">
            <div className="flex items-center justify-center w-full">
              <img src="/img/logo.png" alt="Let Me Hack Logo" className=" h-28 w-28" />
            </div>
            <p className="ext-sm ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

        </div>

        {/* About Us section */}
        <div className="flex flex-col items-center w-full px-3 py-3 mb-5 text-center lg:w-1/3">
          <h3 className="mb-6 text-lg font-bold">About us</h3>
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
        <div className="flex flex-col justify-center w-full py-6 text-center lg:w-1/3">
          <div>
            <h3 className="mb-4 text-lg font-bold">Contact us</h3>
            <p className="mb-4 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <p className="text-sm font-semibold">+94 764508047</p>
        </div>

        {/* Social Media Icons */}

      </div>
      <div className="container mx-auto max-w-[1600px] pb-3">
        <div className="flex justify-center w-full px-4 py-5 mx-auto lg:justify-between lg:items-end">
          <div className="hidden py-2 text-center lg:text-start lg:py-0 lg:block">
            <p className="text-base font-semibold">LET ME HACK ECO V3.0</p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-3xl text-white hover:text-gray-400 " />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-3xl text-white hover:text-gray-400 " />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-3xl text-white hover:text-gray-400 " />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-3xl text-white hover:text-gray-400 lg:text-4xl" />
            </a>
          </div>

        </div>
      </div>



      {/* Bottom Section */}
      <div className="py-8 border-t border-gray-700">
        <div className="text-center">
          <p className="text-sm">Copyright © 2024 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
