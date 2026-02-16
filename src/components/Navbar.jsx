import React, { useState } from "react";
import { FiSearch, FiChevronDown, FiArrowRight } from "react-icons/fi";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "../ui/Button";
import MegaMenu from "../ui/MegaMenu";
import { navItems } from "../utils/menuData";
import { useConsultation } from "./ConsultationContext.jsx";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const navigate = useNavigate();
  const { openConsultation } = useConsultation();

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full border-b border-gray-300 bg-[#f3f4f6]/95 backdrop-blur-md font-sans">
      {/* ===== Top Bar ===== */}
      <div className="bg-[#d9e1ef] text-xs font-bold">
        <div className="w-full flex justify-between items-center px-4 sm:px-8 lg:px-20 py-2">
          <div className="flex items-center gap-1 text-gray-700">
            <span className="font-semibold uppercase">IN:</span>
            <span>English: Indian</span>
          </div>

          <div className="flex items-center gap-6 text-gray-700">
            <button
              className="flex items-center gap-1 hover:text-blue-600 transition"
              aria-label="Search"
            >
              Search <FiSearch className="w-3.5 h-3.5" />
            </button>

            {["Partners", "Support", "Login"].map((item) => (
              <button
                key={item}
                className="flex items-center gap-1 hover:text-blue-600 transition"
                aria-expanded="false"
              >
                {item} <FiChevronDown className="w-3.5 h-3.5" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ===== Main Nav ===== */}
      <div className="bg-[#f3f4f6]/0 relative">
        <div className="w-full flex flex-wrap items-center justify-between gap-3 px-4 sm:px-8 lg:px-20 py-1">
          {/* Logo */}
          <div className="text-xl sm:text-2xl font-bold tracking-tight text-black">
            <Link to="/">
              IgnixSocial<span className="text-gray-400">.</span>
            </Link>
          </div>

          {/* Menu */}
          <nav className="hidden md:flex gap-6 lg:gap-10 text-black font-medium mr-0 lg:mr-[12.5rem]">
            {navItems.map((item) => {
              const handleClick = () => {
                // Close any open mega menu on click so it doesn't toggle via click
                setActiveMenu(null);

                if (item.key === "services") {
                  navigate("/services");
                } else if (item.key === "company") {
                  navigate("/company");
                } else if (item.key === "platform" || item.key === "solutions") {
                  navigate("/#platform");
                } else if (item.key === "why") {
                  navigate("/#why");
                }
              };

              return (
                <div
                  key={item.key}
                  onMouseEnter={() => setActiveMenu(item.key)}
                  className="relative"
                >
                  <button
                    onClick={handleClick}
                    className="hover:text-blue-600 transition cursor-pointer py-2 focus:outline-none focus:text-blue-600"
                    aria-haspopup="true"
                    aria-expanded={activeMenu === item.key}
                  >
                    {item.label}
                  </button>
                </div>
              );
            })}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-5">
            <Button
              variant="outline"
              rightIcon={<FiArrowRight className="w-4 h-4" />}
              onClick={openConsultation}
            >
              See It in Action
            </Button>

            <Button
              variant="primary"
              rightIcon={<FiArrowRight className="w-4 h-4 text-green-500" />}
              onClick={openConsultation}
            >
              Contact Us
            </Button>
          </div>
        </div>

        {/* ===== CENTERED MEGA MENU ===== */}
        {activeMenu && (
          <div
            className="absolute left-1/2 -translate-x-1/2 top-full mt-6 z-50"
            onMouseEnter={() => setActiveMenu(activeMenu)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <MegaMenu active={activeMenu} onClose={() => setActiveMenu(null)} />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;