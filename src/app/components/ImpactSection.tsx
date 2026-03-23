import { useState } from "react";
import { motion } from "motion/react";
import impactData from "../../data/impact-data.json";

export const ImpactSection = () => {
  const [active, setActive] = useState(0);
  const current = impactData[active];

  return (
    <section className="py-32 bg-background text-foreground relative overflow-hidden">
      
      {/* 🌈 Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--accent)/0.08),transparent_40%),radial-gradient(circle_at_80%_70%,hsl(var(--primary)/0.08),transparent_40%)]" />

      <div className="max-w-7xl mx-auto px-6">

        {/* 🧠 HEADER */}
        <div className="mb-20 max-w-3xl">
          <span className="text-xs tracking-[0.3em] text-accent uppercase">
            Impacto & Desafíos
          </span>

          <h2 className="mt-6 text-5xl sm:text-6xl font-extrabold leading-tight">
            No mostramos proyectos.
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Mostramos impacto en el mundo real.
            </span>
          </h2>
        </div>

        {/* 🧩 CONTENT */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* 🧠 INFO */}
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-4 mb-6">
              
              {/* Badge */}
              <span className="px-4 py-1 text-xs rounded-full bg-accent/10 text-accent border border-accent/20">
                {current.ods}
              </span>

              <h3 className="text-2xl font-semibold">
                {current.title}
              </h3>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              {current.description}
            </p>

            <ul className="space-y-3">
              {current.problems.map((problem, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  {problem}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 🎴 SLIDER */}
          <div className="flex gap-6 overflow-x-auto pb-4">
            {impactData.map((item, index) => (
              <motion.div
                key={item.id}
                onClick={() => setActive(index)}
                whileHover={{ scale: 1.05 }}
                className={`min-w-[260px] h-[360px] rounded-xl overflow-hidden cursor-pointer relative transition-all ${
                  active === index
                    ? "scale-105"
                    : "opacity-60 hover:opacity-90"
                }`}
              >
                {/* IMAGE */}
                <img
                  src={item.image}
                  className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />

                {/* TEXT */}
                <div className="absolute bottom-4 left-4">
                  <p className="text-xs text-muted-foreground">{item.ods}</p>
                  <h4 className="font-semibold text-foreground">
                    {item.title}
                  </h4>
                </div>

                {/* ACTIVE BORDER */}
                {active === index && (
                  <div className="absolute inset-0 border-2 border-accent/50 rounded-xl" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};