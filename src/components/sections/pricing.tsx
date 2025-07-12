"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, Zap, Crown } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$9",
    period: "/month",
    description: "Perfect for individual developers and small projects",
    features: [
      "5,000 API calls/month",
      "GPT-4 level performance",
      "Community support",
      "Basic integrations",
      "Standard response time",
      "Usage analytics"
    ],
    highlighted: false,
    cta: "Start Free Trial"
  },
  {
    name: "Growth",
    price: "$29",
    period: "/month",
    description: "Ideal for growing teams and production applications",
    features: [
      "50,000 API calls/month",
      "Priority processing",
      "Advanced integrations",
      "Team collaboration tools",
      "Email support",
      "Custom model fine-tuning",
      "Advanced analytics",
      "API rate limiting controls"
    ],
    highlighted: true,
    cta: "Start Free Trial"
  },
  {
    name: "Business",
    price: "$99",
    period: "/month",
    description: "Enterprise-grade solution for large organizations",
    features: [
      "500,000 API calls/month",
      "Self-hosted deployment option",
      "Dedicated support",
      "Custom SLA agreements",
      "Advanced security features",
      "SSO integration",
      "Audit logs & compliance",
      "Custom model training",
      "24/7 phone support"
    ],
    highlighted: false,
    cta: "Contact Sales"
  }
];

export function Pricing() {
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
            Simple, <span className="text-primary">Transparent</span> Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Choose the plan that fits your needs. All plans include our core AI capabilities 
            with no hidden fees or surprise charges.
          </p>
          
          {/* Cost Comparison Banner */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-700 dark:text-green-400 rounded-full border border-green-500/20 mb-12">
            <Zap className="w-4 h-4" />
            Save 95% compared to OpenAI GPT-4 pricing
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="flex items-center gap-1 px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full">
                    <Star className="w-3 h-3 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <Card className={`h-full ${plan.highlighted ? 'border-primary shadow-lg scale-105' : ''}`}>
                <CardHeader className="text-center pb-8">
                  <div className="flex items-center justify-center mb-4">
                    {plan.name === "Starter" && <Zap className="w-8 h-8 text-blue-500" />}
                    {plan.name === "Growth" && <Star className="w-8 h-8 text-primary" />}
                    {plan.name === "Business" && <Crown className="w-8 h-8 text-purple-500" />}
                  </div>
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <CardDescription className="text-base mb-4">
                    {plan.description}
                  </CardDescription>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    variant={plan.highlighted ? "default" : "outline"}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Enterprise Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/5 to-transparent border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Need a Custom Solution?</CardTitle>
              <CardDescription className="text-base">
                For enterprises with unique requirements, we offer custom deployments, 
                dedicated infrastructure, and tailored support agreements.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" size="lg">
                  Schedule Demo
                </Button>
                <Button size="lg">
                  Contact Enterprise Sales
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* FAQ Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground">
            Have questions about pricing? Check our{" "}
            <a href="#faq" className="text-primary hover:underline">
              frequently asked questions
            </a>{" "}
            or contact our sales team.
          </p>
        </motion.div>
      </div>
    </section>
  );
}