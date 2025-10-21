import React, { ReactNode } from 'react'
import Image from 'next/image'
import { MoveRight } from 'lucide-react'

type Technology = {
  logo: ReactNode
  tecnologia: string
  bg: string
}

type ProjectCardProps = {
  image: string
  title: string
  technologies: Technology[]
  description: string
  repo: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, technologies, description, repo }) => {
  return (
    <article
      className="
        flex flex-col lg:flex-row gap-6 md:gap-10
        mb-10
        w-full max-w-4xl mx-auto
        px-6 md:px-8
      "
    >
      <div className="w-full lg:w-2/4 overflow-hidden rounded-md">
        <Image
          src={image}
          alt={title}
          width={400}
          height={300}
          className="
            w-full h-auto rounded-md object-cover
            transition-transform duration-500 ease-in-out
            hover:scale-[1.03]
          "
        />
      </div>

      <div className="w-full lg:w-3/5 text-left">
        <h3 className="mb-2 text-2xl font-bold text-gray-900">{title}</h3>

        <div className="mb-3 flex flex-wrap gap-2">
          {technologies.map((tech, i) => (
            <span
              key={i}
              className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-white text-xs font-medium ${tech.bg}`}
            >
              {tech.logo}
              {tech.tecnologia}
            </span>
          ))}
        </div>

        <p className="mb-4 text-base text-gray-700 leading-relaxed">
          {description}
        </p>

        <a
          href={repo}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center gap-2 text-lg font-semibold text-rose-500
            hover:text-rose-600 transition-all duration-200
          "
        >
          Ver Repositorio
          <MoveRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
        </a>
      </div>
    </article>
  )
}

export default ProjectCard
