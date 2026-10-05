'use client';
import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import Button from './Button';
import { Download, Mail } from 'lucide-react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { useLanguage } from '../context/LenguageContext';

import { getAssetPath } from '../utils/basePath';

const Header = () => {
  const { t } = useLanguage();

  const goToLinkedIn = () => {
    window.open("https://www.linkedin.com/in/rodriguezfontana/", "_blank", "noopener,noreferrer");
  };

  const goToGitHub = () => {
    window.open("https://github.com/arodriguezfontana", "_blank", "noopener,noreferrer");
  };

  const goToMail = () => {
    window.location.href = "mailto:arodriguezfontana@gmail.com";
  };

  const downloadCV = (lang: 'es' | 'en') => {
    const filename = lang === 'es' ? "Abril_Rodriguez_CV_ES.pdf" : "Abril_Rodriguez_CV_EN.pdf";
    const link = document.createElement("a");
    link.href = getAssetPath(filename);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="top" className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 pb-4 sm:pt-28 sm:pb-6 lg:py-0 overflow-hidden">
      {/* Ambient pink and wine light glows (blur-120px / blur-140px) */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[38rem] h-[38rem] rounded-full bg-[#ffc3e9]/40 blur-[140px] -z-10" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/3 -right-20 w-96 h-96 rounded-full bg-[#ffb1e3]/30 blur-[130px] -z-10" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute bottom-8 -left-20 w-80 h-80 rounded-full bg-[#8a1239]/10 blur-[120px] -z-10" 
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 sm:gap-14 lg:gap-16">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Main Headline with Cormorant Garamond Cursive accent */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#640527] dark:text-[#ffc3e9] tracking-tight leading-[1.12] mb-6">
              {t('header_hi')}{' '}
              <span className="font-serif italic font-normal text-[#8a1239] dark:text-[#ffb1e3] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl block sm:inline mt-1 sm:mt-0">
                Abril Rodríguez
              </span>
            </h1>

            {/* Editorial Lead Paragraph */}
            <p className="text-base sm:text-lg lg:text-xl text-[#8a5743] dark:text-[#e898cb] font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8 sm:mb-10">
              {t('header_description_1')}
              <span className="font-semibold text-[#640527] dark:text-white">
                {t('header_description_2')}
              </span>
              {t('header_description_3')}
              <span className="font-semibold text-[#8a1239] dark:text-[#ffc3e9]">
                {t('header_description_4')}
              </span>
              {t('header_description_5')}
              <span className="font-medium text-[#640527] dark:text-white">
                {t('header_description_6')}
              </span>
            </p>

            {/* Action Buttons: Primary, Secondary, CV and Socials */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-3.5">
              <Button
                variant="primary"
                onClick={goToMail}
                icon={<Mail size={16} />}
              >
                {t('header_contact_btn')}
              </Button>

              <Button
                variant="secondary"
                onClick={() => downloadCV('es')}
                icon={<Download size={15} />}
              >
                {t('header_download_cv_es')}
              </Button>

              <Button
                variant="secondary"
                onClick={() => downloadCV('en')}
                icon={<Download size={15} />}
              >
                {t('header_download_cv_en')}
              </Button>

              <div className="flex items-center gap-2 pt-1 sm:pt-0">
                <button
                  onClick={goToLinkedIn}
                  title="LinkedIn Profile"
                  className="w-11 h-11 sm:w-11.5 sm:h-11.5 rounded-full bg-white dark:bg-[#2d0a18] border border-[#ffc3e9] dark:border-[#8a1239] flex items-center justify-center text-[#640527] dark:text-[#ffc3e9] shadow-sm hover:bg-[#ffc3e9]/30 dark:hover:bg-[#ffc3e9]/10 hover:border-[#8a1239] dark:hover:border-[#ffc3e9] hover:scale-105 transition-all duration-200 cursor-pointer"
                >
                  <FaLinkedinIn size={16} />
                </button>

                <button
                  onClick={goToGitHub}
                  title="GitHub Profile"
                  className="w-11 h-11 sm:w-11.5 sm:h-11.5 rounded-full bg-white dark:bg-[#2d0a18] border border-[#ffc3e9] dark:border-[#8a1239] flex items-center justify-center text-[#640527] dark:text-[#ffc3e9] shadow-sm hover:bg-[#ffc3e9]/30 dark:hover:bg-[#ffc3e9]/10 hover:border-[#8a1239] dark:hover:border-[#ffc3e9] hover:scale-105 transition-all duration-200 cursor-pointer"
                >
                  <FaGithub size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Circular Portrait with Girly Luxury Accents */}
          <div className="relative shrink-0 flex items-center justify-center">
            {/* Halo behind the circular portrait */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#ffc3e9] via-[#ffb1e3]/50 to-[#8a1239]/30 blur-2xl scale-105 opacity-80 -z-10" />

            {/* Circular portrait container */}
            <div className="relative p-2.5 sm:p-3 rounded-full bg-white/90 dark:bg-[#2d0a18]/90 backdrop-blur-md border-2 border-[#ffc3e9] dark:border-[#8a1239]/60 shadow-2xl shadow-[#640527]/15 transition-transform duration-500 hover:scale-[1.02]">
              <div className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 overflow-hidden rounded-full aspect-square">
                <Image
                  src={assets.abril_image}
                  alt="Abril Rodríguez"
                  fill
                  priority
                  className="object-cover object-center filter saturate-[1.05]"
                  sizes="(max-width: 640px) 208px, (max-width: 1024px) 256px, 320px"
                />
              </div>

              {/* Delicate sparkle corner pin */}
              <div className="absolute top-2 right-2 sm:top-3 sm:right-3 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#640527] text-white flex items-center justify-center shadow-lg border-2 border-white dark:border-[#2d0a18] text-xs font-bold">
                ✦
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Header;