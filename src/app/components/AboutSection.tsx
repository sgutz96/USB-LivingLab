import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { Target, Eye, Zap } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Mission",
    description:
      "To advance scientific discovery and technological innovation that addresses global challenges and improves lives worldwide.",
  },
  {
    icon: Eye,
    title: "Vision",
    description:
      "A future where breakthrough technologies are accessible to all, fostering sustainable development and human progress.",
  },
  {
    icon: Zap,
    title: "Impact",
    description:
      "Over 50+ research projects, 200+ publications, and solutions deployed across 30+ countries making real-world difference.",
  },
];

export const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden bg-background"
    >
      {/* 🌈 Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* 🧠 Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-accent border border-accent/30 rounded-full">
            About Us
          </span>

          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Pioneering Innovation
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We are a collective of researchers, engineers, and innovators dedicated to pushing the boundaries of what's possible through cutting-edge technology and collaborative research.
          </p>
        </motion.div>

        {/* 🧩 Two Column */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-6">
              Transforming Ideas into Reality
            </h3>

            <p className="text-muted-foreground mb-4 leading-relaxed">
              Since our inception, we've been at the forefront of technological advancement, bridging the gap between theoretical research and practical applications. Our multidisciplinary approach combines expertise from AI, quantum computing, biotechnology, and more.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              We collaborate with leading institutions, industry partners, and communities worldwide to ensure our innovations create meaningful, lasting impact. Every project we undertake is driven by the goal of solving real-world problems and improving quality of life.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-square">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
                alt="Innovation and Technology"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20" />
            </div>

            {/* Border decorativo */}
            <div className="absolute -inset-4 border-2 border-border rounded-2xl -z-10" />
          </motion.div>
        </div>

        {/* 🧱 Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300"
            >
              {/* Glow hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative">
                <div className="w-14 h-14 mb-6 rounded-xl bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                <h4 className="text-xl font-bold mb-3">
                  {feature.title}
                </h4>

                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};