import React from "react";
import { FaTwitter, FaInstagram, FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="w-full bg-gradient-to-b from-black to-gray-900 text-white pt-10 pb-5 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Social Media Icons */}
        <div className="flex justify-center items-center gap-8 mb-8 md:mb-0 text-white">
          <FaTwitter className="cursor-pointer hover:text-blue-600" size={30} />
          <FaInstagram className="cursor-pointer hover:text-pink-600" size={30} />
          <FaFacebook className="cursor-pointer hover:text-blue-900" size={30} />
          <FaYoutube className="cursor-pointer hover:text-red-600" size={30} />
          <FaLinkedin className="cursor-pointer hover:text-blue-700" size={30} />
        </div>

        {/* Business Hours */}
        <div className="text-center mb-8 md:mb-0">
          <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
          <ul>
            <li>Mon - Fri: 10:00 AM - 8:00 PM</li>
            <li>Sat: 12:00 PM - 10:00 PM</li>
            <li>Sun: Closed</li>
          </ul>
        </div>

        {/* Contact / Map Section */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Contact & Location</h3>
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-2">
              <MdLocationOn className="text-gray-400" size={20} />
              <span>123 Wine Street, New York, NY</span>
            </div>
            <div className="flex items-center gap-2">
              <MdPhone className="text-gray-400" size={20} />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <MdEmail className="text-gray-400" size={20} />
              <span>contact@wickedwines.com</span>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <p className="text-center mt-8 text-sm mb-5">
        All rights with{" "}
        <span className="underline text-blue-400 cursor-pointer">Sean</span>
      </p>
    </div>
  );
};

export default Footer;
