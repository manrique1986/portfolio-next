"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <header className="bg-gray-900 text-white p-4 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-3xl font-bold tracking-wide hover:text-gray-400 transition duration-300">
          Portfolio
        </Link>
        {/* Botón del menú en móvil */}
        <button
          onClick={toggleMenu}
          className="md:hidden block focus:outline-none text-white"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
        
        {/* Fondo semitransparente cuando el menú está abierto */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-300"
            onClick={closeMenu}
          ></div>
        )}

        {/* Menú */}
        <div
          className={`md:flex md:items-center z-50 md:static absolute top-16 left-0 w-3/4 bg-gray-800 md:bg-transparent p-8 md:p-0 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out ${
            isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          } md:opacity-100 md:translate-x-0`}
          style={{ maxHeight: 'calc(100vh - 64px)', overflowY: 'auto' }} // Limitar altura del menú
        >
          <Link href="/sobreMi" onClick={closeMenu} className="block text-lg md:inline-block mt-2 md:mt-0 md:ml-6 hover:text-gray-400 transition duration-300">
            Sobre mí
          </Link>
          <Link href="/educacion" onClick={closeMenu} className="block text-lg md:inline-block mt-2 md:mt-0 md:ml-6 hover:text-gray-400 transition duration-300">
            Educación
          </Link>
          <Link href="/proyectos" onClick={closeMenu} className="block text-lg md:inline-block mt-2 md:mt-0 md:ml-6 hover:text-gray-400 transition duration-300">
            Proyectos
          </Link>
          <Link href="/skills" onClick={closeMenu} className="block text-lg md:inline-block mt-2 md:mt-0 md:ml-6 hover:text-gray-400 transition duration-300">
            Skills
          </Link>
          <Link href="/contacto" onClick={closeMenu} className="block text-lg md:inline-block mt-2 md:mt-0 md:ml-6 hover:text-gray-400 transition duration-300">
            Contacto
          </Link>
        </div>
      </nav>
    </header>
  );
}