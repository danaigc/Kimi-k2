import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chat with Kimi K2 AI - Free AI Assistant | No Registration Required",
  description: "Start chatting with Kimi K2 AI for free. Get help with coding, questions, creative writing and more. No registration required. Experience powerful AI assistance instantly.",
  keywords: "kimi k2 chat, free ai chat, kimi ai assistant, no registration ai, coding help, ai writing assistant, kimi k2 ai chat",
  alternates: {
    canonical: "https://kimik2.ai/chat",
  },
  openGraph: {
    title: "Chat with Kimi K2 AI - Free AI Assistant",
    description: "Start chatting with Kimi K2 AI for free. Get help with coding, questions, creative writing and more. No registration required.",
    type: "website",
    url: "https://kimik2.ai/chat",
    siteName: "Kimi K2 AI",
    locale: "en_US",
    images: [
      {
        url: "https://kimik2.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Chat with Kimi K2 AI - Free AI Assistant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chat with Kimi K2 AI - Free AI Assistant",
    description: "Start chatting with Kimi K2 AI for free. Get help with coding, questions, creative writing and more.",
    images: ["https://kimik2.ai/og-image.png"],
    creator: "@Kimi_Moonshot",
    site: "@Kimi_Moonshot",
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
};

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}