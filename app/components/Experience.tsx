import React from 'react'
import { Briefcase, CodeXml, UserRound } from "lucide-react"
import InfoCard from './InfoCard'
import ExperienceCard from './ExperienceCard'
import ProjectCard from './ProjectCard'

const Experience = () => {
    return (
        <>
            <InfoCard
                icon={<Briefcase size={30} className="text-blak-600" />}
                title="Experiencia laboral"
            >
                <ExperienceCard
                    role="Fullstack Developer"
                    company="Freelance"
                    date="Septiembre 2024 - Actualidad"
                    description="aklkamca"
                />
            </InfoCard>

            <InfoCard
                icon={<CodeXml size={30} className="text-blak-600" />}
                title="Proyectos"
            >
                <ProjectCard
                    image="/gog.png"
                    title="GOG: E-commerce de videojuegos (web + mobile)"
                    technologies={["React", "React Native", "Typescript"]}
                    description="Proyecto Frontend: E-commerce de videojuegos para web y dispositivos móviles, con una API REST."
                    links={{repo: "https://github.com/arodriguezfontana/gog-frontend"}}
                />
            </InfoCard>

            <InfoCard
                icon={<UserRound size={30} className="text-blak-600" />}
                title="Sobre mí"
            >
                <div></div>
            </InfoCard>
        </>
    )
}

export default Experience
