# SEOMonk Landing Page

A modern, professional landing page for SEOMonk Chrome Extension built with Next.js 14, TypeScript, and shadcn/ui.

## Design System

### Color Palette (60-30-10 Rule)

- **White (60%)**: Primary backgrounds, cards, breathing room
- **Black (30%)**: Text, borders, structure
- **Blue #0055d4 (10%)**: ONLY for priority CTAs and important actions

### Features

- ✅ Next.js 14 with App Router
- ✅ TypeScript for type safety
- ✅ shadcn/ui components
- ✅ Tailwind CSS for styling
- ✅ Apple-level design principles
- ✅ Responsive design
- ✅ SEO optimized

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
seomonk-landing/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Landing page
│   └── globals.css       # Global styles
├── components/
│   └── ui/              # shadcn/ui components
├── lib/
│   └── utils.ts         # Utility functions
├── public/              # Static assets
└── package.json
```

## Design Principles

- **Minimalism**: Clean, uncluttered interface
- **Typography**: Apple's SF Pro Display font stack
- **Spacing**: Generous whitespace and padding
- **Subtlety**: Thin borders, soft shadows
- **Consistency**: Uniform spacing and sizing
- **Accessibility**: Proper contrast and touch targets

## Adding shadcn/ui Components

To add more shadcn/ui components:

```bash
npx shadcn-ui@latest add [component-name]
```

## Color Usage Guidelines

### Primary CTA (Blue - 10%)
- Install buttons
- Critical action buttons
- Important links

### Secondary Elements (Black - 30%)
- Text content
- Borders
- Secondary buttons
- Icons

### Backgrounds (White - 60%)
- Main backgrounds
- Card backgrounds
- Section backgrounds

