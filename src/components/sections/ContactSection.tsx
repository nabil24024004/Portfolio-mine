import { useRef, useState } from "react";
import { Github, Linkedin, Mail, Phone, Palette, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { toast } from "sonner";

const EMAILJS_SERVICE_ID = "service_4x5uwys";
const EMAILJS_TEMPLATE_ID = "template_75yvb8n";
const EMAILJS_PUBLIC_KEY = "eqksO_UByYnBbWaPv";

const socials = [
  {
    label: "Email",
    href: "mailto:azwadabrar109@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    href: "tel:01823604026",
    icon: Phone,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/",
    icon: Github,
  },
  {
    label: "Behance",
    href: "https://www.behance.net/",
    icon: Palette,
  },
];

export const ContactSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formRef.current) return;

    setIsLoading(true);

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );

      toast.success("Message sent successfully!", {
        description: "I'll get back to you as soon as possible.",
      });

      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Failed to send message", {
        description: "Please try again or email me directly.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="relative border-t border-border/70 bg-secondary/40">
      <div className="section-shell-wide">
        <div
          ref={ref}
          className={cn(
            "grid gap-9 md:grid-cols-[minmax(0,3fr)_minmax(0,2.3fr)] md:items-start md:gap-10 opacity-0 translate-y-3",
            isVisible && "opacity-100 translate-y-0 animate-fade-in",
          )}
        >
          <div className="space-y-5 md:space-y-6">
            <p className="section-kicker">06 Contact</p>
            <div>
              <h2 className="section-title text-3xl md:text-[2.4rem] lg:text-[2.6rem]">
                Let&apos;s get in touch.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
                Whether you&apos;re shaping a new product or refining an existing experience, I&apos;d love to hear more about
                what you&apos;re building.
              </p>
            </div>

            <div className="mt-2 flex flex-wrap gap-3 text-xs text-muted-foreground md:text-sm">
              {socials.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/60 px-4 py-1.5 text-xs md:text-sm transition-colors hover:border-primary hover:text-foreground hover-scale animate-enter"
                  style={{ animationDelay: `${index * 70}ms` }}
                >
                  <social.icon className="h-3.5 w-3.5" />
                  <span>{social.label}</span>
                </a>
              ))}
            </div>
          </div>

          <form
            ref={formRef}
            className="relative space-y-4 rounded-3xl border border-primary/40 bg-gradient-to-br from-background/70 via-background/45 to-background/70 p-5 shadow-[0_24px_60px_-30px_hsl(var(--primary)/0.7)] backdrop-blur-2xl md:p-6 lg:p-7 animate-enter"
            onSubmit={handleSubmit}
          >
            <div className="pointer-events-none absolute inset-x-6 bottom-10 h-28 rounded-full bg-primary/25 blur-3xl" />

            <div className="relative grid gap-3 md:grid-cols-2">
              <div>
                <label className="text-xs font-medium text-muted-foreground" htmlFor="user_name">
                  Name
                </label>
                <Input
                  id="user_name"
                  name="user_name"
                  placeholder="Your name"
                  className="mt-1"
                  required
                />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground" htmlFor="user_email">
                  Email
                </label>
                <Input
                  id="user_email"
                  name="user_email"
                  type="email"
                  placeholder="you@email.com"
                  className="mt-1"
                  required
                />
              </div>
            </div>
            <div className="relative">
              <label className="text-xs font-medium text-muted-foreground" htmlFor="message">
                Project details
              </label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Share a bit about what you'd like to build."
                className="mt-1"
                required
              />
            </div>
            <div className="relative pt-1">
              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full px-8 py-3 text-sm uppercase tracking-[0.18em] md:w-auto md:text-base"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send message"
                )}
              </Button>
            </div>
            <p className="relative text-[0.7rem] leading-relaxed text-muted-foreground md:text-xs">
              Your message will be sent directly to my inbox at
              <span className="font-mono"> azwadabrar109@gmail.com</span>.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
