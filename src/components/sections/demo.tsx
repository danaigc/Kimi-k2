"use client";

import { motion } from "framer-motion";
import { ChatInterface } from "@/components/chat/chat-interface";
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
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience <span className="text-primary">Kimi K2</span> Live
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Try our interactive demo to see why developers choose Kimi K2 for their Kimi AI workflows. 
            No signup required - start chatting immediately.
          </p>
          
          {/* Feature highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
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
          className="max-w-5xl mx-auto"
        >
          <ChatInterface />
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
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
          className="mt-12 text-center"
        >
          <h3 className="text-lg font-semibold mb-6">Try these sample prompts:</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "Explain quantum computing in simple terms",
              "Write a Python function to sort an array",
              "Help me debug this JavaScript code",
              "Create a marketing strategy for a startup",
              "Solve this math equation: 2x + 5 = 17"
            ].map((prompt, index) => (
              <button
                key={index}
                className="px-5 py-3 text-sm bg-muted hover:bg-muted/80 rounded-full transition-colors"
                onClick={() => {
                  // This would set the input in the chat interface
                  // For now, it's just a visual element
                }}
              >
                {prompt}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}