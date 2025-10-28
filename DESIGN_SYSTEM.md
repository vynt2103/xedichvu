# Design System - NewDanang.vn

## 🎨 Color Palette

### Primary Colors
```css
--blue-600: #2563eb    /* Primary CTA, Links */
--blue-700: #1d4ed8    /* Hover states */
--blue-500: #3b82f6    /* Dark mode primary */
```

### Neutral Colors (Professional Tone)
```css
--slate-50: #f8fafc
--slate-100: #f1f5f9
--slate-600: #475569
--slate-700: #334155
--slate-800: #1e293b
--slate-900: #0f172a

--gray-50: #f9fafb
--gray-100: #f3f4f6
--gray-600: #4b5563
--gray-700: #374151
--gray-800: #1f2937
--gray-900: #111827
```

### Accent Colors (Minimal Use)
```css
--emerald-500: #10b981  /* Success, Verified badges */
--emerald-600: #059669
--red-500: #ef4444      /* Errors */
--amber-500: #f59e0b    /* Warnings */
```

### Gradients (Subtle Only)
```css
/* Backgrounds - Very subtle */
from-slate-50 via-gray-50 to-slate-100
from-gray-50 to-gray-100

/* Avoid bright gradients like */
❌ from-blue-600 to-purple-700
❌ from-blue-500 to-purple-600
```

---

## 📝 Typography

### Font Family
```css
font-family: 'Inter', system-ui, sans-serif;
```

### Scale
```css
text-xs: 12px       /* Small labels */
text-sm: 14px       /* Body small, captions */
text-base: 16px     /* Default body */
text-lg: 18px       /* Large body */
text-xl: 20px       /* Small headings */
text-2xl: 24px      /* H4 */
text-3xl: 30px      /* H3 */
text-4xl: 36px      /* H2 */
text-5xl: 48px      /* H1 Desktop */
text-6xl: 60px      /* Hero titles */
```

### Weights
```css
font-normal: 400    /* Body text */
font-medium: 500    /* Emphasis */
font-semibold: 600  /* Subheadings */
font-bold: 700      /* Headings */
font-extrabold: 800 /* Hero titles */
```

### Line Heights
```css
leading-tight: 1.25     /* Headings */
leading-snug: 1.375     /* Subheadings */
leading-normal: 1.5     /* Body */
leading-relaxed: 1.625  /* Long-form content */
```

---

## 📏 Spacing

### Scale (Tailwind-based)
```css
1: 4px
2: 8px
3: 12px
4: 16px
6: 24px
8: 32px
12: 48px
16: 64px
20: 80px
24: 96px
```

### Section Spacing
```css
py-16: Sections (mobile)
py-20: Sections (tablet)
py-24: Sections (desktop)
```

### Component Padding
```css
p-4: Small cards
p-6: Medium cards
p-8: Large cards
p-12: Hero sections
```

### Gaps
```css
gap-2: Tight groups
gap-4: Default
gap-6: Medium groups
gap-8: Section elements
```

---

## 🔘 Components

### Buttons

#### Primary
```tsx
className="rounded-xl bg-blue-600 hover:bg-blue-700 px-8 py-4 text-base font-bold text-white shadow-lg hover:shadow-xl transition-all"
```

#### Secondary
```tsx
className="rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 hover:border-blue-600 px-8 py-4 text-base font-bold text-gray-900 dark:text-white transition-all"
```

#### Zalo (Special)
```tsx
className="rounded-xl bg-emerald-500 hover:bg-emerald-600 px-8 py-4 text-base font-bold text-white shadow-lg transition-all"
```

### Cards

#### Standard
```tsx
className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-8 hover:shadow-xl transition-all"
```

#### Interactive
```tsx
className="group rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-xl transition-all"
```

### Inputs

#### Text Input
```tsx
className="w-full h-14 px-6 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none"
```

#### Textarea
```tsx
className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none resize-none"
```

---

## 🎯 Shadows

```css
shadow-sm: Subtle elevation
shadow-md: Cards
shadow-lg: Buttons, modals
shadow-xl: Hover states
shadow-2xl: Hero elements
```

### Usage
- **No shadow**: Flat elements
- **shadow-sm**: Subtle cards
- **shadow-md**: Default cards
- **shadow-lg**: CTAs, important cards
- **shadow-xl**: Hover effects
- **shadow-2xl**: Hero/modal overlays

---

## 🌟 Border Radius

```css
rounded-md: 6px     /* Small elements */
rounded-lg: 8px     /* Buttons (small) */
rounded-xl: 12px    /* Buttons, cards (default) */
rounded-2xl: 16px   /* Large cards */
rounded-3xl: 24px   /* Hero sections */
rounded-full: 9999px /* Badges, avatars */
```

---

## ⚡ Transitions

```css
transition-all: All properties
transition-colors: Colors only
transition-transform: Transform only

duration-150: Fast (150ms)
duration-300: Default (300ms)
duration-500: Slow (500ms)
```

### Easing
```css
ease-in-out: Default
ease-out: Enter animations
ease-in: Exit animations
```

---

## 🎭 Dark Mode

### Background Colors
```css
bg-white → dark:bg-gray-dark
bg-gray-50 → dark:bg-gray-900
bg-gray-100 → dark:bg-gray-800
```

### Text Colors
```css
text-gray-900 → dark:text-white
text-gray-600 → dark:text-gray-300
text-gray-500 → dark:text-gray-400
```

### Border Colors
```css
border-gray-200 → dark:border-gray-700
border-gray-300 → dark:border-gray-600
```

---

## 📐 Responsive Breakpoints

```css
sm: 640px   /* Mobile landscape */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
2xl: 1536px /* Extra large */
```

### Mobile-First Approach
```tsx
// Default = mobile
className="text-base"

// Tablet and up
className="text-base md:text-lg"

// Desktop and up
className="text-base md:text-lg lg:text-xl"
```

---

## ✅ Best Practices

### DO ✅
- Use subtle gradients (slate, gray)
- Consistent spacing (4px scale)
- Clear visual hierarchy
- Sufficient contrast ratios
- Smooth transitions (300ms)
- Mobile-first responsive
- Dark mode for all components

### DON'T ❌
- Bright gradients (blue-purple)
- Random spacing values
- Too many accent colors
- Low contrast text
- Abrupt state changes
- Desktop-only layouts
- Light mode only

---

## 🚀 Performance

### Images
- Always use Next/Image
- Lazy load by default
- AVIF/WebP formats
- Responsive sizes

### Animations
- Use framer-motion
- Keep duration < 500ms
- Avoid layout shifts
- Use GPU-accelerated properties (transform, opacity)

### Loading States
- Progress bar on navigation
- Skeleton loaders for content
- Optimistic UI updates
- Clear error states

---

**Last Updated**: October 28, 2025
**Status**: Production Ready ✅

