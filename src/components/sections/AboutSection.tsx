import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="relative border-t border-border/70 bg-secondary/40">
      <div className="section-shell-wide">
        <div
          ref={ref}
          className={cn(
            "grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-center md:gap-12 opacity-0 translate-y-3",
            isVisible && "opacity-100 translate-y-0 animate-fade-in",
          )}
        >
          <div className="space-y-5">
            <p className="section-kicker">02 About</p>
            <h2 className="section-title text-3xl md:text-[2.4rem]">
              Engineering roots,
              <br /> design-led outcomes.
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              I&apos;m currently pursuing a Bachelor&apos;s in Avionics Engineering at the Aviation and Aerospace University
              Bangladesh, graduating in 2028. My work lives at the intersection of rigorous engineering thinking and
              expressive, human-centered design.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              From circuits and microcontrollers to UI systems and design languages, I enjoy translating complex systems
              into calm, intuitive digital products. Every interface is treated like an engineered system reliable,
              efficient, and purposefully crafted.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              I focus on building experiences that feel precise yet warm: minimal, legible layouts supported by thoughtful
              motion, clear hierarchy, and just enough personality.
            </p>
          </div>

          <div className="space-y-4 rounded-3xl border border-primary/40 bg-gradient-to-br from-background/65 via-background/40 to-background/65 p-6 shadow-[0_18px_40px_-26px_hsl(var(--primary)/0.5)] backdrop-blur-2xl animate-enter md:p-7">
            <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">Snapshot</h3>
            <dl className="grid grid-cols-1 gap-4 text-sm text-muted-foreground md:grid-cols-2">
              <div>
                <dt className="text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground/80">Program</dt>
                <dd className="mt-1 text-foreground">BSc in Avionics Engineering</dd>
              </div>
              <div>
                <dt className="text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground/80">Institution</dt>
                <dd className="mt-1 text-foreground">Aviation and Aerospace University Bangladesh</dd>
              </div>
              <div>
                <dt className="text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground/80">Graduation</dt>
                <dd className="mt-1 text-foreground">Expected 2028</dd>
              </div>
              <div>
                <dt className="text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground/80">Focus</dt>
                <dd className="mt-1 text-foreground">UI/UX · Product Design · Web Interfaces</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};
