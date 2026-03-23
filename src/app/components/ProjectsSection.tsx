import { useRef } from "react";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
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
    <section id="projects" className="py-24 relative overflow-hidden bg-background">
      
      {/* 🌈 Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 🧠 HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-accent border border-accent/30 rounded-full">
            Featured Projects
          </span>

          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Innovation in Action
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover our most impactful projects transforming industries and solving global challenges
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
            spaceBetween={24} // 🔥 más consistente con spacing scale
            slidesPerView={1}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletActiveClass: "swiper-pagination-bullet-active",
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-12"
          >
            {projectsData.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="
                  group relative h-full rounded-2xl overflow-hidden
                  bg-card border border-border
                  hover:border-accent/50
                  transition-all duration-300
                  hover:shadow-xl hover:shadow-accent/10
                ">
                  
                  {/* 🖼️ IMAGE */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />

                    {/* Badge */}
                    <div className="
                      absolute top-4 right-4 px-3 py-1 rounded-full
                      bg-secondary/80 backdrop-blur-sm
                      text-xs font-medium text-secondary-foreground
                      border border-border/50
                    ">
                      {project.university}
                    </div>
                  </div>

                  {/* 📦 CONTENT */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* 🏷️ TAGS */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="
                            px-3 py-1 text-xs font-medium
                            bg-accent/10 text-accent
                            rounded-full border border-accent/20
                          "
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* 🔗 LINK */}
                    <a
                      href={project.link}
                      className="
                        inline-flex items-center gap-2 text-sm font-medium
                        text-primary hover:text-accent
                        transition-colors group/link
                      "
                    >
                      View Project
                      <ExternalLink className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </a>
                  </div>

                  {/* ✨ Hover glow */}
                  <div className="
                    absolute inset-0 pointer-events-none
                    bg-gradient-to-br from-primary/0 to-accent/0
                    group-hover:from-primary/5 group-hover:to-accent/5
                    transition-all duration-300
                  " />
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

      {/* 🎛️ PAGINATION (100% tokens) */}
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