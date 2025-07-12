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
  openGraph: {
    title: "Kimi K2 AI - Open-Source ChatGPT Alternative",
    description: "Powerful open-source AI chat platform. Outperforms GPT-4 on coding & math benchmarks.",
    type: "website",
    url: "https://kimik2.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kimi K2 AI - Open-Source ChatGPT Alternative",
    description: "Powerful open-source AI chat platform. Outperforms GPT-4 on coding & math benchmarks.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Kimi K2 AI",
    "description": "Open-source AI chat platform that outperforms GPT-4 on coding and math benchmarks. Enterprise-grade agentic AI at 95% lower cost.",
    "url": "https://kimik2.ai",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "9",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "9",
        "priceCurrency": "USD",
        "billingDuration": "P1M"
      }
    },
    "creator": {
      "@type": "Organization",
      "name": "Moonshot AI",
      "url": "https://kimik2.ai"
    },
    "breadcrumb": {
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
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
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
