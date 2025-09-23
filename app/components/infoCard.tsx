import React from 'react'

type InfoCardProps = {
    icon: React.ReactNode
    title: string
    children: React.ReactNode
}

const infoCard = ({ icon, title, children }: InfoCardProps) => {

    return (
        <>
            <div >
                <div className='flex items-center gap-3 text-2xl font-[500]'>
                    <div>{icon}</div>
                    <h4>{title}</h4>
                </div>
                <div>{children}</div>
            </div>
        </>
    )
}

export default infoCard
