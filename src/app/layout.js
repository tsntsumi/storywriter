"use client"
import Lines from "@/components/Lines"
import ScrollToTop from "@/components/ScrollToTop"
import { ThemeProvider } from "next-themes"

import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

import ToasterContext from "@/app/context/ToastContext"

export default function RootLayout({ children }) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={`dark:bg-black ${inter.className}`}>
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="light"
        >
          <Lines />
          <ToasterContext />
          {children}
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
