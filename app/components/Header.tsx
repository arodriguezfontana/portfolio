'use client';
import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import Button from './Button';
import { Download, Mail, ArrowUpRight } from 'lucide-react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { useLanguage } from '../context/LenguageContext';

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

  const downloadCV = () => {
    const link = document.createElement("a");
    // Ensure compatibility with basePath in production
    const isProd = process.env.NODE_ENV === 'production';
    link.href = isProd ? "/portfolio/abril_rodriguez_cv.pdf" : "/abril_rodriguez_cv.pdf";
    link.download = "Abril_Rodriguez_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="top" className="relative pt-32 pb-0 sm:pt-36 lg:pt-40 overflow-hidden">
      {/* Ambient pink and wine light glows (blur-120px / blur-140px) */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[34rem] h-[34rem] rounded-full bg-[#ffc3e9]/40 blur-[130px] -z-10" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/3 -right-20 w-80 h-80 rounded-full bg-[#ffb1e3]/30 blur-[120px] -z-10" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute bottom-0 -left-20 w-72 h-72 rounded-full bg-[#8a1239]/10 blur-[110px] -z-10" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-14">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Top editorial pill badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#ffc3e9] shadow-sm mb-6">
              <span className="text-[#8a1239] text-xs">✦</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#8a1239]">
                Portfolio Editorial &middot; Tech &amp; Design
              </span>
              <span className="text-[#8a1239] text-xs">✦</span>
            </div>

            {/* Main Headline with Cormorant Garamond Cursive accent */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#640527] dark:text-[#ffc3e9] tracking-tight leading-[1.15] mb-5">
              {t('header_hi')}{' '}
              <span className="font-serif italic font-normal text-[#8a1239] dark:text-[#ffb1e3] text-5xl sm:text-6xl lg:text-7xl block sm:inline mt-1 sm:mt-0">
                Abril Rodríguez
              </span>
            </h1>

            {/* Editorial Lead Paragraph */}
            <p className="text-base sm:text-lg text-[#8a5743] dark:text-[#e898cb] font-normal leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              {t('header_description_1')}
              <span className="font-semibold text-[#640527] dark:text-white underline decoration-[#ffc3e9] decoration-2 underline-offset-4">
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
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
              <Button
                variant="primary"
                onClick={goToMail}
                icon={<Mail size={16} />}
              >
                {t('header_contact_btn')}
              </Button>

              <Button
                variant="secondary"
                onClick={downloadCV}
                icon={<Download size={16} />}
              >
                {t('header_download_cv_btn')}
              </Button>

              <div className="flex items-center gap-2 pt-2 sm:pt-0">
                <button
                  onClick={goToLinkedIn}
                  title="LinkedIn Profile"
                  className="w-11 h-11 rounded-full bg-white dark:bg-[#2d0a18] border border-[#ffc3e9] dark:border-[#8a1239] flex items-center justify-center text-[#640527] dark:text-[#ffc3e9] shadow-sm hover:bg-[#ffc3e9]/30 hover:border-[#8a1239] hover:scale-105 transition-all duration-200 cursor-pointer"
                >
                  <FaLinkedinIn size={16} />
                </button>

                <button
                  onClick={goToGitHub}
                  title="GitHub Profile"
                  className="w-11 h-11 rounded-full bg-white dark:bg-[#2d0a18] border border-[#ffc3e9] dark:border-[#8a1239] flex items-center justify-center text-[#640527] dark:text-[#ffc3e9] shadow-sm hover:bg-[#ffc3e9]/30 hover:border-[#8a1239] hover:scale-105 transition-all duration-200 cursor-pointer"
                >
                  <FaGithub size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Capsule / Pill Portrait with Girly Luxury Accents */}
          <div className="relative flex flex-col items-center">
            {/* Halo behind the portrait capsule */}
            <div className="absolute inset-0 rounded-[3.5rem] bg-gradient-to-b from-[#ffc3e9] to-[#8a1239]/20 blur-xl scale-95 opacity-70 -z-10" />

            {/* Portrait capsule container */}
            <div className="relative p-2.5 rounded-[3.5rem] bg-white/90 dark:bg-[#2d0a18]/90 backdrop-blur-md border-2 border-[#ffc3e9] shadow-2xl shadow-[#640527]/15 transition-transform duration-500 hover:scale-[1.02]">
              <div className="relative w-48 h-64 sm:w-56 sm:h-72 lg:w-64 lg:h-80 overflow-hidden rounded-[3rem]">
                <Image
                  src={assets.abril_image}
                  alt="Abril Rodríguez"
                  fill
                  priority
                  className="object-cover object-center filter saturate-[1.05]"
                  sizes="(max-width: 640px) 192px, (max-width: 1024px) 224px, 256px"
                />
              </div>

              {/* Delicate sparkle corner pin */}
              <div className="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-[#640527] text-white flex items-center justify-center shadow-lg border-2 border-white text-xs font-bold">
                ✦
              </div>
            </div>

            {/* Floating availability badge pill */}
            <button
              onClick={goToLinkedIn}
              className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 dark:bg-[#230713]/95 backdrop-blur-md border border-[#ffc3e9] shadow-md hover:shadow-lg hover:border-[#8a1239] transition-all duration-200 group cursor-pointer"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8a1239] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#640527]"></span>
              </span>
              <span className="text-xs font-semibold text-[#640527] dark:text-[#ffc3e9]">
                {t('header_available')}
              </span>
              <ArrowUpRight size={13} className="text-[#8a1239] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Header;