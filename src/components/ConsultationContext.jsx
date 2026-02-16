import React, { createContext, useContext, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/Dialog";
import ConsultationForm from "./services/ConsultationForm.jsx";

const ConsultationContext = createContext({
  openConsultation: () => { },
});

export const useConsultation = () => useContext(ConsultationContext);

export function ConsultationProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openConsultation = () => setIsOpen(true);

  return (
    <ConsultationContext.Provider value={{ openConsultation }}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[600px] bg-white h-[98vh] overflow-hidden">
          <DialogHeader>
            <DialogTitle className="text-xl">Book Your Free Consultation</DialogTitle>
          </DialogHeader>
          <ConsultationForm onSuccess={() => setIsOpen(false)} />
        </DialogContent>
      </Dialog>
    </ConsultationContext.Provider>
  );
}

