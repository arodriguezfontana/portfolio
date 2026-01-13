import React from 'react'
import { useLanguage } from '../context/LenguageContext'

const Footer = () => {
    const { t } = useLanguage()

  return (
    <footer className="py-8">
      <div className="w-full max-w-4xl mx-auto px-6 md:px-8 flex flex-col md:flex-row justify-between items-center text-gray-700 text-sm">
        <p className="mb-2 md:mb-0">© 2025 arodriguezfontana. {t('footer_copyright')}</p>
        <a
          href="mailto:arodriguezfontana@gmail.com"
          className="hover:underline text-rose-500"
        >
          {t('footer_contact_link')}
        </a> 
      </div>
    </footer>
  )
}

export default Footer
