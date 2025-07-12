import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kimi K2 AI - Open-Source ChatGPT Alternative | 95% Less Cost",
  description: "Powerful open-source AI chat platform. Outperforms GPT-4 on coding & math benchmarks. Enterprise-grade agentic AI at 95% lower cost. Try free today.",
  keywords: "kimi k2, open source AI chat, chatgpt alternative, enterprise AI platform, autonomous AI agent",
  metadataBase: new URL("https://kimik2.ai"),
  icons: {
    icon: "/kimik2icon.png",
    shortcut: "/kimik2icon.png",
    apple: "/kimik2icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/kimik2icon.png",
    },
  },
  alternates: {
    canonical: "https://kimik2.ai",
    languages: {
      "en-US": "https://kimik2.ai",
      "zh-CN": "https://kimik2.ai/zh",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Kimi K2 AI - Open-Source ChatGPT Alternative",
    description: "Powerful open-source AI chat platform. Outperforms GPT-4 on coding & math benchmarks.",
    type: "website",
    url: "https://kimik2.ai",
    siteName: "Kimi K2 AI",
    locale: "en_US",
    images: [
      {
        url: "https://kimik2.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kimi K2 AI - Open-Source ChatGPT Alternative",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kimi K2 AI - Open-Source ChatGPT Alternative",
    description: "Powerful open-source AI chat platform. Outperforms GPT-4 on coding & math benchmarks.",
    images: ["https://kimik2.ai/og-image.png"],
    creator: "@Kimi_Moonshot",
    site: "@Kimi_Moonshot",
  },
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },
  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://kimik2.ai/#website",
        "url": "https://kimik2.ai",
        "name": "Kimi K2 AI",
        "description": "Open-source AI chat platform that outperforms GPT-4",
        "publisher": {
          "@id": "https://kimik2.ai/#organization"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "Organization",
        "@id": "https://kimik2.ai/#organization",
        "name": "Kimi K2 AI",
        "url": "https://kimik2.ai",
        "logo": {
          "@type": "ImageObject",
          "url": "https://kimik2.ai/logo.png",
          "width": 400,
          "height": 400
        },
        "sameAs": [
          "https://github.com/MoonshotAI/Kimi-K2",
          "https://x.com/Kimi_Moonshot",
          "https://linkedin.com/company/kimik2"
        ]
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://kimik2.ai/#software",
        "name": "Kimi K2 AI",
        "description": "Open-source AI chat platform that outperforms GPT-4 on coding and math benchmarks. Enterprise-grade agentic AI at 95% lower cost.",
        "url": "https://kimik2.ai",
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "Web",
        "offers": [
          {
            "@type": "Offer",
            "name": "Starter Plan",
            "price": "9",
            "priceCurrency": "USD",
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "price": "9",
              "priceCurrency": "USD",
              "billingDuration": "P1M"
            },
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer", 
            "name": "Growth Plan",
            "price": "29",
            "priceCurrency": "USD",
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "price": "29",
              "priceCurrency": "USD", 
              "billingDuration": "P1M"
            },
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer",
            "name": "Business Plan", 
            "price": "99",
            "priceCurrency": "USD",
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "price": "99",
              "priceCurrency": "USD",
              "billingDuration": "P1M" 
            },
            "availability": "https://schema.org/InStock"
          }
        ],
        "creator": {
          "@id": "https://kimik2.ai/#organization"
        },
        "mainEntityOfPage": {
          "@id": "https://kimik2.ai/#webpage"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://kimik2.ai/#webpage",
        "url": "https://kimik2.ai",
        "name": "Kimi K2 AI - Open-Source ChatGPT Alternative",
        "description": "Powerful open-source AI chat platform. Outperforms GPT-4 on coding & math benchmarks. Enterprise-grade agentic AI at 95% lower cost.",
        "isPartOf": {
          "@id": "https://kimik2.ai/#website"
        },
        "about": {
          "@id": "https://kimik2.ai/#software"
        },
        "datePublished": "2025-01-12",
        "dateModified": "2025-01-12",
        "inLanguage": "en-US"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://kimik2.ai"
          }
        ]
      }
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script defer data-domain="kimik2.ai" src="https://plau.origai.net/js/script.js"></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
