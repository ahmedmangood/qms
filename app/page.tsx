import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import HowWorks from "@/components/HowWorks";
import Overview from "@/components/Overview";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Overview />
      <Features />
      <Testimonials />
      <HowWorks />
      <Contact />
    </main>
  );
}
