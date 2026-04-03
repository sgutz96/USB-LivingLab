import { motion } from "motion/react";
import logoColor from "../../imports/Logo-Color.png";
import logoClaro from "../../imports/Logo-Claro.png";

export const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background overflow-hidden"
    >
      {/* 🌌 GRID DATA (más elegante que partículas random) */}
      <div className="absolute inset-0 opacity-[0.05]">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-full bg-primary"
            style={{ left: `${(i / 20) * 100}%` }}
            animate={{ opacity: [0.2, 0.6, 0.2] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
      </div>

      {/* 🌈 GLOW GLOBAL */}
      <div className="absolute w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full" />

      <div className="flex flex-col items-center gap-12 relative z-10">
        {/* 🧬 SISTEMA CENTRAL */}
        <div className="relative w-64 h-64 flex items-center justify-center">
          {/* ORBITA SUAVE */}
          <motion.div
            className="absolute w-full h-full rounded-full border border-border"
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* ORBITA SECUNDARIA */}
          <motion.div
            className="absolute w-40 h-40 rounded-full border border-accent/30"
            animate={{ rotate: -360 }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* PARTÍCULAS CONTROLADAS */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 rounded-full bg-accent"
              style={{
                left: "50%",
                top: "0%",
                transform: "translate(-50%, -50%)",
              }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 6 + i * 2,
                repeat: Infinity,
                ease: "linear",
                delay: i * 1,
              }}
            />
          ))}

          {/* 🧠 NÚCLEO */}
          <motion.div
            className="
              w-28 h-28 rounded-full
              bg-card/60 backdrop-blur-xl
              border border-border
              flex items-center justify-center
              shadow-xl
            "
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* LOGO */}
            <img
              src={logoColor}
              className="w-16 h-16 object-contain dark:hidden"
            />
            <img
              src={logoClaro}
              className="w-16 h-16 object-contain hidden dark:block"
            />

            {/* SCAN LINE */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-transparent"
              animate={{ y: ["-100%", "200%"] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </motion.div>
        </div>

        {/* 🧠 TEXTO */}
        <div className="text-center space-y-3">
          <h2
            className="
            text-2xl font-semibold
            bg-gradient-to-r from-primary to-accent
            bg-clip-text text-transparent
          "
          >
            Inicializando sistema
          </h2>

          <p className="text-sm text-muted-foreground">
            Preparando entorno interactivo
          </p>

          {/* 📊 PROGRESS REALISTA */}
          <div className="w-64 mt-4">
            <div className="h-[2px] bg-border rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-accent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            <div className="flex justify-between text-[10px] text-muted-foreground mt-2 font-mono">
              <span>BOOT</span>
              <span>LOADING</span>
              <span>READY</span>
            </div>
          </div>

          {/* STATUS */}
          <motion.div
            className="text-xs font-mono text-muted-foreground mt-2"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ● sistema activo
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};