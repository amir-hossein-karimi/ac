import { Activity, Award, User, TrendingUp } from "lucide-react";
import { Card } from "@/core/components/ui/card";
import "./StatsSection.css";

const stats = [
  {
    label: "Projects",
    value: "12",
    icon: Activity,
    color: "text-blue-600",
  },
  {
    label: "Services Used",
    value: "5",
    icon: Award,
    color: "text-cyan-600",
  },
  {
    label: "Team Members",
    value: "8",
    icon: User,
    color: "text-indigo-600",
  },
  {
    label: "Growth Rate",
    value: "+23%",
    icon: TrendingUp,
    color: "text-green-600",
  },
];

export function StatsSection() {
  return (
    <section className="py-8 -mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="text-center p-6">
                <Icon className={`h-8 w-8 ${stat.color} mx-auto mb-2`} />
                <div className="mb-1">{stat.value}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
