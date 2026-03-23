import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

const problemsData = [
  {
    id: 1,
    problem: "Experiencias digitales poco inmersivas",
    description: "Muchos productos digitales carecen de profundidad sensorial, lo que limita la conexión emocional con el usuario.",
    solution: "ECO - Experiencia interactiva contemplativa",
    solutionDescription: "Diseñamos un entorno interactivo basado en física y narrativa ambiental que permite al usuario explorar y restaurar biomas digitales.",
    impact: "Aplicado en proyectos educativos y experiencias interactivas que promueven el bienestar y la conexión con el entorno.",
    lab: "Game Lab",
    category: "Experiencia"
  },
  {
    id: 2,
    problem: "Interfaces complejas que dificultan la navegación",
    description: "Muchos sistemas digitales presentan estructuras confusas que generan frustración y abandono.",
    solution: "Sistema UX centrado en exploración guiada",
    solutionDescription: "Rediseñamos la arquitectura de información y creamos interfaces intuitivas basadas en patrones de interacción naturales.",
    impact: "Mejora en la retención de usuarios y reducción en la fricción de uso en plataformas digitales.",
    lab: "UX Lab",
    category: "UX/UI"
  },
  {
    id: 3,
    problem: "Falta de interacción significativa en aplicaciones web",
    description: "Muchas aplicaciones carecen de microinteracciones que guíen y refuercen la experiencia del usuario.",
    solution: "Sistema de microinteracciones dinámicas",
    solutionDescription: "Implementamos animaciones, feedback visual y transiciones que responden al comportamiento del usuario.",
    impact: "Incremento en engagement y percepción de calidad del producto.",
    lab: "Frontend Lab",
    category: "Web"
  },
  {
    id: 4,
    problem: "Desconexión entre datos y narrativa visual",
    description: "Los datos se presentan de forma estática, dificultando su comprensión e interpretación.",
    solution: "Visualización interactiva de datos",
    solutionDescription: "Creamos sistemas visuales que permiten explorar información de forma dinámica e intuitiva.",
    impact: "Mejor toma de decisiones basada en datos y mayor comprensión de la información.",
    lab: "Data Lab",
    category: "Data"
  },
  {
    id: 5,
    problem: "Falta de identidad en productos digitales",
    description: "Muchos proyectos carecen de una identidad clara, lo que afecta su diferenciación en el mercado.",
    solution: "Sistema de diseño visual coherente",
    solutionDescription: "Desarrollamos sistemas visuales que integran branding, UI y experiencia en un solo lenguaje.",
    impact: "Mayor reconocimiento de marca y coherencia en productos digitales.",
    lab: "Design Lab",
    category: "Branding"
  },
  {
    id: 6,
    problem: "Baja participación del usuario en experiencias digitales",
    description: "Los usuarios interactúan de forma pasiva sin involucrarse activamente en el contenido.",
    solution: "Gamificación de experiencias",
    solutionDescription: "Diseñamos mecánicas de juego que incentivan la participación activa y la exploración.",
    impact: "Aumento en retención y engagement en plataformas digitales.",
    lab: "Game Lab",
    category: "Gamificación"
  },
  {
    id: 7,
    problem: "Procesos digitales poco eficientes",
    description: "Flujos complejos que ralentizan la interacción y reducen la productividad.",
    solution: "Optimización de flujos UX",
    solutionDescription: "Simplificamos procesos mediante automatización y diseño centrado en el usuario.",
    impact: "Reducción de tiempos de uso y mejora en eficiencia operativa.",
    lab: "UX Lab",
    category: "UX/UI"
  },
  {
    id: 8,
    problem: "Experiencias digitales sin adaptabilidad",
    description: "Interfaces que no responden adecuadamente a distintos dispositivos o contextos.",
    solution: "Diseño responsive avanzado",
    solutionDescription: "Creamos sistemas adaptativos que mantienen consistencia en múltiples dispositivos.",
    impact: "Mejora en accesibilidad y alcance de usuarios.",
    lab: "Frontend Lab",
    category: "Web"
  },
  {
    id: 9,
    problem: "Falta de conexión emocional con el usuario",
    description: "Experiencias funcionales pero sin impacto emocional.",
    solution: "Narrativa interactiva",
    solutionDescription: "Integramos storytelling en experiencias digitales para generar conexión emocional.",
    impact: "Mayor engagement y recordación de la experiencia.",
    lab: "Game Lab",
    category: "Narrativa"
  }
];

const RADIUS = 220;
const CENTER = 300; // SVG center (600x600 viewBox)

const categoryColors: Record<string, string> = {
  "Experiencia":   "#04BFBF",
  "UX/UI":         "#F2911B",
  "Web":           "#a78bfa",
  "Data":          "#34d399",
  "Branding":      "#f472b6",
  "Gamificación":  "#fbbf24",
  "Narrativa":     "#60a5fa",
};

export const ProblemsSection = () => {
  const [active, setActive] = useState<typeof problemsData[0] | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-24 relative bg-black text-white overflow-hidden min-h-screen">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,#04BFBF0D,transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_50%_55%,#F2911B08,transparent_60%)]" />

      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-10 px-6">
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs tracking-[0.3em] uppercase text-[#04BFBF]/60 mb-3 font-mono"
        >
          Ecosistema de soluciones
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#F2911B] via-white to-[#04BFBF] bg-clip-text text-transparent leading-tight"
        >
          Transformamos problemas<br />en experiencias reales
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/40 mt-4 text-sm"
        >
          Selecciona un nodo para explorar la solución
        </motion.p>
      </div>

      {/* Map */}
      <div className="relative w-full flex items-center justify-center" style={{ height: 620 }}>
        <svg
          viewBox="0 0 600 600"
          className="absolute w-full max-w-[620px] h-full pointer-events-none"
          style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}
        >
          {/* Orbit ring */}
          <circle
            cx={CENTER} cy={CENTER} r={RADIUS}
            fill="none"
            stroke="white"
            strokeOpacity={0.04}
            strokeWidth={1}
            strokeDasharray="4 8"
          />
          {/* Inner decorative ring */}
          <circle
            cx={CENTER} cy={CENTER} r={60}
            fill="none"
            stroke="#04BFBF"
            strokeOpacity={0.12}
            strokeWidth={1}
          />

          {/* Spoke lines */}
          {problemsData.map((item, index) => {
            const angle = (index / problemsData.length) * Math.PI * 2 - Math.PI / 2;
            const nx = CENTER + Math.cos(angle) * RADIUS;
            const ny = CENTER + Math.sin(angle) * RADIUS;
            const isHov = hovered === item.id;
            const color = categoryColors[item.category] ?? "#04BFBF";
            return (
              <motion.line
                key={item.id}
                x1={CENTER} y1={CENTER}
                x2={nx} y2={ny}
                stroke={isHov ? color : "white"}
                strokeOpacity={isHov ? 0.5 : 0.07}
                strokeWidth={isHov ? 1.5 : 1}
                animate={{ strokeOpacity: isHov ? 0.5 : 0.07 }}
                transition={{ duration: 0.25 }}
              />
            );
          })}
        </svg>

        {/* Center hub */}
        <div className="absolute z-10" style={{ left: "50%", top: "50%", transform: "translate(-50%,-50%)" }}>
          <div className="w-20 h-20 rounded-full flex items-center justify-center"
            style={{
              background: "radial-gradient(circle, #04BFBF18, #04BFBF05)",
              boxShadow: "0 0 40px 10px #04BFBF18, inset 0 0 20px #04BFBF10",
              border: "1px solid #04BFBF30"
            }}>
            <div className="w-3 h-3 rounded-full bg-[#04BFBF]"
              style={{ boxShadow: "0 0 12px 4px #04BFBF" }} />
          </div>
        </div>

        {/* Nodes */}
        {problemsData.map((item, index) => {
          const angle = (index / problemsData.length) * Math.PI * 2 - Math.PI / 2;
          const x = Math.cos(angle) * RADIUS;
          const y = Math.sin(angle) * RADIUS;
          const color = categoryColors[item.category] ?? "#04BFBF";
          const isHov = hovered === item.id;

          // Label positioning: push label outward
          const labelDist = RADIUS + 44;
          const lx = Math.cos(angle) * labelDist;
          const ly = Math.sin(angle) * labelDist;
          const textAlign = Math.cos(angle) > 0.3 ? "left" : Math.cos(angle) < -0.3 ? "right" : "center";

          return (
            <motion.div
              key={item.id}
              className="absolute"
              style={{
                left: "50%",
                top: "50%",
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.07, type: "spring", stiffness: 200, damping: 18 }}
            >
              {/* Node button */}
              <motion.button
                onClick={() => setActive(item)}
                onHoverStart={() => setHovered(item.id)}
                onHoverEnd={() => setHovered(null)}
                animate={{
                  scale: isHov ? 1.25 : 1,
                  boxShadow: isHov
                    ? `0 0 28px 8px ${color}80`
                    : `0 0 12px 2px ${color}40`,
                }}
                transition={{ duration: 0.2 }}
                className="absolute z-20 w-12 h-12 rounded-full flex items-center justify-center"
                style={{
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  background: `radial-gradient(circle at 35% 35%, ${color}CC, ${color}55)`,
                  border: `1.5px solid ${color}80`,
                }}
              >
                <span className="text-[10px] font-bold text-white/90 leading-tight text-center px-1">
                  {item.category.slice(0, 3).toUpperCase()}
                </span>
              </motion.button>

              {/* Label */}
              <motion.p
                animate={{ opacity: isHov ? 1 : 0.45 }}
                transition={{ duration: 0.2 }}
                className="absolute text-[10px] leading-tight w-28 pointer-events-none z-10"
                style={{
                  transform: `translate(calc(-50% + ${lx}px), calc(-50% + ${ly}px))`,
                  textAlign,
                  color: isHov ? color : "rgba(255,255,255,0.5)",
                  fontWeight: isHov ? 600 : 400,
                  transition: "color 0.2s",
                  marginLeft: textAlign === "left" ? -14 : textAlign === "right" ? 14 : 0,
                }}
              >
                {item.problem}
              </motion.p>
            </motion.div>
          );
        })}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backdropFilter: "blur(12px)", backgroundColor: "rgba(0,0,0,0.65)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-md w-full rounded-2xl overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: `0 0 60px ${categoryColors[active.category] ?? "#04BFBF"}25`,
              }}
            >
              {/* Top accent bar */}
              <div
                className="h-[3px] w-full"
                style={{
                  background: `linear-gradient(90deg, transparent, ${categoryColors[active.category] ?? "#04BFBF"}, transparent)`
                }}
              />

              <div className="p-8">
                {/* Lab + Category badges */}
                <div className="flex items-center gap-2 mb-5">
                  <span
                    className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full"
                    style={{
                      color: categoryColors[active.category] ?? "#04BFBF",
                      border: `1px solid ${categoryColors[active.category] ?? "#04BFBF"}50`,
                      background: `${categoryColors[active.category] ?? "#04BFBF"}10`,
                    }}
                  >
                    {active.lab}
                  </span>
                  <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full border border-white/10 text-white/40">
                    {active.category}
                  </span>
                </div>

                {/* Problem */}
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-mono mb-1">Problema</p>
                <h3 className="text-lg font-semibold text-white/90 mb-2 leading-snug">
                  {active.problem}
                </h3>
                <p className="text-sm text-white/50 mb-6 leading-relaxed">
                  {active.description}
                </p>

                {/* Divider */}
                <div className="w-full h-px bg-white/08 mb-6" />

                {/* Solution */}
                <p className="text-[10px] uppercase tracking-[0.2em] font-mono mb-1"
                  style={{ color: categoryColors[active.category] ?? "#04BFBF" }}>
                  Solución
                </p>
                <h4 className="text-base font-semibold text-white mb-2">{active.solution}</h4>
                <p className="text-sm text-white/50 mb-6 leading-relaxed">
                  {active.solutionDescription}
                </p>

                {/* Impact */}
                <div
                  className="rounded-xl p-4 mb-6"
                  style={{
                    background: `${categoryColors[active.category] ?? "#04BFBF"}0C`,
                    border: `1px solid ${categoryColors[active.category] ?? "#04BFBF"}20`,
                  }}
                >
                  <p className="text-[10px] uppercase tracking-[0.2em] font-mono text-white/30 mb-1">Impacto</p>
                  <p className="text-sm text-white/70 leading-relaxed">{active.impact}</p>
                </div>

                {/* CTA */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setActive(null)}
                    className="flex-1 py-2.5 rounded-xl text-sm font-medium transition-all"
                    style={{
                      background: `linear-gradient(135deg, ${categoryColors[active.category] ?? "#04BFBF"}, #F2911B)`,
                      color: "white",
                    }}
                  >
                    Ver proyecto →
                  </button>
                  <button
                    onClick={() => setActive(null)}
                    className="px-4 py-2.5 rounded-xl text-sm text-white/40 border border-white/10 hover:border-white/20 transition-all"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProblemsSection;