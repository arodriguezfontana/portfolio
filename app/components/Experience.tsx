'use client';
import React from 'react';
import { Sparkles } from "lucide-react";
import Card from './Card';
import ExperienceCard from './ExperienceCard';
import { useLanguage } from '../context/LenguageContext';

const Experience = () => {
  const { t, language } = useLanguage();

  return (
    <section id="experience" className="relative scroll-mt-24">
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/3 -right-16 w-80 h-80 rounded-full bg-[#ffc3e9]/25 blur-[120px] -z-10" 
      />

      <Card
        icon={<Sparkles size={20} className="text-[#8a1239]" />}
        // subtitle={language === 'es' ? 'Trayectoria & Roles' : 'Career & Roles'}
        title={
          <span>
            {t('exp_title')}{' '}
            <span className="font-serif italic font-normal text-[#8a1239] dark:text-[#ffb1e3]">
              {language === 'es' ? 'Laboral' : 'Experience'}
            </span>
          </span>
        }
      >
        <div className="bg-white/95 dark:bg-[#230713]/90 backdrop-blur-md rounded-[2.5rem] border border-[#ffc3e9]/60 dark:border-[#8a1239]/40 p-6 sm:p-10 shadow-xl shadow-[#640527]/5">
          <div className="max-w-3xl mx-auto">
            <ExperienceCard
              role={t('exp2_role')}
              company="Colegio Pbro. Manuel Bruzzone"
              date={t('exp2_date_freelance')}
              description={t('exp2_desc_freelance')}
            />
            <ExperienceCard
              role={t('exp3_role')}
              company="Universidad Nacional de Quilmes"
              date={t('exp3_date_freelance')}
              description={t('exp3_desc_freelance')}
              isLast={true}
            />
          </div>
        </div>
      </Card>
    </section>
  );
};

export default Experience;
