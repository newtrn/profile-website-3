import '@/styles/globals.css'
import 'lenis/dist/lenis.css'

import LenisProvider from './providers/LenisProvider'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <title>suppawits.</title>
        <meta name="description" content="suppawit is a frontend dev." />
      </head>
      <body>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  )
}
