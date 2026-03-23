import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Radio } from "lucide-react";
import { useYouTubeLiveStatus } from "../../hooks/useYouTubeLiveStatus";
import heroMessages from "../../data/hero-messages.json";

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const { isLive, loading } = useYouTubeLiveStatus();

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroMessages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroMessages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroMessages.length) % heroMessages.length
    );
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-background text-foreground"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 🌌 Imagen fallback */}
      <img
        src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />

      {/* 🎥 Video */}
      <div className="absolute inset-0 opacity-20">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source
            src="https://cdn.coverr.co/videos/coverr-abstract-digital-background-5176/1080p.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* 🌈 Gradientes (token-driven) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,var(--color-primary)/20,transparent_40%),radial-gradient(circle_at_80%_70%,var(--color-accent)/20,transparent_40%)]" />

      {/* ✨ Glow */}
      <div className="absolute w-[600px] h-[600px] bg-[var(--color-accent)]/20 blur-[120px] rounded-full" />

      {/* 🧊 Contenedor */}
      <div className="relative z-10 max-w-5xl w-full mx-auto px-6 text-center">
        <div className="bg-card/30 backdrop-blur-xl border border-border rounded-3xl p-10 shadow-lg">
          
          {/* 🔴 LIVE */}
          {!loading && isLive && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-destructive/20 border border-destructive/40"
            >
              <Radio className="w-4 h-4 text-destructive animate-pulse" />
              <span className="text-sm text-destructive font-medium">
                EN VIVO
              </span>
            </motion.div>
          )}

          {/* 🧠 TEXTO */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-accent)] to-[var(--color-secondary)] bg-clip-text text-transparent">
                  {heroMessages[currentSlide].text}
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                {heroMessages[currentSlide].subtext}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* 🚀 CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold shadow-md"
              onClick={() => {
                document.querySelector("#about")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Explorar proyectos
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full border border-border bg-transparent hover:bg-muted transition"
            >
              Ver demo
            </motion.button>
          </div>

          {/* 🎛️ Controles */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-muted hover:bg-muted/80 transition"
            >
              <ChevronLeft />
            </button>

            <div className="flex gap-2">
              {heroMessages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === currentSlide
                      ? "w-8 bg-accent"
                      : "w-2 bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-muted hover:bg-muted/80 transition"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>

      {/* 🖱️ Scroll indicator */}
      <motion.div className="absolute bottom-8">
        <div className="w-6 h-10 border border-border rounded-full flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-foreground rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};