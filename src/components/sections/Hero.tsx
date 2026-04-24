import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-ai.jpg";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-hero pt-24"
    >
      {/* glowing orbs */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-brand-purple/30 blur-3xl animate-glow-pulse" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-brand-orange/25 blur-3xl animate-glow-pulse" style={{ animationDelay: "2s" }} />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-brand-yellow" />
            AI-powered solutions for real-world challenges
          </div>

          <h1 className="mt-6 text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            <span className="text-gradient-brand">LuminAIte</span>
          </h1>
          <p className="mt-4 text-xl font-medium text-white/85 sm:text-2xl">
            We bring light to your problems.
          </p>
          <p className="mt-6 max-w-xl text-base text-white/70 sm:text-lg">
            Intelligent systems that illuminate complex challenges — from smart automation to
            real-time decision-making, we engineer AI that creates meaningful impact.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button asChild variant="hero" size="xl">
              <a href="#products">
                Explore Our Solutions <ArrowRight className="ml-1 h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="outlineGlow" size="xl" className="text-white border-white/30 hover:bg-white/10">
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        </div>

        <div className="relative opacity-0 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <div className="absolute inset-0 -z-10 rounded-full bg-gradient-brand opacity-40 blur-3xl" />
          <img
            src={heroImg}
            alt="Glowing AI neural network sphere"
            width={1280}
            height={1280}
            className="mx-auto w-full max-w-lg rounded-3xl animate-float"
          />
        </div>
      </div>
    </section>
  );
}
