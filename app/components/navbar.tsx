import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50'>
        <a href="#top">
            <h2>Abril.</h2>
        </a>
        
        <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3'>
            <li><a href="#top">Home</a></li>
            <li><a href="#about">Sobre mi</a></li>
            <li><a href="#services">Servicios</a></li>
            <li><a href="#work">Mi trabajo</a></li>
            <li><a href="#contact">Conectemos</a></li>
        </ul>

        <div>
            <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4'>Contacto
                 {/* <Image src={assets.arrow_icon} alt='arrow' className='w-3'/> */}
            </a>
        </div>
      </nav>
    </>
  )
}

export default Navbar;