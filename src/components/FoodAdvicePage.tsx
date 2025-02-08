
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const FoodAdvicePage = () => {
  const [foodInput, setFoodInput] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [showAlternatives, setShowAlternatives] = useState(false);
  const [alternatives, setAlternatives] = useState<string[]>([]);
  const { toast } = useToast();

  const foodDatabase = {
    "chocolate": {
      safe: false,
      alternatives: ["carob treats", "pet-safe biscuits", "banana"]
    },
    "grapes": {
      safe: false,
      alternatives: ["blueberries", "apple slices", "watermelon"]
    },
    "carrots": {
      safe: true,
      alternatives: ["green beans", "sweet potato", "pumpkin"]
    },
    "chicken": {
      safe: true,
      alternatives: ["turkey", "fish", "lean beef"]
    }
  };

  const checkFood = () => {
    if (!foodInput.trim()) {
      toast({
        title: "Please enter a food item",
        variant: "destructive",
      });
      return;
    }

    const food = foodInput.toLowerCase();
    const foodInfo = foodDatabase[food as keyof typeof foodDatabase];

    if (foodInfo) {
      setResult(
        foodInfo.safe
          ? `✅ ${foodInput} is safe for your pet to eat!`
          : `❌ ${foodInput} is NOT safe for your pet! Please avoid feeding this.`
      );
      setAlternatives(foodInfo.alternatives);
    } else {
      setResult("⚠️ We don't have information about this food item. Please consult your vet.");
      setAlternatives([]);
    }
  };

  const showAlternativeOptions = () => {
    setShowAlternatives(true);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto animate-fade-in">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          Let's Check What Luna Can Eat!
        </h1>
        
        <div className="space-y-6">
          <div className="flex gap-4">
            <Input
              placeholder="Enter a food item (e.g., carrots, chicken)"
              value={foodInput}
              onChange={(e) => setFoodInput(e.target.value)}
              className="flex-1"
            />
            <Button onClick={checkFood}>Check Food</Button>
          </div>

          {result && (
            <div className="mt-6">
              <div className="p-4 bg-gray-50 rounded-lg mb-4">
                <p className="text-lg">{result}</p>
              </div>
              
              {!showAlternatives && alternatives.length > 0 && (
                <Button 
                  variant="outline"
                  onClick={showAlternativeOptions}
                >
                  Show Alternative Options
                </Button>
              )}

              {showAlternatives && alternatives.length > 0 && (
                <div className="mt-4">
                  <h3 className="text-lg font-medium mb-3">Alternative Options:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {alternatives.map((alt, index) => (
                      <div
                        key={index}
                        className="p-3 bg-primary/5 rounded-lg text-center"
                      >
                        {alt}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodAdvicePage;
