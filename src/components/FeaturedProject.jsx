const techStack = [
  { name: 'Java', color: '#ED8B00' },
  { name: 'Spring Boot 3.2', color: '#6DB33F' },
  { name: 'React 18', color: '#61DAFB' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'PostgreSQL', color: '#4169E1' },
  { name: 'JWT', color: '#D4AF37' },
  { name: 'Razorpay', color: '#528FF0' },
  { name: 'Firebase FCM', color: '#FFCA28' },
  { name: 'Docker', color: '#2496ED' },
  { name: 'Capacitor', color: '#53B9FF' },
]

const stats = [
  { value: '50+', label: 'REST Endpoints', icon: '⚡' },
  { value: '6', label: 'Booking States', icon: '🔄' },
  { value: '4', label: 'User Roles', icon: '🛡️' },
  { value: '14+', label: 'Event Triggers', icon: '🔔' },
  { value: '100+', label: 'Spare Parts', icon: '🔧' },
  { value: '3', label: 'Cities Served', icon: '🌍' },
]

export default function FeaturedProject() {
  return (
    <section id="project" className="py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="section-label">Featured Project</p>
          <h2 className="section-title mb-4">
            Wrenchy<span className="text-gold-400">.</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A full-stack service management platform — built solo, deployed in production, serving real businesses.
          </p>
        </div>

        {/* Main Project Card */}
        <div className="reveal-scale">
          <div className="glass-dark rounded-3xl overflow-hidden border border-white/[0.06] hover:border-white/10 transition-all duration-500">
            {/* Project Header Bar */}
            <div className="bg-gradient-to-r from-brand-600/15 via-transparent to-gold-400/10 px-8 py-6 border-b border-white/[0.06]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-400 to-brand-600 flex items-center justify-center text-2xl shadow-lg">
                    🔧
                  </div>
                  <div>
                    <h3 className="text-white text-xl font-bold tracking-tight">Service Management Platform</h3>
                    <p className="text-white/45 text-sm mt-0.5">Jan 2026 – Present · Live Production System</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="https://wrenchy.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary !py-2.5 !px-5 !text-sm inline-flex items-center gap-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/24bet10066/service-management"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary !py-2.5 !px-5 !text-sm inline-flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    Source
                  </a>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="px-8 py-8">
              <p className="text-white/55 leading-relaxed max-w-3xl">
                Architected and deployed a comprehensive service management system from scratch, currently serving 
                a real appliance repair business across multiple cities in Uttar Pradesh. Features a complete 
                booking lifecycle engine, smart technician assignment, integrated payments, and an AI-powered 
                admin assistant — all containerized and deployed with zero-downtime CI/CD.
              </p>
            </div>

            {/* Stats */}
            <div className="px-8 pb-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 stagger-children">
                {stats.map(({ value, label, icon }) => (
                  <div key={label} className="glass-light rounded-xl p-4 text-center hover-lift">
                    <div className="text-xl mb-2">{icon}</div>
                    <div className="text-xl font-bold text-gradient-gold font-display">{value}</div>
                    <div className="text-[0.7rem] text-white/40 mt-1 uppercase tracking-wider leading-tight">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="px-8 pb-8">
              <p className="text-xs text-white/30 uppercase tracking-widest font-semibold mb-4">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {techStack.map(({ name, color }) => (
                  <span
                    key={name}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium border transition-all duration-300 hover:scale-105"
                    style={{
                      color: color,
                      backgroundColor: `${color}10`,
                      borderColor: `${color}20`,
                    }}
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
