'use client';
import React, { useState } from 'react';
import { Sparkles } from "lucide-react";
import Card from './Card';
import ProjectCard from './ProjectCard';
import ProjectModal, { ProjectData } from './ProjectModal';
import { assets } from '@/assets/assets';
import { useLanguage } from '../context/LenguageContext';

const Projects = () => {
  const { t, language } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const getImgPath = (name: string) => `/portfolio/${name}`;

  const projectsList: ProjectData[] = [
    {
      id: "despegar",
      image: getImgPath("despegar_image.jpg"),
      images: [
        getImgPath("despegar_image.jpg"),
      ],
      title: t('proj_despegar_title'),
      category: "AI & Cloud Architecture",
      technologies: assets.techsdespegar,
      description: t('proj_despegar_desc'),
      longDescription: language === 'es'
        ? "Sistema integral inteligente para la resolución automatizada de contingencias de vuelos y viajes. Cuenta con servicios predictivos que anticipan demoras o cancelaciones de vuelos, motor de compensaciones dinámicas basado en el perfil del pasajero, y una arquitectura modular desacoplada con backend robusto en Spring Boot y microservicios FastAPI orientados a Machine Learning."
        : "Comprehensive intelligent system for automated travel contingency handling. Features predictive services anticipating delays or cancellations, dynamic compensation engines based on traveler profiles, and a decoupled architecture powered by Spring Boot and FastAPI microservices tailored for AI workflows.",
      repo: "https://github.com/arodriguezfontana/despegar-contingency-management",
    },
    {
      id: "gog",
      image: getImgPath("gog_image.png"),
      images: [
        getImgPath("gog_image.png"),
      ],
      title: t('proj_gog_title'),
      category: "Full Stack & E-Commerce",
      technologies: assets.techsgog,
      description: t('proj_gog_desc'),
      longDescription: language === 'es'
        ? "Plataforma de comercio electrónico para videojuegos inspirada en los estándares de la industria. Diseñada bajo una arquitectura modular de tres capas que garantiza alta cohesión y bajo acoplamiento. Incluye catálogo interactivo, filtros dinámicos, pasarela de compra, gestión de usuarios y sincronización con interfaces web y móviles responsivas."
        : "Industry-standard inspired video game e-commerce platform. Architected with a clean three-tier structure ensuring high cohesion and low coupling. Includes interactive game catalog, dynamic filtering, checkout flows, user management, and seamless cross-platform responsive interfaces.",
      repo: "https://github.com/arodriguezfontana/gog-frontend",
    },
    {
      id: "accidenta",
      image: getImgPath("accidenta_image.jpeg"),
      images: [
        getImgPath("accidenta_image.jpeg"),
      ],
      title: t('proj_accidenta_title'),
      category: "Mobile & Geolocation",
      technologies: assets.techsaccidenta,
      description: t('proj_accidenta_desc'),
      longDescription: language === 'es'
        ? "Aplicación móvil de respuesta rápida y seguridad ciudadana con geolocalización continua. Facilita el reporte instantáneo de incidentes viales y emergencias médicas, almacenamiento de fichas de salud personales para socorristas, alertas SOS con difusión inmediata y un panel analítico que calcula mapas de calor y tasas de siniestralidad por zona geográfica."
        : "Rapid-response public safety and medical emergency mobile application with real-time geolocation. Enables instant reporting of incidents, offline-ready personal medical records for first responders, emergency SOS broadcasts, and a statistical analytics dashboard mapping high-risk accident zones.",
      repo: "https://github.com/arodriguezfontana/accidenta-fullstack",
    },
    {
      id: "epers",
      image: getImgPath("epers_image.png"),
      images: [
        getImgPath("epers_image.png"),
      ],
      title: t('proj_epers_title'),
      category: "Polyglot Backend",
      technologies: assets.techsepers,
      description: t('proj_epers_desc'),
      longDescription: language === 'es'
        ? "Arquitectura backend orientada a microservicios implementada bajo principios de Clean Architecture. Su principal distintivo radica en su estrategia de persistencia políglota, donde cada modelo de datos reside en el motor óptimo: PostgreSQL para transacciones relacionales ACID, MongoDB para documentos no estructurados, Neo4j para grafos de relaciones y Elasticsearch para búsquedas contextuales de alta velocidad."
        : "Microservices backend designed under Clean Architecture and Domain-Driven Design principles. Its standout feature is polyglot persistence: PostgreSQL handles ACID relational operations, MongoDB manages flexible documents, Neo4j analyzes relationship graphs, and Elasticsearch drives blazing-fast full-text searches.",
      repo: "https://github.com/arodriguezfontana/epersgeist-backend",
    },
    {
      id: "wordle",
      image: getImgPath("wordle_image.png"),
      images: [
        getImgPath("wordle_image.png"),
      ],
      title: t('proj_wordle_title'),
      category: "Interactive Web Game",
      technologies: assets.techswordle,
      description: t('proj_wordle_desc'),
      longDescription: language === 'es'
        ? "Recreación moderna del popular juego de palabras Wordle con una interfaz visual pulida, animaciones interactivas por celda y soporte para teclados físicos y táctiles. Implementa validaciones ortográficas en tiempo real, niveles de dificultad ajustables, guardado de estadísticas de partidas en localStorage y diseño completamente adaptable."
        : "Modern rendition of the beloved Wordle word-guessing game featuring fluid letter flip animations, virtual and physical keyboard detection, real-time dictionary validation, adjustable difficulty tiers, and persistent local score statistics.",
      repo: "https://github.com/arodriguezfontana/wordle-game",
    },
  ];

  return (
    <section id="projects" className="relative scroll-mt-24">
      {/* Ambient pink blur background light */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/2 left-0 w-96 h-96 rounded-full bg-[#ffc3e9]/25 blur-[130px] -z-10" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute bottom-10 right-0 w-[30rem] h-[30rem] rounded-full bg-[#ffb1e3]/20 blur-[140px] -z-10" 
      />

      <Card
        icon={<Sparkles size={20} className="text-[#8a1239]" />}
        subtitle={language === 'es' ? 'Trabajos Seleccionados' : 'Selected Works'}
        title={
          <span>
            {t('proj_title')}{' '}
            <span className="font-serif italic font-normal text-[#8a1239] dark:text-[#ffb1e3]">
              {language === 'es' ? 'Destacados' : 'Featured'}
            </span>
          </span>
        }
      >
        {/* Grid fixed to maximum 3 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projectsList.map((project) => (
            <ProjectCard
              key={project.id || project.title}
              image={project.image}
              title={project.title}
              category={project.category}
              technologies={project.technologies}
              description={project.description}
              repo={project.repo}
              onOpenDetails={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </Card>

      {/* Boutique Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;
