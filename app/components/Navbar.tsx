'use client'
import React, { useState, useEffect } from 'react'
import { useDarkMode } from '../hooks/useDarkMode'
import { useLanguage } from '../context/LenguageContext'
import { Sun, Moon } from 'lucide-react'

const Navbar = () => {
  const [show, setShow] = useState(false)
  const { isDark, toggleDarkMode } = useDarkMode()
  const { language, toggleLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) setShow(true)
      else setShow(false)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const links = [
    { href: "#top", label: "nav_intro" },
    { href: "#experience", label: "nav_experience" },
    { href: "#projects", label: "nav_projects" },
    { href: "#about", label: "nav_about" },
    { href: "mailto:arodriguezfontana@gmail.com", label: "nav_contact" },
  ]

  return (
    <nav className='w-full fixed py-3 flex justify-center'>
      <ul
        className={`flex gap-3 rounded-full px-5 py-2 items-center transition-all duration-200
          ${show ? "bg-white/60 backdrop-blur-md shadow-md" : ""} 
          text-sm sm:text-base md:text-md`}
      >
        {links.map(({ href, label }) => (
          <li key={href} className="flex items-center">
            <a
              href={href}
              className={`dark:text-gray-200 text-gray-800 hover:text-rose-600 transition-colors font-[500] ${show ? "dark:text-gray-800" : ""}`}
            >
              {t(label)}
            </a>
          </li>
        ))}

        <li className="flex items-center">
          <button
            onClick={toggleLanguage}
            className="text-rose-500 hover:text-rose-700 font-[500] px-2"
          >
            {language === 'es' ? 'EN' : 'ES'}
          </button>
        </li>

        <li className="flex items-center">
          <button
            onClick={toggleDarkMode}
            className="flex items-center justify-center"
          >
            {isDark ? (
              <Sun size={18} className="dark:text-rose-700 dark:hover:text-rose-500 text-rose-500 hover:text-rose-700" />
            ) : (
              <Moon size={18} className="dark:text-rose-700 dark:hover:text-rose-500 text-rose-500 hover:text-rose-700" />
            )}
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
