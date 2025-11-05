import "./Stats.css";

const stats = [
  { value: "50K+", label: "Active Users" },
  { value: "99.9%", label: "Uptime" },
  { value: "150+", label: "Countries" },
  { value: "24/7", label: "Support" },
];

export function Stats() {
  return (
    <section className="home-stats-section">
      <div className="home-hero-content">
        <div className="home-stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="home-stats-item">
              <div className="home-stats-value">{stat.value}</div>
              <div className="home-stats-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
