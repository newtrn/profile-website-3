import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ContactIcon from '../components/ContactIcon'

const ContactSection = () => {
  const container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.to('.contact-wrapper', {
      scrollTrigger: {
        trigger: container.current,
        start: '-=500',
        end: '+=300',
        scrub: true,
      },
      opacity: 1,
      ease: 'expo.out',
    })
  }, [])

  return (
    <div className="contact-wrapper opacity-0 container pb-[50px] lg:pb-[100px]" ref={container}>
      <div className="text-center text-3xl md:text-[56px] font-bold mb-6 lg:mb-10">Let's talk</div>
      <div className="flex justify-center items-center flex-wrap gap-4">
        <ContactIcon icon="line-md:github-loop" href="https://github.com/newtrn" />
        <ContactIcon icon="line-md:linkedin" href="https://www.linkedin.com/in/suppawit-satitsongtam-88b1231a3/" />
        <ContactIcon icon="line-md:instagram" href="https://www.instagram.com/nueclears/" />
        <ContactIcon icon="line-md:facebook" href="https://www.facebook.com/suppawit.satitsongtam" />
        <ContactIcon icon="line-md:phone-call-loop" href="tel:+66896808065" />
        <ContactIcon icon="line-md:email" href="mailto:newfon2806@gmail.com" />
      </div>
    </div>
  )
}

export default ContactSection
