import React from "react";
import CircularText from "../hooks/CircularText";
import { useConsultation } from "./ConsultationContext";

const AboutSection = () => {
  const { openConsultation } = useConsultation();

  return (
    <section className="relative w-full min-h-screen lg:min-h-[85vh] bg-[#0f172b] text-white flex items-center">
      <div className="w-full px-6 sm:px-8 md:px-16 lg:px-24 py-16 md:py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
        
        {/* Left Side: Text Content */}
        <div className="space-y-6 md:space-y-8 max-w-full md:max-w-4xl">
          {/* Badge */}
          <div className="
            inline-flex items-center gap-3
            bg-indigo-900/40 backdrop-blur-sm
            border border-indigo-700/50
            rounded-full
            px-5 py-2.5
            flex-wrap
          ">
            <svg
              className="w-5 h-5 text-indigo-300 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>

            <span className="text-sm font-medium text-indigo-200">
              New
            </span>
            <span className="text-sm font-medium text-gray-300">
              Introducing SecureGuard Platform
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="
            text-4xl sm:text-5xl md:text-7xl lg:text-8xl
            font-bold
            leading-tight
            tracking-tight
          ">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Ignix
            </span>{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Ignites
            </span>
          </h1>

          {/* Description */}
          <p className="
            text-base sm:text-lg md:text-xl
            text-gray-300
            leading-relaxed
            max-w-full md:max-w-3xl
          ">
            Ignix Social redefines digital destiny—crafting unbreakable realms
            where security, speed, and scale converge in cosmic synergy,
            propelling pioneers to unparalleled peaks.
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <button
              onClick={openConsultation}
              className="
              group inline-flex items-center gap-3
              bg-gradient-to-r from-purple-500 to-indigo-600
              hover:from-purple-600 hover:to-indigo-700
              text-white font-semibold
              px-7 py-4
              rounded-2xl
              transition-all duration-300
              shadow-lg shadow-purple-500/30
              hover:shadow-purple-500/50
              hover:scale-105
              whitespace-nowrap
            ">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
              <span className="text-lg">Get Started</span>
            </button>
          </div>

          {/* Subtext */}
          <p className="text-gray-400 text-sm sm:text-base pt-2">
            Available for all major programming languages
          </p>
        </div>

        {/* Right Side */}
        <div className="
          relative flex items-center justify-center
          w-full md:w-[420px] lg:w-[480px]
          h-[320px] sm:h-[360px] md:h-full
          overflow-hidden
        ">
          <CircularText
            text="WELCOME*TO*IGNIX*SOCIAL*"
            spinDuration={17}
            onHover="speedUp"
            className="
              w-[260px] h-[260px]
              sm:w-[300px] sm:h-[300px]
              md:w-[360px] md:h-[360px]
            "
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
