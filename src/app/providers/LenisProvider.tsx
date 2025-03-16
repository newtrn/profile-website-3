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

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 500)
      ScrollTrigger.update()
    }

    gsap.ticker.add(update)

    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        if (arguments.length && lenisRef && value !== undefined) {
          lenisRef?.current?.lenis?.scrollTo(value)
        }
        return lenisRef?.current?.lenis?.scroll ?? 0
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight }
      },
    })

    ScrollTrigger.defaults({ scroller: document.body })

    return () => gsap.ticker.remove(update)
  }, [])

  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      {children}
    </ReactLenis>
  )
}

export default LenisProvider
