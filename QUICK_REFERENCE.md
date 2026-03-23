# 🚀 Quick Reference Card

## 📂 File Locations

### Components
```
/src/app/components/
├── Navbar.tsx           - Top navigation
├── HeroSection.tsx      - Hero with particles
├── AboutSection.tsx     - About us
├── LabsSection.tsx      - Research labs
├── ProjectsSection.tsx  - Project carousel
├── ProblemsSection.tsx  - Flip cards
├── ContactSection.tsx   - Contact form
├── Footer.tsx           - Footer
├── ThemeToggle.tsx      - Dark/light toggle
├── BackToTop.tsx        - Scroll to top button
└── LoadingScreen.tsx    - Initial loader
```

### Data Files
```
/src/data/
├── labs.json           - Lab cards data
├── projects.json       - Project carousel data
├── problems.json       - Problem-solution pairs
└── hero-messages.json  - Hero carousel messages
```

### Styles
```
/src/styles/
├── theme.css           - Color variables
├── index.css           - Global styles
└── fonts.css           - Font imports
```

---

## 🎨 Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| **Primary Orange** | `#F2911B` | Buttons, CTAs, primary accents |
| **Secondary Cyan** | `#04BFBF` | Links, interactive elements, borders |
| **Support Cyan** | `#037F8C` | Badges, secondary text, dim accents |

### CSS Variables
```css
var(--orange-primary)
var(--cyan-secondary)
var(--cyan-dim)
```

---

## 📝 Common Customizations

### Change Logo Text
**File**: `/src/app/components/Navbar.tsx` and `/src/app/components/Footer.tsx`
```tsx
<span>Labs</span>  // ← Change this
```

### Add New Lab
**File**: `/src/data/labs.json`
```json
{
  "id": 7,
  "name": "Your Lab Name",
  "description": "Your description",
  "image": "https://images.unsplash.com/..."
}
```

### Add New Project
**File**: `/src/data/projects.json`
```json
{
  "id": 7,
  "title": "Project Name",
  "description": "Description",
  "tags": ["Tag1", "Tag2"],
  "link": "#",
  "university": "Institution",
  "image": "https://images.unsplash.com/..."
}
```

### Update Social Links
**File**: `/src/app/components/Footer.tsx`
```tsx
const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'YOUR_URL' },
  // ... update hrefs
];
```

### Change Theme Colors
**File**: `/src/styles/theme.css`
```css
:root {
  --orange-primary: #YOUR_COLOR;
  --cyan-secondary: #YOUR_COLOR;
  --cyan-dim: #YOUR_COLOR;
}
```

---

## 🔧 Key Features Toggle

### Disable Loading Screen
**File**: `/src/app/App.tsx`
```tsx
const [isLoading, setIsLoading] = useState(false); // Change to false
```

### Change Carousel Speed
**File**: `/src/app/components/HeroSection.tsx`
```tsx
const interval = setInterval(() => {
  setCurrentSlide(...)
}, 5000); // ← Change milliseconds
```

**File**: `/src/app/components/ProjectsSection.tsx`
```tsx
autoplay={{
  delay: 5000, // ← Change milliseconds
}}
```

### Disable Particle Effect
**File**: `/src/app/components/HeroSection.tsx`
```tsx
// Comment out or remove the Particles component
{/* <Particles ... /> */}
```

---

## 🎯 Section IDs (for Navigation)

| Section | ID | Link |
|---------|-----|------|
| Hero | `#hero` | Automatic |
| About | `#about` | In navbar |
| Labs | `#labs` | In navbar |
| Projects | `#projects` | In navbar |
| Problems | `#problems` | In navbar |
| Contact | `#contact` | In navbar |

---

## 📱 Responsive Breakpoints

| Breakpoint | Width | Usage |
|------------|-------|-------|
| **Mobile** | < 640px | 1 column |
| **sm** | ≥ 640px | Tablet portrait |
| **md** | ≥ 768px | Tablet landscape |
| **lg** | ≥ 1024px | Desktop |

---

## 🎬 Animation Timing

| Element | Duration | Delay |
|---------|----------|-------|
| Page load | 2000ms | - |
| Section reveal | 600ms | 0-300ms |
| Card hover | 300ms | - |
| Carousel auto | 5000ms | - |
| Flip card | 700ms | - |

---

## 📦 Installed Packages

### Core
- `react` - UI framework
- `tailwindcss` - Styling
- `motion` - Animations

### Features
- `@tsparticles/react` - Particle background
- `@tsparticles/slim` - Particle engine
- `swiper` - Carousels
- `react-intersection-observer` - Scroll detection
- `lucide-react` - Icons

---

## 🔍 Find & Replace

### Change Company Name Throughout
Search: `Labs`
Replace: `Your Company Name`

Files to check:
- Navbar.tsx
- Footer.tsx
- README.md
- All other documentation

### Update Copyright Year
**File**: `/src/app/components/Footer.tsx`
```tsx
© {new Date().getFullYear()} // Auto-updates
```

---

## ⚡ Performance Tips

1. **Images**: Use Unsplash URLs with `?w=800&q=80` params
2. **Animations**: Keep under 60fps target
3. **Data**: Keep JSON files under 100 items each
4. **Particles**: Reduce count if laggy (default: 80)

---

## 🐛 Troubleshooting

### Carousel not working?
- Check Swiper imports in ProjectsSection.tsx
- Verify swiper package is installed

### Particles not showing?
- Check tsparticles packages are installed
- Verify dark mode is enabled

### Theme toggle not working?
- Check localStorage permissions
- Clear browser cache

### Animations stuttering?
- Reduce particle count
- Check browser hardware acceleration
- Close other tabs/applications

---

## 📞 Integration Guides

### YouTube API
**Hook**: `/src/hooks/useYouTubeLiveStatus.ts`
1. Get API key from Google Cloud Console
2. Enable YouTube Data API v3
3. Replace mock logic with API call
4. Add API key to environment variables

### EmailJS (Contact Form)
**Component**: `/src/app/components/ContactSection.tsx`
```tsx
import emailjs from '@emailjs/browser';

emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  formData,
  'YOUR_PUBLIC_KEY'
);
```

---

## 🎨 Gradient Generator

Quick gradients using brand colors:
```css
/* Orange to Cyan */
background: linear-gradient(to right, #F2911B, #04BFBF);

/* Cyan to Support */
background: linear-gradient(to right, #04BFBF, #037F8C);

/* Full spectrum */
background: linear-gradient(to right, #F2911B, #04BFBF, #037F8C);
```

---

## ✅ Pre-launch Checklist

- [ ] Update all JSON data files
- [ ] Replace placeholder images
- [ ] Update social media links
- [ ] Change company name/logo
- [ ] Test all sections on mobile
- [ ] Test contact form
- [ ] Update meta tags (if added)
- [ ] Test all hover states
- [ ] Verify all links work
- [ ] Test dark/light mode toggle

---

## 📚 Further Reading

- [README.md](/README.md) - Full documentation
- [DATA_GUIDE.md](/DATA_GUIDE.md) - Data customization
- [FEATURES.md](/FEATURES.md) - Complete feature list

---

**Ready to customize!** 🎉 Start with the JSON files in `/src/data/`
