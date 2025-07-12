# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run linting

### Package Management
Uses npm with package-lock.json for dependency management.

## Architecture

This is a Next.js 15 application using the App Router with the following structure:

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript with strict mode enabled
- **Styling**: Tailwind CSS v4 with CSS variables
- **UI Components**: shadcn/ui configured (components.json present)
- **Fonts**: Geist Sans and Geist Mono via next/font
- **Icons**: Lucide React
- **Animations**: Framer Motion for scroll animations

### Key Directories
- `src/app/` - App Router pages and layouts
- `src/components/sections/` - Landing page section components
- `src/components/ui/` - shadcn/ui reusable components
- `src/lib/` - Shared utilities (includes cn() function for className merging)
- `public/` - Static assets

### Important Configuration
- TypeScript with `@/*` path mapping to `./src/*`
- shadcn/ui configured with:
  - Style: "new-york"
  - Base color: neutral
  - CSS variables enabled
  - Component aliases: `@/components`, `@/lib/utils`, etc.
- ESLint with Next.js recommended rules

### SEO Configuration
- **Canonical URLs**: Properly configured with alternates
- **Meta Tags**: Complete title, description, keywords
- **Open Graph**: Full OG tags for social sharing
- **JSON-LD**: Structured data with @graph for better SEO
- **Sitemap**: Dynamic XML sitemap at `/sitemap.xml`
- **Robots.txt**: SEO-friendly robots.txt at `/robots.txt`

### Component Patterns
- Uses `cn()` utility from `src/lib/utils.ts` for conditional className merging
- Follows shadcn/ui conventions for component structure
- CSS-in-JS styling via Tailwind with dark mode support
- Framer Motion animations with viewport-based triggers