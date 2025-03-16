'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Icon } from '@iconify/react'
import { useRef } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

const Header = () => {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.fromTo('.header-container', { opacity: 0 }, { opacity: 1, duration: 1.5, delay: 1.5, ease: 'expo.out' })
    },
    { scope: container }
  )
  return (
    <div ref={container}>
      <div className="container flex justify-between items-center py-6 relative z-10 header-container">
        <div className="flex items-center gap-2">
          <div className="bg-gradient-to-r from-gradient-primary-color to-gradient-secondary-color rounded p-1 mt-0.5">
            <Icon icon="material-symbols:code-rounded" className="leading-none text-primary-background text-xl" />
          </div>
          <div className="text-xl md:text-2xl font-bold">suppawit.dev</div>
        </div>
        <Link
          href="https://portfolio.suppawit.dev/"
          target="_blank"
          className={clsx(
            'relative text-primary-text-color border border-primary-text-color rounded-full px-4 py-2 overflow-hidden hover:text-primary-background duration-300 hover:border-gradient-secondary-color text-sm md:text-base',
            'after:content-[""] after:absolute after:inset-0 after:bg-gradient-secondary-color after:translate-y-full after:transition-all after:duration-300 after:ease-in-out after:opacity-80 hover:after:translate-y-0 z-[-1]'
          )}
        >
          <div className="relative z-10">Portfolio</div>
        </Link>
      </div>
    </div>
  )
}

export default Header
