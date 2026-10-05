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
      id: "futval",
      image: getImgPath("futval_image.png"),
      images: [
        getImgPath("futval_image.png"),
      ],
      title: t('proj_futval_title'),
      category: language === 'es' ? "Fintech & Tokenización" : "Fintech & Tokenization",
      inProgress: true,
      technologies: assets.techsfutval,
      description: t('proj_futval_desc'),
      longDescription: language === 'es'
        ? "Desarrollo de una plataforma backend y frontend de mercado financiero de tokens de jugadores de fútbol, basada en cotizaciones dinámicas calculadas mediante estrategias de performance y métricas extraídas de fuentes de datos externas. Arquitectura moderna con NestJS y React, enfocada en escalabilidad y pruebas unitarias con Jest."
        : "Full-stack financial token marketplace for soccer players with dynamic pricing models derived from live performance strategies and external statistical APIs. Built on a clean NestJS and React stack with Jest test coverage.",
      repo: "https://github.com/arodriguezfontana/desapp-gf",
    },
    {
      id: "restoit",
      image: getImgPath("restoit_image.png"),
      images: [
        getImgPath("restoit_image.png"),
      ],
      title: t('proj_restoit_title'),
      category: language === 'es' ? "Gastronomía & IA Conversacional" : "AI & Restaurant Tech",
      inProgress: true,
      technologies: assets.techsrestoit,
      description: t('proj_restoit_desc'),
      longDescription: language === 'es'
        ? "Desarrollo de una plataforma full-stack inteligente para la gestión de locales gastronómicos, que unifica pedidos web y canales conversacionales automatizados por IA vía WhatsApp en un panel administrativo en tiempo real con comandas virtuales por sectores y analítica predictiva."
        : "Intelligent full-stack platform for restaurant management, unifying web ordering and AI-automated WhatsApp conversational channels into a real-time admin dashboard with virtual kitchen order routing and predictive analytics.",
      repo: "https://github.com/arodriguezfontana/tip",
    },
    {
      id: "meli",
      image: getImgPath("meli_image.png"),
      images: [
        getImgPath("meli_image.png"),
      ],
      title: t('proj_meli_title'),
      category: language === 'es' ? "Alta Concurrencia & WebSockets" : "High Concurrency & Real-Time",
      inProgress: false,
      technologies: assets.techsmeli,
      description: t('proj_meli_desc'),
      longDescription: language === 'es'
        ? "Desarrollo de un sistema de alta concurrencia para compras grupales en tiempo real, integrando WebSockets y Redis para la sincronización instantánea de carritos, votaciones y división equitativa de pagos mediante una arquitectura full-stack con Go y React."
        : "High-concurrency system for real-time collaborative shopping, leveraging WebSockets and Redis for instant cart synchronization, item voting, and bill splitting through a Go and React architecture.",
      repo: "https://github.com/arodriguezfontana/meli-co-purchase",
    },
    {
      id: "cth",
      image: getImgPath("cth_image.png"),
      images: [
        getImgPath("cth_image.png"),
      ],
      title: t('proj_cth_title'),
      category: language === 'es' ? "Proptech & DevOps CI/CD" : "Proptech & DevOps CI/CD",
      inProgress: false,
      technologies: assets.techscth,
      description: t('proj_cth_desc'),
      longDescription: language === 'es'
        ? "Desarrollo de una plataforma web full-stack de gestión y seguimiento de compra inmobiliaria con múltiples perfiles de usuario, buscador avanzado de propiedades, sistema de favoritos, reseñas, reportes estadísticos e infraestructura Dockerizada con testing integral y CI/CD."
        : "Full-stack real estate property search and purchase tracking platform featuring role-based access, advanced filtering, favorites, reviews, analytics, and a Dockerized environment with end-to-end testing and CI/CD.",
      repo: "https://github.com/arodriguezfontana/compra-tu-hogar",
    },
    {
      id: "despegar",
      image: getImgPath("despegar_image.jpg"),
      images: [
        getImgPath("despegar_image.jpg"),
      ],
      title: t('proj_despegar_title'),
      category: "AI & Cloud Architecture",
      inProgress: false,
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
      inProgress: false,
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
      inProgress: false,
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
      inProgress: false,
      technologies: assets.techsepers,
      description: t('proj_epers_desc'),
      longDescription: language === 'es'
        ? "Arquitectura backend orientada a microservicios implementada bajo principios de Clean Architecture. Su principal distintivo radica en su estrategia de persistencia políglota, donde cada modelo de datos reside en el motor óptimo: PostgreSQL para transacciones relacionales ACID, MongoDB para documentos no estructurados, Neo4j para grafos de relaciones y Elasticsearch para búsquedas contextuales de alta velocidad."
        : "Microservices backend designed under Clean Architecture and Domain-Driven Design principles. Its standout feature is polyglot persistence: PostgreSQL handles ACID relational operations, MongoDB manages flexible documents, Neo4j analyzes relationship graphs, and Elasticsearch drives blazing-fast full-text searches.",
      repo: "https://github.com/arodriguezfontana/epersgeist-backend",
    },
    /*
    {
      id: "wordle",
      image: getImgPath("wordle_image.png"),
      images: [
        getImgPath("wordle_image.png"),
      ],
      title: t('proj_wordle_title'),
      category: "Interactive Web Game",
      inProgress: false,
      technologies: assets.techswordle,
      description: t('proj_wordle_desc'),
      longDescription: language === 'es'
        ? "Recreación moderna del popular juego de palabras Wordle con una interfaz visual pulida, animaciones interactivas por celda y soporte para teclados físicos y táctiles. Implementa validaciones ortográficas en tiempo real, niveles de dificultad ajustables, guardado de estadísticas de partidas en localStorage y diseño completamente adaptable."
        : "Modern rendition of the beloved Wordle word-guessing game featuring fluid letter flip animations, virtual and physical keyboard detection, real-time dictionary validation, adjustable difficulty tiers, and persistent local score statistics.",
      repo: "https://github.com/arodriguezfontana/wordle-game",
    },
    */
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
        // subtitle={language === 'es' ? 'Trabajos Seleccionados' : 'Selected Works'}
        title={
          <span>
            {t('proj_title')}{' '}
            <span className="font-serif italic font-normal text-[#8a1239] dark:text-[#ffb1e3]">
              {language === 'es' ? 'Destacados' : 'Featured'}
            </span>
          </span>
        }
      >
        {/* Grid configured to 4 columns on desktop/xl screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
          {projectsList.map((project) => (
            <ProjectCard
              key={project.id || project.title}
              image={project.image}
              title={project.title}
              category={project.category}
              inProgress={project.inProgress}
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
