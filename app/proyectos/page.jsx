"use client"
import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Proyectos = () => {
  const { ref: sectionRef, inView } = useInView({ triggerOnce: true });

  // Variantes de animación
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen py-8 z-0">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex justify-center mb-12"
      >
        <div className="bg-gradient-to-r from-teal-500 to-teal-300 text-gray-900 px-6 py-3 rounded-xl shadow-lg">
          <h1 className="text-4xl font-bold">Proyectos</h1>
        </div>
      </motion.div>

      <section ref={sectionRef} className="flex justify-center mx-auto px-2 sm:px-4 lg:px-16 py-8">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 w-full max-w-screen-lg mx-auto"
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.8 }}
        >
          {[
            {
              title: "LifeBook",
              description: "Libro diario digital",
              imageUrl: "https://res.cloudinary.com/dytpump6i/image/upload/v1699811576/lifebook_zlcypn.png",
              githubLink: "https://github.com/No-Country/S5-03-Java-React/tree/dev-frontend",
            },
            {
              title: "Burbujas de algodón",
              description: "Proyecto jardín",
              imageUrl: "https://res.cloudinary.com/dytpump6i/image/upload/v1699811618/proyecto_jardin_arfvii.png",
              githubLink: "https://github.com/manrique1986/proyecto-jardin",
            },
            {
              title: "Walletpay",
              description: "Billetera virtual",
              imageUrl: "https://res.cloudinary.com/dytpump6i/image/upload/v1699916090/Captura_de_pantalla_2023-11-13_195406_zefhew.png",
              githubLink: "https://github.com/manrique1986/WalletPay",
            },
            {
              title: "Mundo mascota",
              description: "Ecommerce para mascotas",
              imageUrl: "https://res.cloudinary.com/dytpump6i/image/upload/v1699811858/productos_1_nfgv04.png",
              githubLink: "https://github.com/manrique1986/Mundo-mascota",
            },
            {
              title: "Alta pinta",
              description: "Ecommerce para pizza",
              imageUrl: "https://res.cloudinary.com/dytpump6i/image/upload/v1726358360/altaPinta_krkebs.png",
              githubLink: "https://github.com/manrique1986/next-coder",
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden border-2 border-gray-700 transition-transform transform hover:scale-105 hover:bg-gray-700 duration-300 group w-full"
              variants={fadeInLeft}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.8, delay: 0.2 * index }}
            >
              <div className="relative h-60 lg:h-64 xl:h-72 w-full overflow-hidden group-hover:scale-110 transition-transform duration-500">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="text-center py-6">
                <p className="text-xl text-teal-400 font-bold mb-2">{project.title}</p>
                <p className="text-base text-gray-400">{project.description}</p>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 transition-transform transform hover:scale-125"
                >
                  <AiOutlineGithub className="text-teal-400 h-8 w-8 m-auto" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Proyectos;