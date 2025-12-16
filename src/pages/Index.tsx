import { HeroSection } from "@/components/dashboard/HeroSection";
import { AnalyticsDashboard } from "@/components/dashboard/AnalyticsDashboard";
import { HeroSection2 } from "@/components/dashboard/hero";
import { Header } from "@/components/dashboard/navbar";
import { Footer } from "@/components/dashboard/footer";
import { TrustedSection } from "@/components/dashboard/TrustedSection";
import { FinalCta } from "@/components/dashboard/FinalCta";
import { FaqSection } from "@/components/dashboard/faq";
import { ResearchersSection } from "@/components/dashboard/Researchers";
// import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="min-h-screen bg-background w-full">
      
      <div className="min-h-screen  text-white">
      <Header />
      <main>
        <HeroSection2 />
        <TrustedSection/>
        {/* <HeroSection /> */}
      <ResearchersSection />
      <AnalyticsDashboard />
      <FaqSection />
      <div className="w-[80%] mx-auto mb-20 ">
        <FinalCta />
      </div>
      {/* <FinalCta /> */}
      </main>
      <Footer />
    </div>


      {/* <Toaster /> */}
    </div>
  );
};

export default Index;

//  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] " />
