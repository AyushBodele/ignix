// src/Layout/MainLayout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import { Footer } from "../components/Footer.jsx";
import { ConsultationProvider } from "../components/ConsultationContext.jsx";

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