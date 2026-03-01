import type { Metadata, Viewport } from 'next'
import { Julius_Sans_One, Pacifico, Jura } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const juliusSansOne = Julius_Sans_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-script',
  display: 'swap',
})

const jura = Jura({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'The Fast One - Alejandro cumple 1 añito',
  description: '¡Quiero que celebres conmigo mi primer añito!',
  icons: {
    icon: 'https://res.cloudinary.com/dv1u9zrhl/image/upload/v1772250139/casco_icon_ottqxn.svg',
  },
}

export const viewport: Viewport = {
  themeColor: '#5BC1C3',
  width: 'device-width',
  initialScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${juliusSansOne.variable} ${pacifico.variable} ${jura.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
