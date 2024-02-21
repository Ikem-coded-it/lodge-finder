import type { Metadata } from 'next'
import { inter } from '@/app/ui/font';
import './globals.css'

export const metadata: Metadata = {
  title: {
    template: '%s | Lodge Finder',
    default: 'Lodge Finder',
  },
  description: 'A platform that makes it easy to find accomodation in Ifite, Awka, Anambra State.',
  keywords: ['Lodge', 'Ifite', 'Awka', 'unizik', 'Accomodation', 'Anambra', 'caretaker', 'lodge hunter', 'student'],
  metadataBase: new URL('https://lodgefinder.com.ng'),
  authors: [{ name: 'Onubogu Ikemefuna', url: 'ikemsportfolio.netlify.app' }],
  creator: 'Onubogu Ikemefuna',
  publisher: 'Onubogu Ikemefuna',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
