import { Phone, TrendingUp, BarChart3 } from "lucide-react";

export function HeroSection() {
  return (
    <section className="gradient-hero py-20 px-6">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
          <Phone className="w-4 h-4" />
          <span className="text-sm font-medium">Voice Analytics Platform</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 tracking-tight">
          Call Analytics for{" "}
          <span className="text-primary">Voice Agents</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Track performance, analyze sentiment patterns, and optimize your voice agent interactions with real-time insights.
        </p>
        
        <div className="flex flex-wrap justify-center gap-8 text-muted-foreground">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            <span className="text-sm">Real-time Tracking</span>
          </div>
          <div className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-accent" />
            <span className="text-sm">Deep Analytics</span>
          </div>
        </div>
      </div>
    </section>
  );
}
