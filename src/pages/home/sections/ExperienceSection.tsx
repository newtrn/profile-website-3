import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Badge from '../components/Badge'

const ExperienceSection = () => {
  const container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.to('.experience-wrapper', {
      scrollTrigger: {
        trigger: container.current,
        start: '-=500',
        end: '+=1000',
        scrub: true,
      },
      opacity: 1,
      ease: 'expo.out',
    })
    gsap.to('.experience-wrapper', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top top',
        end: 'bottom',
        scrub: true,
      },
      y: 100,
      ease: 'expo.out',
    })
  }, [])

  return (
    <div ref={container} className="experience-wrapper opacity-0">
      <div className="text-2xl lg:text-4xl font-bold mb-10">Experiences</div>
      <div className="grid grid-cols-2 gap-4 grid-cols-[70px_1fr] md:grid-cols-[150px_1fr] lg:grid-cols-[300px_1fr]">
        <div className="flex items-start md:items-end text-xs md:text-sm lg:text-base">June 2023 - Present</div>
        <div className="flex items-start flex-col md:flex-row md:items-end gap-0.5 md:gap-2 lg:gap-4">
          <span className="text-base md:text-xl lg:text-3xl inline-block">Senior Frontend Devloper</span>
          <span className="text-xs md:text-base lg:text-xl inline-block">Mtel (Thailand) Co., Ltd.</span>
        </div>
        <div />
        <div className="text-xs md:text-sm lg:text-base mb-10 lg:mb-20">
          I develop and maintain websites using Next.js as the framework, focusing on delivering high-quality code and reusable components. I
          collaborate closely with the Product Manager and UX/UI Designer to ensure the product offers an excellent user experience. My work includes
          implementing responsive UI to guarantee cross-platform compatibility and troubleshooting and debugging website applications for seamless
          functionality. I conduct code reviews and provide constructive feedback to developers of all levels. Additionally, I lead projects from a
          technical standpoint, estimating the time required for each feature. I also create proof of concept for advanced, challenging features and
          libraries.
          <div className="flex items-center gap-1 md:gap-2 mt-2 flex-wrap">
            <Badge text="Next.js" />
            <Badge text="React Native" />
            <Badge text="TypeScript" />
            <Badge text="Tailwind CSS" />
            <Badge text="Node.js" />
            <Badge text="Prisma" />
            <Badge text="PostgreSQL" />
            <Badge text="Docker" />
            <Badge text="Kubernetes" />
          </div>
        </div>
        <div className="flex items-start md:items-end text-xs md:text-sm lg:text-base">Apr 2020 - Jun 2023</div>
        <div className="flex items-start flex-col md:flex-row md:items-end gap-0.5 md:gap-2 lg:gap-4">
          <span className="text-base md:text-xl lg:text-3xl inline-block">Software Engineer (Frontend)</span>
          <span className="text-xs md:text-base lg:text-xl inline-block">Sertis Co., Ltd.</span>
        </div>
        <div />
        <div className="text-xs md:text-sm lg:text-base mb-10 lg:mb-20">
          I implement website applications based on the provided UI using ReactJS. I am responsible for designing and deciding the project structure
          for the frontend side, including organizing the project's components. My work involves visualizing and managing dashboard data, as well as
          creating a central component for the application. I also focus on advanced CSS techniques to enhance the website's design. Collaboration
          with the team is facilitated through version-control tools like GitLab, where I also create GitLab CI pipelines to automate project
          deployment. Additionally, I lead the team in adopting SCRUM practices to ensure efficient project management and development.
          <div className="flex items-center gap-1 md:gap-2 mt-2 flex-wrap">
            <Badge text="ReactJS" />
            <Badge text="CSS" />
            <Badge text="GitLab CI" />
            <Badge text="Docker" />
          </div>
        </div>
        <div className="flex items-start md:items-end text-xs md:text-sm lg:text-base">Feb 2019 - Feb 2020</div>
        <div className="flex items-start flex-col md:flex-row md:items-end gap-0.5 md:gap-2 lg:gap-4">
          <span className="text-base md:text-xl lg:text-3xl inline-block">Frontend Developer</span>
          <span className="text-xs md:text-base lg:text-xl inline-block">G-able Public Co., Ltd.</span>
        </div>
        <div />
        <div className="text-xs md:text-sm lg:text-base mb-10 lg:mb-20">
          I create static websites using HTML, CSS, and JavaScript based on provided UI designs. In addition to building the websites, I provide
          constructive feedback on UI designs to help improve their usability and aesthetics. I also facilitate the team in adopting and utilizing
          Agile methodologies to ensure smooth and efficient project workflows.
          <div className="flex items-center gap-1 md:gap-2 mt-2 flex-wrap">
            <Badge text="HTML" />
            <Badge text="CSS" />
            <Badge text="JavaScript" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExperienceSection
