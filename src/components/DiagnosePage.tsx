
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const DiagnosePage = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [diagnosisResult, setDiagnosisResult] = useState<string | null>(null);
  const { toast } = useToast();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      setDiagnosisResult(null); // Clear previous results when new image is uploaded
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedImage) {
      toast({
        title: "No image selected",
        description: "Please select an image to analyze",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    // TODO: Implement actual diagnosis logic
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate processing
    setIsAnalyzing(false);
    
    setDiagnosisResult("Your pet appears to be healthy! Regular check-ups are recommended.");
    toast({
      title: "Analysis Complete",
      description: "Scroll down to see the results",
    });
  };

  return (
    <div className="p-8 animate-fade-in">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-3xl font-semibold text-gray-800 mb-2">Let's get Luna diagnosed</h2>
          <p className="text-gray-600 mb-6">Upload a clear photo of Luna for a quick health assessment</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="border-2 border-dashed border-primary/50 rounded-lg p-8 text-center">
              <Input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="image-upload"
              />
              <label
                htmlFor="image-upload"
                className="cursor-pointer block"
              >
                {selectedImage ? (
                  <div className="mt-4">
                    <img
                      src={URL.createObjectURL(selectedImage)}
                      alt="Selected"
                      className="max-h-64 mx-auto rounded-lg"
                    />
                    <p className="mt-2 text-sm text-gray-600">Click to change image</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="text-primary/80">
                      <svg className="mx-auto h-12 w-12" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        />
                      </svg>
                    </div>
                    <div className="text-gray-600">
                      <span className="text-primary font-medium">Upload an image</span> or drag and drop
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                  </div>
                )}
              </label>
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90"
              disabled={!selectedImage || isAnalyzing}
            >
              {isAnalyzing ? "Analyzing..." : "Start Diagnosis"}
            </Button>
          </form>
        </div>

        {diagnosisResult && (
          <div className="bg-white rounded-xl shadow-sm p-6 animate-fade-in">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Diagnosis Results</h3>
            <div className="p-4 bg-primary/10 rounded-lg">
              <p className="text-gray-700">{diagnosisResult}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiagnosePage;
