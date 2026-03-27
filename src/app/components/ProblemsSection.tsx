import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const problemsData = [
  { id: 1, problem: "Experiencias poco inmersivas", category: "Experiencia", importance: 5 },
  { id: 2, problem: "Interfaces complejas", category: "UX/UI", importance: 4 },
  { id: 3, problem: "Falta de microinteracciones", category: "Web", importance: 3 },
  { id: 4, problem: "Datos sin narrativa", category: "Data", importance: 2 },
  { id: 5, problem: "Onboarding confuso", category: "UX/UI", importance: 5 },
  { id: 6, problem: "Tiempos de carga lentos", category: "Web", importance: 4 },
  { id: 7, problem: "Visualizaciones estáticas", category: "Data", importance: 3 },
  { id: 8, problem: "Falta de feedback visual", category: "Experiencia", importance: 4 },
  { id: 9, problem: "Formularios sin validación", category: "UX/UI", importance: 3 },


]

const BASE_RADIUS = 260;
const CENTER = 300;

const categoryColors = {
  "Experiencia": "var(--color-primary)",
  "UX/UI": "var(--color-accent)",
  "Web": "var(--color-usb-blue-light)",
  "Data": "var(--color-chart-2)",
};

export const ProblemsSection = () => {
  const [hovered, setHovered] = useState(null);
  const [active, setActive] = useState(null);
  const [rotation, setRotation] = useState(0);

  // 🪐 ROTACIÓN (se pausa en hover)
  useEffect(() => {
    if (hovered !== null) return;

    const interval = setInterval(() => {
      setRotation((r) => r + 0.002);
    }, 16);

    return () => clearInterval(interval);
  }, [hovered]);

  return (
    <section className="py-32 bg-background text-foreground min-h-screen flex flex-col items-center justify-center">

      {/* 🔥 HEADER ESTILO HERO */}
      <div className="text-center mb-24 space-y-6 max-w-2xl">

        {/* Eyebrow */}
        <div className="inline-block px-4 py-1 rounded-full border border-border text-xs text-muted-foreground tracking-wide">
          Exploración interactiva
        </div>

        {/* Headline */}
        <h2 className="
          text-4xl md:text-6xl font-medium leading-tight
          bg-gradient-to-r 
          from-[var(--color-usb-orange)] 
          via-[var(--color-accent)] 
          to-[var(--color-usb-blue-light)]
          bg-clip-text text-transparent
        ">
          Comprende los problemas
          <br />
          y cómo se transforman
        </h2>

        {/* Subtexto */}
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
          Explora cómo los desafíos se convierten en oportunidades dentro del sistema.
          Interactúa para descubrir conexiones y enfoques de solución.
        </p>

      </div>

      {/* 🌌 Sistema */}
      <div className="relative w-[600px] h-[600px]">

        {/* 🌟 CENTRO */}
        <div
          className="absolute flex flex-col items-center justify-center text-center"
          style={{
            left: CENTER,
            top: CENTER,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div
            className="w-32 h-32 rounded-full"
            style={{
              background:
                "radial-gradient(circle, var(--color-primary) 0%, transparent 70%)",
              opacity: 0.25,
            }}
          />

          <p className="text-xs text-muted-foreground mt-3 tracking-wide">
            {active ? "Solución enfocada" : "Centro de impacto"}
          </p>
        </div>

        {problemsData.map((item, index) => {
          const baseAngle =
            (index / problemsData.length) * Math.PI * 2 - Math.PI / 2;

          const angle = baseAngle + rotation;

          let radius = BASE_RADIUS - item.importance * 35;

          const isHovered = hovered === item.id;
          const isActive = active === item.id;

          // 🎯 CLICK → AL CENTRO
          if (isActive) radius = 0;

          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          const color = categoryColors[item.category];
          const size = 30 + item.importance * 10;

          return (
            <motion.div key={item.id}>

              {/* Línea */}
              <div
                className="absolute"
                style={{
                  left: CENTER,
                  top: CENTER,
                  width: radius,
                  height: 1,
                  background: color,
                  transformOrigin: "left center",
                  transform: `rotate(${angle}rad)`,
                  opacity: isHovered ? 0.5 : 0.12,
                }}
              />

              {/* Nodo */}
              <motion.button
                onHoverStart={() => setHovered(item.id)}
                onHoverEnd={() => setHovered(null)}
                onClick={() => setActive(item.id)}
                animate={{
                  scale: isHovered ? 1.25 : 1,
                  opacity: active && !isActive ? 0.3 : 1,
                }}
                transition={{ duration: 0.2 }}
                className="absolute rounded-full flex items-center justify-center text-[11px] font-medium"
                style={{
                  width: size,
                  height: size,
                  left: CENTER + x,
                  top: CENTER + y,
                  transform: "translate(-50%, -50%)",
                  background: color,
                  color: "var(--color-primary-foreground)",
                  boxShadow: `0 0 ${8 + item.importance * 10}px ${color}`,
                }}
              >
                {item.importance}
              </motion.button>

              {/* Label */}
              <motion.div
                animate={{
                  opacity: isHovered || isActive ? 1 : 0.5,
                  y: isHovered ? 4 : 0,
                }}
                className="absolute text-[11px] w-32 text-center leading-snug"
                style={{
                  left: CENTER + x,
                  top: CENTER + y + size + 6,
                  transform: "translate(-50%, 0)",
                }}
              >
                <span className="text-foreground/80">
                  {item.problem}
                </span>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* 🧠 Feedback */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="mt-16 text-center max-w-md"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <p className="text-sm text-muted-foreground leading-relaxed">
              Has enfocado un problema. Este representa un punto clave dentro del sistema
              que puede transformarse en una solución.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default ProblemsSection;