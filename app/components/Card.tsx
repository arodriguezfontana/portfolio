import React from 'react'

type CardProps = {
    icon: React.ReactNode
    title: string
    children: React.ReactNode
}

const Card = ({ icon, title, children }: CardProps) => {

    return (
        <>
            <div className='mb-10'>
                <div className='mb-5 flex items-center gap-3 text-2xl font-[500]'>
                    <div>{icon}</div>
                    <h4>{title}</h4>
                </div>
                <div>{children}</div>
            </div>
        </>
    )
}

export default Card
