import { Button } from "@/core/components/ui/button";
import "./CTA.css";

export function CTA() {
  return (
    <section className="home-cta-section">
      <div className="home-cta-content">
        <h2 className="home-cta-title">Ready to Get Started?</h2>
        <p className="home-cta-description">
          Join thousands of businesses already using BluePro to streamline their
          operations and drive growth.
        </p>
        <div className="home-cta-buttons">
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
  );
}
