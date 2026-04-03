import { useState } from "react";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Search } from "lucide-react";
import labsData from "../../data/labs.json";

export const LabsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [showAll, setShowAll] = useState(false);
  const [search, setSearch] = useState("");

  const filteredLabs = labsData.filter((lab) =>
    `${lab.name} ${lab.description}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  const visibleLabs = showAll
    ? filteredLabs
    : filteredLabs.slice(0, 6);

  return (
    <section id="labs" className="py-24 relative bg-background">
      {/* 🌈 Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

      <div
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* 🧠 HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-accent border border-accent/30 rounded-full">
            Our Labs
          </span>

          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Research & Development
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
            Explora nuestros laboratorios e innovaciones
          </p>

          {/* 🔍 BUSCADOR */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/50" />

            <input
              type="text"
              placeholder="Buscar laboratorio..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setShowAll(true);
              }}
              className="w-full pl-12 pr-4 py-4 rounded-full bg-card/40 border border-border backdrop-blur-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
            />
          </div>

          {/* 📊 CONTADOR */}
          <p className="text-sm text-muted-foreground/70 mt-4">
            Mostrando {visibleLabs.length} de{" "}
            {filteredLabs.length} laboratorios
          </p>
        </motion.div>

        {/* 🧩 GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleLabs.map((lab, index) => (
            <motion.div
              key={lab.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-accent/50 transition-all hover:shadow-lg"
            >
              {/* Imagen */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={lab.image}
                  alt={lab.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              </div>

              {/* Contenido */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition">
                  {lab.name}
                </h3>

                <p className="text-muted-foreground text-sm mb-4">
                  {lab.description}
                </p>

                <button className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition">
                  Learn More
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🚀 BOTÓN */}
        {filteredLabs.length > 6 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-4 rounded-full border border-border bg-transparent hover:bg-muted transition"
            >
              {showAll
                ? "Ver menos"
                : "Ver todos los laboratorios"}
            </button>
          </div>
        )}

        {/* ❌ EMPTY */}
        {filteredLabs.length === 0 && (
          <p className="text-center text-muted-foreground mt-12">
            No se encontraron resultados
          </p>
        )}
      </div>
    </section>
  );
};