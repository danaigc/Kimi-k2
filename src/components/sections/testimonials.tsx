"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Kimi K2 has revolutionized our development workflow. The autonomous coding capabilities are incredible - it's like having a senior developer that never sleeps. We've reduced our development time by 60% while improving code quality.",
    author: "Sarah Chen",
    title: "CTO, TechFlow",
    company: "Y Combinator Startup",
    rating: 5
  },
  {
    quote: "The cost savings alone made the switch worthwhile, but the performance gains were the real surprise. Kimi K2 consistently outperforms GPT-4 on our complex data analysis tasks, and the open-source nature gives us the transparency we need for enterprise compliance.",
    author: "Marcus Rodriguez", 
    title: "Head of AI Engineering",
    company: "Fortune 500 Company",
    rating: 5
  },
  {
    quote: "As a startup, budget is everything. Kimi K2 gives us enterprise-grade AI at a fraction of the cost of proprietary solutions. The self-hosting option means we maintain complete control over our data while scaling efficiently.",
    author: "Alex Kim",
    title: "Founder & CEO",
    company: "DataVault AI",
    rating: 5
  }
];

export function Testimonials() {
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
            Trusted by <span className="text-primary">Developers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how teams worldwide are transforming their AI workflows with Kimi K2&apos;s 
            superior performance and cost-effective solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-background/60 backdrop-blur border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <Quote className="w-8 h-8 text-primary/60" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-base leading-relaxed mb-6 text-muted-foreground">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="border-t pt-6">
                    <div className="font-semibold text-foreground">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.title}
                    </div>
                    <div className="text-sm text-primary font-medium">
                      {testimonial.company}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10K+</div>
              <div className="text-sm text-muted-foreground">Active Developers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Cost Reduction</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50M+</div>
              <div className="text-sm text-muted-foreground">API Calls Served</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime SLA</div>
            </div>
          </div>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-8">
            Join companies of all sizes who trust Kimi K2 for their AI infrastructure
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {/* Placeholder for company logos */}
            <div className="px-6 py-3 bg-muted rounded-lg text-sm font-medium">YC Startup</div>
            <div className="px-6 py-3 bg-muted rounded-lg text-sm font-medium">Fortune 500</div>
            <div className="px-6 py-3 bg-muted rounded-lg text-sm font-medium">Tech Scale-up</div>
            <div className="px-6 py-3 bg-muted rounded-lg text-sm font-medium">AI Research</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}