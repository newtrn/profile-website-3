import { Icon } from '@iconify/react'
import Link from 'next/link'
import clsx from 'clsx'
interface ContactIconProps {
  icon: string
  href: string
  className?: string
}

const ContactIcon = ({ icon, href, className }: ContactIconProps) => {
  return (
    <Link href={href} className={clsx('contact-icon cursor-pointer', className)} target="_blank">
      <button
        className={clsx(
          'contact-icon-button w-12 h-12 rounded-full bg-transparent flex items-center justify-center border border-primary-text-color duration-300 transition-all cursor-pointer',
          'hover:scale-110'
        )}
      >
        <Icon icon={icon} className={clsx('text-2xl')} />
      </button>
    </Link>
  )
}

export default ContactIcon
