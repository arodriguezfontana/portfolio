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
    <div className="flex items-start gap-2 px-4 pb-8 md:px-8 py-1 overflow-hidden">
      <Dot
        size={30}
        className="text-rose-500 flex-shrink-0 mt-1 md:size-[40px] hidden xs:block"
      />

      <div className="flex flex-col min-w-0 max-w-full"> {/* min-w-0 evita que el flex ignore el ancho del padre */}
        <h5 className="text-rose-500 font-semibold text-xl leading-tight">{role}</h5>
        <p className="dark:text-gray-200 text-gray-800 font-medium text-lg">{company}</p>
        <p className="text-sm text-gray-500 mb-3">{date}</p>
        <p className="dark:text-gray-400 text-gray-700 text-base leading-relaxed break-words">
          {description}
        </p>
      </div>
    </div>
  )
}

export default ExperienceCard
