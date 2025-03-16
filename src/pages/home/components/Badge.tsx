interface BadgeProps {
  text: string
}

const Badge = ({ text }: BadgeProps) => {
  return <div className="bg-gradient-secondary-color/80 rounded-xl py-0.5 px-2 mt-0.5 text-primary-background md:text-xs text-[10px]">{text}</div>
}

export default Badge
