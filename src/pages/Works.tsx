import { PageShell } from "@/components/layout/PageShell";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import peerhireHero from "@/assets/peerhire-hero.png";
import peerhireHowItWorks from "@/assets/peerhire-how-it-works.png";
import peerhireOffer from "@/assets/peerhire-offer.png";
import peerhireTalent from "@/assets/peerhire-talent.png";
import peerhireDashboard from "@/assets/peerhire-dashboard.png";
import peerhireLiveBoard from "@/assets/peerhire-live-board.png";
import { Link } from "react-router-dom";

const Works = () => {
  return (
    <PageShell>
      <section className="section-shell pt-5 pb-16 md:pt-5 md:pb-20 animate-fade-in">
        <header className="mb-10 md:mb-14 space-y-4">
          <div className="flex items-center justify-between gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors"
           >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to home
            </Link>

            <div className="hidden sm:flex items-center gap-2 text-[11px] md:text-xs text-muted-foreground">
              <span className="pill">Web App</span>
              <span className="pill">Case Study</span>
              <span className="pill">Live Product</span>
            </div>
          </div>

          <div>
            <p className="section-kicker">Feature Case Study</p>
            <h1 className="section-title text-3xl md:text-4xl lg:text-5xl">
              PeerHire &mdash; a varsity freelancing platform for peers.
            </h1>
            <p className="mt-4 max-w-3xl text-sm text-muted-foreground md:text-base">
              A university-exclusive platform where students can hire and work with trusted peers for academic tasks.
              I led product design, UX, and front-end implementation for the first production-ready release.
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-3 text-[11px] md:text-xs text-muted-foreground">
            <div className="flex-1 min-w-[220px] rounded-2xl border border-border/70 bg-card/80 p-4 shadow-soft">
              <p className="font-medium text-foreground">Role</p>
              <p>Product Design · UX/UI · Front-end Engineering</p>
            </div>
            <div className="flex-1 min-w-[220px] rounded-2xl border border-border/70 bg-card/80 p-4 shadow-soft">
              <p className="font-medium text-foreground">Scope</p>
              <p>End-to-end product, from flows and IA to polished UI and responsive build.</p>
            </div>
            <div className="flex-1 min-w-[220px] rounded-2xl border border-border/70 bg-card/80 p-4 shadow-soft">
              <p className="font-medium text-foreground">Platform</p>
              <p>Responsive web, optimized for desktop and laptop use.</p>
            </div>
            <div className="flex-1 min-w-[220px] rounded-2xl border border-border/70 bg-card/80 p-4 shadow-soft">
              <p className="font-medium text-foreground">Status</p>
              <p>Live beta with real students and active tasks.</p>
            </div>
          </div>
        </header>

        <div className="space-y-12 md:space-y-14">
          {/* Overview */}
          <section className="grid gap-6 rounded-3xl border border-border/70 bg-card/80 p-6 shadow-soft backdrop-blur-xl md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:p-8 lg:p-10 animate-enter">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold md:text-2xl">Overview</h2>
              <p className="text-sm text-muted-foreground md:text-base">
                PeerHire connects students on the same campus for assignments, lab reports, and academic projects with
                verified profiles, clear pricing, and live availability. The goal was to make an informal behavior
                (asking friends for help) feel structured, safe, and professional.
              </p>
              <p className="text-sm text-muted-foreground md:text-base">
                I focused on a calm, high-contrast visual language inspired by modern SaaS products, with clear
                hierarchy, generous spacing, and dashboards that still feel approachable.
              </p>
              <div className="flex flex-wrap gap-2 text-[11px] md:text-xs">
                <span className="pill">Design Systems</span>
                <span className="pill">Interaction Design</span>
                <span className="pill">Responsive Layouts</span>
                <span className="pill">Student-first UX</span>
              </div>
            </div>

            <aside className="space-y-4 rounded-2xl border border-border/60 bg-background/70 p-5 text-xs text-muted-foreground md:text-sm">
              <h3 className="text-sm font-medium text-foreground md:text-base">Project snapshot</h3>
              <p>
                Built as a full product, not just screens: from role-based journeys (hirer vs. freelancer) to the live
                board and messaging flows that keep the marketplace active every day.
              </p>
              <p>
                The layout leans on familiar patterns so new users can focus on the work itself instead of learning a new
                tool from scratch.
              </p>
              <Button
                asChild
                variant="hero"
                size="lg"
                className="w-full justify-center gap-2 text-xs md:text-sm mt-2"
              >
                <a
                  href="https://peerhireaaub.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open live PeerHire web app in a new tab"
                >
                  View live product
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </aside>
          </section>

          {/* Project showcase */}
          <section className="space-y-6 animate-enter">
            <header className="space-y-2">
              <h2 className="text-xl font-semibold md:text-2xl">Project showcase</h2>
              <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
                A glimpse into the key interfaces &mdash; from the marketing site to the live dashboards that students use
                daily.
              </p>
            </header>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[ 
                { src: peerhireHero, alt: "PeerHire marketing hero section screenshot" },
                { src: peerhireOffer, alt: "What we offer services cards screenshot" },
                { src: peerhireHowItWorks, alt: "How PeerHire works step-by-step section" },
                { src: peerhireTalent, alt: "Live campus talent and testimonials screenshot" },
                { src: peerhireDashboard, alt: "PeerHire hirer dashboard UI" },
                { src: peerhireLiveBoard, alt: "PeerHire live freelancers board UI" },
              ].map((image, index) => (
                <figure
                  key={image.alt}
                  className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card/80 shadow-soft hover-scale animate-fade-in"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end bg-gradient-to-t from-background/90 via-background/40 to-transparent px-4 pb-3 pt-10 text-[11px] text-muted-foreground md:text-xs">
                    {image.alt}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          {/* Problem / Solution */}
          <section className="grid gap-6 md:grid-cols-2 animate-enter">
            <article className="space-y-3 rounded-3xl border border-border/70 bg-card/80 p-6 shadow-soft md:p-8">
              <h2 className="text-lg font-semibold md:text-xl">The problem</h2>
              <p className="text-sm text-muted-foreground md:text-base">
                Academic help on campus often lives in scattered group chats and informal DMs, with no clear pricing,
                expectations, or accountability. Good peers get overloaded while others never find the right help.
              </p>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground md:text-base list-disc list-inside">
                <li>No central, trusted place to find peer support.</li>
                <li>Hard to compare skills, experience, and availability.</li>
                <li>Messy communication spread across multiple apps.</li>
              </ul>
            </article>

            <article className="space-y-3 rounded-3xl border border-border/70 bg-card/80 p-6 shadow-soft md:p-8">
              <h2 className="text-lg font-semibold md:text-xl">The solution</h2>
              <p className="text-sm text-muted-foreground md:text-base">
                PeerHire creates a dedicated, campus-only marketplace with verified profiles, clear scopes, and live
                status so that both hirers and freelancers know exactly what to expect.
              </p>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground md:text-base list-disc list-inside">
                <li>Dual-role accounts for switching between hirer and freelancer.</li>
                <li>Role-based dashboards that surface the most important actions first.</li>
                <li>A live board that keeps the marketplace feeling active at a glance.</li>
              </ul>
            </article>
          </section>

          {/* Key features */}
          <section className="space-y-6 animate-enter">
            <header className="space-y-2">
              <h2 className="text-xl font-semibold md:text-2xl">Key features</h2>
              <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
                A few of the product decisions that make PeerHire feel tailored to campus life.
              </p>
            </header>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 text-sm text-muted-foreground md:text-base">
              {[
                {
                  title: "Dual-role accounts",
                  body: "Students can hire and freelance under one login, switching roles without friction.",
                },
                {
                  title: "Role-based dashboards",
                  body: "Each role sees the most relevant tasks, requests, and next steps as soon as they log in.",
                },
                {
                  title: "Live board",
                  body: "A scrollable board shows who is currently available, with quick actions to message or hire.",
                },
                {
                  title: "Task & review flows",
                  body: "Structured flows for creating tasks, submitting work, and leaving reviews keep expectations clear.",
                },
                {
                  title: "Mobile-friendly layout",
                  body: "Layouts and touch targets are tuned for smaller laptops and compact screens.",
                },
                {
                  title: "High-contrast UI",
                  body: "A dark, saturated palette keeps focus on content while feeling modern and expressive.",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-border/70 bg-card/80 p-5 shadow-soft transition-colors hover:border-primary/70"
                >
                  <h3 className="text-sm font-semibold text-foreground md:text-base">{item.title}</h3>
                  <p className="mt-2 text-xs text-muted-foreground md:text-sm">{item.body}</p>
                </article>
              ))}
            </div>
          </section>

          {/* Outcome & CTA */}
          <section className="grid gap-6 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] animate-enter">
            <article className="space-y-3 rounded-3xl border border-border/70 bg-card/80 p-6 shadow-soft md:p-8">
              <h2 className="text-lg font-semibold md:text-xl">Project outcome</h2>
              <p className="text-sm text-muted-foreground md:text-base">
                PeerHire evolved from a loose concept into a production-ready platform with real users, real tasks, and a
                clear roadmap for future iterations.
              </p>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground md:text-base list-disc list-inside">
                <li>Real hirers and freelancers onboarded from the founding campus.</li>
                <li>End-to-end flows covering discovery, hiring, work delivery, and reviews.</li>
                <li>A flexible design system ready for future automation and new features.</li>
              </ul>
            </article>

            <aside className="flex flex-col justify-between rounded-3xl border border-border/70 bg-background/70 p-6 shadow-soft md:p-8">
              <div>
                <h2 className="text-lg font-semibold md:text-xl">Have a similar project in mind?</h2>
                <p className="mt-2 text-sm text-muted-foreground md:text-base">
                  I help teams turn fuzzy product ideas into clear, shippable interfaces that feel tailored to their
                  users.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button asChild size="lg" variant="hero" className="gap-2 text-xs md:text-sm">
                  <Link to="/#contact">
                    Let&apos;s collaborate
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-xs md:text-sm">
                  <a href="mailto:azwad@example.com">Email me a brief</a>
                </Button>
              </div>
            </aside>
          </section>
        </div>
      </section>
    </PageShell>
  );
};

export default Works;
