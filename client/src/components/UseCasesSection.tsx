/*
 * Design: Neural Dark — Cyberpunk Minimalism
 * Use Cases: Showcase practical applications of BlueMatter BCI
 * Bento-style grid with varied card sizes, icons, subtle animations
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accessibility,
  HeartPulse,
  Gamepad2,
  Home,
  BrainCog,
  HandMetal,
} from "lucide-react";

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

const useCases = [
  {
    icon: Accessibility,
    title: "Prosthetic Control",
    desc: "Precise, intuitive control of prosthetic limbs through thought-based commands — restoring independence and mobility for amputees.",
    size: "large",
  },
  {
    icon: HeartPulse,
    title: "Mental Health Monitoring",
    desc: "Continuous, non-invasive monitoring of neurological patterns to detect early signs of anxiety, depression, and other conditions.",
    size: "small",
  },
  {
    icon: Home,
    title: "Smart Home Control",
    desc: "Hands-free control of IoT devices, lights, thermostats, and entertainment systems through discrete neural commands.",
    size: "small",
  },
  {
    icon: Gamepad2,
    title: "Immersive Gaming",
    desc: "Next-generation gaming experiences where your thoughts directly influence gameplay — a new dimension of player immersion and interaction.",
    size: "small",
  },
  {
    icon: BrainCog,
    title: "Cognitive Enhancement",
    desc: "Real-time neurofeedback for focus training, meditation guidance, and cognitive performance optimization.",
    size: "small",
  },
  {
    icon: HandMetal,
    title: "Robotic Teleoperation",
    desc: "Remote control of robotic systems for hazardous environments, surgical assistance, and industrial applications — all directed by thought.",
    size: "large",
  },
];

export default function UseCasesSection() {
  return (
    <section id="usecases" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric/30 to-transparent" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative container">
        {/* Section header */}
        <div className="flex items-start gap-6 mb-8">
          <FadeIn>
            <span
              className="text-6xl md:text-8xl font-bold text-electric/10 leading-none select-none"
              style={{ fontFamily: "var(--font-display)" }}
            >
              06
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div>
              <span
                className="text-xs font-medium tracking-[0.2em] uppercase text-electric mb-3 block"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Applications
              </span>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Unlocking{" "}
                <span className="text-electric text-glow">Possibilities</span>
              </h2>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.15}>
          <p className="max-w-3xl text-lg text-muted-foreground leading-relaxed mb-16" style={{ fontFamily: "var(--font-body)" }}>
            From healthcare to entertainment, our BCI platform opens new frontiers
            in human-machine interaction. Here are just a few of the applications
            we envision for BlueMatter technology.
          </p>
        </FadeIn>

        {/* Bento grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {useCases.map((uc, i) => (
            <FadeIn
              key={uc.title}
              delay={0.2 + i * 0.08}
              className={uc.size === "large" ? "lg:col-span-2" : ""}
            >
              <div className="group relative h-full p-7 rounded-lg border border-border bg-card/30 hover:border-electric/30 hover:bg-card/60 transition-all duration-500 overflow-hidden">
                {/* Top accent */}
                <div className="absolute top-0 left-7 w-10 h-px bg-gradient-to-r from-electric/50 to-transparent" />

                {/* Background glow on hover */}
                <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-electric/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl" />

                <div className="relative">
                  <div className="w-12 h-12 rounded-lg bg-electric/10 border border-electric/20 flex items-center justify-center mb-5 group-hover:glow-blue-sm transition-all duration-500">
                    <uc.icon size={22} className="text-electric" />
                  </div>
                  <h3
                    className="text-lg font-semibold mb-3 text-foreground"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {uc.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                    {uc.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
