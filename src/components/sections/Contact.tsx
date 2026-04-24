import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      toast.success("Message sent! We'll bring light to your problem soon.");
      setForm({ name: "", email: "", message: "" });
      setLoading(false);
    }, 600);
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-soft" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-gradient-brand">Contact</p>
            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
              Let's bring <span className="text-gradient-brand">light</span> to your problem
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Tell us about your challenge — we'll respond with how AI can help.
            </p>

            <div className="mt-10 space-y-5">
              <Info icon={<Mail className="h-5 w-5" />} label="Email" value="jierollon@luminaite.com" />
              <Info icon={<Phone className="h-5 w-5" />} label="Phone" value="09300175858" />
              <Info icon={<MapPin className="h-5 w-5" />} label="Location" value="Manila, Philippines" />
            </div>
          </div>

          <form
            onSubmit={submit}
            className="rounded-3xl border bg-card p-8 shadow-elegant"
          >
            <div className="space-y-5">
              <div>
                <label className="text-sm font-medium" htmlFor="name">Name</label>
                <Input
                  id="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  maxLength={100}
                  className="mt-2"
                />
              </div>
              <div>
                <label className="text-sm font-medium" htmlFor="email">Email</label>
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@company.com"
                  maxLength={255}
                  className="mt-2"
                />
              </div>
              <div>
                <label className="text-sm font-medium" htmlFor="message">Message</label>
                <Textarea
                  id="message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your challenge..."
                  maxLength={1000}
                  rows={5}
                  className="mt-2"
                />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
                {loading ? "Sending..." : (<>Send message <Send className="ml-1 h-4 w-4" /></>)}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Info({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-glow">
        {icon}
      </div>
      <div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="font-medium">{value}</div>
      </div>
    </div>
  );
}
