import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import MainLayout from './Layout/MainLayout'
import Hero from './Components/Hero'
import { PlatformSection } from './Components/PlatformSection'
import { IndustrySection } from './Components/IndustrySection'
import HomeServices from './Components/services/Home'
import Company from './Components/Company'
import SolutionTemplate from './pages/solutions/SolutionTemplate'

import ScrollToTop from './hooks/ScrollToTop'
import WhatsAppButton from './Components/WhatsAppButton'
import Chatbot from './Components/Chatbot'
import OutroSection from './Components/OutroSection'


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