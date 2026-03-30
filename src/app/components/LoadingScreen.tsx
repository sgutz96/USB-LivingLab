import { motion } from "motion/react";

export const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
    >
      <div className="flex flex-col items-center gap-10">

        {/* 🧠 SISTEMA */}
        <div className="relative w-40 h-40 flex items-center justify-center">

          {/* Núcleo */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-12 h-12 rounded-full bg-primary/20 border border-border"
          />

          {/* Anillo */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute w-full h-full border border-border rounded-full"
          />

          {/* Nodos orbitando */}
          {[0, 1, 2, 3].map((i) => {
            const angle = (i / 4) * Math.PI * 2;

            return (
              <motion.div
                key={i}
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.5,
                }}
                className="absolute w-full h-full"
                style={{
                  transform: `rotate(${angle}rad)`,
                }}
              >
                <div
                  className="w-3 h-3 rounded-full bg-accent"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* 🧠 TEXTO */}
        <div className="text-center space-y-3">

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-semibold text-foreground"
          >
            Inicializando sistema
          </motion.h2>

          <motion.p
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="text-sm text-muted-foreground"
          >
            Cargando experiencias…
          </motion.p>

          {/* 📊 Barra estilo Apple */}
          <div className="w-48 h-[2px] bg-border rounded-full overflow-hidden mx-auto mt-4">
            <motion.div
              animate={{ x: ["-100%", "100%"] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1/2 h-full bg-primary"
            />
          </div>

        </div>
      </div>
    </motion.div>
  );
};