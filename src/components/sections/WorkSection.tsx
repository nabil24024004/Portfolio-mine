import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import peerhireHero from "@/assets/peerhire-hero.png";
import peerhireHowItWorks from "@/assets/peerhire-how-it-works.png";
import peerhireOffer from "@/assets/peerhire-offer.png";
import peerhireTalent from "@/assets/peerhire-talent.png";
import peerhireDashboard from "@/assets/peerhire-dashboard.png";
import peerhireLiveBoard from "@/assets/peerhire-live-board.png";

export const WorkSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);

  useEffect(() => {
    if (!carouselApi) return;

    const interval = setInterval(() => {
      if (!carouselApi) return;
      if (carouselApi.canScrollNext()) {
        carouselApi.scrollNext();
      } else {
        carouselApi.scrollTo(0);
      }
    }, 7000);

    return () => clearInterval(interval);
  }, [carouselApi]);

  return (
    <section id="work" className="section-shell-wide bg-background border-t border-border/70">
      <div
        ref={ref}
        className={cn(
          "flex flex-col gap-7 md:gap-8 opacity-0 translate-y-3",
          isVisible && "opacity-100 translate-y-0 animate-fade-in",
        )}
      >
        <div className="max-w-xl space-y-3">
          <p className="section-kicker">05 Selected Work</p>
          <h2 className="section-title text-3xl md:text-[2.4rem]">
            PeerHire AAUB — freelancing, reimagined for campus.
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            PeerHire AAUB is a university-exclusive freelancing platform that connects students for academic assistance.
            Designed mobile-first and built with modern web technologies, it supports real workflows for real students.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-stretch md:gap-8">
          <article className="group relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-background/70 via-background/50 to-background/70 p-6 shadow-[0_24px_60px_-28px_hsl(var(--primary)/0.7)] backdrop-blur-2xl transition-transform duration-300 hover:-translate-y-1 hover:border-primary/70 hover:shadow-[0_28px_70px_-30px_hsl(var(--primary)/0.9)] hover-scale animate-enter">
            <div className="pointer-events-none absolute -left-24 top-0 h-56 w-56 rounded-full bg-primary/18 blur-3xl" />
            <div className="pointer-events-none absolute -right-10 bottom-0 h-64 w-64 rounded-full bg-primary/22 blur-3xl" />

            <div className="relative z-10 flex flex-col gap-5">
              <div className="flex flex-wrap items-center gap-3 text-[0.65rem] font-mono uppercase tracking-[0.18em] text-muted-foreground">
                <span className="rounded-full bg-background/60 px-3 py-1">Role · UI/UX &amp; Product Design</span>
                <span className="rounded-full bg-background/60 px-3 py-1">Frontend Engineering</span>
              </div>

              <p className="text-xs leading-relaxed text-muted-foreground md:text-sm">
                Students can act as both hirers and freelancers, with role-based dashboards, a live freelancer board, and
                a structured task &amp; review system. Real-time messaging keeps collaboration focused and within the
                platform.
              </p>

              <ul className="grid grid-cols-2 gap-3 text-xs text-muted-foreground md:text-sm">
                <li className="rounded-2xl bg-background/60 px-3 py-2">
                  <span className="block text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground/80">Platform</span>
                  <span className="mt-1 block text-foreground">Web · Mobile</span>
                </li>
                <li className="rounded-2xl bg-background/60 px-3 py-2">
                  <span className="block text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground/80">Features</span>
                  <span className="mt-1 block text-foreground">Dual roles, dashboards, live board, messaging</span>
                </li>
                <li className="rounded-2xl bg-background/60 px-3 py-2">
                  <span className="block text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground/80">Outcome</span>
                  <span className="mt-1 block text-foreground">Deployed with real students onboarded</span>
                </li>
                <li className="rounded-2xl bg-background/60 px-3 py-2">
                  <span className="block text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground/80">
                    My contribution
                  </span>
                  <span className="mt-1 block text-foreground">UX strategy, design system, and front-end</span>
                </li>
              </ul>

              <div className="mt-2 flex flex-wrap items-center gap-3">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="border-primary/80 text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <a href="https://peerhireaaub.vercel.app/" target="_blank" rel="noreferrer">
                    <ExternalLink className="mr-1 h-4 w-4" /> View live project
                  </a>
                </Button>
                <span className="text-xs text-muted-foreground">
                  Built as a focused, tool-like experience for students — energetic yet disciplined.
                </span>
              </div>
            </div>
          </article>

          <div
            className="relative hidden overflow-hidden rounded-3xl border border-border/80 bg-card/95 shadow-soft transition-transform duration-300 hover:-translate-y-1.5 hover-scale md:block animate-enter"
            style={{ animationDelay: "120ms" }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_hsl(var(--primary)/0.45),_transparent_60%),_radial-gradient(circle_at_bottom,_hsl(var(--primary)/0.22),_transparent_60%)] opacity-80" />
            <div className="relative z-10 flex h-full flex-col gap-4 p-6">
              <div>
                <p className="text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground">Interaction notes</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Dashboards, cards, and task flows are composed with clear hierarchy, soft depth, and motion that
                  reinforces mental models rather than distracting from them.
                </p>
              </div>

              <div className="relative mt-2 flex-1">
                <Carousel
                  className="h-full"
                  opts={{ loop: true }}
                  setApi={setCarouselApi}
                  aria-label="PeerHire project screenshots carousel"
                >
                  <CarouselContent className="h-full">
                    <CarouselItem className="h-full">
                      <img
                        src={peerhireHero}
                        alt="PeerHire hero screen — main dashboard overview"
                        className="h-full w-full rounded-2xl object-cover"
                        loading="lazy"
                      />
                    </CarouselItem>
                    <CarouselItem className="h-full">
                      <img
                        src={peerhireHowItWorks}
                        alt="PeerHire how it works flow, showing steps for students"
                        className="h-full w-full rounded-2xl object-cover"
                        loading="lazy"
                      />
                    </CarouselItem>
                    <CarouselItem className="h-full">
                      <img
                        src={peerhireOffer}
                        alt="PeerHire offer screen for creating a new task"
                        className="h-full w-full rounded-2xl object-cover"
                        loading="lazy"
                      />
                    </CarouselItem>
                    <CarouselItem className="h-full">
                      <img
                        src={peerhireTalent}
                        alt="PeerHire talent listing showcasing freelancers on campus"
                        className="h-full w-full rounded-2xl object-cover"
                        loading="lazy"
                      />
                    </CarouselItem>
                    <CarouselItem className="h-full">
                      <img
                        src={peerhireDashboard}
                        alt="PeerHire dashboard view with active tasks and stats"
                        className="h-full w-full rounded-2xl object-cover"
                        loading="lazy"
                      />
                    </CarouselItem>
                    <CarouselItem className="h-full">
                      <img
                        src={peerhireLiveBoard}
                        alt="PeerHire live board with real-time student listings"
                        className="h-full w-full rounded-2xl object-cover"
                        loading="lazy"
                      />
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious className="bg-background/70 border-border/60 text-foreground hover:bg-background" />
                  <CarouselNext className="bg-background/70 border-border/60 text-foreground hover:bg-background" />
                </Carousel>
              </div>

              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                Designed to feel like a focused tool for students — precise, confident, and approachable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
