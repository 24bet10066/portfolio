const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Booking Lifecycle Engine',
    description: 'Complete 6-state booking flow: CREATED → SUGGESTED → ADMIN_APPROVED → ASSIGNED → ON_THE_WAY → COMPLETED. Every state transition triggers automated notifications.',
    color: 'brand',
    gradient: 'from-brand-600/20 to-transparent',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Smart Technician Assignment',
    description: 'AI-powered scoring algorithm evaluating skill category, real-time availability, average rating, active workload, and geographic proximity to suggest optimal assignments.',
    color: 'gold',
    gradient: 'from-gold-400/15 to-transparent',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Role-Based Access (RBAC)',
    description: 'Fine-grained Spring Security with JWT authentication. 4 distinct roles: Admin, Premium Technician, Basic Technician, and Customer — each with scoped API permissions.',
    color: 'emerald',
    gradient: 'from-emerald-500/15 to-transparent',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    title: 'Razorpay Payment Integration',
    description: 'Full UPI & card payment flow with order creation, HMAC-SHA256 signature verification, and idempotent payment status tracking for reliable transactions.',
    color: 'blue',
    gradient: 'from-blue-500/15 to-transparent',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    title: 'Event-Driven Notifications',
    description: 'Real-time notification system delivering in-app, SMS, and WhatsApp alerts across all user roles — triggered by 14+ business events including booking creation and assignment.',
    color: 'violet',
    gradient: 'from-violet-500/15 to-transparent',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.674M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'AI-Powered Admin Assistant',
    description: 'Integrated Anthropic Claude API from a secure Java backend — 4 specialized tools for booking trend analysis, technician coaching, demand prediction, and WhatsApp messaging.',
    color: 'pink',
    gradient: 'from-pink-500/15 to-transparent',
  },
]

const colorTextMap = {
  brand: 'text-brand-400',
  gold: 'text-gold-400',
  emerald: 'text-emerald-400',
  blue: 'text-blue-400',
  violet: 'text-violet-400',
  pink: 'text-pink-400',
}

const colorBgMap = {
  brand: 'bg-brand-600/12',
  gold: 'bg-gold-400/10',
  emerald: 'bg-emerald-500/12',
  blue: 'bg-blue-500/12',
  violet: 'bg-violet-500/12',
  pink: 'bg-pink-500/12',
}

export default function ProjectDetails() {
  return (
    <section className="py-24 sm:py-32 px-6 relative">
      {/* Subtle section separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="section-label">Deep Dive</p>
          <h2 className="section-title mb-4">
            Key <span className="text-gradient-gold">Features</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Every feature engineered for production reliability, security, and scale
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
          {features.map(({ icon, title, description, color, gradient }) => (
            <div
              key={title}
              className="glass-dark rounded-2xl p-7 hover-lift group relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl ${colorBgMap[color]} flex items-center justify-center ${colorTextMap[color]} mb-5 transition-transform duration-300 group-hover:scale-110`}>
                  {icon}
                </div>
                <h3 className="text-white/90 font-semibold text-base mb-3 tracking-tight">{title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Architecture highlights */}
        <div className="mt-16 reveal">
          <div className="glass-dark rounded-2xl p-8 md:p-10">
            <h3 className="text-white/90 font-semibold text-lg mb-6 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-brand-600/15 flex items-center justify-center">
                <svg className="w-4 h-4 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              Architecture Highlights
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Backend', detail: 'Spring Boot 3.2 REST API with DTO patterns & error handling', icon: '🏗️' },
                { label: 'Frontend', detail: 'React 18 + TypeScript with premium design system & skeleton loaders', icon: '🎨' },
                { label: 'Mobile', detail: 'Capacitor wrapper generating native APK with push notifications', icon: '📱' },
                { label: 'DevOps', detail: 'Docker + Render + Vercel with automated CI/CD on every push', icon: '🚀' },
              ].map(({ label, detail, icon }) => (
                <div key={label} className="glass-light rounded-xl p-5">
                  <div className="text-xl mb-2">{icon}</div>
                  <h4 className="text-gold-400 font-semibold text-sm mb-2">{label}</h4>
                  <p className="text-white/45 text-xs leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
