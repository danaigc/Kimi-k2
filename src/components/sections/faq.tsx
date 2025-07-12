"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does Kimi K2 compare to ChatGPT and Claude?",
    answer: "Kimi K2 outperforms GPT-4 on key benchmarks like LiveCodeBench (53.7% vs 44.7%) and MATH-500 (97.4% vs 92.4%). Unlike proprietary alternatives, Kimi K2 is open-source, allowing for complete transparency, customization, and self-hosting. Our pricing is also 95% lower than OpenAI's GPT-4 while delivering superior performance."
  },
  {
    question: "What makes Kimi K2 'agentic' compared to other AI models?",
    answer: "Kimi K2 is specifically designed for autonomous operation. It can execute shell commands, write and deploy code, use external tools, and complete complex multi-step tasks without human intervention. This goes beyond simple chat - it's built to act as an intelligent agent that can reason, plan, and execute tasks in real-world environments."
  },
  {
    question: "Can I self-host Kimi K2 for data privacy and compliance?",
    answer: "Yes! Kimi K2 is fully open-source with model weights available under the Modified MIT License. You can deploy it on your own infrastructure for complete data control, compliance with regulations like GDPR or HIPAA, and integration with your existing security policies. We provide Docker containers and enterprise deployment guides."
  },
  {
    question: "What's included in the free tier, and are there usage limits?",
    answer: "Our Starter plan includes 5,000 API calls per month, which is generous for individual developers and small projects. This includes access to our full model capabilities, basic integrations, and community support. You can upgrade anytime as your usage grows, and we offer transparent pricing with no hidden fees."
  },
  {
    question: "How do you ensure model performance and reliability?",
    answer: "Kimi K2 uses a sophisticated Mixture-of-Experts (MoE) architecture with 1 trillion total parameters and 32 billion activated parameters. We continuously benchmark against industry standards and provide 99.9% uptime SLA for paid plans. Our enterprise customers also get dedicated infrastructure and priority processing."
  },
  {
    question: "What kind of support and documentation is available?",
    answer: "We provide comprehensive documentation, API references, code examples, and integration guides. Starter plans include community support, Growth plans get email support, and Business plans receive dedicated support with custom SLA agreements. Enterprise customers get 24/7 phone support and a dedicated customer success manager."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-24">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about Kimi K2&apos;s capabilities, 
            pricing, and implementation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="p-8 rounded-lg bg-muted/30 border max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="text-muted-foreground mb-6">
              Our team is here to help you understand how Kimi K2 can transform your AI workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                Contact Support
              </button>
              <button className="px-6 py-3 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}