import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import Button from './Button'
import { Download, Mail, UserRoundSearch } from 'lucide-react'

const Header = () => {

    const goToLinkedIn = () => {
        window.open("https://www.linkedin.com/in/rodriguezfontana/", "_blank");
    };

    const goToMail = () => {
        window.location.href = "mailto:arodriguezfontana@gmail.com";
    };

    const downloadCV = () => {
        const link = document.createElement("a");
        link.href = "/abril_cv.pdf";
        link.download = "abril_cv.pdf";
        link.click();
    };

    return (
        <>
            <div className='pt-21 pb-18'>
                <div className='flex items-center gap-3'>
                    <Image className='rounded-full w-32' src={assets.abril_image} alt='Imagen de Abril Rodríguez' />
                    <Button
                        onClick={goToLinkedIn}
                        className="font-[500] hover:bg-green-600 hover:text-white bg-white border-green-600 border-1 text-green-600"
                    >
                        Disponible para trabajar
                    </Button>
                </div>
                <div>
                    <h2 className='text-5xl font-[700] mt-5'>Hola, soy Abril</h2>
                    <p className='mt-2 text-lg'>Con más de 4 años de estudio, próxima <span className='text-rose-500 font-[500]'>Licenciada en Informática</span>, especializada en <span className='text-rose-500 font-[500]'>Frontend</span> y <span className='text-rose-500 font-[500]'>Backend</span>, y con constante aprendizaje de nuevas tecnologías.
                    </p>
                </div>
                <div className='flex mt-4 gap-2 font-[500]'>
                    <Button
                        onClick={goToMail}
                        className=' border-black border-1 hover:bg-black hover:text-white'
                        icon={<Mail size={18} />}
                    >Contactame</Button>
                    <Button
                        onClick={goToLinkedIn}
                        className=' border-black border-1 hover:bg-black hover:text-white'
                        icon={<UserRoundSearch size={18} />}
                    >LinkedIn</Button>
                    <Button
                        onClick={downloadCV}
                        className='hover:bg-rose-500 hover:text-white bg-white border-rose-500 border-1 text-rose-500'
                        icon={<Download size={18} />}
                    >CV</Button>
                </div>
            </div>
        </>
    )
}

export default Header
