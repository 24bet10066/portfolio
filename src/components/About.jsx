export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="lg:col-span-3 reveal-left">
            <p className="section-label">About Me</p>
            <h2 className="section-title mb-6">
              Building software that<br />
              <span className="text-gradient-gold">solves real problems</span>
            </h2>
            <div className="space-y-4 text-white/55 text-base leading-relaxed">
              <p>
                I'm a motivated Java Full-Stack Developer and B.Tech IT student at Chandigarh University, 
                graduating in 2028. I specialize in building production-grade applications from the ground up — 
                from database schema design to CI/CD pipeline deployment.
              </p>
              <p>
                My flagship project, <span className="text-gold-400 font-medium">Wrenchy</span>, 
                is a live SaaS platform serving a real appliance repair business across multiple cities. 
                It features JWT-secured REST APIs, Razorpay payments, Firebase push notifications, 
                role-based access control, and an AI-powered admin assistant.
              </p>
              <p>
                I thrive on turning complex system requirements into clean, scalable architectures. 
                Currently expanding my skillset into microservices, Apache Kafka, and AWS cloud infrastructure.
              </p>
            </div>
          </div>

          {/* Right: Info Cards */}
          <div className="lg:col-span-2 stagger-children">
            {/* Currently */}
            <div className="glass-dark rounded-2xl p-6 mb-4 hover-lift">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-brand-600/15 flex items-center justify-center">
                  <svg className="w-5 h-5 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white/90 font-semibold text-sm">Education</h3>
                  <p className="text-white/40 text-xs">Currently Pursuing</p>
                </div>
              </div>
              <p className="text-white/60 text-sm">B.Tech — Information Technology</p>
              <p className="text-white/40 text-xs mt-1">Chandigarh University · Class of 2028</p>
            </div>

            {/* Location */}
            <div className="glass-dark rounded-2xl p-6 mb-4 hover-lift">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gold-400/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white/90 font-semibold text-sm">Based In</h3>
                  <p className="text-white/40 text-xs">India</p>
                </div>
              </div>
              <p className="text-white/60 text-sm">Banda, Uttar Pradesh</p>
              <p className="text-white/40 text-xs mt-1">Open to remote & on-site opportunities</p>
            </div>

            {/* Status */}
            <div className="glass-gold rounded-2xl p-6 hover-glow-gold">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gold-400/15 flex items-center justify-center">
                  <svg className="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-gold-400 font-semibold text-sm">Currently Learning</h3>
                  <p className="text-white/40 text-xs">Next Milestones</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-1">
                {['Microservices', 'Redis', 'Kafka', 'AWS', 'System Design'].map((tech) => (
                  <span key={tech} className="px-2.5 py-1 rounded-md bg-gold-400/8 text-gold-300 text-xs font-medium border border-gold-400/10">
                    {tech}
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
