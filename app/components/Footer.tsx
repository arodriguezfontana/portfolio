'use client';
import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import Button from './Button';
import { useLanguage } from '../context/LenguageContext';

const Footer = () => {
  const { t, language } = useLanguage();

  const goToMail = () => {
    window.location.href = "mailto:arodriguezfontana@gmail.com";
  };

  const goToLinkedIn = () => {
    window.open("https://www.linkedin.com/in/rodriguezfontana/", "_blank", "noopener,noreferrer");
  };

  const goToGitHub = () => {
    window.open("https://github.com/arodriguezfontana", "_blank", "noopener,noreferrer");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative pt-0 pb-16 overflow-hidden scroll-mt-24">
      {/* Ambient pink and burgundy lights */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2 w-[36rem] h-[24rem] rounded-full bg-[#ffc3e9]/30 blur-[140px] -z-10" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-0 right-10 w-72 h-72 rounded-full bg-[#ffb1e3]/20 blur-[120px] -z-10" 
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Boutique Call To Action Card */}
        <div className="relative bg-white/95 dark:bg-[#230713]/95 backdrop-blur-md rounded-[3rem] border border-[#ffc3e9]/70 dark:border-[#8a1239]/50 p-8 sm:p-14 shadow-2xl shadow-[#640527]/10 text-center mb-16 overflow-hidden">
          
          {/* Subtle decorative halo inside card */}
          <div 
            aria-hidden="true" 
            className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 w-96 h-36 bg-gradient-to-b from-[#ffc3e9]/40 to-transparent blur-2xl" 
          />

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fff2fb] dark:bg-[#3d0e23] border border-[#ffc3e9] dark:border-[#8a1239] text-xs font-semibold uppercase tracking-wider text-[#8a1239] dark:text-[#ffc3e9] mb-4 shadow-2xs">
              <span>✦</span>
              <span>{language === 'es' ? 'Contacto & Alianzas' : 'Contact & Collaborations'}</span>
              <span>✦</span>
            </div>

            {/* Editorial Boutique Title */}
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#640527] dark:text-[#ffc3e9] tracking-tight leading-tight mb-4">
              {language === 'es' ? (
                <>
                  ¿Construimos algo{' '}
                  <span className="font-serif italic font-normal text-[#8a1239] dark:text-[#ffb1e3]">
                    increíble
                  </span>{' '}
                  juntos?
                </>
              ) : (
                <>
                  Let&apos;s build something{' '}
                  <span className="font-serif italic font-normal text-[#8a1239] dark:text-[#ffb1e3]">
                    extraordinary
                  </span>{' '}
                  together
                </>
              )}
            </h2>

            <p className="text-base sm:text-lg text-[#8a5743] dark:text-[#dcdcdc] font-normal leading-relaxed mb-8 max-w-lg">
              {t('footer_talk_subtitle')}
            </p>

            {/* CTA action buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3.5 mb-8">
              <Button
                variant="primary"
                onClick={goToMail}
                icon={<Mail size={16} />}
              >
                arodriguezfontana@gmail.com
              </Button>

              <Button
                variant="secondary"
                onClick={goToLinkedIn}
                icon={<FaLinkedinIn size={14} />}
              >
                LinkedIn
              </Button>

              <Button
                variant="secondary"
                onClick={goToGitHub}
                icon={<FaGithub size={14} />}
              >
                GitHub
              </Button>
            </div>

            <p className="text-xs text-[#8a5743]/80 dark:text-[#dcdcdc]/70 flex items-center gap-1.5 font-medium">
              <span>✦</span>
              <span>{language === 'es' ? 'Respondo habitualmente en menos de 24 horas.' : 'Usually replies within 24 hours.'}</span>
              <span>✦</span>
            </p>
          </div>
        </div>

        {/* Bottom Editorial Bar */}
        <div className="pt-8 border-t border-[#ffc3e9]/50 dark:border-[#8a1239]/30 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-[#8a5743] dark:text-[#dcdcdc]">
          
          {/* Logo signature */}
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-[#640527] dark:text-[#ffc3e9] text-sm">
              Abril <span className="font-serif italic font-normal text-[#8a1239] dark:text-[#ffb1e3] text-base">Rodríguez</span>
            </span>
            <span className="text-[#8a1239] text-xs">✦</span>
            <span>&copy; {new Date().getFullYear()}</span>
          </div>

          {/* Slogan / note */}
          <div className="text-center">
            <span>{t('footer_copyright')}</span>
          </div>

          {/* Back to top pill */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 dark:bg-[#2d0a18]/80 border border-[#ffc3e9] dark:border-[#8a1239] text-[#640527] dark:text-[#ffc3e9] hover:bg-[#fff2fb] hover:scale-105 transition-all duration-200 cursor-pointer shadow-2xs"
            title="Volver arriba"
          >
            <span>Top</span>
            <ArrowUp size={13} />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
