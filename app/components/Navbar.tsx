"use client"
import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setShow(true)
      } else {
        setShow(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const links = [
    { href: "#experience", label: "Experiencia" },
    { href: "#projects", label: "Proyectos" },
    { href: "#about", label: "Sobre mí" },
    { href: "#contact", label: "Contacto" },
  ]

  return (
    <>
      <nav className='w-full fixed py-3 flex justify-center'>
        <ul
          className={`flex gap-3 rounded-full px-5 py-2 text-sm 
        ${show ? "bg-white/40 backdrop-blur-md shadow-md transition-all duration-200" : ""}`}
        >
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="text-gray-800 hover:text-rose-600 transition-colors font-[500]"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default Navbar;
