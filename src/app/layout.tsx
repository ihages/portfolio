'use client'

import {Geist, Geist_Mono} from 'next/font/google'
import './globals.css'
import Header from '@/components/header/index'
import Footer from '@/components/footer'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import Breadcrumbs from '@/components/breadcrumbs'
import {usePathname} from 'next/navigation'
import {Suspense} from 'react'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const page = usePathname()

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </head>
      <Suspense>
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <Header />
          <div className="page-body">
            {page !== '/' && <Breadcrumbs />}
            {children}
          </div>
          <Footer />
        </body>
      </Suspense>
    </html>
  )
}
