import { Github, Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/luminaite-logo.png";

export function Footer() {
  return (
    <footer className="border-t bg-card py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <img src={logo} alt="LuminAIte" className="h-10 w-auto" width={140} height={40} />
          <p className="text-sm text-muted-foreground">We bring light to your problems.</p>
        </div>

        <div className="flex items-center gap-4">
          <a href="#" aria-label="Twitter" className="rounded-full border p-2 text-muted-foreground transition-all hover:border-primary hover:text-primary hover:shadow-glow">
            <Twitter className="h-4 w-4" />
          </a>
          <a href="#" aria-label="LinkedIn" className="rounded-full border p-2 text-muted-foreground transition-all hover:border-primary hover:text-primary hover:shadow-glow">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="#" aria-label="GitHub" className="rounded-full border p-2 text-muted-foreground transition-all hover:border-primary hover:text-primary hover:shadow-glow">
            <Github className="h-4 w-4" />
          </a>
        </div>

        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} LuminAIte. All rights reserved.</p>
      </div>
    </footer>
  );
}
