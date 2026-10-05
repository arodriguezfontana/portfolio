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
          <div className="w-full">
            {/* Altitud */}
            <ExperienceCard
              role={t('exp_altitud_role')}
              company="Altitud"
              badge={t('exp_altitud_badge')}
              date={t('exp_altitud_date')}
            >
              <ul className="space-y-2 mt-3 text-sm sm:text-base text-[#8a5743] dark:text-[#dcdcdc] leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#8a1239] dark:text-[#ffb1e3] text-xs mt-1 shrink-0">✦</span>
                  <span>{t('exp_altitud_p1')}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#8a1239] dark:text-[#ffb1e3] text-xs mt-1 shrink-0">✦</span>
                  <span>{t('exp_altitud_p2')}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#8a1239] dark:text-[#ffb1e3] text-xs mt-1 shrink-0">✦</span>
                  <span>{t('exp_altitud_p3')}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#8a1239] dark:text-[#ffb1e3] text-xs mt-1 shrink-0">✦</span>
                  <span>{t('exp_altitud_p4')}</span>
                </li>
              </ul>
            </ExperienceCard>

            {/* Colegio Bruzzone */}
            <ExperienceCard
              role={t('exp2_role')}
              company="Colegio Pbro. Manuel Bruzzone"
              date={t('exp2_date_freelance')}
              description={t('exp2_desc_freelance')}
            />

            {/* Universidad Nacional de Quilmes */}
            <ExperienceCard
              role={t('exp3_role')}
              company="Universidad Nacional de Quilmes"
              date={t('exp3_date_freelance')}
              isLast={true}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mt-3">
                <div className="p-4 rounded-[1.25rem] bg-white/70 dark:bg-[#340c1e]/60 border border-[#ffc3e9]/60 dark:border-[#8a1239]/40 flex flex-col justify-start">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span className="text-[#8a1239] dark:text-[#ffb1e3] text-xs shrink-0">✦</span>
                    <h5 className="font-bold text-xs uppercase tracking-wider text-[#640527] dark:text-[#ffc3e9]">
                      {t('exp_unq_course1_title')}
                    </h5>
                  </div>
                  <p className="text-xs sm:text-sm text-[#8a5743] dark:text-[#dcdcdc] leading-relaxed font-normal">
                    {t('exp_unq_course1_desc')}
                  </p>
                </div>

                <div className="p-4 rounded-[1.25rem] bg-white/70 dark:bg-[#340c1e]/60 border border-[#ffc3e9]/60 dark:border-[#8a1239]/40 flex flex-col justify-start">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span className="text-[#8a1239] dark:text-[#ffb1e3] text-xs shrink-0">✦</span>
                    <h5 className="font-bold text-xs uppercase tracking-wider text-[#640527] dark:text-[#ffc3e9]">
                      {t('exp_unq_course2_title')}
                    </h5>
                  </div>
                  <p className="text-xs sm:text-sm text-[#8a5743] dark:text-[#dcdcdc] leading-relaxed font-normal">
                    {t('exp_unq_course2_desc')}
                  </p>
                </div>
              </div>
            </ExperienceCard>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default Experience;
