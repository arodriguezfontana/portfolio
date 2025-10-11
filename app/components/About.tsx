import React from 'react'
import { UserRound } from "lucide-react"
import Card from './Card'

const About = () => {
  return (
    <section id="about" className=" flex justify-center">
      <div className="w-full max-w-4xl px-6 md:px-8">
        <Card
          icon={<UserRound size={35} className="text-gray-800" />}
          title="Sobre mí"
        >
          <div className="max-w-3xl">
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Me llamo Abril. Desde pequeña{" "}
              <span className="text-rose-500 font-medium">me apasiona la tecnología</span> y, al crecer,
              decidí empezar con la programación. Me especialicé en el{" "}
              <span className="text-rose-500 font-medium">desarrollo de aplicaciones</span>{" "}
              y continúo explorando nuevas áreas, como la{" "}
              <span className="text-rose-500 font-medium">ciencia de datos</span>.
            </p>

            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Mi objetivo es{" "}
              <span className="text-rose-500 font-medium">
                acercar la tecnología a todas las personas
              </span>{" "}
              creando soluciones que resuelvan problemas o mejoren situaciones de la vida diaria. 
              Me entusiasma mantenerme en constante aprendizaje para{" "}
              <span className="text-rose-500 font-medium">
                crear soluciones robustas, escalables y eficientes
              </span>.
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}

export default About
