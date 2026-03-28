import { useEffect, useState } from 'react'

const roles = [
  'Full-Stack Developer',
  'Backend Specialist',
  'Spring Boot Engineer',
  'API Architect',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (!isDeleting) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60)
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2200)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
      } else {
        setIsDeleting(false)
        setRoleIndex((prev) => (prev + 1) % roles.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, roleIndex])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      {/* Hero-specific decorative gradient */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(79,70,229,0.25) 0%, rgba(212,175,55,0.08) 50%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center" style={{ animation: 'fadeInUp 1s cubic-bezier(0.16,1,0.3,1) forwards' }}>
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold mb-8"
          style={{ animation: 'fadeInUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s forwards', opacity: 0 }}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-medium text-gold-400 tracking-wide uppercase">Available for Internships</span>
        </div>

        {/* Name */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-[1.05]"
          style={{ animation: 'fadeInUp 1s cubic-bezier(0.16,1,0.3,1) 0.3s forwards', opacity: 0 }}
        >
          <span className="text-white">Aditya</span>
          <br />
          <span className="text-gradient-hero">Gupta</span>
        </h1>

        {/* Typewriter Role */}
        <div className="h-10 flex items-center justify-center mb-8"
          style={{ animation: 'fadeInUp 1s cubic-bezier(0.16,1,0.3,1) 0.5s forwards', opacity: 0 }}
        >
          <span className="font-mono text-lg sm:text-xl text-brand-400">
            {'> '}
          </span>
          <span className="font-mono text-lg sm:text-xl text-white/80">
            {displayed}
          </span>
          <span className="font-mono text-lg sm:text-xl text-gold-400 ml-0.5" style={{ animation: 'blink 1s step-end infinite' }}>
            |
          </span>
        </div>

        {/* Description */}
        <p className="text-white/50 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ animation: 'fadeInUp 1s cubic-bezier(0.16,1,0.3,1) 0.6s forwards', opacity: 0 }}
        >
          B.Tech IT student building production-grade SaaS platforms.
          <br className="hidden sm:block" />
          Creator of{' '}
          <a href="https://wrenchy.in" target="_blank" rel="noopener noreferrer" className="text-gold-400 hover:text-gold-300 font-medium transition-colors">
            Wrenchy
          </a>
          {' '}— a live service management system serving real businesses.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animation: 'fadeInUp 1s cubic-bezier(0.16,1,0.3,1) 0.7s forwards', opacity: 0 }}
        >
          <a href="#project" className="btn-primary inline-flex items-center gap-2">
            View My Work
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          <a href="#contact" className="btn-secondary inline-flex items-center gap-2">
            Get In Touch
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-md mx-auto"
          style={{ animation: 'fadeInUp 1s cubic-bezier(0.16,1,0.3,1) 0.9s forwards', opacity: 0 }}
        >
          {[
            { number: '50+', label: 'API Endpoints' },
            { number: '1', label: 'Live SaaS Product' },
            { number: '10+', label: 'Technologies' },
          ].map(({ number, label }) => (
            <div key={label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-gradient-gold font-display">{number}</div>
              <div className="text-xs text-white/40 mt-1 uppercase tracking-wider">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{ animation: 'fadeIn 1s ease 1.5s forwards, pulseSoft 3s ease-in-out infinite 2s', opacity: 0 }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center pt-2">
          <div className="w-1 h-2.5 rounded-full bg-gold-400 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
