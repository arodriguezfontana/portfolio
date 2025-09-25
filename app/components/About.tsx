import React from 'react'
import { UserRound } from "lucide-react"
import Card from './Card'

const About = () => {
    return (
        <>
            <section id='about'>
                <Card
                    icon={<UserRound size={35} className="text-blak-600" />}
                    title="Sobre mí"
                >
                    <div className='w-xl'>
                        <p className='text-lg mb-3'> Me llamo Abril. Desde pequeña <span className='text-rose-500 font-[500]'>me apasionan las computadoras</span> y, al crecer,
                            decidí empezar con la programación. Me especialicé en el desarrollo de aplicaciones
                            y continúo conociendo nuevas tecnologías.
                        </p>
                        <p className='text-lg mb-3'>  Mi objetivo es <span className='text-rose-500 font-[500]'>acercar la tecnología a todas las personas</span>, dándoles una mano
                            para resolver problemas o mejorar situaciones de la vida diaria. Me entusiasma mantenerme
                            en constante aprender para <span className='text-rose-500 font-[500]'>crear las mejores soluciones posibles</span>.
                        </p>
                    </div>
                </Card>
            </section>
        </>
    )
}

export default About
