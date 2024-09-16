"use client";

import React, { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Usar 'next/navigation' para enrutamiento
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import PropagateLoader from "react-spinners/PropagateLoader";
import AOS from "aos";
import "aos/dist/aos.css";





const Contact = () => {
  const [loading, setLoading] = useState(false);
  // const router = useRouter();
  const form = useRef();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // const sendEmail = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await emailjs.sendForm(
  //       process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  //       process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  //       form.current,
  //       process.env.NEXT_PUBLIC_EMAILJS_USER_ID
  //     );
  //     setLoading(true);
  //     setTimeout(() => {
  //       setLoading(false);
  //       router.push("/contacto"); // Usar 'next/navigation' para enrutamiento
  //     }, 3000);
  //   } catch (error) {
  //     console.error("Error sending email:", error);
  //   }
  // };

  return (
    <div className="relative bg-gray-900 text-white min-h-screen">
      {/* Video de fondo */}
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://www.example.com/your-background-video.mp4" type="video/mp4" />
        Tu navegador no soporta el video.
      </video>

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
        {/* Encabezado */}
        <div className="bg-gray-800 p-4 rounded-xl shadow-lg mb-8 w-full max-w-screen-lg">
          <h1 className="text-4xl font-bold text-teal-400 text-center">
            Contacto
          </h1>
        </div>

        {loading ? (
          <div className="w-screen h-screen flex items-center justify-center bg-gray-900">
            <PropagateLoader color="#F7B200" />
            <p className="text-[#EB3A00] text-2xl font-semibold mt-4">
              Correo enviado con éxito...
            </p>
          </div>
        ) : (
          <div className="bg-gray-800 bg-opacity-80 p-8 rounded-xl shadow-lg w-full max-w-screen-lg" data-aos="fade-up">
            <a
              href="https://api.whatsapp.com/send?phone=+541130374277"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="float-right mb-4">
                <FaWhatsapp className="w-[45px] h-[45px] p-2 hover:cursor-pointer hover:text-[#0df053] hover:bg-white bg-[#0df053] text-white rounded-full" />
              </div>
            </a>
            <h3 className="text-teal-400 text-2xl font-semibold mb-6">
              Leandro Martini
            </h3>

            <div className="flex items-center mb-6">
              <FaEnvelope className="text-2xl mr-4 text-teal-400" />
              <p className="text-white">leandromartini86@gmail.com</p>
            </div>

            <div className="flex items-center mb-6">
              <FaPhone className="text-2xl mr-4 text-teal-400" />
              <p className="text-white">(11) 3037-4277</p>
            </div>

            <form ref={form} data-aos="fade-up">
              <div className="mb-4">
                <label className="block text-sm font-semibold text-teal-400">
                  Nombre:
                </label>
                <input
                  type="text"
                  name="user_name"
                  className="w-full p-2 border rounded-md bg-gray-900 text-white border-teal-400"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold text-teal-400">
                  Correo electrónico:
                </label>
                <input
                  type="email"
                  name="user_email"
                  className="w-full p-2 border rounded-md bg-gray-900 text-white border-teal-400"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold text-teal-400">
                  Mensaje:
                </label>
                <textarea
                  name="message"
                  rows="4"
                  className="w-full p-2 border rounded-md bg-gray-900 text-white border-teal-400"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-teal-400 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition-colors duration-300"
              >
                Enviar
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;