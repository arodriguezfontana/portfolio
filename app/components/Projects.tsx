import React from 'react'
import { CodeXml } from "lucide-react"
import Card from './Card'
import ProjectCard from './ProjectCard'
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaJava } from "react-icons/fa"
import { SiTypescript, SiJavascript, SiExpress, SiReact, SiSpringboot, SiPostgresql, SiMongodb, SiNeo4J, SiElasticsearch, SiJunit5 } from "react-icons/si"

const Projects = () => {

    const techsgog = [
        { logo: <FaReact />, tecnologia: "React", bg: "bg-blue-500" },
        { logo: <SiReact />, tecnologia: "React Native", bg: "bg-blue-500" },
        { logo: <FaHtml5 />, tecnologia: "HTML", bg: "bg-blue-500" },
        { logo: <FaCss3Alt />, tecnologia: "CSS", bg: "bg-blue-500" },
        { logo: <SiExpress />, tecnologia: "Express.js", bg: "bg-blue-500" },
        { logo: <FaNodeJs />, tecnologia: "Node.js", bg: "bg-blue-500" },
        { logo: <SiTypescript />, tecnologia: "TypeScript", bg: "bg-blue-500" },
        { logo: <SiJavascript />, tecnologia: "JavaScript", bg: "bg-blue-500" },
    ]

    const techsepers = [
        { logo: <FaJava />, tecnologia: "Java", bg: "bg-blue-500" },
        { logo: <SiSpringboot />, tecnologia: "Spring Boot", bg: "bg-blue-500" },
        { logo: <SiPostgresql />, tecnologia: "PostgreSQL", bg: "bg-blue-500" },
        { logo: <SiMongodb />, tecnologia: "MongoDB", bg: "bg-blue-500" },
        { logo: <SiNeo4J />, tecnologia: "Neo4j", bg: "bg-blue-500" },
        { logo: <SiElasticsearch />, tecnologia: "Elasticsearch", bg: "bg-blue-500" },
    ]

    const techswordle = [
        { logo: <FaReact />, tecnologia: "React", bg: "bg-blue-500" },
        { logo: <FaHtml5 />, tecnologia: "HTML", bg: "bg-blue-500" },
        { logo: <FaCss3Alt />, tecnologia: "CSS", bg: "bg-blue-500" },
        { logo: <SiTypescript />, tecnologia: "TypeScript", bg: "bg-blue-500" },
    ]

    return (
        <>
            <Card
                icon={<CodeXml size={35} className="text-blak-600" />}
                title="Proyectos"
            >
                <ProjectCard
                    image="/gog_image.png"
                    title="GOG - Ecommerce de videojuegos multiplataforma"
                    technologies={techsgog}
                    description="Tienda digital de videojuegos inspirada en GOG, que permite a los usuarios comprar, reseñar y gestionar su colección de juegos en versiones web y móvil."
                    repo="https://github.com/arodriguezfontana/gog-frontend"
                />
                <ProjectCard
                    image="/epers_image.png"
                    title="Epersgeist - Sistema de persistencia con múltiples bases de datos"
                    technologies={techsepers}
                    description="Aplicación backend dividida en seis etapas, cada una con un enfoque distinto de persistencia de datos. Incorpora múltiples bases de datos, pruebas automatizadas, geolocalización y búsquedas semánticas."
                    repo="https://github.com/arodriguezfontana/epersgeist-backend"
                />
                <ProjectCard
                    image="/wordle_image.png"
                    title="Wordle – Juego web interactivo de adivinanza de palabras"
                    technologies={techswordle}
                    description="Aplicación web interactiva inspirada en Wordle, que permite jugar con distintos niveles de dificultad, con validaciones en tiempo real, manejo de sesiones y una interfaz responsive."
                    repo="https://github.com/arodriguezfontana/wordle-game"
                />
            </Card>
        </>
    )
}

export default Projects
