import { ReactNode, useEffect, useState } from "react";
import { ArrowUp, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { NavLink } from "@/components/NavLink";
import { cn } from "@/lib/utils";

interface PageShellProps {
  children: ReactNode;
}

export const PageShell = ({ children }: PageShellProps) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("top");
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.body.offsetHeight;
      const threshold = 240; // how close to bottom before showing

      setShowScrollTop(scrollPosition >= pageHeight - threshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isHome) {
      setActiveSection("top");
      return;
    }

    const sectionIds: string[] = ["top", "services", "work", "contact"];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140; // keep Home active a bit longer
      let currentSection = "top";

      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const offsetTop = el.offsetTop;
        if (scrollPosition >= offsetTop - 80) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileOpen(false);
    }
  };

  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <header className="sticky top-4 z-40 flex justify-center px-4 md:px-0">
        <div className="relative mx-auto flex w-full max-w-4xl items-center justify-between rounded-full border border-primary/70 bg-gradient-to-r from-background/70 via-background/55 to-background/70 px-6 py-3 shadow-[0_0_22px_hsl(var(--primary)/0.2)] backdrop-blur-2xl">
          <Link
            to="/"
            className="font-mono text-[11px] md:text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground hover:text-foreground transition-colors"
          >
            AZWAD ABRAR
          </Link>

          {isHome ? (
            <nav className="hidden items-center gap-6 text-xs md:flex md:text-sm font-medium text-foreground">
              <button
                type="button"
                onClick={() => scrollToSection("top")}
                className={cn(
                  "rounded-full px-4 py-1.5 transition-colors hover:text-primary",
                  activeSection === "top" && "bg-primary/30 text-primary-foreground",
                )}
              >
                Home
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("services")}
                className={cn(
                  "rounded-full px-4 py-1.5 transition-colors hover:text-primary",
                  activeSection === "services" && "bg-primary/30 text-primary-foreground",
                )}
              >
                Services
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("work")}
                className={cn(
                  "rounded-full px-4 py-1.5 transition-colors hover:text-primary",
                  activeSection === "work" && "bg-primary/30 text-primary-foreground",
                )}
              >
                Work
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className={cn(
                  "rounded-full px-4 py-1.5 transition-colors hover:text-primary",
                  activeSection === "contact" && "bg-primary/30 text-primary-foreground",
                )}
              >
                Contact
              </button>
            </nav>
          ) : (
            <nav className="hidden items-center gap-7 text-xs md:flex md:text-sm font-medium text-foreground">
              <NavLink to="/" className="relative rounded-full px-3 py-1 transition-colors hover:text-primary story-link">
                Home
              </NavLink>
              <NavLink
                to="/#services"
                className="relative rounded-full px-3 py-1 transition-colors hover:text-primary story-link"
              >
                Services
              </NavLink>
              <NavLink
                to="/works"
                className="relative rounded-full px-3 py-1 transition-colors hover:text-primary story-link"
              >
                Work
              </NavLink>
              <NavLink
                to="/#contact"
                className="relative rounded-full px-3 py-1 transition-colors hover:text-primary story-link"
              >
                Contact
              </NavLink>
            </nav>
          )}

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-border/60 bg-background/80 p-2 text-xs text-muted-foreground shadow-soft backdrop-blur-xl md:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        {/* Mobile glass dropdown */}
        {mobileOpen && (
          <div className="absolute left-4 right-4 top-full z-50 mt-3 rounded-3xl border border-primary/70 bg-background/92 px-4 py-4 shadow-[0_18px_40px_-24px_hsl(var(--primary)/0.45)] backdrop-blur-2xl md:hidden">
            {isHome ? (
              <nav className="flex flex-col gap-2 text-sm font-medium text-foreground">
                <button
                  type="button"
                  onClick={() => scrollToSection("top")}
                  className={cn(
                    "w-full rounded-full px-3 py-2 text-left transition-colors hover:bg-primary/10",
                    activeSection === "top" && "bg-primary/15 text-primary",
                  )}
                >
                  Home
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection("services")}
                  className={cn(
                    "w-full rounded-full px-3 py-2 text-left transition-colors hover:bg-primary/10",
                    activeSection === "services" && "bg-primary/15 text-primary",
                  )}
                >
                  Services
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection("work")}
                  className={cn(
                    "w-full rounded-full px-3 py-2 text-left transition-colors hover:bg-primary/10",
                    activeSection === "work" && "bg-primary/15 text-primary",
                  )}
                >
                  Work
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection("contact")}
                  className={cn(
                    "w-full rounded-full px-3 py-2 text-left transition-colors hover:bg-primary/10",
                    activeSection === "contact" && "bg-primary/15 text-primary",
                  )}
                >
                  Contact
                </button>
              </nav>
            ) : (
              <nav className="flex flex-col gap-2 text-sm font-medium text-foreground">
                <NavLink to="/" className="w-full rounded-full px-3 py-2 text-left transition-colors hover:bg-primary/10">
                  Home
                </NavLink>
                <NavLink
                  to="/#services"
                  className="w-full rounded-full px-3 py-2 text-left transition-colors hover:bg-primary/10"
                >
                  Services
                </NavLink>
                <NavLink
                  to="/works"
                  className="w-full rounded-full px-3 py-2 text-left transition-colors hover:bg-primary/10"
                >
                  Work
                </NavLink>
                <NavLink
                  to="/#contact"
                  className="w-full rounded-full px-3 py-2 text-left transition-colors hover:bg-primary/10"
                >
                  Contact
                </NavLink>
              </nav>
            )}
          </div>
        )}
      </header>

      <main className="scroll-smooth bg-background pt-6 md:pt-10">{children}</main>

      {showScrollTop && (
        <button
          type="button"
          aria-label="Scroll to top"
          className="fixed bottom-8 right-8 z-30 inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/90 px-4 py-2 text-xs md:text-sm text-muted-foreground shadow-soft backdrop-blur-md hover:border-primary hover:text-foreground hover:bg-background/95 transition-transform duration-200 hover:-translate-y-1 hover-scale"
          onClick={() => {
            const el = document.querySelector("#top");
            if (el) {
              el.scrollIntoView({ behavior: "smooth", block: "start" });
            } else {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          Top
          <ArrowUp className="h-4 w-4" />
        </button>
      )}
    </div>
  );
};
