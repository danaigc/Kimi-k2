"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Download, Settings, Rocket, Code, Database } from "lucide-react";

const steps = [
  {
    id: "setup",
    title: "Quick Setup",
    icon: Download,
    content: {
      title: "Get Started in Minutes",
      description: "Deploy Kimi K2 instantly with our cloud platform or download for self-hosting",
      steps: [
        "Sign up for free account",
        "Choose cloud or self-hosted deployment",
        "Configure your workspace settings",
        "Invite team members"
      ],
      codeExample: `# Self-hosted deployment
docker run -d \\
  --name kimik2 \\
  -p 8080:8080 \\
  kimik2/platform:latest`
    }
  },
  {
    id: "configure",
    title: "Configure",
    icon: Settings,
    content: {
      title: "Customize for Your Needs",
      description: "Fine-tune model parameters, set up integrations, and configure security policies",
      steps: [
        "Select model configuration (Base/Instruct)",
        "Set up API keys and integrations",
        "Configure security and compliance settings",
        "Create custom workflows and agents"
      ],
      codeExample: `// API Configuration
const kimik2 = new KimiK2Client({
  apiKey: process.env.KIMI_API_KEY,
  endpoint: "https://api.kimik2.ai",
  model: "kimi-k2-instruct"
});`
    }
  },
  {
    id: "deploy",
    title: "Deploy & Scale",
    icon: Rocket,
    content: {
      title: "Launch Your AI Agents",
      description: "Deploy autonomous agents that can handle complex tasks and scale automatically",
      steps: [
        "Create and test your AI agents",
        "Deploy to production environment",
        "Monitor performance and usage",
        "Scale based on demand"
      ],
      codeExample: `// Deploy an agent
const agent = await kimik2.agents.create({
  name: "Code Reviewer",
  instructions: "Review code for bugs and improvements",
  tools: ["code_analysis", "git_integration"]
});`
    }
  }
];

export function HowItWorks() {
  return (
    <section className="py-24">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Deploy powerful AI agents in three simple steps. From setup to scale, 
            we make enterprise AI accessible to everyone.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Tabs defaultValue="setup" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {steps.map((step, index) => (
                <TabsTrigger key={step.id} value={step.id} className="flex items-center gap-2">
                  <step.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{step.title}</span>
                  <span className="sm:hidden">{index + 1}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {steps.map((step, index) => (
              <TabsContent key={step.id} value={step.id}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <step.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="text-sm text-primary font-medium">
                          Step {index + 1}
                        </div>
                      </div>
                      <CardTitle className="text-2xl">{step.content.title}</CardTitle>
                      <CardDescription className="text-base">
                        {step.content.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {step.content.steps.map((item, i) => (
                          <li key={i} className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <div className="w-2 h-2 rounded-full bg-primary" />
                            </div>
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-muted/30">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <Code className="w-5 h-5" />
                        Example
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <pre className="text-sm bg-background/60 p-4 rounded-lg overflow-x-auto">
                        <code className="text-muted-foreground">
                          {step.content.codeExample}
                        </code>
                      </pre>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="p-8 rounded-lg bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of developers already building with Kimi K2
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                Start Free Trial
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                <Database className="w-4 h-4" />
                View Documentation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}