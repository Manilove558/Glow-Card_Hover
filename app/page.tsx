import GlowCards from "@/components/glow-cards"

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-5xl mx-auto">
        <div className="flex flex-wrap gap-2 mb-6 justify-center">
          <span className="bg-zinc-800/80 text-zinc-300 px-4 py-1 rounded-full text-sm">@webdevsage</span>
          <span className="bg-zinc-800/80 text-zinc-300 px-4 py-1 rounded-full text-sm">#react</span>
          <span className="bg-zinc-800/80 text-zinc-300 px-4 py-1 rounded-full text-sm">#tailwind</span>
        </div>

        <h1 className="text-5xl md:text-6xl font-serif text-white text-center mb-4">Glow Card Hover</h1>
        <a
          href="https://www.instagram.com/mani_5201314_?igsh=MWs3dnoybXo0ZTRqZQ=="
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-400 hover:text-pink-300 transition-colors duration-300 text-center block mb-16 font-serif text-xl"
        >
          @mani_5201314_
        </a>

        <GlowCards />

        <p className="text-white/80 text-center mt-20 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          A card hover animation with smooth transitions, enhancing user interaction and visual appeal using React and
          Tailwind CSS
        </p>
      </div>
    </main>
  )
}

