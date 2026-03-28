import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Project', href: '#project' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)

      const sections = navLinks.map(l => l.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-dark-strong shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center gap-3 group"
          onClick={() => setMobileOpen(false)}
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-400 to-brand-600 flex items-center justify-center text-midnight font-bold text-lg font-display transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
            A
          </div>
          <span className="text-white/90 font-semibold text-lg tracking-tight hidden sm:block">
            Aditya<span className="text-gold-400">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeSection === href.slice(1)
                  ? 'text-gold-400 bg-white/[0.04]'
                  : 'text-white/60 hover:text-white/90 hover:bg-white/[0.04]'
              }`}
            >
              {label}
            </a>
          ))}
          <a
            href="https://github.com/24bet10066"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 btn-secondary !py-2.5 !px-5 !text-sm !rounded-lg inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            GitHub
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-white/5 transition-colors"
          aria-label="Toggle menu"
        >
          <span className={`w-5 h-0.5 bg-white/80 rounded-full transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-5 h-0.5 bg-white/80 rounded-full transition-all duration-300 ${mobileOpen ? 'opacity-0 scale-0' : ''}`} />
          <span className={`w-5 h-0.5 bg-white/80 rounded-full transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-400 overflow-hidden ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6 pt-2 flex flex-col gap-1 glass-dark-strong border-t border-white/[0.06]">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeSection === href.slice(1)
                  ? 'text-gold-400 bg-white/[0.05]'
                  : 'text-white/60 hover:text-white/90 hover:bg-white/[0.04]'
              }`}
            >
              {label}
            </a>
          ))}
          <a
            href="https://github.com/24bet10066"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 btn-secondary !py-3 text-center !text-sm inline-flex items-center justify-center gap-2"
            onClick={() => setMobileOpen(false)}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            GitHub
          </a>
        </div>
      </div>
    </nav>
  )
}
