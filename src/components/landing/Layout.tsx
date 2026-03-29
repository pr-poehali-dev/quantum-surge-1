import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen overflow-hidden relative" style={{ background: 'var(--bg)' }}>
      <div className="absolute inset-0 scan-line pointer-events-none z-0" />
      <div className="absolute inset-0 pointer-events-none z-0" style={{
        backgroundImage: 'radial-gradient(rgba(13,255,110,0.07) 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }} />
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  )
}
