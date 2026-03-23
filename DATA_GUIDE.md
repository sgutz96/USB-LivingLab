# Data Structure Guide

This guide explains how to customize the content of your landing page by editing the JSON data files.

## 📁 Data Files Location

All data files are located in `/src/data/`

---

## 1️⃣ Labs Data (`labs.json`)

**Purpose**: Defines the research labs displayed in the Labs section.

**Structure**:
```json
{
  "id": number,           // Unique identifier
  "name": string,         // Lab name
  "description": string,  // Brief description of the lab
  "image": string         // Unsplash image URL
}
```

**Example**:
```json
{
  "id": 1,
  "name": "AI Research Lab",
  "description": "Exploring cutting-edge artificial intelligence...",
  "image": "https://images.unsplash.com/photo-..."
}
```

**How to Add a Lab**:
1. Open `/src/data/labs.json`
2. Add a new object to the array with a unique `id`
3. Fill in the name, description, and image URL
4. Save the file - it will automatically appear on the site

---

## 2️⃣ Projects Data (`projects.json`)

**Purpose**: Defines featured projects shown in the carousel.

**Structure**:
```json
{
  "id": number,           // Unique identifier
  "title": string,        // Project title
  "description": string,  // Project description
  "tags": string[],       // Array of technology tags
  "link": string,         // URL to project details
  "university": string,   // Associated institution
  "image": string         // Project image URL
}
```

**Example**:
```json
{
  "id": 1,
  "title": "Neural Network Optimizer",
  "description": "Advanced deep learning framework...",
  "tags": ["AI", "Machine Learning", "Python"],
  "link": "#",
  "university": "MIT",
  "image": "https://images.unsplash.com/photo-..."
}
```

**Tag Styling**:
- Tags automatically get cyan accent colors
- Keep tags short (1-3 words)
- Maximum 3-4 tags per project recommended

---

## 3️⃣ Problems & Solutions (`problems.json`)

**Purpose**: Defines the interactive flip cards showing problems and solutions.

**Structure**:
```json
{
  "id": number,                  // Unique identifier
  "problem": string,             // Problem title
  "description": string,         // Problem description (front of card)
  "solution": string,            // Solution title
  "solutionDescription": string  // Solution description (back of card)
}
```

**Example**:
```json
{
  "id": 1,
  "problem": "Data Privacy Breaches",
  "description": "Organizations struggle with protecting...",
  "solution": "Zero-Knowledge Encryption",
  "solutionDescription": "Implement end-to-end encryption..."
}
```

**Writing Tips**:
- **Problem**: Keep concise and impactful
- **Description**: Explain the challenge clearly
- **Solution**: Provide a clear solution name
- **SolutionDescription**: Explain how it solves the problem

---

## 4️⃣ Hero Messages (`hero-messages.json`)

**Purpose**: Defines the rotating messages in the hero section carousel.

**Structure**:
```json
{
  "id": number,      // Unique identifier
  "text": string,    // Main headline
  "subtext": string  // Supporting text
}
```

**Example**:
```json
{
  "id": 1,
  "text": "Innovating the Future of Technology",
  "subtext": "Join us in building tomorrow's solutions today"
}
```

**Best Practices**:
- **Text**: Keep under 60 characters for best display
- **Subtext**: Keep under 80 characters
- Add 3-5 messages for variety
- Messages auto-rotate every 5 seconds

---

## 🎨 Image Guidelines

### Finding Images

All images use Unsplash URLs for high-quality, free stock photos:
- Visit: https://unsplash.com
- Search for relevant topics
- Click on an image
- Copy the URL (add `?w=800&q=80` for optimization)

### Image Recommendations

**Labs Section**:
- Technology, laboratory, research imagery
- Aspect ratio: Square or landscape
- Suggested size: 800x800px or 800x600px

**Projects Section**:
- Tech, innovation, specific technology imagery
- Aspect ratio: Landscape (16:9 or 4:3)
- Suggested size: 800x450px

**About Section**:
- Space, technology, innovation, global imagery
- Aspect ratio: Square
- Suggested size: 800x800px

---

## 🔄 Auto-Updates

All data files are imported and used directly in the components:
- **No rebuild needed** - just refresh the browser
- **Hot reload enabled** - changes appear immediately in development
- **Type-safe** - TypeScript will catch structure errors

---

## ⚠️ Important Notes

1. **Valid JSON**: Ensure proper JSON syntax (commas, quotes, brackets)
2. **Unique IDs**: Each item must have a unique `id` number
3. **Image URLs**: Use valid HTTPS URLs (Unsplash recommended)
4. **Special Characters**: Escape quotes in text (`\"`)

---

## 🛠️ Validation

To check if your JSON is valid:
1. Copy the JSON content
2. Visit: https://jsonlint.com
3. Paste and validate
4. Fix any syntax errors shown

---

## 📝 Example: Adding a New Lab

1. Open `/src/data/labs.json`
2. Find the highest `id` number (e.g., 6)
3. Add new entry:
```json
{
  "id": 7,
  "name": "Robotics Lab",
  "description": "Developing autonomous systems and intelligent robots",
  "image": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80"
}
```
4. Save and refresh - your new lab appears!

---

## 🎯 Quick Customization Checklist

- [ ] Update lab names and descriptions in `labs.json`
- [ ] Add your real projects to `projects.json`
- [ ] Customize problem-solution pairs in `problems.json`
- [ ] Write your own hero messages in `hero-messages.json`
- [ ] Replace all images with your own or relevant Unsplash images
- [ ] Update social links in `Footer.tsx` component
- [ ] Customize company name throughout

---

**Need help?** Check the component files in `/src/app/components/` to see how data is used.
