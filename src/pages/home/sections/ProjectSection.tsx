import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Link from 'next/link'
import { useRef } from 'react'

const ProjectSection = () => {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.from('.divider-1', {
        scrollTrigger: {
          trigger: '.divider-1',
          start: 'top bottom-=100',
          toggleActions: 'play reverse play reverse',
        },
        width: 0,
        duration: 1.5,
        ease: 'expo.out',
      })
      gsap.from('.divider-2', {
        scrollTrigger: {
          trigger: '.divider-2',
          start: 'top bottom-=100',
          toggleActions: 'play reverse play reverse',
        },
        width: 0,
        duration: 1.5,
        ease: 'expo.out',
      })
      gsap.from('.divider-3', {
        scrollTrigger: {
          trigger: '.divider-3',
          start: 'top bottom-=100',
          toggleActions: 'play reverse play reverse',
        },
        width: 0,
        duration: 1.5,
        ease: 'expo.out',
      })
      gsap.from('.divider-4', {
        scrollTrigger: {
          trigger: '.divider-4',
          start: 'top bottom-=100',
          toggleActions: 'play reverse play reverse',
        },
        width: 0,
        duration: 1.5,
        ease: 'expo.out',
      })
      gsap.from('.vert-line-1', {
        scrollTrigger: {
          trigger: '.vert-line-1',
          start: 'top bottom-=100',
          toggleActions: 'play reverse play reverse',
        },
        height: 0,
        duration: 1.5,
        delay: 1.5,
        ease: 'expo.out',
      })
      gsap.from('.vert-line-2', {
        scrollTrigger: {
          trigger: '.vert-line-2',
          start: 'top bottom-=100',
          toggleActions: 'play reverse play reverse',
        },
        height: 0,
        duration: 1.5,
        delay: 1.5,
        ease: 'expo.out',
      })
    },
    { scope: container }
  )
  return (
    <div className="project-wrapper" ref={container}>
      <div className="overflow-hidden relative">
        <div className="divider-1 bg-[#777777] w-full h-[2px]" />
      </div>
      <div className="py-8">
        <div className="grid md:grid-cols-[1fr_2fr]">
          <div className="pr-8 flex flex-col justify-center relative">
            <div className="md:absolute left-0 top-0 text-[#969696]">highlighted project #1</div>
            <div className="text-2xl lg:text-4xl font-medium mb-2">Mtel Thailand</div>
            <div className="text-lg mb-6 md:mb-0">Landing website with animations by GSAP. Built with Next.js, Tailwind CSS, and GSAP.</div>
            <div className="h-[100%] w-[2px] bg-[#777777] absolute right-0 top-0 vert-line-1 hidden md:block" />
          </div>
          <div className="md:pl-8">
            <img
              className="project-card-img h-full w-full object-cover"
              src="https://firebasestorage.googleapis.com/v0/b/profile-website-1.appspot.com/o/Untitled%20(1).gif?alt=media&token=45c871ed-c545-4b53-b01c-5503f6d2c5c5"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="overflow-hidden relative">
        <div className="divider-2 bg-[#777777] w-full h-[2px]" />
      </div>
      <div className="py-8">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2">
          <div className="md:pr-8 relative">
            <img
              className="project-card-img h-full w-full object-cover"
              src="https://firebasestorage.googleapis.com/v0/b/profile-website-1.appspot.com/o/Screenshot%202568-06-09%20at%2017.44.25.png?alt=media&token=125a9c47-ddc3-4aff-91b4-c1655fd131d6"
              alt=""
            />
            <div className="h-[100%] w-[2px] bg-[#777777] absolute right-0 top-0 vert-line-2 hidden md:block" />
          </div>
          <div className="md:pl-8 relative flex flex-col justify-center">
            <div className="md:absolute left-8 top-0 text-[#969696]">highlighted project #2</div>
            <div className="text-2xl lg:text-4xl font-medium mb-2">ChaoChao & CO.</div>
            <div className="text-lg mb-6 md:mb-0">Car rental website both lister and renter with a focus on user experience and performance.</div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden relative">
        <div className="divider-3 bg-[#777777] w-full h-[2px]" />
      </div>
      <div className="py-8 my-10">
        <div className="text-center text-xl font-medium mb-2">For more projects please visit my</div>
        <div className="flex justify-center items-center gap-x-4">
          <span className="text-3xl font-medium animate-horizontal-bounce block">{`>`}</span>
          <div className="text-center text-4xl font-medium">
            <Link href="https://portfolio.suppawit.dev/" target="_blank">
              Portfolio
            </Link>
          </div>
        </div>
      </div>
      <div className="overflow-hidden relative">
        <div className="divider-4 bg-[#777777] w-full h-[2px]" />
      </div>
    </div>
  )
}

export default ProjectSection
