import React from 'react'
import Image from 'next/image'
import { ReactNode } from 'react'
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

const ProjectCard = ({ image, title, technologies, description, repo }: ProjectCardProps) => {
    return (
        <>
            <div className='flex mb-4'>
                <Image
                    src={image}
                    alt={title}
                    width={400}
                    height={400}
                    className='shadow-lg border-1 rounded-md object-cover cursor-pointer transition-transform duration-200'
                />
                <div className='ml-8 w-xl'>
                    <div>
                        <h3 className='mb-1 text-2xl font-[600]'>{title}</h3>
                        {technologies.map((tech, i) => (
                            <span key={i} className={`mr-1 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-white text-xs ${tech.bg}`}>
                                {tech.logo} {tech.tecnologia}
                            </span>
                        ))}
                        <p className='mb-1 mt-1 text-gray-700'>{description}</p>
                        <a href={repo} className='flex gap-2 text-blue-500 font-[600]'>Repositorio
                            <MoveRight className='text-blue-500'/>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectCard
