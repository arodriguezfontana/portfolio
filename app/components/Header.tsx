import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Header = () => {
    return (
        <>
            <div className='pt-21 pb-15'>
                <div className='flex items-center gap-3'>
                    <Image className='rounded-full w-32' src={assets.abril_image} alt='Imagen de Abril Rodríguez'/>
                    <div>Disponible para trabajar</div>
                </div>
                <div>
                    <h2 className='text-4xl font-[700] mt-5'>Hola, soy Abril</h2>
                    <p className='mt-2'>+4 años de estudio en informatica. 
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
