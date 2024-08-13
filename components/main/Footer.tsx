"use client";
import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full bg-transparent text-gray-200 shadow-lg pt-20 p-4">
      <div className="flex flex-col items-center justify-center mx-auto max-w-7xl">
        <div className="w-full  z-50   flex flex-wrap items-start justify-around">
          {/* Community Section */}
          <div className="min-w-[200px] flex flex-col items-center mb-4">
            <div className="font-bold text-lg">Community</div>
            <Link
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-3 cursor-pointer"
            >
              <FaYoutube />
              <span className="text-base ml-2">Youtube</span>
            </Link>
            <Link
              href="https://github.com/axat0207"
              target="_blank"
              passHref
              className="flex items-center my-3 cursor-pointer"
              rel="noopener noreferrer"
            >
              <RxGithubLogo />
              <span className="text-base ml-2">Github</span>
            </Link>
            <Link
              href="https://discord.gg/qDcK4TjQ"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-3 cursor-pointer"
            >
              <RxDiscordLogo />
              <span className="text-base ml-2">Discord</span>
            </Link>
          </div>
          {/* Social Media Section */}
          <div className="min-w-[200px] flex flex-col items-center mb-4">
            <div className="font-bold text-lg">Social Media</div>
            <Link
              href="https://www.instagram.com/axxat18/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-3 cursor-pointer"
            >
              <RxInstagramLogo />
              <span className="text-base ml-2">Instagram</span>
            </Link>
            <Link
              href="https://twitter.com/Axat_02"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-3 cursor-pointer"
            >
              <RxTwitterLogo />
              <span className="text-base ml-2">Twitter</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/akshat-agrawal-011675218/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-3 cursor-pointer"
            >
              <RxLinkedinLogo />
              <span className="text-base ml-2">Linkedin</span>
            </Link>
          </div>
          {/* About Section */}
          <div className="min-w-[200px] flex flex-col items-center mb-4">
            <div className="font-bold text-lg">About</div>
            <Link
              href="https://drive.google.com/file/d/12YdLC-nZJgXHWAKHkqUo8HXxiEKSzXqP/view"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-3 cursor-pointer"
            >
              <span className="text-base ml-2">View Resume</span>
            </Link>
            {/* Conditional rendering based on link availability */}
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-3 cursor-pointer"
            >
              <span className="text-base ml-2">Learn About Me</span>
            </Link>
            <Link
              href="mailto:axxatagrawal@gmail.com"
              target="_blank"
              passHref
              className="flex items-center my-3 cursor-pointer"
            >
              <span className="text-base ml-2">axxatagrawal@gmail.com</span>
            </Link>
          </div>
        </div>
        {/* Footer Bottom Text */}
        <div className="mt-4 text-base text-center">
          &copy; Akshat Agrawal 2023 Inc. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
