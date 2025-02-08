
import { Activity, Heart, Droplet, Scale } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const healthMetrics = [
  { icon: Activity, label: "Steps Today", value: "8,432", target: "10,000", progress: 84 },
  { icon: Heart, label: "Heart Rate", value: "75 bpm", target: "60-100 bpm", progress: 70 },
  { icon: Droplet, label: "Hydration", value: "85%", target: "100%", progress: 85 },
  { icon: Scale, label: "Weight", value: "12.5 kg", target: "12-13 kg", progress: 90 },
];

const calculateOverallHealth = (metrics: typeof healthMetrics) => {
  const avgProgress = metrics.reduce((acc, curr) => acc + curr.progress, 0) / metrics.length;
  return Math.round(avgProgress);
};

const MonitorHealthPage = () => {
  const overallHealth = calculateOverallHealth(healthMetrics);

  return (
    <div className="p-8 animate-fade-in">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-3xl font-semibold text-gray-800 mb-2">Luna's Health Monitor</h2>
          <p className="text-gray-600 mb-6">Track your pet's vital health metrics</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {healthMetrics.map((metric, index) => (
              <div key={index} className="bg-primary/10 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <metric.icon className="w-5 h-5 mr-2 text-primary" />
                  <h3 className="font-semibold text-gray-800">{metric.label}</h3>
                </div>
                <div className="mb-2">
                  <span className="text-2xl font-bold text-gray-800">{metric.value}</span>
                  <span className="text-sm text-gray-600 ml-2">/ {metric.target}</span>
                </div>
                <Progress value={metric.progress} className="h-2" />
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-primary/20 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Overall Health Score</h3>
            <div className="flex items-center">
              <div className="flex-1">
                <Progress value={overallHealth} className="h-3" />
              </div>
              <span className="ml-4 text-2xl font-bold text-gray-800">{overallHealth}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonitorHealthPage;
