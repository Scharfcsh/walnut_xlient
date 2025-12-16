export function FinalCta() {
  return (
    <section className="relative py-12 border-t border-white/5 rounded-2xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0a1f] via-[#1a0f3e] to-[#1a0f3e]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] bg-purple-600/30 blur-[150px] rounded-full" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-white">Ready to understand why your</span>
            <br />
            <span className="text-white">voice agents fail?</span>
          </h2>

          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Join engineering teams who refuse to ship unreliable AI. Get started with SuperBall today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-8 py-3 rounded-full transition-colors">
              Get Started
            </button>
            <button className="border border-white/20 hover:bg-white/5 text-white font-medium px-8 py-3 rounded-full transition-colors">
              View Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
