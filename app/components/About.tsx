import React from 'react'
import { UserRound } from "lucide-react"
import Card from './Card'
import { useLanguage } from '../context/LenguageContext'

const About = () => {
  const { t } = useLanguage()

  return (
    <section id="about" className=" flex justify-center">
      <div className="w-full max-w-4xl px-6 md:px-8">
        <Card
          icon={<UserRound size={35} className="text-black-500" />}
          title={t('about_title')}
        >
          <div className="max-w-3xl">
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              {t('about_1')}
              <span className="text-rose-500 font-medium">{t('about_2')}</span>
              {t('about_3')}
            </p>

            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              {t('about_4')}
              <span className="text-rose-500 font-medium">{t('about_5')}</span>
              {t('about_6')}
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}

export default About
