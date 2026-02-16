// src/Layout/MainLayout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ConsultationProvider } from "../components/ConsultationContext";

const MainLayout = () => {
  return (
    <ConsultationProvider>
      <div>
        <Navbar />
        <main style={{ minHeight: "80vh", paddingTop: "80px" }}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </ConsultationProvider>
  );
};

export default MainLayout;