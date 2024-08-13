"use client";
import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] z fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 sm:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto">
        <Link href="#about-me" className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            style={{ height: "auto" }} // Set this to maintain aspect ratio
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-2 sm:ml-3 block text-gray-300">
            Akshat Agrawal
          </span>
        </Link>

        <div className="hidden w-[500px] h-full md:flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <Link href="#about-me" className="cursor-pointer">
              About me
            </Link>
            <Link href="#skills" className="cursor-pointer">
              Skills
            </Link>
            <Link href="#projects" className="cursor-pointer">
              Projects
            </Link>
          </div>
        </div>

        <div className="flex flex-row gap-3 sm:gap-5">
          {Socials.map((social) => (
            <Link href={social.href} key={social.name} target="_blank" rel="noopener noreferrer">
              <Image
                src={social.src}
                alt={social.name}
                width={30}
                height={30}
                style={{ height: "auto" }} // Set this to maintain aspect ratio
                className="cursor-pointer"
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="sm:hidden mt-3 flex justify-around w-full items-center h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
        <Link href="#about-me" className="cursor-pointer">
          About me
        </Link>
        <Link href="#skills" className="cursor-pointer">
          Skills
        </Link>
        <Link href="#projects" className="cursor-pointer">
          Projects
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
