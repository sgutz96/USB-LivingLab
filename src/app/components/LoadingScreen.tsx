import { motion } from 'motion/react';

export const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
    >
      <div className="flex flex-col items-center gap-6">
        
        {/* Animated Logo */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            w-20 h-20 rounded-2xl
            bg-gradient-to-br from-primary to-accent
            flex items-center justify-center
            shadow-2xl shadow-primary/40
          "
        >
          <span className="text-primary-foreground font-bold text-3xl">
            L
          </span>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <h2 className="
            text-2xl font-bold mb-2
            bg-gradient-to-r from-primary to-accent
            bg-clip-text text-transparent
          ">
            Loading Innovation
          </h2>

          {/* Dots */}
          <div className="flex gap-2 justify-center">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                className="
                  w-2 h-2 rounded-full
                  bg-primary
                "
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};