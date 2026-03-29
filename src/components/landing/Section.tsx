import { motion } from "framer-motion"
import type { SectionProps } from "@/types"

export default function Section({ id, title, subtitle, content, showButton, buttonText, customContent }: SectionProps) {
  return (
    <section id={id} className="relative min-h-screen w-full flex flex-col justify-center px-6 md:px-16 lg:px-24 py-24 pb-28">
      {subtitle && (
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {subtitle}
        </motion.div>
      )}
      <motion.h2
        className="font-heading text-5xl md:text-7xl lg:text-[6rem] xl:text-[7rem] uppercase leading-[0.95] tracking-[0.03em] neon-text"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        {title}
      </motion.h2>
      {content && (
        <motion.p
          className="text-lg md:text-xl lg:text-2xl max-w-2xl mt-6 font-light"
          style={{ color: 'var(--text-dim)' }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {content}
        </motion.p>
      )}
      {customContent && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 w-full"
        >
          {customContent}
        </motion.div>
      )}
      {showButton && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12"
        >
          <button
            className="px-8 py-3 border uppercase tracking-[0.2em] text-sm font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(13,255,110,0.3)]"
            style={{ borderColor: 'var(--neon)', color: 'var(--neon)', background: 'transparent' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--neon)'; e.currentTarget.style.color = '#000' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--neon)' }}
          >
            {buttonText}
          </button>
        </motion.div>
      )}
    </section>
  )
}
