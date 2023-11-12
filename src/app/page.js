import Image from "next/image"

import { GoogleAuthProvider } from "firebase/auth"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { BrowserRouter as Router } from "react-router-dom"

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Brands from "@/components/Brands"
import Feature from "@/components/Features"
import About from "@/components/About"
import CTA from "@/components/CTA"

import firebaseConfig from "@/firebase-config"

export default function Page() {
  return (
    <>
      <Header />
      <Hero />
      <Brands />
      <Feature />
      <About />
      <CTA />
      <Footer />
    </>
  )
}
