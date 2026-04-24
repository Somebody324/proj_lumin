import { Check } from "lucide-react";
import aria from "@/assets/product-aria.jpg";
import sera from "@/assets/product-sera.png";
import lakbai from "@/assets/product-lakbai.png";

const products = [
  {
    name: "ARIA",
    sub: "Artificial Responsive Intelligent Assistant",
    image: aria,
    desc: "An AI-powered smartwatch that monitors health data and intelligently responds to user queries in real time.",
    features: [
      "Health monitoring (heart rate, activity, etc.)",
      "Conversational AI assistant",
      "Powered by Gemini API",
    ],
  },
  {
    name: "SERA",
    sub: "Smart Extraction and Recognition Application",
    image: sera,
    desc: "An automated cocoon classification and extraction system using computer vision for improved silk quality control during harvest.",
    features: [
      "AI-based cocoon classification",
      "Automated sorting mechanism",
      "Improves efficiency and quality in sericulture",
    ],
  },
  {
    name: "LakbAI",
    sub: "Smart Vehicle Companion",
    image: lakbai,
    desc: "An AI-powered vehicle assistant that optimizes routes based on real-time traffic, fuel levels, and vehicle condition.",
    features: [
      "Smart route optimization",
      "Fuel efficiency tracking",
      "Vehicle diagnostics integration",
    ],
  },
];

export function Products() {
  return (
    <section id="products" className="relative bg-gradient-soft py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gradient-brand">Products</p>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            AI built for the <span className="text-gradient-brand">real world</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Three flagship products solving meaningful problems across health, agriculture, and mobility.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <article
              key={p.name}
              className="group flex flex-col overflow-hidden rounded-3xl border bg-card shadow-elegant transition-all duration-500 hover:-translate-y-2 hover:shadow-glow"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={p.image}
                  alt={`${p.name} product`}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="text-2xl font-bold">
                  <span className="text-gradient-brand">{p.name}</span>
                </h3>
                <p className="mt-1 text-sm font-medium text-muted-foreground">{p.sub}</p>
                <p className="mt-4 text-sm leading-relaxed text-foreground/80">{p.desc}</p>
                <ul className="mt-5 space-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-brand text-white">
                        <Check className="h-3 w-3" />
                      </span>
                      <span className="text-foreground/80">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
