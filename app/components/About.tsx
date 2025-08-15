import React from 'react'
import { assets, infoList } from '@/assets/assets'
import Image from 'next/image'

const About = () => {
    return (

        <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg font-ovo'>Introducción</h4>
            <h2 className='text-center text-5xl font-ovo'>About Me</h2>

            <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
                <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                    <Image src={assets.profile_img} alt='Abril Rodríguez image' className='w-full rounded-3xl' />
                </div>

                <div className='flex-1'>
                    <p className='mb-10 max-w-2xl font-ovo'>
                        Me especializo en desarrollo de software y cuento con experiencia en proyectos personales, colaborativos y académicos.
                        Esta trayectoria me permitió adquirir conocimientos sólidos en distintas áreas de la programación, aplicando buenas prácticas y
                        escribiendo código limpio y eficiente. Estoy en búsqueda constante de nuevos desafíos donde seguir aprendiendo y aportar valor con mi
                        perfil técnico y actitud colaborativa.
                    </p>

                    <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                        {infoList.map(({ icon, iconDark, title, description }, index) => (
                            <li className='border-[0.5px] border-grey-500 rounded-xl p-6 cursor-pointer hover:-translate-y-1 duration-200 hover:shadow-black' key={index}>
                                <Image src={icon} alt={title} className='w-7 mt-3' />
                                <h3 className='my-4 font-semibold text-grey-700'>{title}</h3>
                                <p className='text-grey-600 text-sm'>{description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About;