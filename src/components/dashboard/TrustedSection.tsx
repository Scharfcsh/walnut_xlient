export function TrustedSection() {
  const companies = [
    { name: "mykare", logo: "mykare" },
    { name: "Kennar", logo: "Kennar✱" },
    { name: "ACE MONEY", logo: "ACE MONEY" },
  ]

  return (
    <section className="relative py-20 border-t border-white/5">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto px-4 relative z-10">
        <p className="text-center text-white/40 uppercase tracking-wider text-sm mb-12">
          Trusted by Innovative Companies
        </p>

        <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-20">
          {companies.map((company) => (
            <div key={company.name} className="text-2xl font-semibold text-white/80 hover:text-white transition-colors">
              {company.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
