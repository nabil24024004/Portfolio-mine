import { ArrowUpRight, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";
import profileImage from "@/assets/profile-azwad.png";
import { Button } from "@/components/ui/button";
export const HeroSection = () => {
  const navigate = useNavigate();
  const handleGoToWork = () => {
    navigate("/works");
  };
  return <section id="top" className="relative overflow-hidden border-b border-border/60 bg-gradient-to-b from-background/20 via-background to-background pt-0 md:pt-0">
    <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-accent/25 blur-3xl" />
    <div className="pointer-events-none absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-primary/25 blur-3xl" />

    <div className="section-shell-wide pt-8 md:pt-10 lg:pt-12">
      <div className="grid items-center gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <div className="space-y-7 animate-fade-in">
          <p className="section-kicker">UI/UX · Product Design · Web Development</p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-[0.9] md:text-6xl lg:text-7xl">
            Merging creative innovation with Engineering precision.
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            I'm Sheikh Azwad Abrar, a UI/UX and product designer with an avionics engineering background, crafting
            human-centered digital experiences that balance aesthetics, performance, and technical depth.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button variant="hero" size="lg" className="text-base md:text-lg px-7 py-3.5 gap-3" onClick={handleGoToWork}>
              See my work
              <ArrowUpRight className="h-5 w-5" />
            </Button>
            <a href="#" aria-label="Download CV" className="inline-flex">
              <Button variant="outline" size="lg" className="text-base md:text-lg px-6 py-3 gap-2">
                <Download className="h-5 w-5" />
                Download CV
              </Button>
            </a>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground md:text-base">
            <span className="pill text-sm">Avionics Engineering · AAUB · Jr. Product Designer</span>
            <span className="pill text-sm">Available for product design &amp; front-end collaborations</span>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end -mt-4 md:-mt-8">
          <div className="relative h-88 w-64 overflow-hidden rounded-3xl border border-border/80 bg-card/90 shadow-glow-soft backdrop-blur-xl md:h-[26rem] md:w-80 lg:h-[30rem] lg:w-88">
            <div className="pointer-events-none absolute -inset-16 animate-orbit rounded-full bg-[conic-gradient(from_160deg,_hsl(var(--accent)/0.12),_transparent_55%,_hsl(var(--primary)/0.22),_transparent_80%)]" />
            <div className="relative z-10 h-full w-full">
              <img src={profileImage} alt="Portrait of Sheikh Azwad Abrar in a dark suit" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>;
};