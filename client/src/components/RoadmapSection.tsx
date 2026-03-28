/*
 * Design: Neural Dark — Cyberpunk Minimalism
 * Roadmap: Timeline with connected nodes, current status highlight
 * Content enriched from poster's "Next Steps" and Chartering Document
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, ArrowRight, Circle, Crosshair } from "lucide-react";

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const milestones = [
  {
    phase: "Phase 1",
    title: "Research & Design",
    status: "complete",
    items: ["Background research", "Electrical & mechanical design", "BOM finalization", "Software development kickoff"],
  },
  {
    phase: "Phase 2",
    title: "Assembly & Testing",
    status: "complete",
    items: ["Battery & charging assembly", "Electrode fabrication", "Circuitry integration", "Data collection with pre-made EEG"],
  },
  {
    phase: "Phase 3",
    title: "Prototype Refinement",
    status: "current",
    items: ["Extensive system testing", "AI data acquisition", "Head-fitting mesh design", "Comfortable electrode development"],
  },
  {
    phase: "Phase 4",
    title: "Software & Application",
    status: "upcoming",
    items: ["Signal processing refinement", "AI model implementation", "User-friendly application", "Robotic arm simulation control"],
  },
  {
    phase: "Phase 5",
    title: "Next Generation",
    status: "upcoming",
    items: ["Higher electrode count", "Discrete form factor", "Dynamical systems implementation", "Consumer-ready prototype"],
  },
];

const nextSteps = [
  "Head-fitting mesh design for comfortable all-day wear",
  "Comfortable dry electrode development to replace gel-based sensors",
  "Higher electrode count for improved signal resolution",
  "Discrete form-factor refinement for social acceptability",
  "Dynamical systems implementation for real-time adaptive control",
];

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric/30 to-transparent" />

      <div className="relative container">
        {/* Section header */}
        <div className="flex items-start gap-6 mb-8">
          <FadeIn>
            <span
              className="text-6xl md:text-8xl font-bold text-electric/10 leading-none select-none"
              style={{ fontFamily: "var(--font-display)" }}
            >
              07
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div>
              <span
                className="text-xs font-medium tracking-[0.2em] uppercase text-electric mb-3 block"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Development Roadmap
              </span>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Building the{" "}
                <span className="text-electric text-glow">Future</span>
              </h2>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.15}>
          <p className="max-w-3xl text-lg text-muted-foreground leading-relaxed mb-16" style={{ fontFamily: "var(--font-body)" }}>
            From initial research to a consumer-ready device, our development roadmap
            outlines the key milestones in bringing practical BCIs to market. Currently in
            our prototype refinement phase, we are actively testing and iterating on our
            design.
          </p>
        </FadeIn>

        {/* Current status highlight */}
        <FadeIn delay={0.2}>
          <div className="relative p-6 md:p-8 rounded-xl border border-electric/30 bg-electric/5 mb-16">
            <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric/60 to-transparent" />
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="w-12 h-12 rounded-lg bg-electric/20 border border-electric/30 flex items-center justify-center glow-blue-sm shrink-0">
                <div className="w-3 h-3 rounded-full bg-electric animate-pulse" />
              </div>
              <div>
                <h3
                  className="text-lg font-semibold text-foreground mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Current Status
                </h3>
                <p className="text-muted-foreground leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                  Our device currently uses 10 electrodes to read physiological signals from the head.
                  These signals are processed and used to control a simple robot, demonstrating a new
                  modality of human-machine interaction. We can control components remotely using
                  discrete eye movements, blinks and saccades are configured
                  differently for different purposes.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Timeline */}
        <div className="space-y-5 mb-20">
          {milestones.map((milestone, i) => (
            <FadeIn key={milestone.phase} delay={0.25 + i * 0.08}>
              <div
                className={`group relative flex gap-5 p-6 rounded-lg border transition-all duration-500 ${
                  milestone.status === "current"
                    ? "border-electric/40 bg-electric/5"
                    : "border-border bg-card/30 hover:border-electric/20 hover:bg-card/50"
                }`}
              >
                {/* Status indicator */}
                <div className="shrink-0 flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      milestone.status === "complete"
                        ? "bg-electric/20 border border-electric/40"
                        : milestone.status === "current"
                        ? "bg-electric/30 border-2 border-electric glow-blue-sm"
                        : "bg-muted/50 border border-border"
                    }`}
                  >
                    {milestone.status === "complete" ? (
                      <Check size={16} className="text-electric" />
                    ) : milestone.status === "current" ? (
                      <div className="w-2.5 h-2.5 rounded-full bg-electric animate-pulse" />
                    ) : (
                      <Circle size={14} className="text-muted-foreground" />
                    )}
                  </div>
                  {i < milestones.length - 1 && (
                    <div className={`w-px flex-1 mt-2 ${
                      milestone.status === "complete" ? "bg-electric/30" : "bg-border"
                    }`} />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span
                      className={`text-xs font-bold tracking-wider uppercase ${
                        milestone.status === "current" ? "text-electric" : "text-muted-foreground"
                      }`}
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {milestone.phase}
                    </span>
                    {milestone.status === "current" && (
                      <span className="px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase bg-electric/20 text-electric rounded-full border border-electric/30">
                        In Progress
                      </span>
                    )}
                    {milestone.status === "complete" && (
                      <span className="px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase bg-electric/10 text-electric/70 rounded-full">
                        Complete
                      </span>
                    )}
                  </div>
                  <h3
                    className="text-lg font-semibold text-foreground mb-3"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {milestone.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {milestone.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 text-xs text-muted-foreground bg-muted/50 rounded-md border border-border/50"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow for completed */}
                {milestone.status === "complete" && (
                  <div className="hidden md:flex items-center">
                    <ArrowRight size={16} className="text-electric/40" />
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Next Steps from poster */}
        <FadeIn delay={0.6}>
          <div className="relative p-6 md:p-8 rounded-xl border border-border bg-card/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-md bg-electric/10 border border-electric/20 flex items-center justify-center">
                <Crosshair size={16} className="text-electric" />
              </div>
              <h3
                className="text-base font-semibold text-foreground"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Upcoming Milestones
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {nextSteps.map((step, i) => (
                <div
                  key={step}
                  className="flex items-start gap-3 p-3 rounded-md bg-muted/30 border border-border/50"
                >
                  <span className="text-xs font-bold text-electric mt-0.5 shrink-0" style={{ fontFamily: "var(--font-mono)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
