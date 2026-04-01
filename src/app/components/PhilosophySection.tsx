import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";

export const PhilosophySection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const items = [
    {
      number: "01",
      title: "Pensar sin fronteras",
      text: "Rompemos los silos disciplinares. Ingeniería dialoga con diseño, arte con ciencia, intuición con dato.",
    },
    {
      number: "02",
      title: "Prototipar en tiempo real",
      text: "Ideas que hoy son boceto, mañana son tangibles. Velocidad, materialidad y retroalimentación continua.",
    },
    {
      number: "03",
      title: "Innovar con propósito",
      text: "Cada proyecto tiene un impacto. Innovamos para resolver problemas reales, con contexto y responsabilidad social.",
    },
  ];

  return (
    <section className="py-32 bg-background text-foreground relative overflow-hidden">
      
      {/* 🌌 Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradiente base */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,var(--color-accent)/10,transparent_40%),radial-gradient(circle_at_80%_70%,var(--color-primary)/10,transparent_40%)]" />

        {/* Sistema de partículas */}
        {[...Array(50)].map((_, i) => {
          const size = Math.random() * 6 + 3;
          const duration = Math.random() * 20 + 15;
          const delay = Math.random() * -20;
          const startX = Math.random() * 100;
          const startY = Math.random() * 100;
          const opacity = Math.random() * 0.4 + 0.2;
          const color = i % 3 === 0 ? 'var(--color-primary)' : i % 3 === 1 ? 'var(--color-accent)' : 'var(--color-usb-blue-light)';

          return (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: size,
                height: size,
                left: `${startX}%`,
                top: `${startY}%`,
                background: color,
                boxShadow: `0 0 ${size * 3}px ${color}`,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
                y: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
                opacity: [opacity, opacity * 0.5, opacity * 0.8, opacity],
                scale: [1, 1.5, 0.8, 1],
              }}
              transition={{
                duration,
                delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })}

        {/* Partículas conectadas - líneas sutiles */}
        {[...Array(8)].map((_, i) => {
          const duration = Math.random() * 15 + 10;
          const delay = Math.random() * -15;
          const startX = Math.random() * 100;
          const startY = Math.random() * 100;
          const rotation = Math.random() * 360;

          return (
            <motion.div
              key={`line-${i}`}
              className="absolute h-px"
              style={{
                width: Math.random() * 100 + 50,
                left: `${startX}%`,
                top: `${startY}%`,
                background: `linear-gradient(90deg, transparent, var(--color-accent)/20, transparent)`,
                transformOrigin: "left center",
                rotate: rotation,
              }}
              animate={{
                opacity: [0, 0.4, 0],
                scaleX: [0, 1, 0],
              }}
              transition={{
                duration,
                delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })}

        {/* Orbes flotantes grandes */}
        {[...Array(3)].map((_, i) => {
          const size = Math.random() * 200 + 150;
          const duration = Math.random() * 25 + 20;
          const delay = Math.random() * -25;
          const startX = i * 40;
          const startY = i * 30;
          const color = i === 0 ? 'var(--color-primary)' : i === 1 ? 'var(--color-accent)' : 'var(--color-usb-blue-light)';

          return (
            <motion.div
              key={`orb-${i}`}
              className="absolute rounded-full blur-3xl"
              style={{
                width: size,
                height: size,
                left: `${startX}%`,
                top: `${startY}%`,
                background: `radial-gradient(circle, ${color}/15, transparent 70%)`,
              }}
              animate={{
                x: [0, Math.random() * 200 - 100, 0],
                y: [0, Math.random() * 200 - 100, 0],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration,
                delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>

      <div
        ref={ref}
        className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center"
      >

        {/* 🧠 IZQUIERDA */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <span className="text-xs tracking-[0.3em] text-accent uppercase">
            Manifiesto
          </span>

          <h2 className="mt-6 text-5xl sm:text-7xl font-extrabold leading-[0.95]">
            Pensar.
            <br />
            Prototipar.
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Innovar.
            </span>
          </h2>

          <p className="mt-8 text-muted-foreground leading-relaxed max-w-xl">
            <span className="text-foreground font-semibold">Live Room</span> no es un aula.
            Es un organismo vivo que respira con cada proyecto, falla con cada
            experimento y aprende con cada iteración.
          </p>

          <p className="mt-6 text-muted-foreground/70 leading-relaxed max-w-xl">
            Aquí, la disciplina se convierte en conversación. El error en
            <span className="text-foreground"> método</span>. La incertidumbre en
            <span className="text-foreground"> motor de creación</span>.
          </p>
        </motion.div>

        {/* 🧩 DERECHA */}
        <div className="relative">

          {/* Línea */}
          <div className="absolute left-6 top-0 h-full w-px bg-border" />

          <div className="space-y-10">
            {items.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, x: 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className="relative flex gap-6 items-start group"
              >
                {/* Nodo */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-accent shadow-md" />
                </div>

                {/* Card */}
                <div className="flex-1 p-6 rounded-xl bg-card/40 border border-border backdrop-blur-md hover:border-accent/40 transition-all">
                  
                  <span className="text-xs text-muted-foreground">
                    {item.number}
                  </span>

                  <h3 className="text-lg font-semibold mt-1 mb-2 group-hover:text-accent transition">
                    {item.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};