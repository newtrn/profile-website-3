'use client'

import { LenisRef, ReactLenis } from 'lenis/react'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)

const LenisProvider = ({ children }: { children: React.ReactNode }) => {
  const lenisRef = useRef<LenisRef>(null)

  return (
    <ReactLenis
      ref={lenisRef}
      root
      options={{
        lerp: 0.2,
        duration: 1.5,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
      }}
    >
      <div className="no-scrollbar overflow-hidden">{children}</div>
    </ReactLenis>
  )
}

export default LenisProvider
