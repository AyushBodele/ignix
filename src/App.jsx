import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"

import MainLayout from "./Layout/MainLayout.jsx"
import Hero from "./components/Hero.jsx"
import { PlatformSection } from "./components/PlatformSection.jsx"
import { IndustrySection } from "./components/IndustrySection.jsx"
import HomeServices from "./components/services/Home.jsx"
import Company from "./components/Company.jsx"
import SolutionTemplate from "./pages/solutions/SolutionTemplate.jsx"

import ScrollToTop from "./hooks/ScrollToTop.jsx"
import WhatsAppButton from "./components/WhatsAppButton.jsx"
import Chatbot from "./components/Chatbot.jsx"
import OutroSection from "./components/OutroSection.jsx"


function LandingPage() {
  return (
    <>
      <Hero />
      <OutroSection />
      <PlatformSection />
      <IndustrySection />
    </>
  )
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/services" element={<HomeServices />} />
          <Route path="/company" element={<Company />} />
          <Route path="/solutions" element={<Navigate to="/solutions/safe-ai" replace />} />
          <Route path="/solutions/:slug" element={<SolutionTemplate />} />
          <Route path="*" element={<p className="p-8 text-center">Page not found.</p>} />
        </Route>
      </Routes>
      <WhatsAppButton />
      <Chatbot />
    </>
  )
}

export default App