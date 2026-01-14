import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import Button from './Button'
import { Download, Mail, UserRoundSearch, CodeXml } from 'lucide-react'
import { useLanguage } from '../context/LenguageContext'

const Header = () => {
  const { t } = useLanguage();

  const goToLinkedIn = () => {
    window.open("https://www.linkedin.com/in/rodriguezfontana/", "_blank");
  };

  const goToGitHub = () => {
    window.open("https://github.com/arodriguezfontana", "_blank");
  };

  const goToMail = () => {
    window.location.href = "mailto:arodriguezfontana@gmail.com";
  };

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/abril_rodriguez_cv.pdf";
    link.download = "abril_rodriguez_cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="text-black sm:pb-14  pt-35 pb-20 flex flex-col md:flex-row items-center md:items-start justify-center gap-6 md:gap-16 text-center md:text-left">
      <div className="flex flex-col items-center gap-3">
        <Image
          className="rounded-full w-32 md:w-40"
          src={assets.abril_image}
          alt="Imagen de Abril Rodríguez"
        />
        <Button
          onClick={goToLinkedIn}
          className="dark:bg-green-700 dark:hover:bg-green-600 bg-green-500 text-white font-medium hover:bg-green-700 transition-all duration-200"
        >
          {t('header_available')}
        </Button>
      </div>

      <div className="max-w-2xl">
        <h2 className="dark:text-gray-200 m-3 text-4xl sm:text-5xl font-bold mt-5 md:mt-1">
          {t('header_hi')} <span className="text-rose-500">Abril</span>
        </h2>
        <p className="dark:text-gray-400 mt-3 text-base sm:text-lg text-gray-700 m-3">
          {t('header_description_1')}
          <span className="text-rose-500 font-medium">{t('header_description_2')}</span>
          {t('header_description_3')}
          <span className="text-rose-500 font-medium">{t('header_description_4')}</span>
          {t('header_description_5')}
          <span className="text-rose-500 font-medium">{t('header_description_6')}</span>
        </p>

        <div className="flex flex-wrap justify-center md:justify-start mt-5 gap-3 font-medium">
          <Button
            onClick={goToMail}
            className="dark:border-gray-300 dark:text-gray-300 dark:hover:bg-gray-700 border border-black  hover:bg-black hover:text-white"
            icon={<Mail size={18} />}
          >
            {t('header_contact_btn')}
          </Button>
          <Button
            onClick={goToLinkedIn}
            className="dark:border-gray-300 dark:text-gray-300 dark:hover:bg-gray-700 border border-black hover:bg-black hover:text-white"
            icon={<UserRoundSearch size={18} />}
          >
            LinkedIn
          </Button>
          <Button
            onClick={goToGitHub}
            className="dark:border-gray-300 dark:text-gray-300 dark:hover:bg-gray-700 border border-black hover:bg-black hover:text-white"
            icon={<CodeXml size={18} />}
          >
            GitHub
          </Button>
          <Button
            onClick={downloadCV}
            className="dark:bg-rose-700 dark:hover:bg-rose-500 bg-rose-500 text-white hover:bg-rose-700"
            icon={<Download size={18} />}
          >
            {t('header_download_cv_btn')}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;