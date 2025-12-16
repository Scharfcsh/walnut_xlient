
export function ResearchersSection() {
  return (
    <section className="relative py-32 border-t border-white/5">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px)," />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-4 mb-20">
          <p className="text-purple-400 text-sm font-medium uppercase tracking-wider">
            BUILT BY RESEARCHERS, NOT JUST ENGINEERS.
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-white">Built by </span>
            <span className="text-purple-400">researchers.</span>
            <span className="text-white"> Not just</span>
            <br />
            <span className="text-white">engineers.</span>
          </h2>
          <p className="text-white/60 text-lg max-w-3xl mx-auto">
            SuperBall was founded by AI researchers and experts in acoustic AI systems. We don't just build tools. We
            understand the fundamental challenges of getting LLMs to work reliably in conversational AI.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-[200px,1fr] gap-8 items-start">
              <div className="mx-auto md:mx-0">
                <div className="w-40 h-40 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-400 overflow-hidden">
                    <img
                        src="/image.png"
                        alt="Dr. Aman Adhikari"
                        width={160}
                        height={160}
                        className="w-full h-full object-cover"
                    />
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Dr. Neetha Mariam Joy</h3>
                  <p className="text-purple-400">Co-Founder & Chief AI Scientist</p>
                </div>

                <p className="text-white/80 leading-relaxed">
                  "Voice agents fail in production because they aren't built for real-world chaos—unpredictable users,
                  noisy environments, edge cases your test suite will never cover. At SuperBall, we've spent years
                  researching how to make conversational AI resilient. Not just accurate. Resilient."
                </p>

                <div className="space-y-3 text-sm">
                  <p className="text-white/60">
                    <span className="text-purple-400 font-medium">Research:</span> Dr. Joy's research focuses on
                    real-time conversational AI robustness and adaptive speech systems.
                  </p>
                  <p className="text-white/60">
                    <span className="text-purple-400 font-medium">Background:</span> Previously at MIT's CSAIL,
                    published 15+ papers on acoustic modeling and LLM reliability in production.
                  </p>
                  <p className="text-white/60">
                    <span className="text-purple-400 font-medium">Why SuperBall:</span> "I got tired of watching
                    brilliant voice AI products fail in the real world. We're fixing that—permanently."
                  </p>
                  <p className="text-white/60">
                    <span className="text-purple-400 font-medium">Fun Fact:</span> Before founding SuperBall, Dr. Joy
                    spent a year testing voice assistants in rural India to understand how AI fails in low-resource
                    environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
