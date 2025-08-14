import Image from 'next/image'
import React from 'react'
import { assets } from '@/assets/assets'
import { useNavbar } from '../hooks/useNavbar'

const Navbar = () => {

  const {
    sideMenuRef,
    openMenu,
    closeMenu
  } = useNavbar();

  return (
    <>

      <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
        <Image src={assets.header_bg_color} alt='header background' className='w-full' />
      </div>

      <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50'>

        <a href="#top">
          <Image src={assets.logo} alt='logo' className='w-26 cursor-pointer mr-14' />
        </a>

        <ul className='hidden md:flex items-center gap-6 lg:gap-8 bg-opacity-50 rounded-full px-12 py-3 bg-white shadow-sm'>
          <li><a className='font-Ovo' href="#top">Home</a></li>
          <li><a className='font-Ovo' href="#about">Sobre mi</a></li>
          <li><a className='font-Ovo' href="#services">Servicios</a></li>
          <li><a className='font-Ovo' href="#work">Mi trabajo</a></li>
          <li><a className='font-Ovo' href="#contact">Conectemos</a></li>
        </ul>

        <div className='flex items-center gap-4'>
          <button>
            <Image src={assets.moon_icon} alt='button light/dark mode' className='w-6 cursor-pointer' />
          </button>

          <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo'>Contacto
            <Image src={assets.arrow_icon} alt='arrow' className='w-3' />
          </a>

          <button className='block md:hidden ml-3' onClick={openMenu}>
            <Image src={assets.menu_black} alt='menu button' className='w-6 cursor-pointer' />
          </button>
        </div>

        {/* Mobile menu */}

        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>

          <div className='absolute right-6 top-6' onClick={closeMenu}>
            <Image src={assets.close_black} alt='close button' className='w-5 cursor-pointer'/>
          </div>

          <li><a className='font-Ovo' onClick={closeMenu} href="#top">Home</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href="#about">Sobre mi</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href="#services">Servicios</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href="#work">Mi trabajo</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href="#contact">Conectemos</a></li>
        </ul>

      </nav>
    </>
  )
}

export default Navbar;