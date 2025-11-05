import {
  ArrowRight,
  Check,
  Star,
  Users,
  Zap,
  Shield,
  TrendingUp,
  Globe,
  Award,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "./ui/avatar";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HomePage() {
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
      description:
        "Work together seamlessly with powerful collaboration tools.",
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
      description:
        "Connect with customers worldwide through our global network.",
    },
    {
      icon: Award,
      title: "Award Winning",
      description:
        "Recognized by industry leaders for excellence and innovation.",
    },
  ];

  const stats = [
    { value: "50K+", label: "Active Users" },
    { value: "99.9%", label: "Uptime" },
    { value: "150+", label: "Countries" },
    { value: "24/7", label: "Support" },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO at TechCorp",
      avatar: "SJ",
      content:
        "This platform has transformed how we do business. The efficiency gains are remarkable!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      avatar: "MC",
      content:
        "Incredible features and outstanding support. Highly recommend to any growing business.",
      rating: 5,
    },
    {
      name: "Emily Davis",
      role: "Founder at StartupXYZ",
      avatar: "ED",
      content:
        "The best decision we made this year. ROI exceeded our expectations within months.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">
                New Features Available
              </Badge>
              <h1 className="mb-6">
                Transform Your Business with BluePro
              </h1>
              <p className="text-muted-foreground mb-8">
                Empower your team with cutting-edge tools
                designed for modern businesses. Streamline
                operations, boost productivity, and achieve
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

      {/* Stats Section */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-2">{stat.value}</div>
                <div className="text-blue-100">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">
              Powerful Features for Your Success
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to run and scale your business
              efficiently with comprehensive tools and features.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">What Our Customers Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join thousands of satisfied customers who have
              transformed their business with BluePro.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar>
                      <AvatarFallback className="bg-blue-100 text-blue-600">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-base">
                        {testimonial.name}
                      </CardTitle>
                      <p className="text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {Array.from({
                      length: testimonial.rating,
                    }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {testimonial.content}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4 text-white">
            Ready to Get Started?
          </h2>
          <p className="mb-8 text-blue-100 max-w-2xl mx-auto">
            Join thousands of businesses already using BluePro
            to streamline their operations and drive growth.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-blue-700"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}