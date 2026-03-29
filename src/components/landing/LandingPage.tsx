import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Section from './Section'
import Layout from './Layout'
import { sections } from './sections'

const navLabels: Record<string, string> = {
  hero: 'Главная',
  roster: 'Состав',
  match: 'Матч',
  academy: 'Академия',
  join: 'Контакт',
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
      <nav className="fixed top-0 left-0 right-0 z-30 bg-black/70 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
          <span className="text-white font-black text-sm uppercase tracking-wider">Arbitrajniki</span>
          <div className="flex gap-1">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => handleNavClick(s.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeSection === s.id
                    ? 'bg-[#FF4D00] text-black'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {navLabels[s.id] || s.id}
              </button>
            ))}
          </div>
        </div>
      </nav>
      <motion.div
        className="fixed top-[49px] left-0 right-0 h-0.5 bg-[#FF4D00] origin-left z-30"
        style={{ scaleX }}
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
