import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const problemsData = [
  { id: 1, problem: "Experiencias poco inmersivas", solution: "Narrativa + interacción + feedback visual", category: "Experiencia", importance: 5 },
  { id: 2, problem: "Interfaces complejas", solution: "Simplificación + jerarquía + patrones UX", category: "UX/UI", importance: 4 },
  { id: 3, problem: "Falta de microinteracciones", solution: "Animaciones funcionales y feedback", category: "Web", importance: 3 },
  { id: 4, problem: "Datos sin narrativa", solution: "Storytelling + visualización", category: "Data", importance: 2 },
  { id: 5, problem: "Onboarding confuso", solution: "Flujos guiados + progresión", category: "UX/UI", importance: 5 },
  { id: 6, problem: "Tiempos de carga lentos", solution: "Optimización + lazy loading", category: "Web", importance: 4 },
  { id: 7, problem: "Visualizaciones estáticas", solution: "Data interactiva", category: "Data", importance: 3 },
  { id: 8, problem: "Falta de feedback visual", solution: "Estados + microinteracciones", category: "Experiencia", importance: 4 },
  { id: 9, problem: "Formularios sin validación", solution: "Validación en tiempo real", category: "UX/UI", importance: 3 },
];

const CENTER = 260;
const BASE_RADIUS = 200;

const categoryColors = {
  "Experiencia": "var(--color-primary)",
  "UX/UI": "var(--color-accent)",
  "Web": "var(--color-usb-blue-light)",
  "Data": "var(--color-chart-2)",
};

export const ProblemsSection = () => {
  const [active, setActive] = useState<number | null>(1);
  const [rotation, setRotation] = useState(0);

  // 🌌 ORBIT SYSTEM
  useEffect(() => {
    if (active) return;

    const loop = setInterval(() => {
      setRotation(r => r + 0.002);
    }, 16);

    return () => clearInterval(loop);
  }, [active]);

  const activeItem = problemsData.find(p => p.id === active);

  return (
    <section className="py-32 bg-background relative overflow-hidden">

      {/* 🌫️ BACKGROUND SUTIL */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,var(--color-primary)/5,transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* 🧠 IZQUIERDA — NARRATIVA */}
        <div className="relative">

          <span className="text-xs tracking-[0.3em] text-accent uppercase">
            System intelligence
          </span>

          <h2 className="
            mt-6 text-5xl sm:text-6xl font-semibold leading-[1.1]
            bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent
          ">
            Transformamos problemas
            <br />
            en sistemas funcionales
          </h2>

          <p className="mt-6 text-muted-foreground max-w-lg">
            Cada punto dentro del sistema representa un desafío. Al interactuar, 
            se revela cómo se convierte en una solución aplicable.
          </p>

          {/* 🎯 CONTENIDO DINÁMICO */}
          <AnimatePresence mode="wait">
            {activeItem && (
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4 }}
                className="mt-12 p-6 rounded-2xl bg-card border border-border backdrop-blur-md"
              >
                <span className="text-xs text-accent uppercase">
                  Problema
                </span>

                <h3 className="mt-2 text-xl font-semibold text-foreground">
                  {activeItem.problem}
                </h3>

                <div className="mt-6 h-px bg-border" />

                <span className="mt-6 block text-xs text-accent uppercase">
                  Solución
                </span>

                <p className="mt-2 text-muted-foreground">
                  {activeItem.solution}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

        {/* 🌌 DERECHA — SISTEMA */}
        <div className="relative w-[520px] h-[520px] mx-auto">

          {/* Anillos */}
          {[180, 120, 60].map(r => (
            <div
              key={r}
              className="absolute rounded-full border border-border/20"
              style={{
                width: r * 2,
                height: r * 2,
                left: CENTER,
                top: CENTER,
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}

          {/* 🎯 CENTRO */}
          <motion.div
            className="absolute flex items-center justify-center"
            style={{
              left: CENTER,
              top: CENTER,
              transform: "translate(-50%, -50%)",
            }}
            animate={{
              scale: active ? 1.15 : 1,
            }}
          >
            
          </motion.div>

          {/* 🔵 NODOS */}
          {problemsData.map((item, index) => {
            const baseAngle = (index / problemsData.length) * Math.PI * 2;
            const angle = baseAngle + rotation;

            let radius = BASE_RADIUS - item.importance * 20;

            const isActive = active === item.id;

            if (isActive) radius = 0;

            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            const color = categoryColors[item.category];

            return (
              <motion.div
                key={item.id}
                className="absolute"
                animate={{
                  left: CENTER + x,
                  top: CENTER + y,
                  scale: isActive ? 1.4 : 1,
                  opacity: active && !isActive ? 0.2 : 1,
                }}
                transition={{ type: "spring", stiffness: 80 }}
                style={{
                  transform: "translate(-50%, -50%)",
                }}
              >
                {/* Línea */}
                {!isActive && (
                  <div
                    className="absolute"
                    style={{
                      width: radius,
                      height: 1,
                      background: color,
                      opacity: 0.15,
                      transformOrigin: "left center",
                      transform: `rotate(${angle}rad)`,
                      left: CENTER - (CENTER + x),
                      top: CENTER - (CENTER + y),
                    }}
                  />
                )}

                {/* Nodo */}
                <motion.button
                  onClick={() => setActive(item.id === active ? null : item.id)}
                  whileHover={{ scale: 1.15 }}
                  className="rounded-full flex items-center justify-center text-xs font-semibold"
                  style={{
                    width: 20 + item.importance * 6,
                    height: 20 + item.importance * 6,
                    background: color,
                    boxShadow: isActive
                      ? `0 12px 32px ${color}33`
                      : "0 4px 12px rgba(0,0,0,0.08)",
                  }}
                >
                  <span className="text-white">
                    {item.importance}
                  </span>
                </motion.button>

                {/* Label */}
                {!isActive && (
                  <div
                    className="absolute text-[11px] text-muted-foreground w-28 text-center"
                    style={{
                      top: 26,
                      left: 0,
                      transform: "translate(-50%, 0)",
                    }}
                  >
                    {item.problem}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};