import Link from 'next/link'

interface ProjectCardProps {
  title1: string
  title2: string
  subtitle: string
  detail: string
  image: string
  textSide: 'left' | 'right'
  border: {
    color1: string
    color2: string
  }
}

const ProjectCard = ({ title1, title2, subtitle, detail, image, textSide, border }: ProjectCardProps) => {
  const { color1, color2 } = border
  console.log(color1, color2)
  return (
    <Link href="https://portfolio.suppawit.dev/" target="_blank" className="project-card">
      <div className="card-border">
        <svg>
          <defs>
            <linearGradient id="grad-orange" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: color1, stopOpacity: 1 }}></stop>
              <stop offset="100%" style={{ stopColor: color2, stopOpacity: 1 }}></stop>
            </linearGradient>
            <linearGradient id={`grad-${color1}-${color2}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color={color1}></stop>
              <stop offset="100%" stop-color={color2}></stop>
            </linearGradient>
          </defs>
          <rect
            id="rect-grad"
            className="rect-gradient"
            fill="none"
            stroke={`url(#grad-${color1}-${color2})`}
            stroke-linecap="square"
            stroke-width="4"
            stroke-miterlimit="30"
            width="100%"
            height="100%"
          ></rect>
        </svg>
      </div>
      <div className="card-img-wrapper">
        <img className="card-img w-[180px]" src={image} alt="" />
      </div>
      <div className={`card-copy ${textSide === 'left' ? 'card-copy--left' : 'card-copy--right'}`}>
        <span className="card-copy-subtitle">{subtitle}</span>
        <strong className="card-copy-title">{title1}</strong>
        <strong className="card-copy-title">{title2}</strong>
        <span className="card-copy-detail !lowercase">{detail}</span>
      </div>
    </Link>
  )
}

export default ProjectCard
