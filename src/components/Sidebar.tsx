
import { Home, ShoppingCart, MessageSquare, Activity, Stethoscope } from "lucide-react";
import { cn } from "@/lib/utils";

const navigationItems = [
  { icon: Home, label: "Home", isActive: true, isEnabled: true },
  { icon: MessageSquare, label: "Ask about food", isEnabled: false },
  { icon: Stethoscope, label: "Diagnose diseases", isEnabled: false },
  { icon: Activity, label: "Monitor health", isEnabled: false },
  { icon: ShoppingCart, label: "Shopping", isEnabled: false },
];

const Sidebar = () => {
  return (
    <div className="w-64 min-h-screen bg-white shadow-lg border-r border-gray-100 animate-slide-in">
      <div className="p-4">
        <h1 className="text-2xl font-semibold text-gray-800 mb-8">Tailwise</h1>
        <nav>
          {navigationItems.map((item, index) => (
            <div
              key={index}
              className={cn(
                "flex items-center p-3 mb-2 rounded-lg transition-all duration-200",
                item.isActive ? "bg-primary text-gray-800" : "text-gray-600",
                item.isEnabled ? "hover:bg-primary/80 cursor-pointer" : "opacity-50 cursor-not-allowed"
              )}
            >
              <item.icon className="w-5 h-5 mr-3" />
              <span className="font-medium">{item.label}</span>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
