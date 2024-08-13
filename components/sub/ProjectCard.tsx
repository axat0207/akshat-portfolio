"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  link: string;
}

const ProjectCard = ({ src, title, description, link }: Props) => {
  return (
    <div
      className="relative col-span-1 z-50 cursor-pointer rounded-lg shadow-lg border border-[#2A0E61] transition-transform transform hover:scale-105"
      style={{ scrollSnapAlign: "center" }}
    >
        <Link href={link} target="_blank" passHref>
      <div className="relative w-full h-56 overflow-hidden">
        <Image
          src={src}
          alt={title}
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="relative p-4 bg-opacity-80">
        <h2 className="text-2xl font-semibold text-white cursor-pointer">
          {title}
        </h2>
        <div className="mt-2 text-gray-300">{description}</div>
      </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
