import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import FeaturedProject from './components/FeaturedProject'
import ProjectDetails from './components/ProjectDetails'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    document.querySelectorAll('.reveal, .reveal-left, .reveal-scale, .stagger-children').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative min-h-screen bg-midnight overflow-hidden">
      {/* Ambient 3D Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className="ambient-orb absolute rounded-full"
          style={{
            width: '500px', height: '500px',
            top: '-5%', left: '15%',
            background: 'rgba(79, 70, 229, 0.12)',
            filter: 'blur(100px)',
            mixBlendMode: 'screen',
            animation: 'float 20s ease-in-out infinite',
          }}
        />
        <div
          className="ambient-orb absolute rounded-full"
          style={{
            width: '400px', height: '400px',
            bottom: '10%', right: '5%',
            background: 'rgba(212, 175, 55, 0.06)',
            filter: 'blur(100px)',
            mixBlendMode: 'screen',
            animation: 'float 25s ease-in-out infinite -7s',
          }}
        />
        <div
          className="ambient-orb absolute rounded-full"
          style={{
            width: '350px', height: '350px',
            top: '40%', left: '55%',
            background: 'rgba(45, 27, 105, 0.10)',
            filter: 'blur(100px)',
            mixBlendMode: 'screen',
            animation: 'float 30s ease-in-out infinite -13s',
          }}
        />
        <div
          className="ambient-orb absolute rounded-full"
          style={{
            width: '300px', height: '300px',
            top: '70%', left: '10%',
            background: 'rgba(99, 102, 241, 0.06)',
            filter: 'blur(120px)',
            mixBlendMode: 'screen',
            animation: 'float 22s ease-in-out infinite -4s',
          }}
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <FeaturedProject />
        <ProjectDetails />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
