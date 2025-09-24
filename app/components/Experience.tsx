import React from 'react'
import { Briefcase, CodeXml, UserRound } from "lucide-react"
import Card from './Card'
import ExperienceCard from './ExperienceCard'

const Experience = () => {
    return (
        <>
            <section id='experience'>
                <Card
                    icon={<Briefcase size={35} className="text-blak-600" />}
                    title="Experiencia laboral"
                >
                    <ExperienceCard
                        role="Fullstack Developer"
                        company="Freelance"
                        date="Septiembre 2024 - Actualidad"
                        description="Desarrollo de proyectos personales y colaborativos 
                    enfocados en resolver necesidades de la vida real, implementando múltiples tecnologías
                    y bases de datos para entregar soluciones completas y funcionales.
                    "
                    />
                </Card>
            </section>
        </>
    )
}

export default Experience
