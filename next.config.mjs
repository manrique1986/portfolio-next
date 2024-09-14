/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración para manejar imágenes
  images: {
    // Lista de dominios permitidos para las imágenes
    domains: [
      "res.cloudinary.com",
      "master--altapinta1.netlify.app",
      "another-domain.com",
    ],
    // Desactiva la optimización de imágenes para exportaciones estáticas
    unoptimized: true,
  },
  // Configuración para exportar una aplicación estática
  output: 'export',
};

export default nextConfig;
