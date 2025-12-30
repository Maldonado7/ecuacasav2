# EcuaCasa Design System

> A comprehensive UI/UX design system for the EcuaCasa home services marketplace

---

## Table of Contents
1. [Brand Identity](#brand-identity)
2. [Design Principles](#design-principles)
3. [Color System](#color-system)
4. [Typography](#typography)
5. [Spacing & Layout](#spacing--layout)
6. [Component Library](#component-library)
7. [Page Layouts](#page-layouts)
8. [Responsive Design](#responsive-design)
9. [Accessibility](#accessibility)
10. [Motion & Animation](#motion--animation)

---

## 1. Brand Identity

### Brand Essence
**EcuaCasa** connects expats in Cuenca, Ecuador with trusted, vetted local service providers.

**Core Values:**
- **Trust** - Vetted, verified professionals
- **Simplicity** - Easy to find and contact providers
- **Accessibility** - Bilingual support (English/Spanish)
- **Community** - Serving the expat community in Cuenca

### Brand Personality
- **Professional** yet approachable
- **Trustworthy** and reliable
- **Modern** but not intimidating
- **Warm** and welcoming
- **Efficient** and straightforward

### Visual Identity
- Clean, modern aesthetic
- Approachable, friendly tone
- Professional without being corporate
- Light, airy feel with plenty of whitespace
- Real photos of providers (builds trust)

---

## 2. Design Principles

### 1. Trust First
Every design decision should reinforce trust. Use verification badges, real photos, clear ratings, and transparent information.

### 2. Mobile-First
70%+ of users will be on mobile. Design for thumb-friendly interactions, with desktop as an enhancement.

### 3. Bilingual by Default
All UI should support English and Spanish seamlessly. Text should never feel cramped when switching languages.

### 4. Clarity Over Cleverness
Use straightforward UI patterns. Don't make users think. The path to contact a provider should be obvious.

### 5. WhatsApp is King
In Latin America, WhatsApp is the primary communication channel. Make WhatsApp CTAs prominent and unmistakable.

### 6. Speed Matters
Fast load times build trust. Optimize images, minimize JS, use loading states.

---

## 3. Color System

### Primary Colors (Blue)
**Purpose:** Professional, trustworthy, calming

```css
--primary-50:  #eff6ff;  /* Lightest - backgrounds */
--primary-100: #dbeafe;  /* Light - hover states */
--primary-200: #bfdbfe;  /* Borders, dividers */
--primary-300: #93c5fd;  /* Muted accents */
--primary-400: #60a5fa;  /* Secondary buttons */
--primary-500: #3b82f6;  /* Primary brand color */
--primary-600: #2563eb;  /* Primary hover */
--primary-700: #1d4ed8;  /* Active states */
--primary-800: #1e40af;  /* Dark text */
--primary-900: #1e3a8a;  /* Darkest */
```

**Usage:**
- Primary CTA buttons: `primary-600`
- Links: `primary-600`
- Accents: `primary-500`
- Backgrounds: `primary-50`

### Accent Colors (Warm Orange/Amber)
**Purpose:** Friendly, welcoming, energetic

```css
--accent-50:  #fffbeb;  /* Lightest */
--accent-100: #fef3c7;  /* Light backgrounds */
--accent-200: #fde68a;  /* Borders */
--accent-300: #fcd34d;  /* Badges, highlights */
--accent-400: #fbbf24;  /* Icons */
--accent-500: #f59e0b;  /* Accent brand color */
--accent-600: #d97706;  /* Hover */
--accent-700: #b45309;  /* Active */
--accent-800: #92400e;  /* Dark */
--accent-900: #78350f;  /* Darkest */
```

**Usage:**
- Featured badges: `accent-400`
- Highlights: `accent-100` backgrounds
- Warning states: `accent-600`
- Star ratings: `accent-400`

### Semantic Colors

#### Success (Green)
```css
--success-50:  #f0fdf4;
--success-500: #22c55e;
--success-600: #16a34a;  /* Primary success */
--success-700: #15803d;
```

#### Warning (Yellow)
```css
--warning-50:  #fefce8;
--warning-500: #eab308;
--warning-600: #ca8a04;  /* Primary warning */
--warning-700: #a16207;
```

#### Error (Red)
```css
--error-50:  #fef2f2;
--error-500: #ef4444;
--error-600: #dc2626;  /* Primary error */
--error-700: #b91c1c;
```

#### WhatsApp Brand
```css
--whatsapp:      #25D366;  /* WhatsApp green */
--whatsapp-dark: #128C7E;  /* Hover state */
```

**Critical:** Always use exact WhatsApp brand colors for contact buttons.

### Neutral Colors (Grays)
```css
--gray-50:  #f9fafb;  /* Page backgrounds */
--gray-100: #f3f4f6;  /* Card backgrounds */
--gray-200: #e5e7eb;  /* Borders */
--gray-300: #d1d5db;  /* Disabled states */
--gray-400: #9ca3af;  /* Placeholders */
--gray-500: #6b7280;  /* Secondary text */
--gray-600: #4b5563;  /* Body text */
--gray-700: #374151;  /* Headings */
--gray-800: #1f2937;  /* Dark headings */
--gray-900: #111827;  /* Darkest text */
```

### Backgrounds
```css
--bg-primary:   #ffffff;  /* White - main content */
--bg-secondary: #f9fafb;  /* gray-50 - page bg */
--bg-tertiary:  #f3f4f6;  /* gray-100 - cards */
```

### Text Colors
```css
--text-primary:   #1f2937;  /* gray-800 - headings */
--text-secondary: #4b5563;  /* gray-600 - body */
--text-tertiary:  #6b7280;  /* gray-500 - muted */
--text-disabled:  #9ca3af;  /* gray-400 */
```

---

## 4. Typography

### Font Family
```css
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

**Why Inter?**
- Excellent readability at all sizes
- Professional, modern feel
- Great bilingual support (English/Spanish)
- Variable font (performance)
- Open source

### Font Sizes (Mobile-first scale)

```css
/* Mobile */
--text-xs:   0.75rem;   /* 12px */
--text-sm:   0.875rem;  /* 14px */
--text-base: 1rem;      /* 16px - body text */
--text-lg:   1.125rem;  /* 18px */
--text-xl:   1.25rem;   /* 20px */
--text-2xl:  1.5rem;    /* 24px */
--text-3xl:  1.875rem;  /* 30px */
--text-4xl:  2.25rem;   /* 36px - hero mobile */
--text-5xl:  3rem;      /* 48px */
--text-6xl:  3.75rem;   /* 60px - hero desktop */

/* Desktop modifiers (md:text-*) */
--text-4xl-desktop: 3rem;    /* 48px */
--text-5xl-desktop: 3.75rem; /* 60px */
--text-6xl-desktop: 4.5rem;  /* 72px */
```

### Type Scale Usage

| Element | Mobile | Desktop | Weight | Color |
|---------|--------|---------|--------|-------|
| **Hero Headline** | text-4xl (36px) | text-6xl (60px) | Bold (700) | gray-900 |
| **H1 (Page Title)** | text-3xl (30px) | text-4xl (36px) | Bold (700) | gray-900 |
| **H2 (Section)** | text-2xl (24px) | text-3xl (30px) | SemiBold (600) | gray-800 |
| **H3 (Subsection)** | text-xl (20px) | text-2xl (24px) | SemiBold (600) | gray-800 |
| **H4 (Card Title)** | text-lg (18px) | text-xl (20px) | Medium (500) | gray-700 |
| **Body Large** | text-lg (18px) | text-lg (18px) | Regular (400) | gray-600 |
| **Body** | text-base (16px) | text-base (16px) | Regular (400) | gray-600 |
| **Body Small** | text-sm (14px) | text-sm (14px) | Regular (400) | gray-500 |
| **Caption** | text-xs (12px) | text-xs (12px) | Regular (400) | gray-500 |
| **Button** | text-sm (14px) | text-base (16px) | Medium (500) | - |
| **Badge** | text-xs (12px) | text-xs (12px) | Medium (500) | - |

### Font Weights
```css
--font-normal:    400;  /* Body text */
--font-medium:    500;  /* Buttons, emphasis */
--font-semibold:  600;  /* Headings */
--font-bold:      700;  /* Hero, important headings */
```

### Line Heights
```css
--leading-none:   1;      /* Tight headings */
--leading-tight:  1.25;   /* Headings */
--leading-snug:   1.375;  /* Subheadings */
--leading-normal: 1.5;    /* Body text */
--leading-relaxed: 1.625; /* Long-form content */
--leading-loose:  2;      /* Spaced content */
```

**Usage:**
- **Headings:** `leading-tight` (1.25)
- **Body text:** `leading-normal` (1.5)
- **Long-form:** `leading-relaxed` (1.625)

### Letter Spacing
```css
--tracking-tighter: -0.05em;
--tracking-tight:   -0.025em;  /* Large headings */
--tracking-normal:  0;         /* Default */
--tracking-wide:    0.025em;   /* Buttons, labels */
--tracking-wider:   0.05em;
--tracking-widest:  0.1em;     /* All-caps labels */
```

---

## 5. Spacing & Layout

### Spacing Scale (Tailwind-based)
```css
--space-0:   0;
--space-px:  1px;
--space-0.5: 0.125rem;  /* 2px */
--space-1:   0.25rem;   /* 4px */
--space-1.5: 0.375rem;  /* 6px */
--space-2:   0.5rem;    /* 8px */
--space-2.5: 0.625rem;  /* 10px */
--space-3:   0.75rem;   /* 12px */
--space-4:   1rem;      /* 16px */
--space-5:   1.25rem;   /* 20px */
--space-6:   1.5rem;    /* 24px */
--space-8:   2rem;      /* 32px */
--space-10:  2.5rem;    /* 40px */
--space-12:  3rem;      /* 48px */
--space-16:  4rem;      /* 64px */
--space-20:  5rem;      /* 80px */
--space-24:  6rem;      /* 96px */
```

### Layout Spacing Guidelines

| Use Case | Mobile | Desktop |
|----------|--------|---------|
| **Component Internal Padding** | 4 (16px) | 6 (24px) |
| **Card Padding** | 4-5 (16-20px) | 6 (24px) |
| **Section Padding (vertical)** | 12 (48px) | 16-20 (64-80px) |
| **Element Margin** | 2-3 (8-12px) | 3-4 (12-16px) |
| **Stack Spacing** | 4 (16px) | 6 (24px) |
| **Grid Gap** | 4-6 (16-24px) | 6-8 (24-32px) |

### Container Widths
```css
--container-sm:  640px;   /* sm breakpoint */
--container-md:  768px;   /* md breakpoint */
--container-lg:  1024px;  /* lg breakpoint */
--container-xl:  1280px;  /* xl breakpoint - max width */
--container-2xl: 1536px;  /* 2xl (rarely used) */
```

**Standard container:**
```css
.container {
  width: 100%;
  max-width: 1280px;  /* xl */
  margin: 0 auto;
  padding: 0 1rem;  /* 16px mobile */
}

@media (min-width: 768px) {
  .container {
    padding: 0 2rem;  /* 32px desktop */
  }
}
```

### Grid System
```css
/* 12-column grid */
.grid-cols-1   /* Mobile - single column */
.grid-cols-2   /* Mobile - 2 columns */
.md:grid-cols-3 /* Tablet - 3 columns */
.lg:grid-cols-4 /* Desktop - 4 columns */
```

**Common layouts:**
- **Service cards:** 1 col mobile → 2 col tablet → 3 col desktop
- **Provider cards:** 1 col mobile → 2 col tablet → 3 col desktop
- **Featured providers:** 1 col mobile → 2 col tablet → 4 col desktop

### Border Radius
```css
--radius-none: 0;
--radius-sm:   0.125rem;  /* 2px */
--radius-DEFAULT: 0.5rem; /* 8px - default */
--radius-md:   0.375rem;  /* 6px */
--radius-lg:   0.5rem;    /* 8px */
--radius-xl:   0.75rem;   /* 12px - cards */
--radius-2xl:  1rem;      /* 16px */
--radius-3xl:  1.5rem;    /* 24px */
--radius-full: 9999px;    /* Pills, avatars */
```

**Usage:**
- **Cards:** `radius-xl` (12px)
- **Buttons:** `radius-lg` (8px)
- **Inputs:** `radius-lg` (8px)
- **Badges:** `radius-full` (pill shape)
- **Images:** `radius-lg` (8px)

---

## 6. Component Library

### 6.1 Buttons

#### Primary Button
```tsx
<button className="
  px-6 py-3
  bg-primary-600 hover:bg-primary-700
  text-white font-medium
  rounded-lg
  transition-colors duration-200
  shadow-sm hover:shadow-md
">
  Find Providers
</button>
```

**Variants:**
- **Primary:** Blue, for main actions
- **Secondary:** White bg, blue border, blue text
- **WhatsApp:** Green (#25D366), for contact CTAs
- **Outline:** Transparent bg, gray border
- **Ghost:** Transparent bg, no border
- **Destructive:** Red, for delete actions

**Sizes:**
- **sm:** `px-3 py-1.5 text-sm` (12px padding, 14px text)
- **md:** `px-4 py-2 text-base` (16px padding, 16px text) - default
- **lg:** `px-6 py-3 text-base` (24px padding, 16px text)
- **xl:** `px-8 py-4 text-lg` (32px padding, 18px text)

**States:**
- **Default:** Base colors
- **Hover:** Darken bg by one shade, add shadow
- **Active:** Darken bg by two shades
- **Disabled:** gray-300 bg, gray-400 text, no hover, cursor-not-allowed
- **Loading:** Show spinner, disable interaction

#### WhatsApp Button (Special)
```tsx
<button className="
  px-6 py-3
  bg-[#25D366] hover:bg-[#128C7E]
  text-white font-medium
  rounded-lg
  transition-all duration-200
  shadow-md hover:shadow-lg
  flex items-center gap-2
">
  <MessageCircle className="w-5 h-5" />
  Contact via WhatsApp
</button>
```

**Critical:** Always use exact WhatsApp colors, never substitute.

### 6.2 Cards

#### Provider Card
```tsx
<div className="
  bg-white
  rounded-xl
  shadow-sm hover:shadow-md
  border border-gray-200
  overflow-hidden
  transition-shadow duration-200
  cursor-pointer
">
  {/* Image */}
  <div className="aspect-square relative">
    <img src="..." alt="..." className="object-cover w-full h-full" />
  </div>

  {/* Content */}
  <div className="p-5">
    {/* Name + Badges */}
    <div className="flex items-start justify-between mb-2">
      <h3 className="text-lg font-semibold text-gray-900">Provider Name</h3>
      <div className="flex gap-1">
        {/* Badges */}
      </div>
    </div>

    {/* Rating */}
    <div className="flex items-center gap-2 mb-3">
      {/* Stars */}
      <span className="text-sm text-gray-600">(24 reviews)</span>
    </div>

    {/* Services */}
    <div className="flex flex-wrap gap-2 mb-4">
      <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
        Plumbing
      </span>
    </div>

    {/* CTA */}
    <button className="w-full bg-whatsapp text-white ...">
      Contact
    </button>
  </div>
</div>
```

**Card Elevation:**
- **Default:** `shadow-sm border border-gray-200`
- **Hover:** `shadow-md`
- **Active/Selected:** `shadow-lg border-primary-500`

### 6.3 Badges

#### Verified Badge
```tsx
<span className="
  inline-flex items-center gap-1
  px-2 py-1
  bg-primary-50 text-primary-700
  text-xs font-medium
  rounded-full
  border border-primary-200
">
  <CheckCircle className="w-3 h-3" />
  Verified
</span>
```

#### Speaks English Badge
```tsx
<span className="
  inline-flex items-center gap-1
  px-2 py-1
  bg-accent-50 text-accent-700
  text-xs font-medium
  rounded-full
  border border-accent-200
">
  <Languages className="w-3 h-3" />
  Speaks English
</span>
```

**Badge Variants:**
- **Verified:** Blue (primary-50/700)
- **English:** Amber (accent-50/700)
- **Featured:** Gold/Yellow (yellow-50/700)
- **Status:** Green/Red/Gray based on state
- **Price Range:** Gray (gray-100/600) - $, $$, $$$

### 6.4 Form Inputs

#### Text Input
```tsx
<div className="space-y-2">
  <label className="text-sm font-medium text-gray-700">
    Full Name
  </label>
  <input
    type="text"
    className="
      w-full px-4 py-2.5
      bg-white border border-gray-300
      rounded-lg
      text-gray-900 placeholder:text-gray-400
      focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
      transition-shadow duration-200
    "
    placeholder="Enter your name"
  />
  {/* Error state */}
  <p className="text-sm text-error-600">This field is required</p>
</div>
```

**States:**
- **Default:** gray-300 border
- **Focus:** ring-2 ring-primary-500, remove border color
- **Error:** border-error-500, show error message
- **Disabled:** gray-100 bg, gray-400 text, cursor-not-allowed
- **Success:** border-success-500 (optional)

#### Select Dropdown
```tsx
<select className="
  w-full px-4 py-2.5
  bg-white border border-gray-300
  rounded-lg
  text-gray-900
  focus:outline-none focus:ring-2 focus:ring-primary-500
  appearance-none
  cursor-pointer
">
  <option value="">Select a service</option>
  <option value="plumbing">Plumbing</option>
</select>
```

#### Checkbox
```tsx
<label className="flex items-center gap-3 cursor-pointer">
  <input
    type="checkbox"
    className="
      w-5 h-5
      text-primary-600
      border-gray-300 rounded
      focus:ring-2 focus:ring-primary-500
      cursor-pointer
    "
  />
  <span className="text-sm text-gray-700">I speak English</span>
</label>
```

### 6.5 Navigation

#### Navbar (Desktop)
```tsx
<nav className="
  bg-white border-b border-gray-200
  sticky top-0 z-50
  shadow-sm
">
  <div className="container mx-auto px-6">
    <div className="flex items-center justify-between h-16">
      {/* Logo */}
      <div className="flex items-center gap-8">
        <a href="/" className="text-2xl font-bold text-primary-600">
          EcuaCasa
        </a>
        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          <a href="/services" className="text-gray-700 hover:text-primary-600 transition-colors">
            Services
          </a>
          {/* ... more links */}
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        {/* Language Toggle */}
        {/* Auth/Admin Link */}
      </div>
    </div>
  </div>
</nav>
```

**Navbar Height:**
- Mobile: 64px (h-16)
- Desktop: 64px (h-16)

**Link States:**
- Default: gray-700
- Hover: primary-600
- Active: primary-700 font-semibold

### 6.6 Rating Stars
```tsx
<div className="flex items-center gap-1">
  {[1, 2, 3, 4, 5].map((star) => (
    <Star
      key={star}
      className={`w-5 h-5 ${
        star <= rating
          ? 'fill-accent-400 text-accent-400'
          : 'fill-gray-200 text-gray-200'
      }`}
    />
  ))}
</div>
```

**Always use accent-400 (amber/gold) for filled stars.**

### 6.7 Search Bar
```tsx
<div className="
  bg-white rounded-xl shadow-lg border border-gray-200
  p-6
  max-w-3xl mx-auto
">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {/* Service Select */}
    <div>
      <label className="text-sm font-medium text-gray-700 mb-2">Service</label>
      <select className="...">...</select>
    </div>

    {/* Location Select */}
    <div>
      <label className="text-sm font-medium text-gray-700 mb-2">Location</label>
      <select className="...">...</select>
    </div>

    {/* Search Button */}
    <div className="flex items-end">
      <button className="w-full bg-primary-600 text-white py-3 rounded-lg">
        Find Providers
      </button>
    </div>
  </div>
</div>
```

---

## 7. Page Layouts

### 7.1 Homepage Layout

```
┌─────────────────────────────────────────┐
│           Navbar (sticky)               │
├─────────────────────────────────────────┤
│                                         │
│         Hero Section                    │
│    - Headline + Subheadline            │
│    - Search Bar                         │
│    - Trust Signal                       │
│         (h-screen or h-[600px])        │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│       Service Grid Section              │
│    - Section Heading                    │
│    - 3-col grid (desktop)              │
│    - Service category cards             │
│         (py-16)                         │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│     Featured Providers Section          │
│    - Section Heading                    │
│    - 4-col grid (desktop)              │
│    - Provider cards                     │
│         (py-16 bg-gray-50)             │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│      How It Works Section               │
│    - Section Heading                    │
│    - 3-step explanation                 │
│    - Icons + descriptions               │
│         (py-16)                         │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│       Trust Signals Section             │
│    - Stats (providers, services, etc)   │
│    - Testimonials (optional)            │
│         (py-16 bg-primary-50)          │
│                                         │
├─────────────────────────────────────────┤
│             Footer                      │
└─────────────────────────────────────────┘
```

**Spacing:**
- Section padding (vertical): py-12 (mobile) → py-16 (desktop)
- Section padding (horizontal): container with px-4 → px-8
- Between sections: No gap (handled by section padding)

### 7.2 Provider List Page Layout

```
┌─────────────────────────────────────────┐
│           Navbar (sticky)               │
├─────────────────────────────────────────┤
│         Page Header                     │
│    - Breadcrumb                         │
│    - Page Title                         │
│    - Results count                      │
│         (py-8 bg-gray-50)              │
├─────────────────────────────────────────┤
│  ┌─────────┬──────────────────────────┐│
│  │         │                          ││
│  │ Filters │   Provider Grid          ││
│  │ (Sidebar│   - 2-3 cols             ││
│  │  w-64)  │   - Provider cards       ││
│  │         │   - Pagination           ││
│  │         │                          ││
│  └─────────┴──────────────────────────┘│
│         (py-8)                          │
├─────────────────────────────────────────┤
│             Footer                      │
└─────────────────────────────────────────┘
```

**Mobile:** Filters collapse into a drawer/modal

### 7.3 Provider Profile Page Layout

```
┌─────────────────────────────────────────┐
│           Navbar (sticky)               │
├─────────────────────────────────────────┤
│         Page Header                     │
│    - Breadcrumb                         │
│         (py-6 bg-gray-50)              │
├─────────────────────────────────────────┤
│  ┌──────────────────┬─────────────────┐│
│  │                  │                 ││
│  │  Provider Photo  │  Info Sidebar   ││
│  │  (large)         │  - Name         ││
│  │                  │  - Rating       ││
│  │                  │  - Badges       ││
│  ├──────────────────│  - WhatsApp CTA ││
│  │                  │  - Contact Info ││
│  │  Description     │                 ││
│  │  Services        │                 ││
│  │  Areas Served    │                 ││
│  │                  │                 ││
│  │  Reviews         │                 ││
│  │  (Phase 2)       │                 ││
│  │                  │                 ││
│  └──────────────────┴─────────────────┘│
│         (py-8)                          │
├─────────────────────────────────────────┤
│      Related Providers Section          │
│    - "Similar Providers" heading        │
│    - 3-col grid                         │
│         (py-12 bg-gray-50)             │
├─────────────────────────────────────────┤
│             Footer                      │
└─────────────────────────────────────────┘
```

**Mobile:** Single column, sidebar becomes sticky CTA at bottom

---

## 8. Responsive Design

### Breakpoints
```css
/* Mobile first approach */
--screen-sm:  640px;   /* Small tablets */
--screen-md:  768px;   /* Tablets */
--screen-lg:  1024px;  /* Desktops */
--screen-xl:  1280px;  /* Large desktops */
--screen-2xl: 1536px;  /* Extra large */
```

### Responsive Patterns

#### Typography
```tsx
{/* Mobile → Desktop */}
<h1 className="text-3xl md:text-5xl lg:text-6xl">
  Hero Headline
</h1>
```

#### Grid Columns
```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Cards */}
</div>
```

#### Padding/Spacing
```tsx
<section className="py-12 md:py-16 lg:py-20">
  {/* Content */}
</section>
```

#### Show/Hide
```tsx
{/* Mobile menu - hide on desktop */}
<div className="md:hidden">
  <MobileMenu />
</div>

{/* Desktop nav - hide on mobile */}
<nav className="hidden md:flex">
  <NavLinks />
</nav>
```

### Touch Targets (Mobile)
**Minimum size:** 44x44px (Apple HIG recommendation)

```css
/* Buttons, links, interactive elements */
.touch-target {
  min-height: 44px;
  min-width: 44px;
}
```

---

## 9. Accessibility

### Color Contrast (WCAG AA)
- **Normal text:** 4.5:1 minimum
- **Large text (18px+):** 3:1 minimum
- **UI components:** 3:1 minimum

**Verified Combinations:**
- ✅ White bg + gray-900 text: 18.07:1
- ✅ White bg + gray-700 text: 8.59:1
- ✅ White bg + primary-600 text: 4.56:1
- ✅ Primary-600 bg + white text: 4.56:1
- ❌ White bg + gray-400 text: 2.74:1 (fail - don't use for body text)

### Focus States
```css
/* Always visible focus ring */
.focus-visible:focus {
  outline: 2px solid hsl(var(--primary-500));
  outline-offset: 2px;
}
```

### Keyboard Navigation
- All interactive elements must be keyboard accessible
- Logical tab order
- Skip links for screen readers
- No keyboard traps

### Screen Reader Support
```tsx
{/* Image alt text */}
<img src="..." alt="Carlos Mendez, verified electrician" />

{/* Icon-only buttons */}
<button aria-label="Close dialog">
  <X className="w-5 h-5" />
</button>

{/* Loading states */}
<div aria-live="polite" aria-busy="true">
  Loading providers...
</div>
```

### Semantic HTML
- Use `<button>` for buttons (not `<div onClick>`)
- Use `<a>` for links
- Use proper heading hierarchy (h1 → h2 → h3)
- Use `<nav>`, `<main>`, `<aside>`, `<footer>`

---

## 10. Motion & Animation

### Animation Principles
1. **Subtle, not distracting** - animations should enhance, not overwhelm
2. **Fast** - under 300ms for most transitions
3. **Purposeful** - every animation should communicate something
4. **Respect prefers-reduced-motion**

### Transition Durations
```css
--duration-fast:    100ms;  /* Hovers, simple state changes */
--duration-normal:  200ms;  /* Default transitions */
--duration-slow:    300ms;  /* Complex transitions */
--duration-slower:  500ms;  /* Page transitions, modals */
```

### Easing Functions
```css
--ease-in:     cubic-bezier(0.4, 0, 1, 1);
--ease-out:    cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);  /* Default */
```

### Common Transitions

#### Hover States
```css
.button {
  transition: all 200ms ease-in-out;
}

.button:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
```

#### Card Hover
```css
.card {
  transition: shadow 200ms ease-in-out, transform 200ms ease-in-out;
}

.card:hover {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}
```

#### Modal/Dialog Entry
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-backdrop {
  animation: fadeIn 200ms ease-out;
}

.modal-content {
  animation: slideUp 300ms ease-out;
}
```

#### Loading States
```css
@keyframes spin {
  to { transform: rotate(360deg); }
}

.spinner {
  animation: spin 1s linear infinite;
}
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Implementation Checklist

### Phase 1: Foundation
- [ ] Set up Tailwind config with design tokens
- [ ] Configure CSS custom properties
- [ ] Load Inter font
- [ ] Create base utility classes

### Phase 2: Core Components
- [ ] Button variants (Primary, Secondary, WhatsApp, etc.)
- [ ] Card component
- [ ] Badge variants
- [ ] Form inputs (Text, Select, Checkbox, etc.)
- [ ] Rating stars

### Phase 3: Layout Components
- [ ] Navbar (Desktop + Mobile)
- [ ] Footer
- [ ] Container
- [ ] Section wrappers

### Phase 4: Page-Specific Components
- [ ] Provider card
- [ ] Service card
- [ ] Search bar
- [ ] Filter sidebar
- [ ] Provider profile layout

### Phase 5: Polish
- [ ] Loading states
- [ ] Empty states
- [ ] Error states
- [ ] Accessibility audit
- [ ] Responsive testing
- [ ] Performance optimization

---

## Design Deliverables

This design system provides:

1. **Complete color palette** - Primary, accent, semantic, neutrals
2. **Typography system** - Scale, weights, usage guidelines
3. **Spacing system** - Consistent spacing, layout grid
4. **Component specifications** - Buttons, cards, forms, badges
5. **Page layouts** - Homepage, list pages, profile pages
6. **Responsive guidelines** - Breakpoints, patterns
7. **Accessibility standards** - Contrast, keyboard, screen readers
8. **Motion principles** - Transitions, animations

**Next Steps:**
1. Review and approve this design system
2. Create visual mockups (optional - can skip and build directly)
3. Implement in code using shadcn/ui + Tailwind
4. Build pages incrementally
5. Test and iterate

---

**Questions or feedback?** Let me know what you'd like to adjust!
