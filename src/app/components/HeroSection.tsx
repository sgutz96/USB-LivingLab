import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const slides = [
    {
      title: "Diseñamos experiencias digitales que conectan",
      subtitle:
        "UX, desarrollo y gamedev para construir productos interactivos con impacto real.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070",
    },
    {
      title: "Transformamos ideas en experiencias",
      subtitle:
        "Interfaces, sistemas y narrativas que mejoran la relación entre usuarios y tecnología.",
      image:
        "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=2070",
    },
    {
      title: "Tecnología, diseño y narrativa",
      subtitle:
        "Unimos creatividad y código para construir productos digitales memorables.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2070",
    },
  ];

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % slides.length);

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section
      className="relative h-screen flex items-center justify-center overflow-hidden bg-background"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 🖼️ IMAGEN DINÁMICA */}
      <AnimatePresence mode="wait">
        <motion.img
          key={currentSlide}
          src={slides[currentSlide].image}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.25, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* 🌑 OVERLAY PARA LEGIBILIDAD */}
      <div className="absolute inset-0 bg-background/50" />

      {/* 🌈 GRADIENTE SISTEMA */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,var(--color-primary)/15,transparent_40%),radial-gradient(circle_at_80%_70%,var(--color-accent)/15,transparent_40%)]" />

      {/* ✨ GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full" />

      {/* 🧊 CONTENIDO */}
      <div className="relative z-10 max-w-4xl w-full px-6 text-center">
        <div className="bg-card/40 backdrop-blur-xl border border-border rounded-3xl p-10 shadow-xl">

          {/* 🧠 TEXTO */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl sm:text-6xl font-semibold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  {slides[currentSlide].title}
                </span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {slides[currentSlide].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* 🚀 CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium"
            >
              Ver proyectos
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              className="px-8 py-4 rounded-full border border-border bg-background/60 backdrop-blur"
            >
              Cómo trabajamos
            </motion.button>
          </div>

          {/* ⏳ PROGRESS */}
          <div className="mt-8 w-full h-[2px] bg-border rounded-full overflow-hidden">
            <motion.div
              key={currentSlide}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 6, ease: "linear" }}
              className="h-full bg-accent"
            />
          </div>

          {/* 🎛️ CONTROLES */}
          <div className="flex items-center justify-center gap-6 mt-6">
            <button onClick={prevSlide}>
              <ChevronLeft />
            </button>
            <button onClick={nextSlide}>
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>

      {/* 🖱️ SCROLL */}
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