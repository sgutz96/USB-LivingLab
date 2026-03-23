import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export const ContactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-background text-foreground">
      
      {/* 🌈 Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="max-w-6xl mx-auto px-6">
        
        {/* 🧠 HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm text-primary border border-primary/30 rounded-full">
            Contacto
          </span>

          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Hablemos
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes una idea, proyecto o colaboración en mente?  
            Escríbenos o contáctanos directamente.
          </p>
        </motion.div>

        {/* 🧩 GRID */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* 📬 CONTACT ACTIONS */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="space-y-6"
          >
            {/* Email */}
            <a
              href="mailto:correo@email.com"
              className="group flex items-center gap-4 p-6 rounded-2xl bg-card border border-border backdrop-blur-xl hover:border-primary/50 transition"
            >
              <Mail className="w-6 h-6 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="text-foreground group-hover:text-primary transition">
                  correo@email.com
                </p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/573000000000"
              target="_blank"
              className="group flex items-center gap-4 p-6 rounded-2xl bg-card border border-border backdrop-blur-xl hover:border-accent/50 transition"
            >
              <MessageCircle className="w-6 h-6 text-accent" />
              <div>
                <p className="text-sm text-muted-foreground">WhatsApp</p>
                <p className="text-foreground group-hover:text-accent transition">
                  +57 300 000 0000
                </p>
              </div>
            </a>

            {/* Teléfono */}
            <a
              href="tel:+573000000000"
              className="group flex items-center gap-4 p-6 rounded-2xl bg-card border border-border backdrop-blur-xl hover:border-secondary/50 transition"
            >
              <Phone className="w-6 h-6 text-secondary" />
              <div>
                <p className="text-sm text-muted-foreground">Teléfono</p>
                <p className="text-foreground group-hover:text-secondary transition">
                  +57 300 000 0000
                </p>
              </div>
            </a>

            {/* Ubicación */}
            <div className="flex items-center gap-4 p-6 rounded-2xl bg-card border border-border backdrop-blur-xl">
              <MapPin className="w-6 h-6 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Ubicación</p>
                <p className="text-foreground">Bogotá, Colombia</p>
              </div>
            </div>
          </motion.div>

          {/* 🗺️ MAPA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="rounded-3xl overflow-hidden border border-border shadow-2xl"
          >
            <iframe
              src="https://www.google.com/maps?q=Bogota&output=embed"
              className="w-full h-[400px]"
              loading="lazy"
            />
          </motion.div>
        </div>

        {/* 🚀 CTA FINAL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mt-16"
        >
          <a
            href="https://wa.me/573000000000"
            target="_blank"
            className="inline-block px-10 py-4 bg-primary text-primary-foreground rounded-full font-semibold shadow-lg hover:opacity-90 transition"
          >
            Iniciar conversación
          </a>
        </motion.div>
      </div>
    </section>
  );
};