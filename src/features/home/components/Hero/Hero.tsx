import { ArrowRight } from "lucide-react";
import { Button } from "@/core/components/ui/button";
import { ImageWithFallback } from "@/core/components/figma/ImageWithFallback";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 ${className}`}
    >
      {children}
    </span>
  );
}
import "./Hero.css";

export function Hero() {
  return (
    <section className="home-hero">
      <div className="home-hero-content">
        <div className="home-hero-grid">
          <div>
            <Badge className="mb-4">New Features Available</Badge>
            <h1 className="mb-6">Transform Your Business with BluePro</h1>
            <p className="text-muted-foreground mb-8">
              Empower your team with cutting-edge tools designed for modern
              businesses. Streamline operations, boost productivity, and achieve
              unprecedented growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Watch Demo
              </Button>
            </div>
          </div>
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1623715537851-8bc15aa8c145?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MjMxNTk5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Technology Workspace"
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
