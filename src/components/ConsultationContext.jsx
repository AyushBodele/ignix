import React, { createContext, useContext, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/Dialog";
import ConsultationForm from "./services/ConsultationForm";

const ConsultationContext = createContext({
  openConsultation: () => {},
});

export const useConsultation = () => useContext(ConsultationContext);

export function ConsultationProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openConsultation = () => setIsOpen(true);

  return (
    <ConsultationContext.Provider value={{ openConsultation }}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto bg-white">
          <DialogHeader>
            <DialogTitle className="text-2xl">Book Your Free Consultation</DialogTitle>
            <DialogDescription>
              Fill out the form below and our team will get back to you within 24 hours to discuss your project
              needs.
            </DialogDescription>
          </DialogHeader>
          <ConsultationForm onSuccess={() => setIsOpen(false)} />
        </DialogContent>
      </Dialog>
    </ConsultationContext.Provider>
  );
}

