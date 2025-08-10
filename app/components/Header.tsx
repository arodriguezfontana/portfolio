import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 '>
            <div>
                <Image src={assets.profile_img} alt='Abril Rodríguez profile image' className='rounded-full w-32' />
            </div>

            <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
                Hola, soy Abril Rodríguez <Image src={assets.hand_icon} alt='hand icon' className='w-6' />
            </h3>

            <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>Fullstack developer.</h1>
            
            <p className='max-w-2xl mx-auto font-Ovo'>Estudiante avanzada de la Licenciatura en Informática.
                Mi stack principal incluye Java con Spring para el backend y React para el frontend.
                Participé en proyectos colaborativos y personales.
                Busco integrarme a un equipo IT donde pueda seguir aprendiendo y aportar desde una base técnica sólida.
            </p>

            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <a href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'>contactame <Image src={assets.right_arrow_white} alt='contact button' className='w-4'/></a>
                <a href="/RodriguezAbrilCV.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>mi CV <Image src={assets.download_icon} alt='download button' className='w-4'/></a>
            </div>
        </div>
    )
}

export default Header
