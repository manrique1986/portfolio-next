


import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
  <Image 
          src="/public/imagen-perfil-dibu.png" 
          alt="Portfolio Image"
          width={500}
          height={300}
          className="rounded-lg shadow-lg"
        />
    </div>
  )
}

export default page