import { Linkedin, Twitter } from "lucide-react";

// 1. Import your local images from your src folder
// Adjust these paths based on your actual folder structure
import daks from "@/assets/received_1011848037857363.jpeg";
import mc from "@/assets/mc.jpg";
import erich from "@/assets/erich.jpg";
import jean from "@/assets/jean.jpg";
import jie from "@/assets/jie.jpg";

const team = [
  { 
    name: "Justine Rey Daquis", 
    role: "Product Manager", 
    image: daks
  },
  { 
    name: "McAllen Fradejas", 
    role: "Project Engineer", 
    image: mc
  },
  { 
    name: "Erich Jude Centino", 
    role: "Implementation Engineer", 
    image: erich
  },
  { 
    name: "Jeanuari Aesaac Dimaano", 
    role: "Pre-sales Engineer", 
    image: jean
  },
  { 
    name: "Jienelle Grace Rollon", 
    role: "Account Manager", 
    image: jie
  },
];

export function Team() {
  return (
    <section id="team" className="py-28 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gradient-brand">
            The Team
          </p>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            Minds behind <span className="text-gradient-brand">the light</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            A multidisciplinary team of engineers, researchers, and designers building the future of applied AI.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {team.map((m) => (
            <div
              key={m.name}
              className="group relative overflow-hidden rounded-3xl border bg-card p-6 text-center shadow-elegant transition-all duration-500 hover:-translate-y-2 hover:shadow-glow"
            >
              {/* Background Glow Effect */}
              <div className="absolute inset-x-0 -top-20 h-40 bg-gradient-brand opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30" />
              
              {/* Profile Image Container */}
              <div className="relative mx-auto flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-2 border-primary/10 shadow-glow bg-muted">
                <img 
                  src={m.image} 
                  alt={m.name} 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <h3 className="relative mt-5 font-bold">{m.name}</h3>
              <p className="relative mt-1 text-sm text-muted-foreground">{m.role}</p>

              {/* Socials */}
              <div className="relative mt-4 flex justify-center gap-3 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary">
                  <Twitter className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
