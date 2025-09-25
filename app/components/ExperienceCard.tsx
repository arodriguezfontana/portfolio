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
        <>
            <div className='mx-10 flex'>
                <Dot size={50} className='text-rose-500'/>
                <div className='mr-15'>
                <h5 className='text-rose-500 font-[600] text-2xl'>{role}</h5>
                <p className='text-black-500 font-[00] text-xl'>{company}</p>
                <p className='text-sm'>{date}</p>
                </div>
                <p className='text-md text-gray-700 w-md'>{description}</p>
            </div>
        </>
    )
}

export default ExperienceCard
