import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className='w-full fixed py-3 flex justify-center'>
        <ul className='flex gap-3 rounded-full px-6 py-3 bg-white/40 backdrop-blur-md shadow-md text-sm'>
          <li><a href="#experience" className="hover:text-rose-600 transition-colors">Experiencia</a></li>
          <li><a href="#projects" className="hover:text-rose-600 transition-colors">Proyectos</a></li>
          <li><a href="#about" className="hover:text-rose-600 transition-colors">Sobre mí</a></li>
          <li><a href="#contact" className="hover:text-rose-600 transition-colors">Contacto</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar;
