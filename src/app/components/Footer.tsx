import { Github, Twitter, Linkedin, Youtube, Mail } from 'lucide-react';

const socialLinks = [
  { name: 'GitHub', icon: Github, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'YouTube', icon: Youtube, href: '#' },
  { name: 'Email', icon: Mail, href: '#' },
];

const footerLinks = {
  Company: ['About', 'Careers', 'Press', 'Blog'],
  Resources: ['Documentation', 'Research Papers', 'Case Studies', 'Newsletter'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Licenses'],
};

export const Footer = () => {
  return (
    <footer className="relative border-t border-border bg-card/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              {/* Logo en modo claro */}
            <img
              src="/src/imports/Logo-Color.png"
              alt="Live Room - Universidad de San Buenaventura"
              className="h-12 w-auto object-contain dark:hidden"
            />

            {/* Logo en modo oscuro */}
            <img
              src="/src/imports/Logo-Claro.png"
              alt="Live Room - Universidad de San Buenaventura"
              className="h-12 w-auto object-contain hidden dark:block"
            />

            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold text-foreground">
                Live Room
              </span>
              <span className="text-[10px] text-muted-foreground tracking-wider uppercase">
                Laboratorio
              </span>
            </div>
            </div>
            <p className="text-sm text-foreground/70 mb-6 max-w-sm">
              Pioneering innovation through cutting-edge research and development. Building tomorrow's solutions today.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-card border border-border hover:border-[#04BFBF]/50 flex items-center justify-center transition-all hover:scale-110 group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-foreground/60 group-hover:text-[#04BFBF] transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4 text-foreground">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-foreground/70 hover:text-[#04BFBF] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-foreground/60">
              © {new Date().getFullYear()} Labs. All rights reserved.
            </p>
            <div className="flex gap-1 items-center">
              <span className="text-sm text-foreground/60">Built with</span>
              <span className="text-red-500 mx-1">♥</span>
              <span className="text-sm text-foreground/60">using React & TailwindCSS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F2911B] via-[#04BFBF] to-[#037F8C]" />
    </footer>
  );
};
