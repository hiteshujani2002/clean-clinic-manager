import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BookingFlow from "./pages/BookingFlow";
import GeneralDentistry from "./pages/GeneralDentistry";
import CosmeticDentistry from "./pages/CosmeticDentistry";
import RestorativeCare from "./pages/RestorativeCare";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/book" element={<BookingFlow />} />
          <Route path="/general-dentistry" element={<GeneralDentistry />} />
          <Route path="/cosmetic-dentistry" element={<CosmeticDentistry />} />
          <Route path="/restorative-care" element={<RestorativeCare />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
