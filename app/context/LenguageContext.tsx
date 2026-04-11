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
    
    // Header
    'header_available': { 'es': 'Disponible para trabajar', 'en': 'Available for work' },
    'header_hi': { 'es': 'Hola, soy', 'en': "Hi, I'm" },
    'header_contact_btn': { 'es': 'Contactame', 'en': 'Contact me' },
    'header_download_cv_btn': { 'es': 'Descargar CV', 'en': 'Download CV' },

    'header_description_1': { 'es': 'Estudiante avanzada de la ', 'en': 'Advanced student of ' },
    'header_description_2': { 'es': 'Licenciatura en Informática ', 'en': 'B.S. in Computer Science ' },
    'header_description_3': { 'es': 'con más de 2 años de experiencia en  ', 'en': 'with over 2 years of experience in  ' },
    'header_description_4': { 'es': 'Desarrollo Full Stack. ', 'en': 'Full Stack Development. ' },
    'header_description_5': { 'es': 'Actualmente profundizando en ', 'en': 'Currently deepening my expertise in ' },
    'header_description_6': { 'es': 'Ciencia de Datos.', 'en': 'Data Science.' },
    
    // Experiencia
    'exp_title': { 'es': 'Experiencia laboral', 'en': 'Work experience' },
    'exp_date_freelance': { 'es': 'Ago. 2024 - Actualidad', 'en': 'Aug. 2024 - Present' },
    'exp_desc_freelance': { 
    'es': 'Lidero el desarrollo de funcionalidades bajo Clean Architecture y microservicios para asegurar sistemas desacoplados, testeables y escalables. Optimizo consultas a bases de datos en módulos de alta demanda y diseño interfaces responsivas con Hooks, garantizando la integridad de los datos y una experiencia de usuario fluida.', 
    'en': 'Lead the development of functionalities under Clean Architecture and microservices to ensure decoupled, testable, and scalable systems. Optimize database queries in high-demand modules and design responsive interfaces with Hooks, ensuring data integrity and a seamless user experience.' 
},
'exp2_role': {
    'es': 'Ayudante de Cátedra', 
    'en': 'Teaching Assistant'
},
'exp2_date_freelance': { 
    'es': 'Mar. 2025 - Actualidad', 
    'en': 'Mar. 2025 - Present' 
},
'exp2_desc_freelance': { 
    'es': 'Dicto clases y superviso entregas para la materia Estrategias de Persistencia, orientando en la selección estratégica de motores SQL y NoSQL según el caso de uso.', 
    'en': 'Lecture and supervise student projects for the Persistence Strategies course, providing guidance on the strategic selection of SQL and NoSQL engines based on the use case.' 
},
    
    // Projects
    'proj_title': { 'es': 'Proyectos', 'en': 'Projects' },
    'proj_repo_link': { 'es': 'Ver Repositorio', 'en': 'View Repository' },
    'proj_gog_title': { 'es': 'E-Commerce Multi-Plataforma de Videojuegos', 'en': 'Multi-Platform Video Game E-Commerce' },
    'proj_gog_desc': {  'es': 'Implementé interfaces dinámicas para web y mobile, logrando un diseño Responsive y optimizando la experiencia de usuario en flujos complejos.', 'en': 'Implemented dynamic interfaces for web and mobile, achieving a responsive design and optimizing user experience across complex workflows.' },
    'proj_accidenta_title': { 'es': 'Aplicación Móvil de Emergencias', 'en': 'Mobile Emergency App' },
    'proj_accidenta_desc': { 'es': 'Desarrollé una solución móvil que integra geolocalización en tiempo real y envío de alertas ante urgencias. Integré métricas para la visualización de tendencias de accidentes por zona, tipo y fecha, facilitando su posterior análisis estadístico.', 'en': 'Developed a mobile solution featuring real-time geolocation and emergency alert systems. Integrated metrics for visualizing accident trends by area, type, and date, facilitating subsequent statistical analysis.' },
    'proj_epers_title': { 'es': 'Sistema de Persistencia Multi-Bases de Datos', 'en': 'Multi-Database Persistence System' },
    'proj_epers_desc': { 'es': 'Diseñé un backend modular basado en Clean Architecture que integra estratégicamente motores relacionales, documentales y de grafos, según el caso de uso. Integré geolocalización y búsqueda semántica.', 'en': 'Designed a modular backend based on Clean Architecture, strategically integrating relational, document, and graph databases. Implemented geolocation and semantic search features.' },
    'proj_wordle_title': { 'es': 'Juego Web de Adivinanza de Palabras', 'en': 'Word-Guessing Web Game' },
    'proj_wordle_desc': { 'es': 'Desarrollé una aplicación frontend interactiva con validaciones en tiempo real y niveles de dificultad dinámicos. Gestioné el manejo de sesiones y persistencia de estados para asegurar una experiencia de usuario fluida y adaptable.', 'en': 'Developed an interactive frontend application featuring real-time validations and dynamic difficulty levels. Managed session handling and state persistence to ensure a seamless and responsive user experience.' },
    
    // About me
    'about_title': { 'es': 'Sobre mí', 'en': 'About me' },
    'about_1': { 'es': 'Me llamo Abril. Desde pequeña ', 'en': 'My name is Abril. My ' },
    'about_2': { 'es': 'me apasiona la tecnología ', 'en': 'passion for technology ' },
    'about_3': { 'es': 'y, al crecer, decidí empezar con la programación. ', 'en':'started when I was young, which led me to begin a career in programming. ' },
    'about_4': { 'es': 'Mi objetivo es ', 'en': 'My goal is to ' },
    'about_5': { 'es': 'acercar la tecnología a todas las personas ', 'en': 'bring technology closer to all people ' },
    'about_6': { 'es': 'creando soluciones que resuelvan problemas y mejoren situaciones de la vida diaria.', 'en': 'by creating solutions that solve problems and improve daily life situations.' },

    // Footer
    'footer_copyright': { 'es': 'Todos los derechos reservados.', 'en': 'All rights reserved.' },
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
