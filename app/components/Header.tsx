import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import Button from './Button'

const Header = () => {

    const goToLinkedIn = () => {
        window.open("https://www.linkedin.com/in/rodriguezfontana/", "_blank");
    };

    return (
        <>
            <div className='pt-21 pb-12'>
                <div className='flex items-center gap-3'>
                    <Image className='rounded-full w-32' src={assets.abril_image} alt='Imagen de Abril Rodríguez' />
                    <Button
                        onClick={goToLinkedIn}
                        className="bg-gradient-to-r from-green-400 via-green-500 to-green-600
    hover:from-green-500 hover:via-green-600 hover:to-green-700
    text-white"
                    >
                        Disponible para trabajar
                    </Button>
                </div>
                <div>
                    <h2 className='text-5xl font-[700] mt-5'>Hola, soy Abril</h2>
                    <p className='mt-2 text-lg'>+4 años de estudio en informatica.
                        Proxima Tecnica en Programación y Licenciada en Informatica de Buenos Aires, Argentina.
                    </p>
                </div>
                <div className='flex mt-4 gap-2 font-[600]'>
                    <div>Contactame</div>
                    <div>Linkedin</div>
                    <div>CV</div>
                </div>
            </div>
        </>
    )
}

export default Header
