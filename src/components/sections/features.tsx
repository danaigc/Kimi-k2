"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Code, DollarSign, Lock, Zap, Users } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "True Agentic Intelligence",
    description: "Built for autonomous task execution. Deploy AI agents that can write code, execute commands, and complete multi-step workflows without human intervention.",
    color: "text-blue-500"
  },
  {
    icon: Code,
    title: "Superior Code Performance",
    description: "Outperforms GPT-4 with 53.7% accuracy on LiveCodeBench vs 44.7%. Excels at software engineering, debugging, and complex programming tasks.",
    color: "text-green-500"
  },
  {
    icon: DollarSign,
    title: "95% Cost Reduction",
    description: "At $0.15-$2.50 per million tokens vs OpenAI's $15+, deliver enterprise-grade AI at a fraction of the cost while maintaining superior performance.",
    color: "text-emerald-500"
  },
  {
    icon: Lock,
    title: "Open Source & Self-Hosted",
    description: "Full transparency with open-source model weights. Deploy on your infrastructure for complete data privacy and compliance with enterprise requirements.",
    color: "text-purple-500"
  },
  {
    icon: Zap,
    title: "128K Context Window",
    description: "Process entire codebases, lengthy documents, and maintain coherent understanding across complex, multi-turn conversations.",
    color: "text-orange-500"
  },
  {
    icon: Users,
    title: "Enterprise Ready",
    description: "Built for scale with MoE architecture, API-first design, and enterprise features like SSO, audit logs, and dedicated support.",
    color: "text-indigo-500"
  }
];

export function Features() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-primary">Kimi K2</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The only open-source AI platform that delivers enterprise performance 
            at startup prices with complete transparency.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 bg-background/60 backdrop-blur">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-background flex items-center justify-center mb-4 ${feature.color}`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Performance Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold mb-8">Benchmark Performance</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-background border">
              <div className="text-3xl font-bold text-green-500 mb-2">53.7%</div>
              <div className="text-sm text-muted-foreground">LiveCodeBench</div>
              <div className="text-xs text-muted-foreground mt-1">vs GPT-4: 44.7%</div>
            </div>
            <div className="p-6 rounded-lg bg-background border">
              <div className="text-3xl font-bold text-blue-500 mb-2">97.4%</div>
              <div className="text-sm text-muted-foreground">MATH-500</div>
              <div className="text-xs text-muted-foreground mt-1">vs GPT-4: 92.4%</div>
            </div>
            <div className="p-6 rounded-lg bg-background border">
              <div className="text-3xl font-bold text-purple-500 mb-2">65.8%</div>
              <div className="text-sm text-muted-foreground">SWE-bench Verified</div>
              <div className="text-xs text-muted-foreground mt-1">Software Engineering</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}