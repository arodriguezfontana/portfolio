import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className='w-full fixed py-3 flex justify-center'>
        <ul className='flex gap-3 rounded-full px-6 py-2 bg-white/40 backdrop-blur-md shadow-md text-sm'>
          <li><a href="#experience">Experiencia</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#about">Sobre mí</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar;
