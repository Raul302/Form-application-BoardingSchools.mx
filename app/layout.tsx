import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Form de registro',
  description: 'Property of BoardingSchools.mx - Raúl',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{background:'#EEEEEE'}}className={inter.className}>{children}</body>
    </html>
  )
}
