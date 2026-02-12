// src/Layout/MainLayout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import { ConsultationProvider } from "../Components/ConsultationContext";

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