import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Footer from "@/components/footer"
import Header from "@/components/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Wasatch Permitting",
  description: "Wasatch Permitting is a permitting company in Utah. We help individuals and businesses with their electrical permitting needs.",
  keywords: ["permitting", "electrical", "utah", "solar"],
  icons : { icon : [ '/favicon.ico' ] },
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col justify-between w-full h-full min-h-screen">
          <Header />
          <main className="flex-auto w-full max-w-3xl px-4 py-4 mx-auto sm:px-6 md:py-6">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
};