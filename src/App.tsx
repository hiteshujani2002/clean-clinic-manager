import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import BookingFlow from "./pages/BookingFlow";
import GeneralDentistry from "./pages/GeneralDentistry";
import CosmeticDentistry from "./pages/CosmeticDentistry";
import RestorativeCare from "./pages/RestorativeCare";
import TeethScalingPolishing from "./pages/TeethScalingPolishing";
import DentalFillings from "./pages/DentalFillings";
import RootCanalTreatment from "./pages/RootCanalTreatment";
import ToothExtraction from "./pages/ToothExtraction";
import PreventiveDentalCare from "./pages/PreventiveDentalCare";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/book" element={<BookingFlow />} />
          <Route path="/general-dentistry" element={<GeneralDentistry />} />
          <Route path="/cosmetic-dentistry" element={<CosmeticDentistry />} />
          <Route path="/restorative-care" element={<RestorativeCare />} />
          <Route path="/teeth-scaling-polishing" element={<TeethScalingPolishing />} />
          <Route path="/dental-fillings" element={<DentalFillings />} />
          <Route path="/root-canal-treatment" element={<RootCanalTreatment />} />
          <Route path="/tooth-extraction" element={<ToothExtraction />} />
          <Route path="/preventive-dental-care" element={<PreventiveDentalCare />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
