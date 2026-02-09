import React from 'react'
import { Briefcase } from "lucide-react"
import Card from './Card'
import ExperienceCard from './ExperienceCard'
import { useLanguage } from '../context/LenguageContext'

const Experience = () => {
    const { t } = useLanguage()
    
    return (
        <>
            <section id='experience'>
                <Card
                    icon={<Briefcase size={35} className="text-blak-600" />}
                    title={t('exp_title')}
                >
                    <ExperienceCard
                        role="Software Engineer"
                        company="Fontia"
                        date={t('exp_date_freelance')}
                        description={t('exp_desc_freelance')}
                    />
                    <ExperienceCard
                        role={t('exp2_role')}
                        company="Universidad Nacional de Quilmes"
                        date={t('exp2_date_freelance')}
                        description={t('exp2_desc_freelance')}
                    />
                </Card>
            </section>

            
        </>
    )
}

export default Experience
