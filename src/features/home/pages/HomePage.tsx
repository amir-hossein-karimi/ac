import { Hero } from "@/features/home/components/Hero/Hero";
import { Stats } from "@/features/home/components/Stats/Stats";
import { Features } from "@/features/home/components/Features/Features";
import { Testimonials } from "@/features/home/components/Testimonials/Testimonials";
import { CTA } from "@/features/home/components/CTA/CTA";

export function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Stats />
      <Features />
      <Testimonials />
      <CTA />
    </div>
  );
}
