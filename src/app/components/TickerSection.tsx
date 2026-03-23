import { motion } from "motion/react";

const activities = [
  "Hackatón · Movilidad Urbana Sostenible",
  "Podcast · Voces de Innovación Ep.12",
  "VR Testeo · Atlas Patrimonial AR",
  "Workshop · Impresión 3D Avanzada",
  "Sprint · AgroSensor IoT Huila",
  "Semillero · IA en Salud Mental Juvenil",
  "Live · 3 sesiones activas ahora"
];

export const TickerSection = () => {
  return (
    <section className="relative overflow-hidden py-6 bg-background border-y border-border">
      
      {/* 🌈 Fade lateral */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

      <div className="relative">
        
        {/* 🔁 Track */}
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear"
          }}
        >
          {[...activities, ...activities].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 px-6 py-3 rounded-full bg-card/40 border border-border backdrop-blur-md"
            >
              {/* 🔴 indicador */}
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />

              <p className="text-sm text-muted-foreground font-medium">
                {item}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};