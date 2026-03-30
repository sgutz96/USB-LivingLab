import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "motion/react";

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const savedTheme = localStorage.getItem("theme");

    const shouldBeDark = savedTheme === "dark";

    setIsDark(shouldBeDark);
    root.classList.toggle("dark", shouldBeDark);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const newTheme = !isDark;

    setIsDark(newTheme);
    root.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <motion.button
        onClick={toggleTheme}
        whileTap={{ scale: 0.95 }}
        className="
          relative w-20 h-10 rounded-full
          bg-card border border-border
          flex items-center px-1
          backdrop-blur-md
          transition-colors
        "
        aria-label="Toggle theme"
      >
        {/* 🌗 TRACK ICONS */}
        <div className="absolute inset-0 flex items-center justify-between px-3 pointer-events-none">
          <Sun className="w-4 h-4 text-muted-foreground" />
          <Moon className="w-4 h-4 text-muted-foreground" />
        </div>

        {/* 🟢 THUMB */}
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="
            w-8 h-8 rounded-full
            bg-primary
            flex items-center justify-center
            shadow-md
          "
          style={{
            transform: isDark
              ? "translateX(40px)"
              : "translateX(0px)",
          }}
        >
          {isDark ? (
            <Moon className="w-4 h-4 text-primary-foreground" />
          ) : (
            <Sun className="w-4 h-4 text-primary-foreground" />
          )}
        </motion.div>
      </motion.button>
    </div>
  );
};