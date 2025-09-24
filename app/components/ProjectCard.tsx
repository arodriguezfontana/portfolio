import React from 'react'
import Image from 'next/image'

type ProjectCardProps = {
    image: string;
    title: string;
    technologies: string[];
    description: string;
    links: {
        repo?: string;
        prev?: string;
    };
}

const ProjectCard = ({ image, title, technologies, description, links }: ProjectCardProps) => {
    return (
        <>
            <div>
                <div>
                    <Image
                        src={image}
                        alt={title}
                        width={400}
                        height={400}
                    />
                </div>
                <div>
                    <div>
                        <h3>{title}</h3>
                        {technologies.map((t) => (
                            <span
                                key={t}
                            >
                                {t}
                            </span>
                        ))}
                        <p>{description}</p>
                    </div>
                    <div></div>
                </div>
            </div>
        </>
    )
}

export default ProjectCard
