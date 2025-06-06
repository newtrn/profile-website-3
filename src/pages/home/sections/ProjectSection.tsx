import ProjectCard from '../components/ProjectCard'

const ProjectSection = () => {
  return (
    <div className="project-wrapper">
      <div className="text-2xl lg:text-4xl font-bold mb-30">Highlighted Projects</div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-40 px-10">
        <div className="card-wrapper w-full flex justify-center">
          <ProjectCard
            title1="Mtel"
            title2="website"
            subtitle="fullstack"
            detail="Landing website with animations by GSAP. Built with Next.js, Tailwind CSS, and GSAP."
            image="images/logos/mtel-logo.webp"
            textSide="left"
            border={{
              color1: '#ffc50f',
              color2: '#FFF0C0FF',
            }}
          />
        </div>
        <div className="card-wrapper w-full flex justify-center">
          <ProjectCard
            title1="ChaoChao"
            title2="website"
            subtitle="frontend"
            detail="Car rental website both lister and renter with a focus on user experience and performance."
            image="images/logos/chaochao-logo.png"
            textSide="left"
            border={{
              color1: '#AFF000',
              color2: '#E9FEB4FF',
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default ProjectSection
