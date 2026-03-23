import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'motion/react';

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;

    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const shouldBeDark = savedTheme ? savedTheme === 'dark' : prefersDark;

    setIsDark(shouldBeDark);
    root.classList.toggle('dark', shouldBeDark);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const newTheme = !isDark;

    setIsDark(newTheme);
    root.classList.toggle('dark', newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="
        fixed bottom-8 right-8 z-50 p-4 rounded-full
        bg-gradient-to-br from-primary to-accent
        shadow-lg shadow-primary/20
        hover:shadow-xl hover:shadow-primary/30
        transition-all backdrop-blur-md
      "
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-center"
      >
        {isDark ? (
          <Sun className="w-6 h-6 text-primary-foreground" />
        ) : (
          <Moon className="w-6 h-6 text-primary-foreground" />
        )}
      </motion.div>
    </motion.button>
  );
};