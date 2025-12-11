import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import Button from './Button'
import { Download, Mail, UserRoundSearch, CodeXml } from 'lucide-react'

const Header = () => {
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
    link.href = "/abril_cv.pdf";
    link.download = "abril_cv.pdf";
    link.click();
  };

  return (
    <header className="pt-35 pb-20 flex flex-col md:flex-row items-center md:items-start justify-center gap-6 md:gap-16 text-center md:text-left">
      <div className="flex flex-col items-center gap-3">
        <Image
          className="rounded-full w-32 md:w-40"
          src={assets.abril_image}
          alt="Imagen de Abril Rodríguez"
        />
        <Button
          onClick={goToLinkedIn}
          className="bg-green-500 text-white font-medium hover:bg-green-700 transition-all duration-200"
        >
          Disponible para trabajar
        </Button>
      </div>

      <div className="max-w-2xl">
        <h2 className="text-4xl sm:text-5xl font-bold mt-5 md:mt-1">
          Hola, soy <span className="text-rose-500">Abril</span>
        </h2>
        <p className="mt-3 text-base sm:text-lg text-gray-700">
          Con más de 4 años de estudio, próxima{" "}
          <span className="text-rose-500 font-medium">Licenciada en Informática</span>.
          Especializada en{" "}
          <span className="text-rose-500 font-medium">Frontend</span> y{" "}
          <span className="text-rose-500 font-medium">Backend</span>, y en constante
          aprendizaje de nuevas tecnologías y areas, principalmente en <span className="text-rose-500 font-medium">Cienca de Datos</span>.
        </p>

        <div className="flex flex-wrap justify-center md:justify-start mt-5 gap-3 font-medium">
          <Button
            onClick={goToMail}
            className="border border-black hover:bg-black hover:text-white"
            icon={<Mail size={18} />}
          >
            Contactame
          </Button>
          <Button
            onClick={goToLinkedIn}
            className="border border-black hover:bg-black hover:text-white"
            icon={<UserRoundSearch size={18} />}
          >
            LinkedIn
          </Button>
          <Button
            onClick={goToGitHub}
            className="border border-black hover:bg-black hover:text-white"
            icon={<CodeXml size={18} />}
          >
            GitHub
          </Button>
          <Button
            onClick={downloadCV}
            className="bg-rose-500 text-white hover:bg-rose-700"
            icon={<Download size={18} />}
          >
            Descargar CV
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;