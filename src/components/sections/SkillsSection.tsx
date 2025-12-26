import { Figma, MonitorSmartphone, PenTool, Workflow } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const skillItems = [
  {
    title: "UI/UX Design",
    description: "Designing interfaces that feel precise, legible, and intuitively navigable.",
    icon: PenTool,
  },
  {
    title: "Product Design",
    description: "Connecting user needs, business goals, and technical constraints into one narrative.",
    icon: Workflow,
  },
  {
    title: "Web Design & Development",
    description: "Translating design systems into performant, responsive web experiences.",
    icon: MonitorSmartphone,
  },
  {
    title: "Prototyping & Figma",
    description: "High-fidelity flows, micro-interactions, and rapid iteration in Figma.",
    icon: Figma,
  },
];

export const SkillsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="skills" className="section-shell border-t border-border/70">
      <div
        ref={ref}
        className={cn(
          "flex flex-col gap-8 opacity-0 translate-y-3",
          isVisible && "opacity-100 translate-y-0 animate-fade-in",
        )}
      >
        <div className="max-w-xl space-y-3">
          <p className="section-kicker">03 Skills</p>
          <h2 className="section-title text-3xl md:text-[2.4rem]">Crafting systems, not just screens.</h2>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            My toolkit blends design strategy, interface craft, and implementation details, allowing me to move from
            problem framing to polished prototypes and production-ready front-end.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-4 md:gap-5">
          {skillItems.map((item, index) => (
            <article
              key={item.title}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-card/90 p-5 shadow-soft backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-primary hover:shadow-glow-soft hover-scale animate-enter"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-primary/15 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative z-10 flex flex-col gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-glow-soft">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold tracking-tight md:text-base">{item.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground md:text-sm">{item.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
