'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Navbar from './Navbar'

const aboutText = `
Unsere Ziele bei Aventix eSports

Aventix eSports verfolgt eine klare Vision: Wir wollen uns als eines der führenden Teams in der Welt des kompetitiven Gamings etablieren und gleichzeitig eine positive, inspirierende Community aufbauen. Unsere Ziele sind ehrgeizig, aber wir sind davon überzeugt, dass wir sie durch harte Arbeit, Teamgeist und Leidenschaft für den eSport erreichen können. Hier ein genauer Blick auf unsere Mission:

Turniersiege und Wettbewerbserfolge
Unser primäres Ziel ist es, in hochklassigen nationalen und internationalen Turnieren konstant erfolgreich zu sein. Wir streben nicht nur die Teilnahme an großen Events an, sondern auch Podiumsplätze und Siege. Unser Team arbeitet kontinuierlich daran, seine spielerischen Fähigkeiten zu verbessern und strategisch auf höchstem Niveau zu agieren.

Talententwicklung und Nachwuchsförderung
Aventix eSports legt großen Wert auf die Förderung junger Talente. Wir bieten aufstrebenden Spielern eine Plattform, auf der sie sich entwickeln und in die professionelle eSports-Welt eintreten können. Durch gezieltes Coaching, Mentoring und die Teilnahme an Ligen und Turnieren wollen wir Nachwuchstalente optimal unterstützen.

Community-Aufbau und Engagement
Wir verstehen uns nicht nur als Wettkampfteam, sondern auch als Gemeinschaft von Gamern. Deshalb ist der Aufbau einer starken, positiven und aktiven Community ein zentrales Anliegen von Aventix eSports. Durch Events, Streaming, Social Media und Community-Treffen wollen wir eine Plattform schaffen, auf der Fans und Spieler miteinander interagieren und voneinander profitieren können.

Partnerschaften und Sponsoring
Um unsere Ziele langfristig zu erreichen, streben wir stabile und nachhaltige Partnerschaften mit Unternehmen an, die unsere Vision teilen. Wir arbeiten daran, starke Partnerschaften mit Marken aus der Gaming-Branche und darüber hinaus aufzubauen. Dabei legen wir großen Wert auf Kooperationen, die nicht nur finanzielle Unterstützung bieten, sondern auch zur gemeinsamen Weiterentwicklung des eSports beitragen.

Professionalität und Markenaufbau
Ein weiteres zentrales Ziel ist es, Aventix eSports als professionelle Marke in der Szene zu etablieren. Dies umfasst sowohl die Optimierung interner Abläufe als auch die Schaffung eines starken und wiedererkennbaren Markenimages. Wir streben danach, als Team nicht nur sportlich, sondern auch organisatorisch und medial auf höchstem Niveau zu arbeiten.

Soziale Verantwortung und Fairplay
Wir sind davon überzeugt, dass eSports weit mehr ist als nur Wettbewerb. Aventix eSports setzt sich für Fairness, Respekt und Zusammenhalt ein. Unser Ziel ist es, eine Vorbildrolle in der Szene einzunehmen und den positiven Geist des eSports zu verbreiten. Dazu gehören auch der Einsatz für Chancengleichheit und der Kampf gegen jegliche Form von Diskriminierung.

Internationales Wachstum
Langfristig streben wir an, Aventix eSports international zu etablieren und neue Märkte zu erschließen. Dies bedeutet nicht nur die Teilnahme an internationalen Turnieren, sondern auch den Aufbau eines weltweiten Netzwerks an Spielern, Fans und Partnern.
`

export const About = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)
  const [progress, setProgress] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange(setProgress)
    return () => unsubscribe()
  }, [scrollYProgress])

  const backgroundOpacity = useTransform(scrollYProgress, [0, 1], [0.05, 0.2])

  return (
    <div ref={containerRef} className="bg-black text-white min-h-screen py-24 relative">
      <Navbar/>
      <motion.div 
        className="absolute inset-0 bg-gray-500"
        style={{ opacity: backgroundOpacity }}
      />
      <div className="container mx-auto px-4 relative">
        <h2 className="text-5xl font-bold mb-12 tracking-tight">About Us</h2>
        <div className="max-w-2xl mx-auto relative">
          <p ref={textRef} className="text-xl leading-relaxed whitespace-pre-wrap">
            {aboutText}
          </p>
          <motion.div
            className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-white/20 to-transparent pointer-events-none"
            style={{
              scaleY: progress,
              transformOrigin: 'top'
            }}
          />
        </div>
      </div>
    </div>
  )
}