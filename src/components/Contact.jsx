import { useState } from 'react'

const contactLinks = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'adityaguptazz72@gmail.com',
    href: 'mailto:adityaguptazz72@gmail.com',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Phone',
    value: '+91 6306557517',
    href: 'tel:+916306557517',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    label: 'GitHub',
    value: 'github.com/24bet10066',
    href: 'https://github.com/24bet10066',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Location',
    value: 'Banda, Uttar Pradesh, India',
    href: null,
  },
]

export default function Contact() {
  const [copied, setCopied] = useState(null)

  const handleCopy = (value, label) => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(label)
      setTimeout(() => setCopied(null), 2000)
    })
  }

  return (
    <section id="contact" className="py-24 sm:py-32 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="section-label">Let's Connect</p>
          <h2 className="section-title mb-4">
            Get In <span className="text-gradient-gold">Touch</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Interested in working together? I'd love to hear about opportunities in backend engineering and full-stack development.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 gap-4 mb-12 stagger-children">
          {contactLinks.map(({ icon, label, value, href }) => (
            <div
              key={label}
              className="glass-dark rounded-2xl p-6 hover-lift group cursor-pointer relative"
              onClick={() => href ? window.open(href, href.startsWith('http') ? '_blank' : '_self') : handleCopy(value, label)}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-600/12 flex items-center justify-center text-brand-400 shrink-0 group-hover:bg-gold-400/12 group-hover:text-gold-400 transition-all duration-300">
                  {icon}
                </div>
                <div className="min-w-0">
                  <p className="text-white/40 text-xs uppercase tracking-wider font-semibold mb-1">{label}</p>
                  <p className="text-white/80 text-sm font-medium truncate group-hover:text-gold-400 transition-colors duration-300">
                    {value}
                  </p>
                </div>
              </div>

              {/* Copy indicator */}
              {!href && (
                <div className={`absolute top-4 right-4 text-xs font-medium transition-all duration-300 ${copied === label ? 'text-emerald-400 opacity-100' : 'text-white/30 opacity-0 group-hover:opacity-100'}`}>
                  {copied === label ? '✓ Copied' : 'Click to copy'}
                </div>
              )}

              {/* External link indicator */}
              {href && href.startsWith('http') && (
                <div className="absolute top-4 right-4 text-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center reveal">
          <div className="glass-gold rounded-2xl p-10 md:p-12">
            <div className="text-3xl mb-4">🤝</div>
            <h3 className="text-white/90 text-xl font-bold font-display mb-3">Ready to Collaborate?</h3>
            <p className="text-white/45 text-sm mb-6 max-w-md mx-auto leading-relaxed">
              I'm actively seeking backend/full-stack internship roles where I can contribute to scalable, enterprise-grade systems.
            </p>
            <a
              href="mailto:adityaguptazz72@gmail.com?subject=Opportunity%20-%20Let's%20Connect&body=Hi%20Aditya,"
              className="btn-primary inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send Me an Email
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
