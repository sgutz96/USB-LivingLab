# Component Tree Structure

Visual representation of the component hierarchy and data flow.

---

## 📊 Component Hierarchy

```
App.tsx (Root)
├── <AnimatePresence>
│   └── LoadingScreen.tsx (conditional)
│
├── <div className="min-h-screen">
│   │
│   ├── Navbar.tsx
│   │   ├── Logo (gradient)
│   │   ├── Navigation Links (desktop)
│   │   └── Mobile Menu (hamburger)
│   │
│   ├── <main>
│   │   │
│   │   ├── HeroSection.tsx
│   │   │   ├── Particles (tsparticles)
│   │   │   ├── Gradient Overlay
│   │   │   ├── YouTube Live Badge (conditional)
│   │   │   ├── Message Carousel
│   │   │   │   ├── Headline (gradient text)
│   │   │   │   └── Subheadline
│   │   │   ├── CTA Button
│   │   │   ├── Carousel Controls
│   │   │   │   ├── Previous Button
│   │   │   │   ├── Dot Indicators
│   │   │   │   └── Next Button
│   │   │   └── Scroll Indicator
│   │   │
│   │   ├── AboutSection.tsx
│   │   │   ├── Section Header
│   │   │   ├── Two-Column Layout
│   │   │   │   ├── Text Content
│   │   │   │   └── Image (with decorative border)
│   │   │   └── Feature Cards (3)
│   │   │       ├── Mission Card
│   │   │       ├── Vision Card
│   │   │       └── Impact Card
│   │   │
│   │   ├── LabsSection.tsx
│   │   │   ├── Section Header
│   │   │   └── Labs Grid (from labs.json)
│   │   │       └── Lab Card (×6)
│   │   │           ├── Image
│   │   │           ├── Name
│   │   │           ├── Description
│   │   │           └── Learn More Link
│   │   │
│   │   ├── ProjectsSection.tsx
│   │   │   ├── Section Header
│   │   │   └── Swiper Carousel (from projects.json)
│   │   │       ├── Navigation Buttons
│   │   │       ├── Project Cards (×6)
│   │   │       │   ├── Image
│   │   │       │   ├── University Badge
│   │   │       │   ├── Title
│   │   │       │   ├── Description
│   │   │       │   ├── Tags
│   │   │       │   └── View Project Link
│   │   │       └── Pagination Dots
│   │   │
│   │   ├── ProblemsSection.tsx
│   │   │   ├── Section Header
│   │   │   └── Flip Cards Grid (from problems.json)
│   │   │       └── Flip Card (×6)
│   │   │           ├── Front (Problem)
│   │   │           │   ├── Alert Icon
│   │   │           │   ├── Problem Title
│   │   │           │   ├── Description
│   │   │           │   └── "Click to see solution"
│   │   │           └── Back (Solution)
│   │   │               ├── Check Icon
│   │   │               ├── Solution Title
│   │   │               ├── Description
│   │   │               └── "Click to see problem"
│   │   │
│   │   └── ContactSection.tsx
│   │       ├── Section Header
│   │       └── Contact Form Container
│   │           ├── Form (if not submitted)
│   │           │   ├── Name Input
│   │           │   ├── Email Input
│   │           │   ├── Message Textarea
│   │           │   └── Submit Button
│   │           └── Success Message (if submitted)
│   │               ├── Check Icon
│   │               └── Success Text
│   │
│   ├── Footer.tsx
│   │   ├── Main Footer Content
│   │   │   ├── Brand Section
│   │   │   │   ├── Logo
│   │   │   │   ├── Description
│   │   │   │   └── Social Links (×5)
│   │   │   ├── Company Links
│   │   │   ├── Resources Links
│   │   │   └── Legal Links
│   │   ├── Bottom Bar
│   │   │   ├── Copyright
│   │   │   └── Built With
│   │   └── Gradient Line
│   │
│   ├── ThemeToggle.tsx (floating)
│   │   └── Sun/Moon Icon (animated)
│   │
│   └── BackToTop.tsx (floating, conditional)
│       └── Arrow Up Icon
│
└── Global Styles & Effects
    ├── Smooth Scroll
    ├── Custom Scrollbar
    └── Dark Mode CSS
```

---

## 🔄 Data Flow

```
JSON Data Files
│
├── labs.json ──────────────► LabsSection.tsx
│   └── 6 lab objects              └── Maps to Lab Cards
│
├── projects.json ──────────► ProjectsSection.tsx
│   └── 6 project objects          └── Maps to Swiper Slides
│
├── problems.json ──────────► ProblemsSection.tsx
│   └── 6 problem-solution pairs   └── Maps to Flip Cards
│
└── hero-messages.json ─────► HeroSection.tsx
    └── 3 message objects          └── Maps to Carousel Slides
```

---

## 🎣 Custom Hooks

```
useYouTubeLiveStatus.ts
│
├── Input: channelId (optional)
│
├── Logic:
│   ├── Fetch live status (mock or API)
│   ├── Auto-refresh every 60s
│   └── Error handling
│
└── Output:
    ├── isLive: boolean
    ├── loading: boolean
    └── error: string | null
    
Used in: HeroSection.tsx
```

---

## 🎨 Styling Architecture

```
Theme System
│
├── /src/styles/theme.css
│   ├── CSS Variables
│   │   ├── --orange-primary: #F2911B
│   │   ├── --cyan-secondary: #04BFBF
│   │   └── --cyan-dim: #037F8C
│   │
│   ├── Light Theme (root)
│   └── Dark Theme (.dark)
│
├── /src/styles/index.css
│   ├── Smooth Scroll
│   ├── Custom Scrollbar
│   └── Global Utilities
│
└── TailwindCSS
    ├── Utility Classes
    ├── Responsive Breakpoints
    └── Custom Variants
```

---

## 🎬 Animation Flow

```
Page Load Sequence
│
1. LoadingScreen (0-2s)
│  └── Animated logo rotation
│
2. LoadingScreen fade out (2s)
│
3. Components appear
│  │
│  ├── Navbar (slides down)
│  │
│  ├── HeroSection (immediate)
│  │   ├── Particles initialize
│  │   ├── Content fades in
│  │   └── Carousel starts
│  │
│  └── Other Sections (on scroll)
│      └── Intersection Observer triggers
│          ├── Content slides up
│          └── Cards stagger in
```

---

## 📱 Responsive Behavior

```
Screen Size Adaptations
│
Mobile (< 640px)
├── Navbar: Hamburger menu
├── Grids: 1 column
├── Hero: Smaller text
├── Carousel: 1 slide
└── Footer: Stacked layout

Tablet (640-1023px)
├── Navbar: Hamburger menu
├── Grids: 2 columns
├── Hero: Medium text
├── Carousel: 2 slides
└── Footer: 2 columns

Desktop (≥ 1024px)
├── Navbar: Full horizontal
├── Grids: 3 columns
├── Hero: Large text
├── Carousel: 3 slides
└── Footer: 5 columns
```

---

## 🔌 External Integrations (Ready)

```
API Integration Points
│
├── YouTube Data API v3
│   ├── Hook: useYouTubeLiveStatus
│   ├── Endpoint: /search?eventType=live
│   └── Component: HeroSection (Live Badge)
│
└── Email Service
    ├── Options: EmailJS, SendGrid, Formspree
    ├── Handler: ContactSection (onSubmit)
    └── Data: { name, email, message }
```

---

## 📦 Component Dependencies

```
Component Dependencies
│
Navbar
└── lucide-react (Menu, X icons)
    motion (animations)

HeroSection
├── @tsparticles/react (Particles)
├── @tsparticles/slim (loadSlim)
├── lucide-react (ChevronLeft, ChevronRight, Radio)
├── motion (AnimatePresence, motion)
├── useYouTubeLiveStatus (custom hook)
└── hero-messages.json (data)

AboutSection
├── lucide-react (Target, Eye, Zap icons)
├── motion (animations)
└── react-intersection-observer (scroll detection)

LabsSection
├── lucide-react (ExternalLink icon)
├── motion (animations)
├── react-intersection-observer (scroll detection)
└── labs.json (data)

ProjectsSection
├── swiper (Swiper, SwiperSlide, modules)
├── lucide-react (ChevronLeft, ChevronRight, ExternalLink)
├── motion (animations)
├── react-intersection-observer (scroll detection)
└── projects.json (data)

ProblemsSection
├── lucide-react (AlertCircle, CheckCircle2)
├── motion (animations)
├── react-intersection-observer (scroll detection)
└── problems.json (data)

ContactSection
├── lucide-react (Send, CheckCircle2)
├── motion (animations)
└── react-intersection-observer (scroll detection)

Footer
└── lucide-react (Github, Twitter, Linkedin, Youtube, Mail)

ThemeToggle
├── lucide-react (Sun, Moon)
└── motion (animations)

BackToTop
├── lucide-react (ArrowUp)
└── motion (AnimatePresence, animations)

LoadingScreen
└── motion (animations)
```

---

## 🎯 State Management

```
App Component State
│
├── isLoading: boolean
│   └── Controls LoadingScreen visibility
│
HeroSection State
├── currentSlide: number
│   └── Carousel current index
│
ProblemsSection State
├── flippedCards: number[]
│   └── Tracks which cards are flipped
│
ContactSection State
├── formData: { name, email, message }
│   └── Form input values
└── isSubmitted: boolean
    └── Form submission status

ThemeToggle State
├── isDark: boolean
│   └── Current theme
└── localStorage: 'theme'
    └── Persisted theme preference
```

---

## 📊 Performance Optimizations

```
Optimization Strategy
│
├── Lazy Loading
│   └── Intersection Observer
│       ├── AboutSection animations
│       ├── LabsSection animations
│       ├── ProjectsSection animations
│       ├── ProblemsSection animations
│       └── ContactSection animations
│
├── Memoization
│   ├── useCallback (particlesInit)
│   └── Static data imports
│
├── Efficient Rendering
│   ├── Key props on lists
│   ├── Conditional rendering
│   └── AnimatePresence mode="wait"
│
└── Asset Optimization
    ├── Unsplash image parameters (?w=800&q=80)
    └── SVG icons (lucide-react)
```

---

## 🗺️ Navigation Map

```
Page Navigation Structure
│
Hero (#hero)
│
├─► About (#about)
│   └── Mission, Vision, Impact
│
├─► Labs (#labs)
│   └── Research laboratories
│
├─► Projects (#projects)
│   └── Featured projects
│
├─► Problems (#problems)
│   └── Solutions showcase
│
└─► Contact (#contact)
    └── Contact form

All accessible via:
├── Navbar links (smooth scroll)
├── Hero CTA (scrolls to About)
└── BackToTop button (scrolls to Hero)
```

---

**Component Tree Complete** ✅

Total Components: 12  
Total Data Files: 4  
Total Hooks: 1  
Total Lines: ~2,000+

---

*Visual representation of the complete landing page architecture*
