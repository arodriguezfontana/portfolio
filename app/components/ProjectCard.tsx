import React from 'react'
import Image from 'next/image'
import { ReactNode } from 'react'

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
  links: {
    repo?: string
    prev?: string
  }
}

const ProjectCard = ({ image, title, technologies, description, links }: ProjectCardProps) => {
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
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectCard
