import React from 'react'

type ExperienceCardProps = {
    role: string
    company: string
    date: string
    description: string
}

const ExperienceCard = ({ role, company, date, description }: ExperienceCardProps) => {
    return (
        <>
            <div className='ml-10 mt-5'>
                <h5 className='text-rose-500 font-[500] text-xl'>{role}</h5>
                <p className='text-black-500 font-[400] text-lg'>{company}</p>
                <p className='text-sm'>{date}</p>
                <p className='mt-4 text-sm'>{description}</p>
            </div>
        </>
    )
}

export default ExperienceCard
