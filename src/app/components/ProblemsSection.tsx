import { useState, useMemo } from "react";
import { motion } from "motion/react";

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

const CENTER = 250;
const BASE_RADIUS = 200;

const categoryColors = {
  "Experiencia": "var(--color-primary)",
  "UX/UI": "var(--color-accent)",
  "Web": "var(--color-usb-blue-light)",
  "Data": "var(--color-chart-2)",
};

export const ProblemsSection = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [active, setActive] = useState<number | null>(null);

  const grouped = useMemo(() => {
    return Object.entries(
      problemsData.reduce((acc, item) => {
        acc[item.category] = acc[item.category] || [];
        acc[item.category].push(item);
        return acc;
      }, {} as Record<string, typeof problemsData>)
    );
  }, []);

  return (
    <section className="py-28 bg-background flex flex-col items-center">

      {/* 🧠 HEADER */}
      <div className="text-center max-w-2xl mb-16 space-y-4">
        <span className="text-xs tracking-widest text-accent uppercase">
          Data visualization
        </span>

         <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
           Problemas y soluciones
        </h2>

        <p className="text-muted-foreground">
          Cada punto representa un problema. Su tamaño indica importancia y su posición refleja impacto dentro del sistema.
        </p>
      </div>

      {/* 🌌 CONTENIDO */}
      <div className="flex flex-col lg:flex-row gap-16 items-center">

        {/* 🪐 RADIAL */}
        <div className="relative w-[500px] h-[500px]">

          {/* Centro */}
          <div
            className="absolute text-center"
            style={{
              left: CENTER,
              top: CENTER,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="w-24 h-24 rounded-full bg-primary/10 border border-border" />

            <p className="text-xs mt-3 text-muted-foreground max-w-[160px]">
              {active
                ? problemsData.find(p => p.id === active)?.problem
                : "Selecciona un problema"}
            </p>
          </div>

          {problemsData.map((item, index) => {
            const angle = (index / problemsData.length) * Math.PI * 2;
            const radius = BASE_RADIUS - item.importance * 25;

            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            const color = categoryColors[item.category];
            const size = 22 + item.importance * 8;

            const isActive = active === item.id;
            const isHovered = hovered === item.id;

            return (
              <motion.div
                key={item.id}
                className="absolute"
                style={{
                  left: CENTER + x,
                  top: CENTER + y,
                  transform: "translate(-50%, -50%)",
                }}
              >
                {/* Línea */}
                <div
                  className="absolute"
                  style={{
                    left: CENTER - (CENTER + x),
                    top: CENTER - (CENTER + y),
                    width: radius,
                    height: 1,
                    background: color,
                    opacity: isHovered ? 0.4 : 0.1,
                    transformOrigin: "left center",
                    transform: `rotate(${angle}rad)`,
                  }}
                />

                {/* Nodo */}
                <motion.button
                  onMouseEnter={() => setHovered(item.id)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => setActive(item.id)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{
                    opacity: active && !isActive ? 0.3 : 1,
                  }}
                  className="rounded-full flex items-center justify-center text-[11px] font-medium text-primary-foreground"
                  style={{
                    width: size,
                    height: size,
                    background: color,
                    boxShadow: isHovered
                      ? `0 0 ${8 + item.importance * 6}px ${color}`
                      : "none",
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
                  className="absolute text-[11px] w-28 text-center"
                  style={{
                    left: 0,
                    top: size + 6,
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

        {/* 📊 PANEL */}
        <div className="w-[320px] space-y-6">

          {/* Info */}
          {active && (
            <div className="p-6 border border-border rounded-xl bg-card space-y-3">
              <h3 className="font-semibold text-foreground">
                {problemsData.find(p => p.id === active)?.problem}
              </h3>

              <p className="text-sm text-muted-foreground">
                {problemsData.find(p => p.id === active)?.solution}
              </p>

              <span className="text-xs text-accent">
                Enfoque aplicado en proyectos reales
              </span>
            </div>
          )}

          {/* Leyenda */}
          <div className="p-6 border border-border rounded-xl bg-card space-y-3">
            <h4 className="text-sm font-medium text-foreground">
              Categorías
            </h4>

            {Object.entries(categoryColors).map(([key, color]) => (
              <div key={key} className="flex items-center gap-3 text-sm text-muted-foreground">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ background: color }}
                />
                {key}
              </div>
            ))}
          </div>

          {/* Insight */}
          <div className="p-6 border border-border rounded-xl bg-card text-sm text-muted-foreground">
            Los nodos más cercanos al centro representan problemas con mayor impacto dentro del sistema.
          </div>
        </div>
      </div>
    </section>
  );
};