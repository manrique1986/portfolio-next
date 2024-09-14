"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const skillsData = [
    {
      name: "HTML",
      imgSrc: "https://res.cloudinary.com/dytpump6i/image/upload/v1699674116/logohtml_o0jgqg.svg",
      aos: "fade-right",
    },
    {
      name: "CSS",
      imgSrc: "https://res.cloudinary.com/dytpump6i/image/upload/v1699674177/logoCss_vum7yd.svg",
      aos: "fade-left",
    },
    {
      name: "JavaScript",
      imgSrc: "https://res.cloudinary.com/dytpump6i/image/upload/v1699674205/logoJS_vihzto.svg",
      aos: "fade-up-right",
    },
    {
      name: "React",
      imgSrc: "https://res.cloudinary.com/dytpump6i/image/upload/v1699674238/react_ewim0s.svg",
      aos: "fade-up-left",
    },
    {
      name: "Vue",
      imgSrc: "https://res.cloudinary.com/dytpump6i/image/upload/v1699675645/vue-9_a1hd4x.svg",
      aos: "zoom-in",
    },
    {
      name: "Node.js",
      imgSrc: "https://res.cloudinary.com/dytpump6i/image/upload/v1699674680/nodejs-logo-svgrepo-com_axruvh.svg",
      aos: "fade-left",
    },
    {
      name: "Bootstrap",
      imgSrc: "https://res.cloudinary.com/dytpump6i/image/upload/v1699675474/bootstrap-4_gx7xnr.svg",
      aos: "fade-right",
    },
    {
      name: "Tailwind",
      imgSrc: "https://res.cloudinary.com/dytpump6i/image/upload/v1699675579/tailwindcss_b5umkv.svg",
      aos: "fade-right",
    },
    {
      name: "MongoDB",
      imgSrc: "https://res.cloudinary.com/dytpump6i/image/upload/v1699722379/mongodb-icon-1_g3b76i.svg",
      aos: "zoom-in-left",
    },
    {
      name: "Git",
      imgSrc: "https://res.cloudinary.com/dytpump6i/image/upload/v1699722742/pngegg_gbpixu.png",
      aos: "zoom-out",
    },
    {
      name: "GitHub",
      imgSrc: "https://res.cloudinary.com/dytpump6i/image/upload/v1699722507/github-icon_w5e3jb.svg",
      aos: "zoom-out-up",
    },
    {
      name: "Postman",
      imgSrc: "https://res.cloudinary.com/dytpump6i/image/upload/v1699722897/postman_bnp3s0.svg",
      aos: "zoom-out-down",
    },
    {
      name: "Next.js",
      imgSrc: "https://res.cloudinary.com/dytpump6i/image/upload/v1726286137/nextjs-icon-512x512-y563b8iq_tzxma7.png",
      aos: "zoom-out-down",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10">
      <h1 className="text-4xl text-teal-400 font-bold mb-10" data-aos="fade-down">
        Skills
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-4">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-800 p-6 rounded-3xl shadow-lg transition-transform transform hover:scale-110 hover:rotate-2 hover:-translate-y-2 hover:shadow-teal-400 hover:border-teal-400 border-2 border-teal-600 shadow-teal-600 duration-300"
            data-aos={skill.aos}
          >
            <Image
              className="mb-4 transition-transform transform hover:scale-125 duration-300"
              src={skill.imgSrc}
              alt={skill.name}
              width={80} // Especifica el ancho
              height={80} // Especifica la altura
            />
            <p className="text-xl font-extrabold text-teal-400">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;