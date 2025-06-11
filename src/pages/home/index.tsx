'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { useWindowSize } from 'hamo'

import BannerSection from './sections/BannerSection'
import Header from '@/components/Header'
import ExperienceSection from './sections/ExperienceSection'
import ContactSection from './sections/ContactSection'
import ProjectSection from './sections/ProjectSection'

const HomePage = () => {
  const container = useRef<HTMLDivElement>(null)
  const container_1 = useRef<HTMLDivElement>(null)
  const container_2 = useRef<HTMLDivElement>(null)
  const container_3 = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.to('.banner-wrapper', {
        scrollTrigger: {
          trigger: container_1.current,
          start: 'top top',
          end: '+=500',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        opacity: 0,
        ease: 'expo.out',
      })
    },
    { scope: container }
  )

  return (
    <div className="relative overflow-hidden pb-10" ref={container}>
      <div className="h-screen w-screen z-0 absolute top-0 left-0 bg-grandient">
        <div className="absolute -right-[150px] -top-[500px] md:top-[50px] w-[600px] h-[600px] rounded-full primary-gradient-circle" />
        <div className="absolute -right-[200px] -top-[450px] md:top-[100px] w-[500px] h-[500px] rounded-full secondary-gradient-circle" />
      </div>
      <Header />
      <div className="container flex flex-col justify-center h-full relative z-10 container-1" ref={container_1}>
        <BannerSection />
      </div>
      <div className="container flex flex-col justify-center h-full relative z-10 container-2 mb-40" ref={container_2}>
        <ExperienceSection />
      </div>
      <div />
      <div ref={container_3} className="container flex flex-col justify-center h-full relative z-10 py-10">
        <ProjectSection />
      </div>
      <div className="min-h-[500px] container-3 relative z-10 pt-[400px]">
        <ContactSection />
      </div>
      <div className="h-screen w-screen z-0 absolute bottom-0 left-0 bg-grandient">
        <div className="absolute -left-[200px] -bottom-[50px] w-[600px] h-[600px] rounded-full primary-gradient-circle" />
        <div className="absolute left-[100px] -bottom-[200px] w-[500px] h-[500px] rounded-full secondary-gradient-circle" />
      </div>
    </div>
  )
}

export default HomePage
