"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Star, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-small-black/[0.2] dark:bg-grid-small-white/[0.2]" />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-background/80" />
      
      <div className="container relative z-10 px-4 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
          >
            <Zap className="w-4 h-4" />
            Outperforms GPT-4 • 95% Lower Cost • Open Source
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent"
          >
            Kimi K2 AI
            <br />
            <span className="text-primary">Enterprise Ready</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            The open-source AI chat platform that outperforms ChatGPT on coding and math benchmarks. 
            Deploy autonomous agents at <strong className="text-foreground">95% lower cost</strong> than proprietary alternatives.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-8 mb-12 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span>1T Parameters</span>
            </div>
            <div className="flex items-center gap-2">
              <Github className="w-4 h-4" />
              <span>Open Source</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-green-500" />
              <span>53.7% LiveCodeBench vs GPT-4&apos;s 44.7%</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button size="lg" className="px-8 py-6 text-lg group">
              Try Free Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
              View Demo
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-16 text-xs text-muted-foreground"
          >
            Trusted by developers at enterprise companies worldwide
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}