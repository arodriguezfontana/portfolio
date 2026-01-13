import React from 'react'
import { Dot } from 'lucide-react'

type ExperienceCardProps = {
  role: string
  company: string
  date: string
  description: string
}

const ExperienceCard = ({ role, company, date, description }: ExperienceCardProps) => {
  return (
    <div className="flex items-start gap-2 px-4 pb-8 md:px-8 py-1">
      <Dot size={40} className="text-rose-500/0 flex-shrink-0 md:text-rose-500" />
      <div className="flex flex-col max-w-2xl">
        <h5 className="text-rose-500 font-semibold text-xl">{role}</h5>
        <p className="dark:text-gray-200 text-gray-800 font-medium text-lg">{company}</p>
        <p className="text-sm text-gray-500 mb-3">{date}</p>
        <p className="dark:text-gray-400 text-gray-700 text-base leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export default ExperienceCard
