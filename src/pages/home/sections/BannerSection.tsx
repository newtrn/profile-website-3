'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

const BannerSection = () => {
  const container = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.fromTo('.animate-text-reveal-1', { y: 100 }, { y: 0, duration: 1.5, ease: 'expo.out' })
      gsap.fromTo('.animate-text-reveal-2', { y: 100 }, { y: 0, duration: 1.5, delay: 0.2, ease: 'expo.out' })
      gsap.fromTo('.animate-text-reveal-3', { y: 100 }, { y: 0, duration: 1.5, delay: 0.4, ease: 'expo.out' })

      // Animate each line of the introduction text
      const textLines = textRef.current?.querySelectorAll('.intro-text-line')
      if (textLines) {
        gsap.fromTo(
          textLines,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.15,
            delay: 0.6,
            ease: 'power3.out',
          }
        )
      }
    },
    { scope: container }
  )

  return (
    <div ref={container} className="pt-[200px] banner-wrapper">
      <div className="mb-[100px]">
        <div className="flex gap-4 overflow-hidden text-[40px] md:text-[60px] lg:text-[90px] font-medium">
          <div className="animate-text-reveal-1 block leading-none">Frontend</div>
          <div className="animate-text-reveal-2 block leading-none">
            <span className="text-gradient">Dev</span>eloper
          </div>
        </div>
        <div className="flex items-center gap-4 overflow-hidden text-[40px] md:text-[60px] lg:text-[90px] font-medium">
          <div className="animate-text-reveal-3 block leading-none">suppawits</div>
        </div>
      </div>

      <div ref={textRef} className="text-sm md:text-lg lg:text-xl leading-relaxed">
        <div className="overflow-hidden">
          <div className="intro-text-line translate-y-[50px] opacity-0">hi! I'm Suppwit Satitsongtam, a Frontend Developer</div>
        </div>
        <div className="overflow-hidden">
          <div className="intro-text-line translate-y-[50px] opacity-0">since 2018 - I'm working with a high passion for</div>
        </div>
        <div className="overflow-hidden">
          <div className="intro-text-line translate-y-[50px] opacity-0">making websites alive through animations.</div>
        </div>
        <div className="overflow-hidden">
          <div className="intro-text-line translate-y-[50px] opacity-0">I always push myself to learn and explore new things</div>
        </div>
        <div className="overflow-hidden">
          <div className="intro-text-line translate-y-[50px] opacity-0">and am really excited when doing some challenging tasks.</div>
        </div>
      </div>
    </div>
  )
}

export default BannerSection
