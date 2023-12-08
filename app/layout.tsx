import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bibarta K. Sarkar | Fullstack Developer",
  description:
    "Bibarta is a 14-year-old full-stack developer with one year plus of experience in JavaScript, TypeScript, React, TailwindCSS, Node.js, Firebase, MongoDB and Figma. He started at the age of 10 as a self-taught learner, later enrolling in advanced courses with prestigious platforms. He loves to blend his skills in the most creative way possible. Beyond coding, he excels in cricket in domestic tournaments and finds solace in caring for animals.",
  keywords: [
    "frontend developer",
    "web developer",
    "front-end engineer",
    "web design",
    "user interface design",
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Vue.js",
    "Angular",
    "responsive web design",
    "mobile-friendly websites",
    "web development portfolio",
    "interactive web design",
    "frontend frameworks",
    "web development projects",
    "website optimization",
    "cross-browser compatibility",
    "web development skills",
    "creative web design",
    "modern web development",
    "UX/UI design",
    "frontend coding",
    "frontend technologies",
    "web application development",
    "professional web development",
    "frontend development tools",
    "performance optimization",
    "SEO-friendly websites",
    "portfolio website",
    "web developer portfolio",
    "custom web solutions",
    "dynamic web applications",
    "JavaScript frameworks",
    "CSS frameworks",
    "web layout design",
    "frontend coding expertise",
    "frontend development services",
    "innovative web design",
    "web development expertise",
  ],

  authors: [{ name: "Bibarta K Sarkar" }],
  creator: "Bibarta K Sarkar",
  publisher: "Bibarta K Sarkar",
  openGraph: {
    title: "Bibarta K. Sarkar | Fullstack Developer",
    description:
      "Bibarta is a 14-year-old full-stack developer with one year plus of experience in JavaScript, TypeScript, React, TailwindCSS, Node.js, Firebase, MongoDB and Figma. He started at the age of 10 as a self-taught learner, later enrolling in advanced courses with prestigious platforms. He loves to blend his skills in the most creative way possible. Beyond coding, he excels in cricket in domestic tournaments and finds solace in caring for animals.",
    url: "bibartaksarkar.com",
    type: "website",
    images:
      "https://res.cloudinary.com/dano2nyff/image/upload/v1699375559/hnbvplwvhbghjvajqtkm.jpg",
    siteName: "Bibarta K Sarkar",
  },
  twitter: {
    title: "Bibarta K. Sarkar | Fullstack Developer",
    creator: "@bibartaks",
    card: "summary_large_image",
    images:
      "https://res.cloudinary.com/dano2nyff/image/upload/v1699375559/hnbvplwvhbghjvajqtkm.jpg",
    description:
      "Bibarta is a 14-year-old full-stack developer with one year plus of experience in JavaScript, TypeScript, React, TailwindCSS, Node.js, Firebase, MongoDB and Figma. He started at the age of 10 as a self-taught learner, later enrolling in advanced courses with prestigious platforms. He loves to blend his skills in the most creative way possible. Beyond coding, he excels in cricket in domestic tournaments and finds solace in caring for animals.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} `}>
        <Navbar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  )
}
