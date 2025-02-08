
import { cn } from "@/lib/utils";

const vaccinations = [
  { name: "Rabies", date: "2023-12-15", status: "Up to date" },
  { name: "DHPP", date: "2023-11-20", status: "Up to date" },
  { name: "Bordetella", date: "2024-01-10", status: "Due in 2 months" },
];

const PetProfile = () => {
  const happinessIndex = 85;

  return (
    <div className="p-8 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="flex items-start gap-8">
            <div className="w-48 h-48 rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1"
                alt="Pet"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-semibold text-gray-800 mb-2">Luna</h2>
              <p className="text-gray-600 mb-4">2 years old • Female • Maine Coon</p>
              
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-600 mb-2">Happiness Index</h3>
                <div className="w-full h-3 bg-gray-100 rounded-full">
                  <div 
                    className="h-full bg-primary rounded-full transition-all duration-500"
                    style={{ width: `${happinessIndex}%` }}
                  />
                </div>
                <span className="text-sm text-gray-600 mt-1">{happinessIndex}%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Vaccination History</h3>
          <div className="grid gap-4">
            {vaccinations.map((vax, index) => (
              <div
                key={index}
                className={cn(
                  "p-4 rounded-lg border",
                  vax.status === "Up to date" ? "border-primary/30 bg-primary/5" : "border-secondary/30 bg-secondary/5"
                )}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium text-gray-800">{vax.name}</h4>
                    <p className="text-sm text-gray-600">Last updated: {vax.date}</p>
                  </div>
                  <span
                    className={cn(
                      "px-3 py-1 rounded-full text-sm",
                      vax.status === "Up to date" ? "bg-primary/20 text-gray-800" : "bg-secondary/20 text-gray-800"
                    )}
                  >
                    {vax.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetProfile;
