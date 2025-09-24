import React from 'react'
import { Briefcase, CodeXml, UserRound } from "lucide-react"
import Card from './Card'
import ExperienceCard from './ExperienceCard'

const Experience = () => {
    return (
        <>
            <Card
                icon={<Briefcase size={30} className="text-blak-600" />}
                title="Experiencia laboral"
            >
                <ExperienceCard
                    role="Fullstack Developer"
                    company="Freelance"
                    date="Septiembre 2024 - Actualidad"
                    description="aklkamca"
                />
            </Card>
        </>
    )
}

export default Experience
