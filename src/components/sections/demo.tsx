"use client";

import { motion } from "framer-motion";
import { ChatInterface } from "@/components/chat/chat-interface";
import { ChatProvider } from "@/contexts/chat-context";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Code, Brain, Zap } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: MessageSquare,
    title: "Natural Conversations",
    description: "Engage in fluid, context-aware conversations that feel natural and intuitive."
  },
  {
    icon: Code,
    title: "Code Generation",
    description: "Generate, debug, and explain code in multiple programming languages with expert-level accuracy."
  },
  {
    icon: Brain,
    title: "Complex Reasoning",
    description: "Solve mathematical problems, analyze data, and perform multi-step logical reasoning."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Experience rapid response times with our optimized inference infrastructure."
  }
];

export function Demo() {
  return (
    <section className="py-32 bg-gradient-to-b from-background to-muted/30 min-h-screen flex items-center">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Experience <span className="text-primary">Kimi K2</span> Live
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Try our interactive demo to see why developers choose Kimi K2 for their Kimi AI workflows. 
            No signup required - start chatting immediately.
          </p>
          
          {/* Feature highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-base mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Chat Interface */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 rounded-3xl blur-3xl" />
            <div className="relative bg-background/95 backdrop-blur border border-border rounded-2xl shadow-2xl overflow-hidden" style={{ height: '600px' }}>
              <ChatProvider>
                <ChatInterface />
              </ChatProvider>
            </div>
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-center"
              >
                <Link href="/chat">
                  <button className="group flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
                    <span className="text-lg font-semibold">Open Full Chat Experience</span>
                    <svg 
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <Card className="max-w-3xl mx-auto bg-gradient-to-r from-primary/5 to-transparent border-primary/20">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl">Ready to experience Kimi K2 AI?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-8">
                Start chatting with our powerful Kimi K2 assistant completely free. 
                No registration required - experience the full capabilities instantly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/chat">
                  <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold">
                    Start Free Chat
                  </button>
                </Link>
                <a href="#features">
                  <button className="px-8 py-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                    Learn More
                  </button>
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Sample prompts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold mb-8">Popular Use Cases</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Code Assistant",
                prompts: ["Write a Python function to sort an array", "Help me debug this JavaScript code"],
                icon: "💻"
              },
              {
                title: "Learning & Education",
                prompts: ["Explain quantum computing in simple terms", "Solve this math equation: 2x + 5 = 17"],
                icon: "🎓"
              },
              {
                title: "Business & Strategy",
                prompts: ["Create a marketing strategy for a startup", "Write a professional email template"],
                icon: "💼"
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-muted/50 rounded-xl p-6 hover:bg-muted/70 transition-colors"
              >
                <div className="text-3xl mb-3">{category.icon}</div>
                <h4 className="font-semibold text-lg mb-4">{category.title}</h4>
                <div className="space-y-2">
                  {category.prompts.map((prompt, promptIndex) => (
                    <Link key={promptIndex} href="/chat">
                      <button className="w-full text-left px-4 py-3 text-sm bg-background/50 hover:bg-background/80 rounded-lg transition-colors">
                        {prompt}
                      </button>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}