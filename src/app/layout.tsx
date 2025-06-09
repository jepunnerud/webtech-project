import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeContextProvider } from '@/stores/theme-context'
import NavBar from '@/components/NavBar/NavBar'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Digital football Museum',
  description: 'A museum of football history',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <ThemeContextProvider>
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <div className="global-container">
            <NavBar />
            <div className="main-content">{children}</div>
          </div>
        </body>
      </ThemeContextProvider>
    </html>
  )
}
