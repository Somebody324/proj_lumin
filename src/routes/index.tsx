import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Products } from "@/components/sections/Products";
import { Why } from "@/components/sections/Why";
import { Team } from "@/components/sections/Team";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LuminAIte — We bring light to your problems" },
      {
        name: "description",
        content:
          "LuminAIte builds AI-powered solutions for real-world challenges — smart assistants, computer vision, and intelligent vehicle companions.",
      },
      { property: "og:title", content: "LuminAIte — AI solutions for real-world problems" },
      {
        property: "og:description",
        content: "Intelligent systems that illuminate complex challenges across health, agriculture, and mobility.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Why />
        <Team />
        <Contact />
      </main>
      <Footer />
      <Toaster richColors position="top-center" />
    </div>
  );
}
