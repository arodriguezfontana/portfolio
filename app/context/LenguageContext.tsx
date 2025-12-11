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
    'nav_intro': { 'es': 'Intro', 'en': 'Intro' },
    'nav_experience': { 'es': 'Experiencia', 'en': 'Experience' },
    'nav_projects': { 'es': 'Proyectos', 'en': 'Projects' },
    'nav_about': { 'es': 'Sobre mí', 'en': 'About me' },
    'nav_contact': { 'es': 'Contacto', 'en': 'Contact' },
    
    'header_available': { 'es': 'Disponible para trabajar', 'en': 'Available for work' },
    'header_hi': { 'es': 'Hola, soy', 'en': "Hi, I'm" },
    'header_contact_btn': { 'es': 'Contactame', 'en': 'Contact me' },
    'header_download_cv_btn': { 'es': 'Descargar CV', 'en': 'Download CV' },

    'header_description_1': { 
        'es': 'Próxima ', 
        'en': 'Future ' 
    },
    'header_description_2': { 
        'es': 'Licenciada en Informática', 
        'en': 'Bachelor of Science in Computer Science' 
    },
    'header_description_3': { 
        'es': '. Me especializo en el desarrollo ', 
        'en': '. Specializing in ' 
    },
    'header_description_4': { 
        'es': 'Full Stack ', 
        'en': 'Full Stack ' 
    },
    'header_description_5': { 
        'es': ', y estoy constantemente ampliando mis conocimientos en nuevas tecnologías, con un enfoque actual en el campo de la ', 
        'en': 'development, I am committed to continuous learning and expanding my expertise in new technologies, with a current focus on the field of ' 
    },
    'header_description_6': { 
        'es': 'Cienca de Datos.', 
        'en': 'Data Science.' 
    },
    
    'exp_title': { 'es': 'Experiencia laboral', 'en': 'Work experience' },
    'exp_date_freelance': { 'es': 'Marzo 2025 - Actualidad', 'en': 'March 2025 - Present' },
    'exp_desc_freelance': { 
        'es': 'Me encargué del diseño de arquitectura, desarrollo y entrega de soluciones Full Stack complejas y escalables, manteniendo siempre un fuerte enfoque en la calidad del código y la resolución efectiva de necesidades reales. Además, participé activamente en la gestión de proyectos, la toma de decisiones técnicas y el liderazgo dentro de equipos ágiles y colaborativos', 
        'en': 'Led the architectural design, development, and delivery of complex and scalable Full Stack solutions, maintaining a strong focus on code quality and the effective resolution of real-world needs. I also contributed to project management, technical decision-making, and leadership within agile and collaborative teams.' 
    },
    
    'proj_title': { 'es': 'Proyectos', 'en': 'Projects' },
    'proj_repo_link': { 'es': 'Ver Repositorio', 'en': 'View Repository' },
    
    'proj_gog_title': { 'es': 'E-Commerce Multi-Plataforma de Videojuegos', 'en': 'Multi-Platform Video Game E-Commerce' },
    'proj_gog_desc': { 'es': 'Tienda digital de videojuegos fullstack (web y mobile), inspirada en GOG, que permite a los usuarios buscar, comprar y reseñar juegos. Incluye tambien un sistema de amistades.', 'en': 'Fullstack digital video game store (web and mobile), inspired by GOG, allowing users to search, buy, and review games. It also includes a friendship system.' },
    
    'proj_accidenta_title': { 'es': 'App Mobile de Reporte y Alerta de Emergencias', 'en': 'Mobile Emergency Reporting and Alert App' },
    'proj_accidenta_desc': { 'es': 'Aplicación fullstack mobile para reportar rapidamente situaciones de emergencia, con notificaciones automatizadas vía email a contactos de confianza y ubicación del accidente en tiempo real.', 'en': 'Fullstack mobile application for quickly reporting emergency situations, with automated email notifications to trusted contacts and real-time accident location.' },
    
    'proj_epers_title': { 'es': 'Sistema de Persistencia Multi-Bases de Datos', 'en': 'Multi-Database Persistence System' },
    'proj_epers_desc': { 'es': 'Backend enfocado en la integración modular y estratégica de múltiples tipos de bases de datos. Incorpora geolocalización y búsquedas semánticas.', 'en': 'Backend focused on modular and strategic integration of multiple database types. Incorporates geolocation and semantic searches.' },
    
    'proj_wordle_title': { 'es': 'Juego Web Interactivo de Adivinanza de Palabras', 'en': 'Interactive Word-Guessing Web Game' },
    'proj_wordle_desc': { 'es': 'Implementación Frontend de juego de adivinanza de palabras, inspirado en Wordle, que permite jugar con distintos niveles de dificultad, validaciones en tiempo real, manejo de sesiones y una interfaz responsive.', 'en': 'Frontend implementation of a word guessing game, inspired by Wordle, allowing play with different difficulty levels, real-time validation, session management, and a responsive interface.' },
    
    'about_title': { 'es': 'Sobre mí', 'en': 'About me' },
    'about_1': { 'es': 'Me llamo Abril. Desde pequeña ', 'en': 'My name is Abril. My ' },
    'about_2': { 'es': 'me apasiona la tecnología ', 'en': 'passion for technology' },
    'about_3': { 'es': 'y, al crecer, decidí empezar con la programación.', 'en':'started when I was young, which led me to begin a career in programming.' },
    
    'about_4': { 'es': 'Mi objetivo es ', 'en': 'My goal is to ' },
    'about_5': { 'es': 'acercar la tecnología a todas las personas ', 'en': 'bring technology closer to all people ' },
    'about_6': { 'es': 'creando soluciones que resuelvan problemas o mejoren situaciones de la vida diaria.', 'en': 'by creating solutions that solve problems or improve daily life situations.' },

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