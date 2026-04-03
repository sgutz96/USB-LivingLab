import { useRef } from "react";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import projectsData from "../../data/projects.json";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const ProjectsSection = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="projects"
      className="py-24 relative overflow-hidden bg-background"
    >
      {/* 🌈 Background con sistema de partículas */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Gradientes base */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

        {/* Partículas flotantes */}
        {[...Array(35)].map((_, i) => {
          const size = Math.random() * 4 + 2;
          const duration = Math.random() * 18 + 12;
          const delay = Math.random() * -18;
          const startX = Math.random() * 100;
          const startY = Math.random() * 100;
          const opacity = Math.random() * 0.5 + 0.2;
          const color = i % 3 === 0 ? 'var(--color-primary)' : i % 3 === 1 ? 'var(--color-accent)' : 'var(--color-usb-blue-light)';

          return (
            <motion.div
              key={`particle-${i}`}
              className="absolute rounded-full"
              style={{
                width: size,
                height: size,
                left: `${startX}%`,
                top: `${startY}%`,
                background: color,
                boxShadow: `0 0 ${size * 2}px ${color}`,
              }}
              animate={{
                x: [0, Math.random() * 80 - 40, Math.random() * 80 - 40, 0],
                y: [0, Math.random() * 80 - 40, Math.random() * 80 - 40, 0],
                opacity: [opacity, opacity * 0.4, opacity * 0.7, opacity],
                scale: [1, 1.4, 0.9, 1],
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

        {/* Líneas conectivas */}
        {[...Array(6)].map((_, i) => {
          const duration = Math.random() * 12 + 8;
          const delay = Math.random() * -12;
          const startX = Math.random() * 100;
          const startY = Math.random() * 100;
          const rotation = Math.random() * 360;

          return (
            <motion.div
              key={`line-${i}`}
              className="absolute h-px"
              style={{
                width: Math.random() * 120 + 60,
                left: `${startX}%`,
                top: `${startY}%`,
                background: `linear-gradient(90deg, transparent, var(--color-primary)/15, transparent)`,
                transformOrigin: "left center",
                rotate: rotation,
              }}
              animate={{
                opacity: [0, 0.3, 0],
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

        {/* Orbes de luz grandes */}
        {[...Array(4)].map((_, i) => {
          const size = Math.random() * 180 + 120;
          const duration = Math.random() * 22 + 18;
          const delay = Math.random() * -22;
          const startX = i * 30 + 10;
          const startY = i * 25;
          const color = i % 2 === 0 ? 'var(--color-primary)' : 'var(--color-accent)';

          return (
            <motion.div
              key={`orb-${i}`}
              className="absolute rounded-full blur-3xl"
              style={{
                width: size,
                height: size,
                left: `${startX}%`,
                top: `${startY}%`,
                background: `radial-gradient(circle, ${color}/12, transparent 70%)`,
              }}
              animate={{
                x: [0, Math.random() * 150 - 75, 0],
                y: [0, Math.random() * 150 - 75, 0],
                scale: [1, 1.25, 1],
                opacity: [0.4, 0.7, 0.4],
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
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* 🧠 HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-accent border border-accent/30 rounded-full">
            Featured Projects
          </span>

          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Innovation in Action
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover our most impactful projects transforming
            industries and solving global challenges
          </p>
        </motion.div>

        {/* 🧩 CAROUSEL */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletActiveClass:
                "swiper-pagination-bullet-active",
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-12"
          >
            {projectsData.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="group relative h-[420px] rounded-2xl overflow-hidden border border-border bg-card">
                  {/* 🖼️ IMAGE BACKGROUND */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* 🌫️ DARK OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  {/* ✨ HOVER LIGHT */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-500" />

                  {/* 🏷️ BADGE */}
                  <div className="absolute top-4 left-4 px-3 py-1 text-xs rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white">
                    {project.university}
                  </div>

                  {/* 📦 CONTENT */}
                  <div
                    className="
                      absolute bottom-0 left-0 right-0 p-6
                      translate-y-10 opacity-0
                      group-hover:translate-y-0 group-hover:opacity-100
                      transition-all duration-500
                    "
                  >
                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>

                    <p className="text-sm text-white/80 mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* 🏷️ TAGS */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 rounded-md bg-white/10 text-white/80 border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* 🔘 CTA */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex items-center gap-2
                        px-4 py-2 rounded-lg
                        bg-accent text-white text-sm font-medium
                        hover:bg-accent/80 transition
                      "
                    >
                      View Project
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* ⬅️ NAV */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="
              absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10
              p-3 rounded-full
              bg-card border border-border
              hover:bg-muted
              transition-all shadow-md
              hidden lg:block
            "
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>

          {/* ➡️ NAV */}
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="
              absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10
              p-3 rounded-full
              bg-card border border-border
              hover:bg-muted
              transition-all shadow-md
              hidden lg:block
            "
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>
        </motion.div>
      </div>

      {/* 🎛️ PAGINATION */}
      <style>{`
        .swiper-pagination-bullet {
          background: hsl(var(--muted-foreground) / 0.3);
          opacity: 1;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background: hsl(var(--accent));
          width: 24px;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
};