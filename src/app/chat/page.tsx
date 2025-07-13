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

"use client";

import { motion } from "framer-motion";
import { ChatInterface } from "@/components/chat/chat-interface";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Zap } from "lucide-react";
import { Navbar } from "@/components/navigation/navbar";

export default function ChatPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <div className="container px-4 mx-auto py-8 pt-24">
        <div className="max-w-4xl mx-auto">
          {/* Welcome Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Start Chatting with <span className="text-primary">Kimi K2</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Experience a powerful AI assistant that supports code generation, question answering, creative writing, and more. Completely free with no registration required.
            </p>
            
            {/* Quick Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { icon: MessageSquare, title: "Natural Chat", desc: "Smooth conversations" },
                { icon: "💻", title: "Code Assistant", desc: "Programming help" },
                { icon: "🧠", title: "Smart Reasoning", desc: "Complex analysis" },
                { icon: Zap, title: "Fast Response", desc: "Lightning speed" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardContent className="p-4 text-center">
                      <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-primary/10 flex items-center justify-center">
                        {typeof feature.icon === "string" ? (
                          <span className="text-lg">{feature.icon}</span>
                        ) : (
                          <feature.icon className="w-5 h-5 text-primary" />
                        )}
                      </div>
                      <h3 className="font-semibold text-sm mb-1">{feature.title}</h3>
                      <p className="text-xs text-muted-foreground">{feature.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Chat Interface */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <ChatInterface />
          </motion.div>

          {/* Sample Prompts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 text-center"
          >
            <h3 className="text-lg font-semibold mb-4">Try these sample questions:</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Write a quick sort function in Python",
                "Explain what machine learning is",
                "Help me write a work summary",
                "What are JavaScript closures?",
                "Recommend resources for learning programming"
              ].map((prompt, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="px-4 py-2 text-sm bg-muted hover:bg-muted/80 rounded-full transition-colors"
                  onClick={() => {
                    // This would set the input in the chat interface
                    const chatInput = document.querySelector('textarea');
                    if (chatInput) {
                      chatInput.value = prompt;
                      chatInput.focus();
                    }
                  }}
                >
                  {prompt}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}