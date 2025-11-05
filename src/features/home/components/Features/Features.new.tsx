import { Zap, Shield, Users, TrendingUp, Globe, Award } from "lucide-react";
import { Card } from "@/core/components/ui/card";
import "./Features.css";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Experience blazing fast performance with our optimized solutions.",
  },
  {
    icon: Shield,
    title: "Secure & Safe",
    description:
      "Your data is protected with enterprise-grade security measures.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work together seamlessly with powerful collaboration tools.",
  },
  {
    icon: TrendingUp,
    title: "Scale with Ease",
    description:
      "Grow your business without worrying about infrastructure limits.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Connect with customers worldwide through our global network.",
  },
  {
    icon: Award,
    title: "Award Winning",
    description:
      "Recognized by industry leaders for excellence and innovation.",
  },
];

export function Features() {
  return (
    <section className="home-features-section">
      <div className="home-features-content">
        <div className="home-features-header">
          <h2 className="mb-4">Powerful Features for Your Success</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to run and scale your business efficiently with
            comprehensive tools and features.
          </p>
        </div>
        <div className="home-features-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow p-6"
              >
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
