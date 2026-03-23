# Modern Innovation Labs Landing Page

A cutting-edge, fully responsive landing page built with React, TailwindCSS, and modern web technologies.

## 🚀 Features

### 1. **Sticky Navigation Bar**
- Smooth scroll to sections
- Mobile-responsive menu
- Glassmorphism effect on scroll
- Links: About, Labs, Projects, Problems, Contact

### 2. **Hero Section**
- Full-screen height with animated particle background (tsparticles)
- Message carousel with smooth transitions
- YouTube LIVE badge (mock data, API-ready)
- Gradient text effects
- Call-to-action button with hover effects
- Scroll indicator animation

### 3. **About Section**
- Two-column responsive layout
- Mission, Vision, and Impact cards with icon-based design
- Glassmorphism card effects
- Scroll-triggered animations

### 4. **Labs Section**
- Dynamic data loaded from JSON
- Responsive grid layout (3 columns on desktop)
- Hover animations and image scaling
- Card-based design with gradients

### 5. **Projects Section**
- Swiper.js horizontal carousel
- Auto-play with manual navigation
- Responsive breakpoints (1/2/3 columns)
- Project tags and university badges
- Custom pagination with brand colors

### 6. **Problems & Solutions Section**
- Interactive 3D flip cards
- Click to reveal solution
- Problem → Solution flow
- Smooth card flip animations
- Gradient overlays on solution side

### 7. **Contact Section**
- Validated contact form (name, email, message)
- Focus animations on inputs
- Success state with animation
- Ready to integrate with email services (EmailJS, SendGrid, etc.)
- Glassmorphism background

### 8. **Footer**
- Clean, organized layout
- Social media links (GitHub, Twitter, LinkedIn, YouTube, Email)
- Quick links (Company, Resources, Legal)
- Gradient accent line

## 🎨 Design System

### Color Palette
- **Primary Orange**: `#F2911B` - Buttons, accents, CTAs
- **Secondary Cyan**: `#04BFBF` - Interactive elements, links, borders
- **Support Cyan**: `#037F8C` - Secondary elements, tags, dim accents

### Visual Style
- **Dark Mode**: Default theme with deep backgrounds
- **Glassmorphism**: Frosted glass effects on cards and overlays
- **Gradients**: Dynamic color transitions throughout
- **Neon Accents**: Cyan borders and glows
- **Modern Typography**: Clean spacing and hierarchy

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx              # Sticky navigation
│   │   ├── HeroSection.tsx         # Hero with particles
│   │   ├── AboutSection.tsx        # About with cards
│   │   ├── LabsSection.tsx         # Labs grid
│   │   ├── ProjectsSection.tsx     # Projects carousel
│   │   ├── ProblemsSection.tsx     # Flip cards
│   │   ├── ContactSection.tsx      # Contact form
│   │   └── Footer.tsx              # Footer
│   └── App.tsx                     # Main component
├── data/
│   ├── labs.json                   # Labs data
│   ├── projects.json               # Projects data
│   ├── problems.json               # Problems & solutions
│   └── hero-messages.json          # Hero carousel messages
├── hooks/
│   └── useYouTubeLiveStatus.ts     # YouTube live status hook
└── styles/
    ├── index.css                   # Global styles
    └── theme.css                   # Theme variables
```

## 🛠️ Technologies

- **React 18.3.1** - UI framework
- **TailwindCSS 4.x** - Utility-first CSS
- **Motion (Framer Motion)** - Advanced animations
- **tsparticles** - Particle background effects
- **Swiper.js** - Touch-enabled carousel
- **React Intersection Observer** - Scroll animations
- **Lucide React** - Icon library

## 🎯 Key Technical Features

### Component Architecture
- Composition API pattern (React hooks)
- Reusable components
- Separated data layer (JSON files)
- Custom hooks for logic reuse

### Performance
- Optimized particle rendering
- Lazy loading with Intersection Observer
- Smooth 60fps animations
- Responsive images from Unsplash

### Responsiveness
- Mobile-first design
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Touch-friendly interactions
- Adaptive layouts

### Animations
- Scroll-triggered reveals
- 3D flip card effects
- Particle network background
- Gradient transitions
- Hover states and micro-interactions

## 🔌 Integration Ready

### YouTube Live Status
The `useYouTubeLiveStatus` hook is ready to integrate with YouTube Data API v3:

1. Get API key from Google Cloud Console
2. Enable YouTube Data API v3
3. Replace mock logic with actual API call:
```typescript
const response = await fetch(
  `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&eventType=live&type=video&key=${apiKey}`
);
```

### Contact Form
The contact form is ready to integrate with:
- **EmailJS**: Client-side email sending
- **SendGrid**: Server-side email API
- **Formspree**: Form backend service
- **Custom API**: Your own backend endpoint

## 🎨 Customization

### Updating Colors
Edit `/src/styles/theme.css`:
```css
--orange-primary: #F2911B;
--cyan-secondary: #04BFBF;
--cyan-dim: #037F8C;
```

### Adding Data
Edit JSON files in `/src/data/`:
- `labs.json` - Add/remove lab entries
- `projects.json` - Add/remove projects
- `problems.json` - Add/remove problem-solution pairs
- `hero-messages.json` - Add/remove carousel slides

### Adjusting Animations
Modify animation parameters in component files:
- `duration` - Animation length
- `delay` - Stagger timing
- `threshold` - Scroll trigger point

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Getting Started

The project is ready to run! All dependencies are installed and configured.

### Development
The app automatically runs in development mode with hot-reload enabled.

### Production Build
Run the build command to create an optimized production bundle.

## 📄 License

This project structure and code are provided as-is for your use and customization.

---

**Built with ❤️ using React & TailwindCSS**
