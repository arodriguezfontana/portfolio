import React from 'react'
import { CodeXml } from "lucide-react"
import Card from './Card'
import ProjectCard from './ProjectCard'
import { assets } from '@/assets/assets'
import { useLanguage } from '../context/LenguageContext'

const Projects = () => {
    const { t } = useLanguage()

    return (
        <>
            <section id='projects'>
                <Card
                    icon={<CodeXml size={35} className="text-blak-600" />}
                    title={t('proj_title')}
                >
                    <ProjectCard
                        image="/portfolio/gog_image.png"
                        title={t('proj_gog_title')}
                        technologies={assets.techsgog}
                        description={t('proj_gog_desc')}
                        repo="https://github.com/arodriguezfontana/gog-frontend"
                    />
                    <ProjectCard
                        image="/portfolio/accidenta_image.jpeg"
                        title={t('proj_accidenta_title')}
                        technologies={assets.techsaccidenta}
                        description={t('proj_accidenta_desc')}
                        repo="https://github.com/arodriguezfontana/accidenta-fullstack"
                    />
                    <ProjectCard
                        image="/portfolio/epers_image.png"
                        title={t('proj_epers_title')}
                        technologies={assets.techsepers}
                        description={t('proj_epers_desc')}
                        repo="https://github.com/arodriguezfontana/epersgeist-backend"
                    />
                    <ProjectCard
                        image="/portfolio/wordle_image.png"
                        title={t('proj_wordle_title')}
                        technologies={assets.techswordle}
                        description={t('proj_wordle_desc')}
                        repo="https://github.com/arodriguezfontana/wordle-game"
                    />
                </Card>
            </section>
        </>
    )
}

export default Projects
