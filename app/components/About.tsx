import React from 'react'
import { UserRound } from "lucide-react"
import Card from './Card'

const About = () => {
    return (
        <>
            <Card
                icon={<UserRound size={35} className="text-blak-600" />}
                title="Sobre mí"
            >
                <div></div>
            </Card>
        </>
    )
}

export default About
