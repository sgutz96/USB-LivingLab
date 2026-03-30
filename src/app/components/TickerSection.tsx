import { motion } from "motion/react";
import { useState } from "react";

const activities = [
  "Desarrollo UX/UI para productos digitales",
  "Frontend con React y animaciones avanzadas",
  "Gamedev con mecánicas interactivas",
  "Diseño de experiencias inmersivas",
  "Optimización de interfaces y performance",
  "Prototipado en Figma + testing",
];

export const TickerSection = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="relative overflow-hidden py-6 bg-background border-y border-border">

      {/* 🌈 Fade lateral */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* 🔁 Track */}
        <motion.div
          className="flex gap-6 whitespace-nowrap"
          animate={{ x: isPaused ? "0%" : ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
        >
          {[...activities, ...activities].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-5 py-2 rounded-full bg-card/50 border border-border backdrop-blur-md hover:bg-card transition"
            >
              {/* 🟢 indicador más suave */}
              <span className="w-2 h-2 bg-primary rounded-full" />

              <p className="text-sm text-foreground/80 font-medium">
                {item}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};