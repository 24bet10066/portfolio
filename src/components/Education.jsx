const coursework = [
  'Data Structures & Algorithms',
  'Object-Oriented Programming',
  'DBMS',
  'Computer Networks',
  'Software Engineering',
  'Operating Systems',
]

const achievements = [
  {
    icon: '🚀',
    text: 'Built and shipped a live, revenue-generating SaaS platform as a solo developer in under 3 months',
  },
  {
    icon: '⚡',
    text: 'Designed and implemented 50+ production REST API endpoints with proper error handling & DTO patterns',
  },
  {
    icon: '🏗️',
    text: 'Achieved full-stack delivery from database schema to Android APK — backend, frontend, mobile, CI/CD & cloud',
  },
  {
    icon: '🧠',
    text: 'Independently integrated complex systems: JWT, payment gateways, push notifications, and AI APIs',
  },
]

export default function Education() {
  return (
    <section id="education" className="py-24 sm:py-32 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div className="reveal-left">
            <p className="section-label">Education</p>
            <h2 className="section-title mb-8">
              Academic <span className="text-gradient-gold">Foundation</span>
            </h2>

            <div className="glass-dark rounded-2xl p-8 hover-lift">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-brand-600/15 flex items-center justify-center shrink-0">
                  <svg className="w-7 h-7 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white/90 font-bold text-lg">B.Tech — Information Technology</h3>
                  <p className="text-brand-400 font-medium text-sm mt-1">Chandigarh University</p>
                  <p className="text-white/40 text-xs mt-1">Expected: May 2028</p>
                </div>
              </div>

              <div>
                <p className="text-xs text-white/35 uppercase tracking-widest font-semibold mb-3">Relevant Coursework</p>
                <div className="flex flex-wrap gap-2">
                  {coursework.map((course) => (
                    <span key={course} className="px-3 py-1.5 rounded-lg bg-white/[0.04] text-white/55 text-xs font-medium border border-white/[0.06] transition-colors hover:border-white/[0.12] hover:text-white/70">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="reveal">
            <p className="section-label">Recognition</p>
            <h2 className="section-title mb-8">
              Key <span className="text-gradient-gold">Achievements</span>
            </h2>

            <div className="space-y-4 stagger-children">
              {achievements.map(({ icon, text }, i) => (
                <div key={i} className="glass-dark rounded-xl p-5 hover-lift group flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-400/10 flex items-center justify-center shrink-0 text-lg group-hover:scale-110 transition-transform duration-300">
                    {icon}
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed pt-1.5">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
