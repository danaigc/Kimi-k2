"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Twitter, Linkedin, Mail, ArrowRight } from "lucide-react";

const footerLinks = {
  product: {
    title: "Product",
    links: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "API Documentation", href: "/docs" },
      { name: "Changelog", href: "/changelog" },
      { name: "Status", href: "/status" }
    ]
  },
  company: {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
      { name: "Press Kit", href: "/press" }
    ]
  },
  resources: {
    title: "Resources", 
    links: [
      { name: "Documentation", href: "/docs" },
      { name: "Tutorials", href: "/tutorials" },
      { name: "Examples", href: "/examples" },
      { name: "Community", href: "/community" },
      { name: "Support", href: "/support" }
    ]
  },
  legal: {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
      { name: "License", href: "/license" },
      { name: "Security", href: "/security" }
    ]
  }
};

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/MoonshotAI/Kimi-K2" },
  { name: "Twitter", icon: Twitter, href: "https://x.com/Kimi_Moonshot" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/kimik2" },
  { name: "Email", icon: Mail, href: "mailto:hello@kimik2.ai" }
];

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      {/* Newsletter Section */}
      <div className="border-b border-border/40">
        <div className="container px-4 mx-auto py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h3 className="text-2xl font-bold mb-4">
              Stay Updated with <span className="text-primary">Kimi K2</span>
            </h3>
            <p className="text-muted-foreground mb-8">
              Get the latest updates on new Kimi K2 features, performance improvements, 
              and Kimi AI development insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
              <Button className="px-6 py-3 group">
                Subscribe
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              No spam. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container px-4 mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="mb-6">
              <h4 className="text-2xl font-bold">Kimi K2</h4>
              <p className="text-primary text-sm">Open-Source AI Platform</p>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              The most powerful open-source Kimi K2 chat platform. Deploy autonomous Kimi AI agents 
              with superior performance at 95% lower cost than proprietary alternatives.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-background border border-border hover:border-primary/40 flex items-center justify-center transition-colors group"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          {Object.values(footerLinks).map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h5 className="font-semibold mb-4">{section.title}</h5>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/40">
        <div className="container px-4 mx-auto py-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <div className="text-sm text-muted-foreground">
              © 2025 Kimi K2. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span>Built with ❤️ for developers</span>
              <div className="flex items-center gap-1">
                <span>Powered by</span>
                <span className="text-primary font-medium">Moonshot AI</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}