import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function HeroSection2() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20" style={{
      background: 'linear-gradient(90deg, rgba(3, 0, 20, 1), rgba(65, 60, 151, 1) 50%, rgba(3, 0, 20, 1))'
    }}>
      <div className="container mx-auto px-4 py-20 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
          <Phone className="w-4 h-4" />
          <span className="font-medium uppercase tracking-wider" style={{
            fontSize: '.85rem',
            color: '#41E5E4',
            letterSpacing: '.1em'
          }}>Voice Analytics Platform</span>
        </div>
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-white">Your voice agents work in the demo.</span>
            <br />
            <span className="text-white">They </span>
            {/* <br /> */}
            {/* <span className="text-white">Teams </span> */}
            <span className="text-[#7fffd4]">break </span>
            {/* <br /> */}
            <span className="text-white">in production.</span>
          </h1>

          <p className="text-lg text-white/70 max-w-xl mx-auto">SuperBall is the evaluation and observability platform that helps you understand why your voice agents fail—and how to fix them.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="btn-primary">
              Get Started
            </Button>
            <Button className="btn-secondary">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
