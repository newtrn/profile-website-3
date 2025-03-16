'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

import BannerSection from './sections/BannerSection'
import Header from '@/components/Header'
import ExperienceSection from './sections/ExperienceSection'
import ContactSection from './sections/ContactSection'

const HomePage = () => {
  const container = useRef<HTMLDivElement>(null)
  const container_1 = useRef<HTMLDivElement>(null)
  const container_2 = useRef<HTMLDivElement>(null)
  const container_3 = useRef<HTMLDivElement>(null)
  useGSAP(
    () => {
      gsap.to('.primary-gradient-circle', {
        scrollTrigger: {
          trigger: container_1.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
        top: '55%',
        left: '50%',
        xPercent: -50,
        yPercent: -50,
        width: '400px',
        height: '400px',
        zIndex: 2,
        ease: 'expo.out',
      })
      gsap.to('.secondary-gradient-circle', {
        scrollTrigger: {
          trigger: container_1.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
        top: '50%',
        left: '45%',
        xPercent: -50,
        yPercent: -50,
        width: '600px',
        height: '600px',
        zIndex: 1,
        ease: 'expo.out',
      })

      gsap.to('.primary-gradient-circle', {
        scrollTrigger: {
          trigger: container_2.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
        width: '200vw',
        height: '200vh',
        ease: 'expo.out',
      })
      gsap.to('.secondary-gradient-circle', {
        scrollTrigger: {
          trigger: container_2.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
        opacity: 0,
        ease: 'expo.out',
      })
      gsap.to('.banner-wrapper', {
        scrollTrigger: {
          trigger: container_1.current,
          start: 'top top',
          end: '+=500',
          scrub: true,
        },
        opacity: 0,
        ease: 'expo.out',
      })
    },
    { scope: container }
  )

  return (
    <div className="relative overflow-hidden pb-10" ref={container}>
      <div className="h-screen w-screen z-0 fixed top-0 left-0 bg-grandient">
        <div className="fixed -right-[150px] -top-[100px] w-[500px] h-[500px] rounded-full primary-gradient-circle" />
        <div className="fixed -right-[200px] -top-[150px] w-[400px] h-[400px] rounded-full secondary-gradient-circle" />
      </div>
      <Header />
      <div className="container flex flex-col justify-center h-full relative z-10 container-1" ref={container_1}>
        <BannerSection />
      </div>
      <div className="container flex flex-col justify-center h-full relative z-10 container-2 mb-[300px]" ref={container_2}>
        <ExperienceSection />
      </div>
      <div />
      <div ref={container_3} className="min-h-[500px] container-3 relative z-10">
        <ContactSection />
      </div>
    </div>
  )
}

export default HomePage
