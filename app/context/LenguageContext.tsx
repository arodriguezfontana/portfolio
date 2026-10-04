'use client';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
    language: Language;
    toggleLanguage: () => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
const translations = {
    // Nav
    'nav_intro': { 'es': 'Intro', 'en': 'Intro' },
    'nav_experience': { 'es': 'Experiencia', 'en': 'Experience' },
    'nav_projects': { 'es': 'Proyectos', 'en': 'Projects' },
    'nav_about': { 'es': 'Sobre mí', 'en': 'About me' },
    'nav_skills': { 'es': 'Habilidades', 'en': 'Skills' },
    'nav_contact': { 'es': 'Contacto', 'en': 'Contact' },
    
    // Header
    'header_available': { 'es': 'Disponible para trabajar', 'en': 'Available for work' },
    'header_hi': { 'es': 'Hola, soy', 'en': "Hi, I'm" },
    'header_contact_btn': { 'es': 'Contactame', 'en': 'Contact me' },
    'header_download_cv_btn': { 'es': 'Descargar CV', 'en': 'Download CV' },

    'header_description_1': { 'es': 'Estudiante avanzada de la ', 'en': 'Advanced student of ' },
    'header_description_2': { 'es': 'Licenciatura en Informática ', 'en': 'B.S. in Computer Science ' },
    'header_description_3': { 'es': 'con experiencia en ', 'en': 'with experience in ' },
    'header_description_4': { 'es': 'Desarrollo Full Stack. ', 'en': 'Full Stack Development. ' },
    'header_description_5': { 'es': 'Actualmente profundizando en ', 'en': 'Currently deepening my expertise in ' },
    'header_description_6': { 'es': 'Ciencia de Datos.', 'en': 'Data Science.' },
    
    // Experiencia
    'exp_title': { 'es': 'Experiencia laboral', 'en': 'Work experience' },
    'exp3_role': { 'es': 'Ayudante de Cátedra', 'en': 'Teaching Assistant' },
    'exp3_date_freelance': { 'es': 'Mar. 2025 - Actualidad', 'en': 'Mar. 2025 - Present' },
    'exp3_desc_freelance': { 'es': 'Dictado de clases y supervisión de entregas para la materia Estrategias de Persistencia, con enfoque en el modelado y gestión de datos en motores SQL y NoSQL, brindando mentoría técnica a estudiantes en el diseño de arquitecturas de persistencia, optimización de consultas complejas y toma de decisiones estratégicas según cada caso de uso.', 'en': 'Teaching classes and grading project deliverables for the Persistence Strategies course, focusing on data modeling and management across SQL and NoSQL engines, while providing technical mentorship to students in designing persistence architectures, optimizing complex queries, and making strategic decisions based on specific use cases.' },
    
    'exp2_role': { 'es': 'Profesora de Informática', 'en': 'Computer Science Teacher' },
    'exp2_date_freelance': { 'es': 'Abr. 2026 - Actualidad', 'en': 'Apr. 2026 - Present' },
    'exp2_desc_freelance': { 'es': 'Planificación y dictado de clases de informática para estudiantes de 4to, 5to y 6to grado de nivel primario, junto con el diseño de actividades enfocadas en herramientas digitales (MS Office), fundamentos de la programación (Gobstones) y pensamiento computacional.', 'en': 'Lesson planning and instruction of computer science classes for 4th, 5th, and 6th-grade elementary school students, alongside designing activities focused on digital tools (MS Office), core programming fundamentals (Gobstones), and computational thinking.' },
    
    // Projects
    'proj_title': { 'es': 'Proyectos', 'en': 'Projects' },
    'proj_repo_link': { 'es': 'Ver Repositorio', 'en': 'View Repository' },
    'proj_view_more': { 'es': 'Ver más', 'en': 'View more' },
    'proj_modal_close': { 'es': 'Cerrar', 'en': 'Close' },
    'proj_modal_gallery': { 'es': 'Galería de capturas', 'en': 'Visual gallery' },
    'proj_modal_techs': { 'es': 'Stack tecnológico', 'en': 'Tech stack' },
    'proj_modal_details': { 'es': 'Detalles del proyecto', 'en': 'Project details' },
    'proj_gog_title': { 'es': 'E-Commerce de Videojuegos Multiplataforma', 'en': 'Multiplatform E-Commerce for Video Games' },
    'proj_gog_desc': { 'es': 'Construcción de una plataforma de venta de videojuegos mediante una arquitectura modular de tres capas, garantizando interfaces web y móviles completamente responsivas con flujos dinámicos de usuario.', 'en': 'Construction of a video game retail platform using a modular three-tier architecture, ensuring fully responsive web and mobile interfaces with dynamic user workflows.' },
    
    'proj_accidenta_title': { 'es': 'Aplicación Móvil de Emergencias', 'en': 'Emergency Mobile Application' },
    'proj_accidenta_desc': { 'es': 'Desarrollo de una solución de seguridad crítica con geolocalización en tiempo real, envío instantáneo de alertas, gestión de fichas médicas, reportes multimedia de incidentes y un panel estadístico de accidentabilidad por zonas.', 'en': 'Development of a critical safety solution featuring real-time geolocation, instant alert broadcasting, medical profile management, multimedia incident reporting, and a statistical dashboard tracking accident rates by zone.' },
    
    'proj_epers_title': { 'es': 'Arquitectura de Persistencia Políglota', 'en': 'Polyglot Persistence Architecture' },
    'proj_epers_desc': { 'es': 'Diseño de un backend modular bajo Clean Architecture y microservicios, implementando una estrategia de almacenamiento híbrido (SQL, NoSQL, Grafos y Búsqueda avanzada) optimizada según cada caso de uso.', 'en': 'Design of a modular backend under Clean Architecture and microservices, implementing a hybrid storage strategy (SQL, NoSQL, Graphs, and Advanced Search) optimized for specific use cases.' },

    'proj_wordle_title': { 'es': 'Juego Web de Adivinanza de Palabras', 'en': 'Word-Guessing Web Game' },
    'proj_wordle_desc': { 'es': 'Desarrollo de una aplicación interactiva con validaciones en tiempo real y niveles de dificultad dinámicos. Incluye manejo de sesiones y persistencia de estados para asegurar una experiencia de usuario fluida y con diseño adaptable.', 'en': 'Development of an interactive application featuring real-time validations and dynamic difficulty levels, including session management and state persistence to ensure a smooth user experience and responsive design.' },

    'proj_despegar_title': { 'es': 'Asistente de Postventa con IA', 'en': 'AI-Powered After-Sales Assistant' },
    'proj_despegar_desc': { 'es': 'Desarrollo de un sistema inteligente full-stack para la automatización de contingencias de viajes, integrando servicios predictivos que detectan demoras o cancelaciones y gestionan compensaciones dinámicas según el perfil del usuario.', 'en': 'Full-stack development of an intelligent system for travel contingency automation, integrating predictive services to detect delays or cancellations and manage dynamic compensations based on user profiles.' },
    
    // About me
    'about_title': { 'es': 'Sobre mí', 'en': 'About me' },
    'about_subtitle': { 'es': 'Historia & Enfoque', 'en': 'Story & Philosophy' },
    'about_1': { 'es': 'Desde pequeña ', 'en': 'Ever since I was little, ' },
    'about_2': { 'es': 'me apasiona la tecnología ', 'en': 'technology has been my true passion, ' },
    'about_3': { 'es': 'y, al crecer, decidí empezar con la programación. ', 'en': 'which inspired me to pursue programming as my craft. ' },
    'about_4': { 'es': 'Mi objetivo es ', 'en': 'My mission is to ' },
    'about_5': { 'es': 'acercar la tecnología a todas las personas ', 'en': 'bring technology closer to everyone ' },
    'about_6': { 'es': 'creando soluciones que resuelvan problemas reales, generen impacto positivo y mejoren situaciones de la vida diaria.', 'en': 'by crafting solutions that solve real problems, spark positive impact, and elevate everyday experiences.' },
    'about_skills_title': { 'es': 'Habilidades & Tecnologías', 'en': 'Skills & Technologies' },
    'about_values_title': { 'es': 'Pilares de Trabajo', 'en': 'Core Pillars' },

    // Footer
    'footer_talk_title': { 'es': '¿Construimos algo juntos?', 'en': "Let's create something together" },
    'footer_talk_subtitle': { 'es': 'Siempre abierta a nuevos proyectos, colaboraciones y desafíos tecnológicos.', 'en': 'Always open to exciting projects, creative collaborations, and tech opportunities.' },
    'footer_copyright': { 'es': 'Diseñado y desarrollado con estilo editorial & dedicación.', 'en': 'Designed & crafted with editorial elegance and care.' },
    'footer_contact_link': { 'es': 'Contacto', 'en': 'Contact' },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>('es');

    useEffect(() => {
        const savedLang = localStorage.getItem('lang') as Language;
        if (savedLang) {
            setLanguage(savedLang);
            document.documentElement.lang = savedLang; 
        }
    }, []);

    const t = (key: string): string => {
        const translation = translations[key as keyof typeof translations];
        return translation ? translation[language] : key; 
    };

    const toggleLanguage = () => {
        setLanguage(prevLang => {
            const newLang = prevLang === 'es' ? 'en' : 'es';
            localStorage.setItem('lang', newLang);
            document.documentElement.lang = newLang; 
            return newLang;
        });
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage debe usarse dentro de un LanguageProvider');
    }
    return context;
};
