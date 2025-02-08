
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DiagnosePage from "./components/DiagnosePage";
import MonitorHealthPage from "./components/MonitorHealthPage";
import ShoppingPage from "./components/ShoppingPage";
import FoodAdvicePage from "./components/FoodAdvicePage";
import Sidebar from "./components/Sidebar";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="flex min-h-screen">
        <BrowserRouter>
          <Sidebar />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/food" element={<FoodAdvicePage />} />
              <Route path="/diagnose" element={<DiagnosePage />} />
              <Route path="/monitor" element={<MonitorHealthPage />} />
              <Route path="/shopping" element={<ShoppingPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
      <Toaster />
      <Sonner />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
