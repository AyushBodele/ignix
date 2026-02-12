import React from 'react'
import { Routes, Route } from 'react-router-dom'

import MainLayout from './Layout/MainLayout'
import Hero from './Components/Hero'
import { PlatformSection } from './Components/PlatformSection'
import { IndustrySection } from './Components/IndustrySection'
import HomeServices from './Components/services/Home'
import Company from './Components/Company'

function LandingPage() {
  return (
    <>
      <Hero />
      <PlatformSection />
      <IndustrySection />
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/services" element={<HomeServices />} />
        <Route path="/company" element={<Company />} />
        <Route path="*" element={<p className="p-8 text-center">Page not found.</p>} />
      </Route>
    </Routes>
  )
}

export default App