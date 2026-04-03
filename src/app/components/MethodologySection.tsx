import { motion } from "motion/react";

export const MethodologySection = () => {
  const steps = [
    {
      title: "Idea",
      desc: "Brief creativo y definición del reto",
    },
    {
      title: "Prototipo",
      desc: "Primera materialización física o digital",
    },
    { title: "Testeo", desc: "Validación con usuarios reales" },
    {
      title: "Iteración",
      desc: "Ajustes basados en evidencia",
    },
    {
      title: "Implementación",
      desc: "Escala y transferencia al mundo real",
    },
  ];

  return (
    <section className="py-32 bg-background text-foreground relative overflow-hidden">
      {/* 🌈 Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--accent)/0.08),transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-6">
        {/* 🧠 HEADER */}
        <div className="mb-20">
          <span className="text-xs tracking-[0.3em] text-primary uppercase">
            Metodología
          </span>

          <h2 className="mt-6 text-6xl sm:text-7xl font-extrabold leading-[0.95]">
            Pipeline de
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Innovación Live
            </span>
          </h2>
        </div>

        {/* ⚡ PIPELINE */}
        <div className="relative mb-24">
          {/* Línea base */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-border -translate-y-1/2" />

          {/* Línea activa */}
          <motion.div
            className="absolute top-1/2 left-0 h-[2px] bg-gradient-to-r from-primary to-accent -translate-y-1/2"
            animate={{ width: ["0%", "100%"] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 relative">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                {/* Nodo */}
                <motion.div
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{
                    duration: 2,
                    delay: index * 0.3,
                    repeat: Infinity,
                  }}
                  className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent shadow-lg flex items-center justify-center text-sm font-bold text-primary-foreground"
                >
                  {index + 1}
                </motion.div>

                {/* Texto */}
                <h3 className="mt-4 font-semibold tracking-wide">
                  {step.title}
                </h3>

                <p className="text-muted-foreground text-sm mt-2 max-w-[150px] mx-auto">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 📊 MÉTRICAS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { value: "150+", label: "Proyectos activos / año" },
            {
              value: "800+",
              label: "Estudiantes participantes",
            },
            { value: "8", label: "Facultades integradas" },
            {
              value: "100%",
              label: "Proyectos con impacto real",
              highlight: true,
            },
          ].map((stat, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl border transition ${
                stat.highlight
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card border-border"
              }`}
            >
              <h4 className="text-4xl font-bold">
                {stat.value}
              </h4>

              <p
                className={`mt-2 text-sm ${
                  stat.highlight
                    ? "text-primary-foreground/80"
                    : "text-muted-foreground"
                }`}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};