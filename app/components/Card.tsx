import React from 'react'

type CardProps = {
  icon: React.ReactNode
  title: string
  children: React.ReactNode
}

const Card = ({ icon, title, children }: CardProps) => {
  return (
    <div className="w-full flex flex-col items-center text-center md:items-center md:text-center lg:items-start lg:text-left mb-6">
      <div className="mb-5 flex items-center gap-3 text-2xl font-medium justify-center lg:justify-start">
        <div className="text-black-500">{icon}</div>
        <h4>{title}</h4>
      </div>
      <div className="max-w-4xl">{children}</div>
    </div>
  )
}

export default Card
