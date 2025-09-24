import React from 'react'
import { CodeXml } from "lucide-react"
import Card from './Card'
import ProjectCard from './ProjectCard'
import { assets } from '@/assets/assets'

const Projects = () => {
    return (
        <>
             <Card
                icon={<CodeXml size={35} className="text-blak-600" />}
                title="Proyectos"
            >
                <ProjectCard
                    image="/gog_image.png"
                    title="GOG: E-commerce de videojuegos (web + mobile)"
                    technologies={["React", "React Native", "Typescript"]}
                    description="Proyecto Frontend: E-commerce de videojuegos para web y dispositivos móviles, con una API REST."
                    links={{repo: "https://github.com/arodriguezfontana/gog-frontend"}}
                />
            </Card>
        </>
    )
}

export default Projects
