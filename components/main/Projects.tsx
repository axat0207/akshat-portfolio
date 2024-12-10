"use client";
import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full grid place-items-center md:grid md:grid-cols-3 gap-10 px-10">
        <ProjectCard
          link="https://webwunder.de/"
          src="/projects/webwunder.png"
          title="Webwunder"
          description="Webwunder delivers all-in-one digital solutions, from web design to SEO and marketing, to boost sales and streamline lead generation. With flexible plans and ongoing optimization, we help businesses dominate the market effortlessly."
        />
        <ProjectCard
          link="https://snap-case.vercel.app/"
          src="/projects/snapcase.png"
          title="Snapcase"
          description="SnapCase offers custom, durable phone cases with a 5-year print guarantee, scratch resistance, and wireless charging compatibility. Join 1,250+ happy customers today!"
        />
        <ProjectCard
          link="https://www.thequickai.com/"
          src="/projects/quickai.png"
          title="The QuickAi"
          description="TheQuickAI enhances education with AI tools like quiz and question paper generators, notes maker, and automated exams, empowering educators and students worldwide."
        />
        <ProjectCard
          link="https://nikestore-akshat.netlify.app/"
          src="/nike.png"
          title="Nike Web Store"
          description="Built a responsive Nike e-commerce platform using React, Redux, and Tailwind CSS, featuring an interactive UI with smooth animations, a shopping cart, and seamless checkout functionalities managed through Redux."
        />
        <ProjectCard
          link="https://synthi-muse-ai-saas.vercel.app/"
          src="/synthi-muse.png"
          title="SyntiMuse AI SAAS"
          description="Crafted a SaaS AI app using Next.js, Redux, and diverse AI technologies like ChatGPT 3.5, DALL·E 2, employing Clerk.js for robust user authentication and Tailwind CSS for a user-friendly interface."
        />
        <ProjectCard
          link="https://movix-akshansh.netlify.app/"
          src="/movix.png"
          title="Movix Movie Streaming"
          description="Developed a movie-watching website with a sleek UI and smooth UX using React, featuring movie filters, personalized suggestions, and state management for seamless navigation and content interaction."
        />

        <ProjectCard
          link="https://tech-tuto.com/"
          src="/projects/tech-tuto.png"
          title="TechTuto"
          description="TechTuto offers personalized online tutoring with a free demo. Classes are just $5 each, featuring interactive lessons and tailored programs for effective learning."
        />
        <ProjectCard
          link="https://pixel-perfect-kappa.vercel.app/"
          src="/projects/pixelperfect.png"
          title="Pixel Perfect Portfolio"
          description="A sleek, visually appealing portfolio displaying your projects, with an option for clients to book a call and inquire about them.."
        />
        <ProjectCard
          link="https://chit-chat-tawny.vercel.app/"
          src="/projects/chit-chat.png"
          title="Chitchat"
          description="ChitChat is a real-time messaging app built with React, Socket.io, and MongoDB, allowing users to create accounts, chat privately, and manage groups with notifications."
        />
        <ProjectCard
          link="https://hosho-digital.vercel.app/"
          src="/projects/scloro.png"
          title="Scolorship Management Portal"
          description="The Scholarship Management System allows Students to apply, and HOD, Principal, and Finance Head to review, approve, and allocate funds. It includes application tracking, role-based communication, and budget management.

Login Credentials:

Student: student / Student-test@1029
HOD: hod-cs / Hod-test@1029
Principal: principal / Principal-test@1029
Finance Head: finance_head / FinanceHead-test@1029





"
        />
      </div>
    </div>
  );
};

export default Projects;
