import React from 'react'
import { CodeXml } from "lucide-react"
import Card from './Card'
import ProjectCard from './ProjectCard'
import { assets } from '@/assets/assets'

const Projects = () => {
    return (
        <>
            <section id='projects'>
                <Card
                    icon={<CodeXml size={35} className="text-blak-600" />}
                    title="Proyectos"
                >
                    <ProjectCard
                        image="/gog_image.png"
                        title="E-Commerce Multi-Plataforma de Videojuegos"
                        technologies={assets.techsgog}
                        description="Tienda digital de videojuegos fullstack (web y mobile), inspirada en GOG, que permite a los usuarios buscar, comprar y reseñar juegos. Incluye tambien un sistema de amistades."
                        repo="https://github.com/arodriguezfontana/gog-frontend"
                    />
                    <ProjectCard
                        image="/accidenta_image.jpeg"
                        title="App Mobile de Reporte de Emergencias"
                        technologies={assets.techsaccidenta}
                        description="Aplicación fullstack mobile para reportar rapidamente situaciones de emergencia, con notificaciones automatizadas vía email a contactos de confianza y ubicación del accidente en tiempo real."
                        repo="https://github.com/arodriguezfontana/accidenta-fullstack"
                    />
                    <ProjectCard
                        image="/epers_image.png"
                        title="Sistema de Persistencia Multi-Bases de Datos"
                        technologies={assets.techsepers}
                        description="Backend enfocado en la integración modular y estratégica de múltiples tipos de bases de datos. Incorpora geolocalización y búsquedas semánticas."
                        repo="https://github.com/arodriguezfontana/epersgeist-backend"
                    />
                    <ProjectCard
                        image="/wordle_image.png"
                        title="Juego Web Interactivo de Adivinanza de Palabras"
                        technologies={assets.techswordle}
                        description="Implementación Frontend de juego de adivinanza de palabras, inspirado en Wordle, que permite jugar con distintos niveles de dificultad, validaciones en tiempo real, manejo de sesiones y una interfaz responsive."
                        repo="https://github.com/arodriguezfontana/wordle-game"
                    />
                </Card>
            </section>
        </>
    )
}

export default Projects
