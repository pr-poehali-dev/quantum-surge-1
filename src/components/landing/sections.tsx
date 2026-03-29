const players = [
  {
    name: "Kpeze666",
    role: "Entry Fragger",
    rating: "1.34",
    kd: "1.41",
    hs: "68%",
    adr: "91.2",
  },
  {
    name: "misante",
    role: "AWPer",
    rating: "1.28",
    kd: "1.35",
    hs: "52%",
    adr: "87.4",
  },
  {
    name: "dhira777",
    role: "Support",
    rating: "1.19",
    kd: "1.23",
    hs: "55%",
    adr: "78.6",
  },
  {
    name: "Donk",
    role: "Rifler",
    rating: "1.45",
    kd: "1.52",
    hs: "71%",
    adr: "96.8",
    hltvUrl: "https://www.hltv.org/player/21167/donk",
    photo: "https://cdn.poehali.dev/projects/b0b32e2b-fa22-477f-af8f-4bf8cbae645c/bucket/bab78415-9b30-48ed-9c92-1e538e30b3fb.jpg",
  },
  {
    name: "S1mple",
    role: "IGL / AWPer",
    rating: "1.38",
    kd: "1.44",
    hs: "59%",
    adr: "89.3",
    hltvUrl: "https://www.hltv.org/player/7998/s1mple",
    photo: "https://cdn.poehali.dev/projects/b0b32e2b-fa22-477f-af8f-4bf8cbae645c/bucket/a40ff8fa-5e52-46b7-9eec-c3565ecc2b0c.jpg",
  },
]

const RosterSection = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4 w-full max-w-6xl">
    {players.map((p, i) => (
      <div
        key={p.name}
        className="group relative border neon-border bg-[var(--bg3)] p-0 flex flex-col overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(13,255,110,0.15)]"
        style={{ animationDelay: `${i * 0.1}s` }}
      >
        {p.photo && (
          <div className="relative h-36 overflow-hidden">
            <img
              src={p.photo}
              alt={p.name}
              className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg3)] to-transparent" />
          </div>
        )}
        <div className="p-4 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="font-heading text-xl uppercase tracking-wider" style={{ color: 'var(--text)' }}>{p.name}</span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: 'var(--neon)' }}>
            {p.role}
          </span>
          <div className="grid grid-cols-2 gap-x-3 gap-y-2 mt-2 font-mono text-xs">
            <div>
              <div style={{ color: 'var(--text-dim)' }} className="text-[10px] uppercase tracking-wider">Rating</div>
              <div className="text-lg font-bold" style={{ color: 'var(--neon)' }}>{p.rating}</div>
            </div>
            <div>
              <div style={{ color: 'var(--text-dim)' }} className="text-[10px] uppercase tracking-wider">K/D</div>
              <div className="text-lg font-bold" style={{ color: 'var(--text)' }}>{p.kd}</div>
            </div>
            <div>
              <div style={{ color: 'var(--text-dim)' }} className="text-[10px] uppercase tracking-wider">HS%</div>
              <div style={{ color: 'var(--text-dim)' }}>{p.hs}</div>
            </div>
            <div>
              <div style={{ color: 'var(--text-dim)' }} className="text-[10px] uppercase tracking-wider">ADR</div>
              <div style={{ color: 'var(--text-dim)' }}>{p.adr}</div>
            </div>
          </div>
          <div className="mt-2 pt-2 flex items-center justify-between" style={{ borderTop: '1px solid var(--text-border)' }}>
            <span className="font-mono text-[9px] uppercase tracking-wider" style={{ color: 'var(--text-border)' }}>HLTV Stats</span>
            {p.hltvUrl && (
              <a
                href={p.hltvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] uppercase tracking-wider transition-colors hover:underline"
                style={{ color: 'var(--neon)' }}
              >
                Profile →
              </a>
            )}
          </div>
        </div>
      </div>
    ))}
  </div>
)

const MatchSection = () => (
  <div className="w-full max-w-3xl">
    <div className="border neon-border neon-glow p-8 md:p-10" style={{ background: 'var(--bg2)' }}>
      <div className="flex items-center justify-center gap-2 mb-8">
        <div className="h-px flex-1" style={{ background: 'var(--text-border)' }} />
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] px-4" style={{ color: 'var(--text-dim)' }}>Upcoming Match · CS2</span>
        <div className="h-px flex-1" style={{ background: 'var(--text-border)' }} />
      </div>
      <div className="flex items-center justify-between gap-6">
        <div className="text-center flex-1">
          <div className="font-heading text-2xl md:text-4xl uppercase tracking-wider neon-text">
            Team<br/>Arbitrajniki
          </div>
          <div className="mt-4 flex flex-col gap-1 font-mono text-xs" style={{ color: 'var(--text-dim)' }}>
            {["Donk", "S1mple", "Kpeze666", "misante", "dhira777"].map((n) => (
              <span key={n}>{n}</span>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="font-heading text-4xl md:text-5xl" style={{ color: 'var(--text)' }}>VS</div>
          <div className="w-8 h-px" style={{ background: 'var(--neon)', boxShadow: '0 0 8px var(--neon)' }} />
        </div>
        <div className="text-center flex-1">
          <div className="font-heading text-2xl md:text-4xl uppercase tracking-wider" style={{ color: 'var(--text)' }}>
            Gladkovka<br/>Team
          </div>
          <div className="mt-4 flex flex-col gap-1 font-mono text-xs" style={{ color: 'var(--text-dim)' }}>
            {["RONIK", "Danich", "malish-vasya", "VITALIK", "dxnisixs"].map((n) => (
              <span key={n}>{n}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8 pt-6 flex items-center justify-center gap-3" style={{ borderTop: '1px solid var(--text-border)' }}>
        <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--neon)', boxShadow: '0 0 10px var(--neon)' }} />
        <span className="font-mono text-sm tracking-wider" style={{ color: 'var(--text)' }}>1 АПРЕЛЯ 2026 · 20:00 KYIV</span>
      </div>
    </div>
  </div>
)

export const sections = [
  {
    id: 'hero',
    subtitle: (
      <span className="font-mono text-xs uppercase tracking-[0.3em] inline-block px-3 py-1 border" style={{ color: 'var(--neon)', borderColor: 'rgba(13,255,110,0.3)' }}>
        CS2 · Esports
      </span>
    ),
    title: "Team Arbitrajniki",
    content: "Лучшая команда в сфере Counter Strike 2",
  },
  {
    id: 'roster',
    title: 'Roster',
    subtitle: (
      <span className="font-mono text-xs uppercase tracking-[0.3em]" style={{ color: 'var(--text-dim)' }}>
        ── Состав команды
      </span>
    ),
    content: 'Пять игроков — одна цель. Статистика по данным HLTV.',
    customContent: <RosterSection />,
  },
  {
    id: 'match',
    title: 'Next Match',
    subtitle: (
      <span className="font-mono text-xs uppercase tracking-[0.3em] inline-block px-3 py-1 border" style={{ color: 'var(--neon)', borderColor: 'rgba(13,255,110,0.3)' }}>
        Предстоящий матч
      </span>
    ),
    customContent: <MatchSection />,
  },
  {
    id: 'academy',
    subtitle: (
      <span className="font-mono text-xs uppercase tracking-[0.3em] inline-block px-3 py-1" style={{ color: 'var(--gold)', borderBottom: '1px solid var(--gold)' }}>
        Soon
      </span>
    ),
    title: 'Academy',
    content: 'Проходит набор в академию команды. Тренировки, разборы матчей и путь в киберспорт — скоро открытие.',
  },
  {
    id: 'join',
    title: 'Join Us',
    content: 'Поддержи команду Arbitrajniki в предстоящем матче против Gladkovka Team. Вместе к победе!',
  },
]
