import { Lightbulb, Globe2, Heart, Zap } from "lucide-react";

const points = [
  { icon: Lightbulb, title: "Problem-focused AI", desc: "Solutions designed around real challenges, not technology for its own sake." },
  { icon: Globe2, title: "Real-world impact", desc: "Practical, measurable outcomes that improve lives and businesses." },
  { icon: Zap, title: "Cross-industry innovation", desc: "From healthcare to agriculture to mobility — AI that adapts." },
  { icon: Heart, title: "Human-centered design", desc: "Intelligent systems that feel intuitive, accessible, and trustworthy." },
];

export function Why() {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-hero opacity-95" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-brand opacity-20 blur-3xl" />

      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-yellow">Why LuminAIte</p>
        <h2 className="mt-3 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
          Why Choose <span className="text-gradient-brand">LuminAIte?</span>
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/80">
          We don't just build AI — we design intelligent solutions tailored to real-world problems.
          LuminAIte bridges the gap between advanced technology and practical application,
          delivering systems that are not only innovative but also impactful, efficient, and accessible.
        </p>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {points.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-glow">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
