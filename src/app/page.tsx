import { Navbar } from "@/components/navigation/navbar";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Demo } from "@/components/sections/demo";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <section id="features">
          <Features />
        </section>
        <section id="demo">
          <Demo />
        </section>
        <section id="how-it-works">
          <HowItWorks />
        </section>
        <Testimonials />
        <section id="faq">
          <FAQ />
        </section>
        <Footer />
      </main>
    </>
  );
}
