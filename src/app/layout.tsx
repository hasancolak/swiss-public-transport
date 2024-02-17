import type { Metadata } from "next"
import { Inter } from "next/font/google"
import StoreProvider from "@/store/Store.provider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Swiss Public Transport Planner",
  description: "Swiss public transport planner",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  )
}
