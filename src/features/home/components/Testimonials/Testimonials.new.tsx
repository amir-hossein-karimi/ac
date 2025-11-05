import { Star } from "lucide-react";
import { Card } from "@/core/components/ui/card";
import { Avatar } from "@/core/components/ui/avatar";
import "./Testimonials.css";

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

export function Testimonials() {
  return (
    <section className="home-testimonials-section">
      <div className="home-hero-content">
        <div className="text-center mb-12">
          <h2 className="mb-4">What Our Customers Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied customers who have transformed their
            business with BluePro.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="bg-blue-100 text-blue-600">
                  {testimonial.avatar}
                </Avatar>
                <div>
                  <h3 className="text-base font-semibold">
                    {testimonial.name}
                  </h3>
                  <p className="text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-muted-foreground">{testimonial.content}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
