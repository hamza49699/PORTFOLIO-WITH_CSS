import Image from "next/image";
import Header from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About"
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <About />
      <Skills />
      <Contact/>
      <Footer/>
    </div>
  )

}