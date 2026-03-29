import { Badge } from "@/components/ui/badge"

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
    rating: "0.61",
    kd: "0.58",
    hs: "31%",
    adr: "44.1",
  },
  {
    name: "Donk",
    role: "Rifler",
    rating: "1.45",
    kd: "1.52",
    hs: "71%",
    adr: "96.8",
  },
  {
    name: "S1mple",
    role: "IGL / AWPer",
    rating: "1.38",
    kd: "1.44",
    hs: "59%",
    adr: "89.3",
  },
]

const RosterSection = () => (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mt-2 w-full max-w-6xl">
    {players.map((p) => {
      const isLow = p.name === "dhira777"
      return (
        <div
          key={p.name}
          className={`rounded-xl border p-4 flex flex-col gap-2 bg-black/40 backdrop-blur-sm ${
            isLow ? "border-red-800/60" : "border-[#FF4D00]/40"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="font-bold text-white text-sm">{p.name}</span>
            <span className={`text-xs font-semibold px-1.5 py-0.5 rounded ${isLow ? "bg-red-900/60 text-red-400" : "bg-[#FF4D00]/20 text-[#FF4D00]"}`}>
              {p.role}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-xs mt-1">
            <div>
              <div className="text-neutral-500">Rating</div>
              <div className={`font-bold text-base ${isLow ? "text-red-400" : "text-white"}`}>{p.rating}</div>
            </div>
            <div>
              <div className="text-neutral-500">K/D</div>
              <div className={`font-bold text-base ${isLow ? "text-red-400" : "text-white"}`}>{p.kd}</div>
            </div>
            <div>
              <div className="text-neutral-500">HS%</div>
              <div className={`font-semibold ${isLow ? "text-red-400" : "text-neutral-300"}`}>{p.hs}</div>
            </div>
            <div>
              <div className="text-neutral-500">ADR</div>
              <div className={`font-semibold ${isLow ? "text-red-400" : "text-neutral-300"}`}>{p.adr}</div>
            </div>
          </div>
          <div className="text-[10px] text-neutral-600 mt-1">HLTV Stats</div>
        </div>
      )
    })}
  </div>
)

const MatchSection = () => (
  <div className="w-full max-w-2xl">
    <div className="rounded-2xl border border-[#FF4D00]/40 bg-black/50 backdrop-blur-sm p-6 md:p-8">
      <div className="flex items-center justify-between gap-4">
        <div className="text-center flex-1">
          <div className="text-[#FF4D00] font-black text-lg md:text-2xl uppercase tracking-wider">Team Arbitrajniki</div>
          <div className="mt-3 flex flex-col gap-1 text-xs text-neutral-400">
            {["Donk", "S1mple", "Kpeze666", "misante", "dhira777"].map((n) => (
              <span key={n}>{n}</span>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="text-3xl font-black text-white">VS</div>
          <div className="text-[10px] text-neutral-500 uppercase tracking-widest mt-1">CS2</div>
        </div>
        <div className="text-center flex-1">
          <div className="text-white font-black text-lg md:text-2xl uppercase tracking-wider">Gladkovka Team</div>
          <div className="mt-3 flex flex-col gap-1 text-xs text-neutral-400">
            {["RONIK", "Danich", "malish-vasya", "VITALIK", "dxnisixs"].map((n) => (
              <span key={n}>{n}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-center gap-3">
        <div className="w-2 h-2 rounded-full bg-[#FF4D00] animate-pulse" />
        <span className="text-white font-semibold text-sm">1 апреля 2026 · 20:00 по Киеву</span>
      </div>
    </div>
  </div>
)

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-[#FF4D00] border-[#FF4D00]">CS2 · Киберспорт</Badge>,
    title: "Team Arbitrajniki.",
    content: "Мы играем жёстко. Мы играем вместе. Мы побеждаем.",
  },
  {
    id: 'roster',
    title: 'Состав команды',
    content: 'Пять игроков — одна цель. Статистика по данным HLTV.',
    customContent: <RosterSection />,
  },
  {
    id: 'match',
    subtitle: <Badge variant="outline" className="text-[#FF4D00] border-[#FF4D00]">Предстоящий матч</Badge>,
    title: 'Ближайшая игра',
    customContent: <MatchSection />,
  },
  {
    id: 'join',
    title: 'Следи за нами.',
    content: 'Поддержи команду Arbitrajniki в предстоящем матче против Gladkovka Team. Вместе к победе!',
  },
]
