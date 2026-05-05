import type { Metadata } from 'next'
import { Cormorant, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from "@/context/LanguageContext"
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

/** Web alternative to the brand book’s Lumina — swap for licensed Lumina files if provided. */
const cormorant = Cormorant({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Livre Cacao Fino Peruano | Bean to Bar — Valle Sagrado',
  description: 'Cacao fino peruano y chocolate artesanal del Valle Sagrado. Bean to bar con alma, tradición e ingredientes peruanos.',
  keywords: ['chocolate peruano', 'bean to bar', 'Valle Sagrado', 'cacao fino', 'chocolate premium', 'chocolate artesanal'],
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${cormorant.variable} bg-background`}>
      <body className="font-sans antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
