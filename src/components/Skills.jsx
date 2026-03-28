import { useState } from 'react'

const skillCategories = [
  {
    title: 'Backend',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    color: 'brand',
    skills: [
      { name: 'Java', level: 92 },
      { name: 'Spring Boot 3', level: 90 },
      { name: 'Spring Security', level: 85 },
      { name: 'REST APIs', level: 93 },
      { name: 'JPA / Hibernate', level: 85 },
      { name: 'JWT Auth', level: 88 },
    ],
  },
  {
    title: 'Frontend',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: 'gold',
    skills: [
      { name: 'React 18', level: 87 },
      { name: 'TypeScript', level: 82 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'HTML / CSS', level: 90 },
      { name: 'JavaScript', level: 88 },
      { name: 'Responsive Design', level: 85 },
    ],
  },
  {
    title: 'Database & Cloud',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    color: 'emerald',
    skills: [
      { name: 'PostgreSQL', level: 86 },
      { name: 'MySQL', level: 82 },
      { name: 'Docker', level: 78 },
      { name: 'Render / Vercel', level: 85 },
      { name: 'CI/CD Pipelines', level: 80 },
      { name: 'Firebase FCM', level: 82 },
    ],
  },
  {
    title: 'Tools & Integrations',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: 'amber',
    skills: [
      { name: 'Git / GitHub', level: 88 },
      { name: 'Razorpay API', level: 84 },
      { name: 'Capacitor (Mobile)', level: 75 },
      { name: 'Anthropic Claude API', level: 78 },
      { name: 'Postman', level: 86 },
      { name: 'Maven', level: 82 },
    ],
  },
]

const colorMap = {
  brand: {
    bg: 'bg-brand-600/12',
    text: 'text-brand-400',
    bar: 'from-brand-600 to-brand-400',
    border: 'border-brand-600/20',
    glow: 'rgba(79, 70, 229, 0.15)',
  },
  gold: {
    bg: 'bg-gold-400/10',
    text: 'text-gold-400',
    bar: 'from-gold-500 to-gold-300',
    border: 'border-gold-400/15',
    glow: 'rgba(212, 175, 55, 0.12)',
  },
  emerald: {
    bg: 'bg-emerald-500/12',
    text: 'text-emerald-400',
    bar: 'from-emerald-600 to-emerald-400',
    border: 'border-emerald-500/20',
    glow: 'rgba(16, 185, 129, 0.12)',
  },
  amber: {
    bg: 'bg-amber-500/12',
    text: 'text-amber-400',
    bar: 'from-amber-600 to-amber-400',
    border: 'border-amber-500/20',
    glow: 'rgba(245, 158, 11, 0.12)',
  },
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="skills" className="py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="section-label">Expertise</p>
          <h2 className="section-title mb-4">
            Technical <span className="text-gradient-gold">Arsenal</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A comprehensive stack refined through building and deploying production systems
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 reveal">
          {skillCategories.map((cat, i) => {
            const c = colorMap[cat.color]
            return (
              <button
                key={cat.title}
                id={`skill-tab-${i}`}
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeTab === i
                    ? `${c.bg} ${c.text} ${c.border} border shadow-lg`
                    : 'text-white/50 hover:text-white/70 hover:bg-white/[0.03] border border-transparent'
                }`}
                style={activeTab === i ? { boxShadow: `0 4px 20px ${c.glow}` } : {}}
              >
                {cat.icon}
                {cat.title}
              </button>
            )
          })}
        </div>

        {/* Active Skills Grid */}
        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto stagger-children">
          {skillCategories[activeTab].skills.map(({ name, level }) => {
            const c = colorMap[skillCategories[activeTab].color]
            return (
              <div key={name} className="glass-dark rounded-xl p-5 hover-lift group">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white/85 font-medium text-sm">{name}</span>
                  <span className={`text-xs font-mono font-semibold ${c.text}`}>{level}%</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${c.bar} transition-all duration-1000 ease-out`}
                    style={{ width: `${level}%` }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
