import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-8">
      {/* Título y descripción */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 leading-tight">
          ¡Bienvenido a mi <span className="text-teal-400">Portfolio</span>!
        </h1>
        <p className="text-lg md:text-xl">
          Aquí puedes explorar más sobre mí, mi educación, proyectos y habilidades.  y hay masss
          
        </p>
      </div>

      {/* Imagen de perfil */}
      <div className="relative w-full max-w-xs md:max-w-sm mb-8 flex justify-center">
        <Image 
          src="https://res.cloudinary.com/dytpump6i/image/upload/v1726272963/imagen-perfil-dibu_cja6iz.png" 
          alt="Imagen de perfil"
          width={300}  // Tamaño ajustado para mobile
          height={200} // Tamaño ajustado para mobile
          className="rounded-lg shadow-2xl object-cover "
        />
        {/* Efecto de overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent rounded-lg opacity-40"></div>
      </div>

      {/* Botón de acción */}
      <div className="flex justify-center w-full mt-8">
        <a href="/sobreMi" className="bg-teal-400 text-gray-900 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-teal-500 transition duration-300">
          Conóceme más
        </a>
      </div>
    </div>
  );
}