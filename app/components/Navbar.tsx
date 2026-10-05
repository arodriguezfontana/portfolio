'use client';
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LenguageContext';
import { useDarkMode } from '../hooks/useDarkMode';
import { Sun, Moon, ArrowUpRight } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const { isDark, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#top", label: "nav_intro" },
    { href: "#projects", label: "nav_projects" },
    { href: "#experience", label: "nav_experience" },
    { href: "#about", label: "nav_about" },
  ];

  const scrollToContact = () => {
    const footer = document.getElementById("contact");
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = "mailto:arodriguezfontana@gmail.com";
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 py-4 pointer-events-none">
      <nav
        className={`pointer-events-auto w-full max-w-7xl rounded-full transition-all duration-300 px-4 sm:px-8 py-2.5 flex items-center justify-between
          ${
            scrolled
              ? "bg-white/90 dark:bg-[#230713]/90 backdrop-blur-md shadow-lg shadow-[#640527]/10 border border-[#ffc3e9]/70 dark:border-[#8a1239]/40 py-2"
              : "bg-[#eeeeee]/85 dark:bg-[#1a040d]/80 backdrop-blur-md border border-[#ffc3e9]/40 dark:border-[#8a1239]/30 shadow-xs"
          }
        `}
      >
        {/* Editorial Logo */}
        <a
          href="#top"
          className="group flex items-center gap-1.5 text-lg sm:text-xl font-extrabold tracking-tight text-[#640527] dark:text-[#ffc3e9]"
        >
          <span>Abril</span>
          <span className="font-serif italic font-normal text-[#8a1239] dark:text-[#ffb1e3] text-xl sm:text-2xl transition-transform duration-300 group-hover:scale-105">
            Rodríguez
          </span>
          <span className="text-[#8a1239] dark:text-[#ffc3e9] text-xs inline-block animate-pulse ml-0.5">✦</span>
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-1.5 lg:gap-2">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-medium text-[#8a5743] dark:text-[#e898cb] hover:text-[#640527] dark:hover:text-white hover:bg-[#fff2fb] dark:hover:bg-[#43031a] transition-all duration-200"
            >
              {t(label)}
            </a>
          ))}
        </div>

        {/* Right Controls: Language, Theme & Contact CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Switch */}
          <button
            onClick={toggleLanguage}
            title="Cambiar idioma / Change language"
            className="px-2.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#fff2fb] dark:bg-[#43031a] text-[#640527] dark:text-[#ffc3e9] border border-[#ffc3e9]/60 dark:border-[#8a1239] hover:bg-[#ffc3e9] dark:hover:bg-[#8a1239] hover:text-[#43031a] dark:hover:text-white transition-all duration-200 cursor-pointer"
          >
            {language === 'es' ? 'EN' : 'ES'}
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            title={isDark ? "Modo Claro" : "Modo Oscuro"}
            className="p-1.5 rounded-full text-[#640527] dark:text-[#ffc3e9] hover:bg-[#fff2fb] dark:hover:bg-[#43031a] transition-colors cursor-pointer"
          >
            {isDark ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          {/* Boutique Contact Button */}
          <button
            onClick={scrollToContact}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold text-white bg-[#640527] dark:bg-[#8a1239] hover:bg-[#75062e] dark:hover:bg-[#a31745] shadow-md shadow-[#640527]/20 hover:scale-[1.03] transition-all duration-200 cursor-pointer"
          >
            <span>{t('header_contact_btn')}</span>
            <ArrowUpRight size={14} />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
