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
      <nav className="fixed bottom-0 left-0 right-0 z-30 bg-black/80 backdrop-blur-md border-t border-white/10">
        <div className="max-w-6xl mx-auto flex items-center justify-center px-4 py-3 gap-2">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => handleNavClick(s.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeSection === s.id
                  ? 'bg-[#FF4D00] text-black'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {navLabels[s.id] || s.id}
            </button>
          ))}
        </div>
      </nav>
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-[#FF4D00] origin-left z-30"
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