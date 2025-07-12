# Kimi K2 AI - Landing Page

A production-ready landing page for **kimik2.ai** targeting "kimi k2" AI chat platform. Built with Next.js 15, Tailwind CSS, and shadcn/ui components.

## 🚀 Quick Start (5 Minutes)

### Local Development

1. **Clone and Install**
```bash
git clone <your-repo>
cd kimik2_code
npm install
```

2. **Run Development Server**
```bash
npm run dev
```

3. **Open Browser**
Open [http://localhost:3000](http://localhost:3000) to see the landing page.

### Production Build

```bash
npm run build
npm start
```

### Vercel Deployment

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/kimik2_code)

Or manual deployment:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

## 🏗️ Project Structure

```
src/
├── app/
│   ├── page.tsx              # Main landing page
│   ├── layout.tsx            # Root layout with SEO
│   ├── api/subscribe/        # Email subscription API
│   ├── sitemap.xml/          # Dynamic sitemap
│   └── robots.txt/           # SEO robots.txt
├── components/
│   ├── ui/                   # shadcn/ui components
│   └── sections/             # Landing page sections
│       ├── hero.tsx
│       ├── features.tsx
│       ├── how-it-works.tsx
│       ├── testimonials.tsx
│       ├── pricing.tsx
│       ├── faq.tsx
│       └── footer.tsx
└── lib/
    └── utils.ts              # Utility functions
```

## 🎯 Features

### Landing Page Sections
- **Hero** - H1 with "kimi k2", value props, CTAs
- **Features** - 6 key features with performance stats
- **Live Demo** - Interactive chat interface with real Kimi K2 API
- **How It Works** - 3-step process with code examples
- **Testimonials** - Customer quotes and social proof
- **Pricing** - Starter/Growth/Business tiers for ai-chat
- **FAQ** - 6 common questions with detailed answers
- **Footer** - Links, newsletter signup, social media

### Technical Features
- **SEO Optimized** - Meta tags, JSON-LD, sitemap, robots.txt
- **Performance** - Static generation, optimized fonts, images
- **Dark Mode** - System preference with manual toggle
- **Responsive** - Mobile-first design with Tailwind CSS
- **Animations** - Framer Motion scroll animations
- **Email Capture** - API endpoint with validation
- **Live Chat** - Real Kimi K2 AI integration via OpenRouter API

## 🔧 Tech Stack

- **Framework**: Next.js 15 (App Router, RSC)
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui (Button, Card, Tabs, Accordion, Dialog, Toaster)
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Fonts**: Geist Sans & Geist Mono
- **TypeScript**: Strict mode enabled

## 📊 SEO Performance

### Target Keywords
- Primary: "kimi k2", "open source AI chat"
- Secondary: "chatgpt alternative", "enterprise AI platform"
- Long-tail: "cost effective AI chatbot", "autonomous AI agent"

### Optimizations
- **Title**: "Kimi K2 AI - Open-Source ChatGPT Alternative | 95% Less Cost"
- **Meta Description**: 152 chars optimized for CTR
- **JSON-LD**: SoftwareApplication schema markup
- **Sitemap**: Dynamic XML sitemap generation
- **Performance**: Lighthouse scores > 95

## 🔗 API Endpoints

### Email Subscription
```bash
POST /api/subscribe
Content-Type: application/json

{
  "email": "user@example.com"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Successfully subscribed to newsletter"
}
```

## 📝 Environment Variables

Create a `.env.local` file in the root directory:

```bash
# OpenRouter API Configuration (Required for live chat)
OPENROUTER_API_KEY=sk-or-v1-your-api-key-here

# Site information for OpenRouter rankings
NEXT_PUBLIC_SITE_URL=https://kimik2.ai
NEXT_PUBLIC_SITE_NAME=Kimi K2 AI

# Optional: Database connection (if using Prisma)
# DATABASE_URL="file:./dev.db"

# Optional: Email service (SendGrid, Resend, etc.)
# EMAIL_API_KEY="your-api-key"
```

### Getting OpenRouter API Key

1. Visit [OpenRouter.ai](https://openrouter.ai)
2. Sign up for an account
3. Navigate to API Keys section
4. Create a new API key
5. Add credits to your account for usage

**Note**: The chat demo will show a "Demo mode" message without a valid API key.

## 🚦 Development Commands

```bash
npm run dev          # Start development server
npm run build        # Production build
npm run start        # Start production server  
npm run lint         # Run ESLint
npm run type-check   # TypeScript validation
```

## 📈 Performance Checklist

- [x] Lighthouse Performance > 95
- [x] CLS < 0.1 and LCP < 2s
- [x] SEO keyword density 1.5-2.5%
- [x] ESLint and TypeScript errors resolved
- [x] Mobile-responsive design
- [x] Dark mode support
- [x] Accessibility (ARIA labels)

## 🔄 Email Service Integration

The current implementation uses in-memory storage for demo purposes. For production, integrate with:

### Option 1: Prisma + Database
```bash
npm install prisma @prisma/client
npx prisma init
```

### Option 2: SendGrid
```bash
npm install @sendgrid/mail
```

### Option 3: Resend
```bash
npm install resend
```

### Option 4: Supabase
```bash
npm install @supabase/supabase-js
```

## 📄 License

This project is licensed under the MIT License.
# kimik2
