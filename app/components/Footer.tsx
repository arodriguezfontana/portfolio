import React from 'react'

const Footer = () => {
  return (
    <footer className="py-8">
      <div className="w-full max-w-4xl mx-auto px-6 md:px-8 flex flex-col md:flex-row justify-between items-center text-gray-700 text-sm">
        <p className="mb-2 md:mb-0">© 2025 arodriguezfontana. Todos los derechos reservados.</p>
        <a
          href="mailto:arodriguezfontana@gmail.com"
          className="hover:underline text-rose-500"
        >
          Contacto
        </a>
      </div>
    </footer>
  )
}

export default Footer
