import React from 'react'

type InfoCardProps = {
    icon: React.ReactNode
    title: string
    children: React.ReactNode
}

const InfoCard = ({ icon, title, children }: InfoCardProps) => {

    return (
        <>
            <div className='mb-10'>
                <div className='flex items-center gap-2 text-xl font-[500]'>
                    <div>{icon}</div>
                    <h4>{title}</h4>
                </div>
                <div>{children}</div>
            </div>
        </>
    )
}

export default InfoCard
