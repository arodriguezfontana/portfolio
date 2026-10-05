'use client';
import React from 'react';
import { Sparkles, Code2, Database, Layers, Brain, CheckCircle2, Network } from "lucide-react";
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
  SiNextdotjs,
  SiNestjs,
  SiRedis,
  SiDocker,
  SiVite,
  SiOpenai,
  SiSocketdotio
} from "react-icons/si";
import Card from './Card';
import { useLanguage } from '../context/LenguageContext';

const skillCategories = [
  {
    title: "Frontend",
    icon: <Code2 size={15} className="text-[#8a1239] dark:text-[#ffb1e3]" />,
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Vite", icon: <SiVite /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
    ],
  },
  {
    title: "Backend & Persistencia",
    icon: <Database size={15} className="text-[#8a1239] dark:text-[#ffb1e3]" />,
    skills: [
      { name: "Java", icon: <FaJava /> },
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "Python", icon: <SiPython /> },
      { name: "FastAPI", icon: <SiFastapi /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "NestJS", icon: <SiNestjs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "Redis", icon: <SiRedis /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Neo4j", icon: <SiNeo4J /> },
      { name: "Elasticsearch", icon: <SiElasticsearch /> },
    ],
  },
  {
    title: "Herramientas & Arquitectura",
    icon: <Layers size={15} className="text-[#8a1239] dark:text-[#ffb1e3]" />,
    skills: [
      { name: "Docker", icon: <SiDocker /> },
      { name: "LLM & IA", icon: <SiOpenai /> },
      { name: "Microservicios", icon: <Layers size={11} /> },
      { name: "Clean Architecture", icon: <Sparkles size={11} /> },
      { name: "Testing", icon: <CheckCircle2 size={11} /> },
      { name: "WebSockets", icon: <SiSocketdotio /> },
      { name: "APIs REST", icon: <Network size={11} /> },
      { name: "Git & GitHub", icon: <FaGitAlt /> },
      { name: "Ciencia de Datos", icon: <Brain size={11} /> },
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
        className="pointer-events-none absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-[#ffc3e9]/25 blur-[130px] -z-10" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute bottom-1/4 -right-16 w-[28rem] h-[28rem] rounded-full bg-[#ffb1e3]/20 blur-[130px] -z-10" 
      />

      <Card
        icon={<Sparkles size={20} className="text-[#8a1239]" />}
        // subtitle={t('about_subtitle')}
        title={
          <span>
            {t('about_title')}{' '}
            <span className="font-serif italic font-normal text-[#8a1239] dark:text-[#ffb1e3]">
              {language === 'es' ? 'Mí' : 'Me'}
            </span>
          </span>
        }
      >
        {/* Single Unified Frame */}
        <div className="bg-white/95 dark:bg-[#230713]/90 backdrop-blur-md rounded-[2.5rem] border border-[#ffc3e9]/60 dark:border-[#8a1239]/40 p-6 sm:p-10 lg:p-12 shadow-xl shadow-[#640527]/5 relative overflow-hidden">
          
          {/* TOP: Sobre mí (Story text without extra badges or subtitles) */}
          <div className="max-w-4xl mx-auto mb-8 sm:mb-10 text-center sm:text-left relative">
            <div className="absolute -top-6 right-0 text-[#ffc3e9]/40 dark:text-[#8a1239]/30 select-none text-6xl font-serif italic pointer-events-none hidden sm:block">
              “
            </div>

            <p className="text-base sm:text-lg lg:text-xl text-[#8a5743] dark:text-[#dcdcdc] leading-relaxed font-light">
              {t('about_1')}
              <span className="font-semibold text-[#640527] dark:text-[#ffc3e9]">
                {t('about_2')}
              </span>
              {t('about_3')}
              <br className="hidden sm:block my-2" />
              {t('about_4')}
              <span className="font-serif italic text-2xl sm:text-3xl text-[#8a1239] dark:text-[#ffb1e3] font-normal mx-1">
                {t('about_5')}
              </span>
              {t('about_6')}
            </p>
          </div>

          {/* BOTTOM: Habilidades & Tecnologías */}
          <div>
            {/* <div className="flex items-center gap-2 mb-5 justify-center sm:justify-start">
              <span className="text-[#8a1239] text-sm">✦</span>
              <h3 className="text-lg sm:text-xl font-extrabold text-[#640527] dark:text-[#ffc3e9] tracking-tight">
                {t('about_skills_title')}
              </h3>
            </div> */}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
              {skillCategories.map((cat, idx) => (
                <div 
                  key={idx}
                  className="rounded-[1.75rem] bg-[#fff2fb]/50 dark:bg-[#2d0a18]/40 border border-[#ffc3e9]/40 dark:border-[#8a1239]/30 p-4 sm:p-5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-3 pb-2.5 border-b border-[#ffc3e9]/40 dark:border-[#8a1239]/30">
                      <div className="w-6 h-6 rounded-full bg-white dark:bg-[#43031a] flex items-center justify-center shadow-xs">
                        {cat.icon}
                      </div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#640527] dark:text-[#ffc3e9]">
                        {cat.title}
                      </h4>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white dark:bg-[#380e22] text-[#640527] dark:text-[#ffc3e9] border border-[#ffc3e9]/60 dark:border-[#8a1239]/50 shadow-2xs hover:bg-[#fff2fb] dark:hover:bg-[#4a132e] hover:scale-105 transition-all duration-200"
                        >
                          <span className="text-[#8a1239] dark:text-[#ffb1e3] text-xs">{skill.icon}</span>
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
