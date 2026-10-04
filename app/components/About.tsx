'use client';
import React from 'react';
import { Sparkles, Code2, Database, Layers, Brain, Terminal } from "lucide-react";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaJava, FaGitAlt } from "react-icons/fa";
import { 
  SiTypescript, 
  SiJavascript, 
  SiExpress, 
  SiSpringboot, 
  SiPostgresql, 
  SiMongodb, 
  SiNeo4J, 
  SiElasticsearch, 
  SiPython, 
  SiFastapi, 
  SiTailwindcss, 
  SiNextdotjs 
} from "react-icons/si";
import Card from './Card';
import { useLanguage } from '../context/LenguageContext';

const skillCategories = [
  {
    title: "Frontend & Interfaces",
    icon: <Code2 size={16} className="text-[#8a1239]" />,
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
    ],
  },
  {
    title: "Backend & Persistencia",
    icon: <Database size={16} className="text-[#8a1239]" />,
    skills: [
      { name: "Java", icon: <FaJava /> },
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "Python", icon: <SiPython /> },
      { name: "FastAPI", icon: <SiFastapi /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Neo4j", icon: <SiNeo4J /> },
      { name: "Elasticsearch", icon: <SiElasticsearch /> },
    ],
  },
  {
    title: "Arquitectura & Herramientas",
    icon: <Layers size={16} className="text-[#8a1239]" />,
    skills: [
      { name: "Clean Architecture", icon: <Sparkles size={12} /> },
      { name: "Microservicios", icon: <Layers size={12} /> },
      { name: "Git & GitHub", icon: <FaGitAlt /> },
      { name: "REST APIs", icon: <Terminal size={12} /> },
      { name: "Ciencia de Datos", icon: <Brain size={12} /> },
    ],
  },
];

const About = () => {
  const { t, language } = useLanguage();

  return (
    <section id="about" className="relative scroll-mt-24">
      {/* Background ambient light */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-[#ffc3e9]/25 blur-[120px] -z-10" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute bottom-1/4 -right-16 w-80 h-80 rounded-full bg-[#ffb1e3]/20 blur-[130px] -z-10" 
      />

      <Card
        icon={<Sparkles size={20} className="text-[#8a1239]" />}
        subtitle={t('about_subtitle')}
        title={
          <span>
            {t('about_title')}{' '}
            <span className="font-serif italic font-normal text-[#8a1239] dark:text-[#ffb1e3]">
              {language === 'es' ? 'Personal' : '& Vision'}
            </span>
          </span>
        }
      >
        <div className="space-y-8">
          
          {/* Main Story Editorial Box */}
          <div className="bg-white/95 dark:bg-[#230713]/90 backdrop-blur-md rounded-[2.5rem] border border-[#ffc3e9]/60 dark:border-[#8a1239]/40 p-8 sm:p-12 shadow-xl shadow-[#640527]/5 relative overflow-hidden">
            <div className="absolute top-6 right-8 text-[#ffc3e9]/40 select-none text-6xl font-serif italic pointer-events-none">
              “
            </div>

            <div className="max-w-3xl">
              <p className="text-lg sm:text-xl text-[#8a5743] dark:text-[#dcdcdc] leading-relaxed font-light mb-6">
                {t('about_1')}
                <span className="font-semibold text-[#640527] dark:text-[#ffc3e9]">
                  {t('about_2')}
                </span>
                {t('about_3')}
                <br className="hidden sm:block" />
                {t('about_4')}
                <span className="font-serif italic text-2xl text-[#8a1239] dark:text-[#ffb1e3] font-normal mx-1">
                  {t('about_5')}
                </span>
                {t('about_6')}
              </p>

              {/* 3 Editorial Value Badges */}
              <div className="pt-6 border-t border-[#ffc3e9]/40 dark:border-[#8a1239]/30 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-[1.5rem] bg-[#fff2fb]/60 dark:bg-[#2d0a18]/60 border border-[#ffc3e9]/50 dark:border-[#8a1239]/30">
                  <span className="text-[#8a1239] text-xs">✦ 01</span>
                  <h4 className="font-extrabold text-[#640527] dark:text-[#ffc3e9] text-sm mt-1">
                    {language === 'es' ? 'Arquitectura Limpia' : 'Clean Architecture'}
                  </h4>
                  <p className="text-xs text-[#8a5743] dark:text-[#dcdcdc] mt-1 leading-normal">
                    {language === 'es' ? 'Código mantenible, escalable y modular.' : 'Maintainable, scalable & decoupled code.'}
                  </p>
                </div>

                <div className="p-4 rounded-[1.5rem] bg-[#fff2fb]/60 dark:bg-[#2d0a18]/60 border border-[#ffc3e9]/50 dark:border-[#8a1239]/30">
                  <span className="text-[#8a1239] text-xs">✦ 02</span>
                  <h4 className="font-extrabold text-[#640527] dark:text-[#ffc3e9] text-sm mt-1">
                    {language === 'es' ? 'Persistencia Políglota' : 'Polyglot Data'}
                  </h4>
                  <p className="text-xs text-[#8a5743] dark:text-[#dcdcdc] mt-1 leading-normal">
                    {language === 'es' ? 'SQL, NoSQL, Grafos y Búsqueda contextual.' : 'SQL, NoSQL, Graphs & search engines.'}
                  </p>
                </div>

                <div className="p-4 rounded-[1.5rem] bg-[#fff2fb]/60 dark:bg-[#2d0a18]/60 border border-[#ffc3e9]/50 dark:border-[#8a1239]/30">
                  <span className="text-[#8a1239] text-xs">✦ 03</span>
                  <h4 className="font-extrabold text-[#640527] dark:text-[#ffc3e9] text-sm mt-1">
                    {language === 'es' ? 'Impacto & Empatía' : 'Human Impact'}
                  </h4>
                  <p className="text-xs text-[#8a5743] dark:text-[#dcdcdc] mt-1 leading-normal">
                    {language === 'es' ? 'Soluciones útiles para la vida cotidiana.' : 'Meaningful solutions improving daily life.'}
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Skills & Technologies Matrix */}
          <div className="bg-white/95 dark:bg-[#230713]/90 backdrop-blur-md rounded-[2.5rem] border border-[#ffc3e9]/60 dark:border-[#8a1239]/40 p-8 sm:p-12 shadow-xl shadow-[#640527]/5">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[#8a1239] text-sm">✦</span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#640527] dark:text-[#ffc3e9] tracking-tight">
                {t('about_skills_title')}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {skillCategories.map((cat, idx) => (
                <div 
                  key={idx}
                  className="rounded-[2rem] bg-[#fff2fb]/40 dark:bg-[#2d0a18]/30 border border-[#ffc3e9]/40 dark:border-[#8a1239]/30 p-5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#ffc3e9]/40 dark:border-[#8a1239]/30">
                      <div className="w-7 h-7 rounded-full bg-white dark:bg-[#43031a] flex items-center justify-center shadow-xs">
                        {cat.icon}
                      </div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#640527] dark:text-[#ffc3e9]">
                        {cat.title}
                      </h4>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white dark:bg-[#380e22] text-[#640527] dark:text-[#ffc3e9] border border-[#ffc3e9]/60 dark:border-[#8a1239]/50 shadow-2xs hover:bg-[#fff2fb] hover:scale-105 transition-all duration-200"
                        >
                          <span className="text-[#8a1239] dark:text-[#ffb1e3] text-sm">{skill.icon}</span>
                          <span>{skill.name}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Card>
    </section>
  );
};

export default About;
