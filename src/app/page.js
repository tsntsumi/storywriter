import Image from "next/image"

import Hero from "@/components/Hero"
import Brands from "@/components/Brands"
import Feature from "@/components/Features"

import About from "@/components/About"
import FeaturesTab from "@/components/FeaturesTab"
import FunFact from "@/components/FunFact"
import Integration from "@/components/Integration"
import CTA from "@/components/CTA"
import FAQ from "@/components/FAQ"
import Pricing from "@/components/Pricing"
import Contact from "@/components/Contact"
import Blog from "@/components/Blog"
import Testimonial from "@/components/Testimonial"

export const metadata = {
  title: "Story Makes Sales (OFFICIAL) -- Alizza Ideal",
  description:
    "あなたのビジネスの価値が、お客様からご理解いただけていないあなたへ。わたしたちは、あなたのコアバリューとフィロソフィーを、あなたのストーリーからシンプルで明瞭に伝わるセールスファネルを構築し、スモールビジネスの成長をお届けします"
  // other metadata
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Brands />
      <Feature />
      <About />
      <CTA />
    </main>
  )
}
