import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Section from './Section'
import Layout from './Layout'
import { sections } from './sections'

const navLabels: Record<string, string> = {
  hero: 'Home',
  roster: 'Roster',
  match: 'Match',
  academy: 'Academy',
  join: 'Contact',
}

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState('hero')
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ container: containerRef })
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      const scrollTop = containerRef.current.scrollTop
      const sectionEls = containerRef.current.querySelectorAll('section')
      let current = 'hero'
      sectionEls.forEach((el) => {
        if (el.offsetTop - 100 <= scrollTop) {
          current = el.id
        }
      })
      setActiveSection(current)
    }

    const container = containerRef.current
    if (container) container.addEventListener('scroll', handleScroll)
    return () => { if (container) container.removeEventListener('scroll', handleScroll) }
  }, [])

  const handleNavClick = (id: string) => {
    const el = containerRef.current?.querySelector(`#${id}`)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Layout>
      <nav className="fixed bottom-0 left-0 right-0 z-30 backdrop-blur-md" style={{ background: 'rgba(0,0,0,0.85)', borderTop: '1px solid var(--text-border)' }}>
        <div className="max-w-6xl mx-auto flex items-center justify-center px-4 py-3 gap-1">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => handleNavClick(s.id)}
              className="px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.15em] transition-all duration-300 font-mono"
              style={{
                color: activeSection === s.id ? '#000' : 'var(--text-dim)',
                background: activeSection === s.id ? 'var(--neon)' : 'transparent',
                boxShadow: activeSection === s.id ? '0 0 15px rgba(13,255,110,0.3)' : 'none',
              }}
            >
              {navLabels[s.id] || s.id}
            </button>
          ))}
        </div>
      </nav>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] origin-left z-30"
        style={{ scaleX, background: 'var(--neon)', boxShadow: '0 0 10px var(--neon)' }}
      />
      <div
        ref={containerRef}
        className="h-full overflow-y-auto scroll-smooth"
      >
        {sections.map((section) => (
          <Section
            key={section.id}
            {...section}
            isActive={true}
          />
        ))}
      </div>
    </Layout>
  )
}
