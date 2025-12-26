import { Figma, MonitorSmartphone, PenTool, Workflow } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const skillsAndServices = [
    {
        title: "UI/UX Design",
        description: "Research, user flows, wireframes, and visual systems that keep interfaces calm and purposeful.",
        icon: PenTool,
    },
    {
        title: "Product Design",
        description: "End-to-end product thinking across discovery, value propositions, and experience architecture.",
        icon: Workflow,
    },
    {
        title: "Web Design & Development",
        description: "Designing and building responsive, production-ready web experiences.",
        icon: MonitorSmartphone,
    },
    {
        title: "Prototyping & Figma",
        description: "High-fidelity flows, micro-interactions, and rapid iteration in Figma.",
        icon: Figma,
    },
];

export const SkillsServicesSection = () => {
    const { ref, isVisible } = useScrollReveal();

    return (
        <section id="services" className="relative border-t border-border/70 bg-secondary/40">
            <div className="section-shell-wide">
                <div
                    ref={ref}
                    className={cn(
                        "flex flex-col gap-8 opacity-0 translate-y-3",
                        isVisible && "opacity-100 translate-y-0 animate-fade-in",
                    )}
                >
                    <div className="max-w-xl space-y-3">
                        <p className="section-kicker">03 Skills & Services</p>
                        <h2 className="section-title text-3xl md:text-[2.4rem]">Ways we can work together.</h2>
                        <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                            From early explorations to polished releases, I partner with teams and founders to design products that feel
                            engineered and empathetic at the same time.
                        </p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-4 md:gap-5">
                        {skillsAndServices.map((item, index) => (
                            <article
                                key={item.title}
                                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-primary/35 bg-gradient-to-br from-background/70 via-background/55 to-background/70 p-6 shadow-[0_18px_40px_-26px_hsl(var(--primary)/0.55)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/70 hover:shadow-[0_22px_50px_-28px_hsl(var(--primary)/0.85)] hover-scale animate-enter"
                                style={{ animationDelay: `${index * 80}ms` }}
                            >
                                <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-[radial-gradient(circle_at_top,_hsl(var(--primary)/0.4),_transparent_60%)] opacity-30" />
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
            </div>
        </section>
    );
};
