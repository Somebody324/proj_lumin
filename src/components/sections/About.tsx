import { Target, Eye } from "lucide-react";

export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gradient-brand">About Us</p>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            Illuminating ideas with <span className="text-gradient-brand">intelligent AI</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            LuminAIte is an AI solutions company dedicated to solving real-world problems through
            intelligent systems. We design and develop innovative AI-driven technologies that
            enhance efficiency, improve decision-making, and create meaningful impact across
            industries. From smart automation to intelligent analytics, we bring clarity and
            innovation to complex challenges.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          <Card icon={<Target className="h-6 w-6" />} title="Our Mission" gradient="from-brand-purple to-brand-magenta">
            To develop intelligent and accessible AI solutions that empower individuals, businesses,
            and communities to overcome challenges and improve quality of life.
          </Card>
          <Card icon={<Eye className="h-6 w-6" />} title="Our Vision" gradient="from-brand-magenta to-brand-orange">
            To become a leading innovator in AI technology, illuminating the path toward a smarter,
            more efficient, and sustainable future.
          </Card>
        </div>
      </div>
    </section>
  );
}

function Card({
  icon,
  title,
  children,
  gradient,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  gradient: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border bg-card p-8 shadow-elegant transition-all duration-500 hover:-translate-y-1 hover:shadow-glow">
      <div className={`absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gradient-to-br ${gradient} opacity-20 blur-2xl transition-opacity duration-500 group-hover:opacity-40`} />
      <div className="relative">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-glow">
          {icon}
        </div>
        <h3 className="mt-5 text-2xl font-bold">{title}</h3>
        <p className="mt-3 leading-relaxed text-muted-foreground">{children}</p>
      </div>
    </div>
  );
}
