import { motion } from "motion/react";
import logoColor from "../../imports/Logo-Color.png";
import logoClaro from "../../imports/Logo-Claro.png";

export const LoadingScreen = () => {
  return (
    <motion.div
      role="status"
      aria-live="polite"
      aria-label="Cargando experiencia interactiva"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background overflow-hidden"
    >
      {/* 🧠 CONTENIDO SEO OCULTO */}
      <p className="sr-only">
        Plataforma de innovación digital, diseño UX/UI, desarrollo web y visualización de datos interactiva.
      </p>

      {/* 🌌 GRID SUTIL (menos ruido = más premium) */}
      <div className="absolute inset-0 opacity-[0.04]">
        {[...Array(16)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-full bg-primary"
            style={{ left: `${(i / 16) * 100}%` }}
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {/* 🌈 GLOW CONTROLADO */}
      <div className="absolute w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-full" />

      <div className="flex flex-col items-center gap-10 relative z-10">
        
        {/* 🧬 SISTEMA CENTRAL MÁS CLEAN */}
        <div className="relative w-56 h-56 flex items-center justify-center">

          {/* ORBITA */}
          <motion.div
            className="absolute w-full h-full rounded-full border border-border/40"
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          />

          {/* NÚCLEO */}
          <div className="w-48 h-48 rounded-full bg-card/70 backdrop-blur-xl border border-border flex items-center justify-center shadow-lg">

            <img
              src={logoColor}
              className="w-28 h-28 object-contain dark:hidden"
              alt="Logo innovación"
            />
            <img
              src={logoClaro}
              className="w-14 h-14 object-contain hidden dark:block"
              alt="Logo innovación"
            />

            {/* SCAN */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent"
              animate={{ y: ["-100%", "200%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </div>

        {/* 🧠 TEXTO */}
        <div className="text-center space-y-2">
          <h1 className="text-xl font-semibold text-foreground">
            Live Room
          </h1>

          <p className="text-sm text-muted-foreground">
            Inicializando entorno interactivo
          </p>

          {/* 📊 PROGRESS */}
          <div className="w-56 mt-3">
            <div className="h-[2px] bg-border rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-accent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>

          {/* STATUS */}
          <motion.span
            className="text-[10px] font-mono text-muted-foreground"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ● loading system
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
};