export const FooterSection = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/80 bg-gradient-to-t from-background via-background/95 to-background/90 shadow-[0_-18px_45px_rgba(15,23,42,0.85)]">
      <div className="section-shell-wide py-6 md:py-7">
        <div className="flex flex-col gap-4 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between md:text-sm">
          <div className="space-y-1 text-left">
            <p className="tracking-[0.18em] text-[10px] font-medium uppercase text-primary md:text-xs">
              UI/UX · Product Design · Web Development
            </p>
            <p className="text-[11px] md:text-xs">
              © {year} Sheikh Azwad Abrar · Crafted with precision &amp; curiosity.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] md:text-xs">
            <span className="text-muted-foreground/80">Available for product design &amp; front-end collaborations</span>
            <span className="hidden h-1 w-1 rounded-full bg-muted md:inline-block" aria-hidden />
            <a
              href="mailto:azwad@example.com"
              className="story-link text-foreground/80 hover:text-primary"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="story-link text-foreground/80 hover:text-primary"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

