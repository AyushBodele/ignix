import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useConsultation } from "../ConsultationContext";

export function ServicesHero() {
  const { openConsultation } = useConsultation();
  const location = useLocation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (location.hash === '#consultation') {
      openConsultation();
    }
  }, [location, openConsultation]);

  return (
    <div className="w-full flex items-center justify-center font-sans relative overflow-hidden box-border m-0 p-0"
      style={{
        background: `
          radial-gradient(ellipse at 0% 0%, #e6f0fa 0%, transparent 52%),
          radial-gradient(ellipse at 100% 0%, #d4e8f5 0%, transparent 52%),
          radial-gradient(ellipse at 0% 100%, #f0f7fc 0%, transparent 52%),
          radial-gradient(ellipse at 100% 100%, #e1eff9 0%, transparent 52%),
          linear-gradient(135deg, #f8fcff 0%, #f0f7ff 38%, #e6f2fa 68%, #f5faff 100%)
        `
      }}
    >
      {/* Main content row */}
      <div className="w-full max-w-7xl flex items-center justify-between px-16 py-20 box-border gap-10 flex-wrap">
        
        {/* LEFT — text */}
        <div 
          className="flex-1 min-w-[440px] max-w-[580px] transition-all duration-650 ease"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          <h1 className="text-[clamp(38px,4.8vw,64px)] font-black leading-[1.1] mb-[22px] tracking-tight text-[#1a2e4f]">
            Delivering Digital<br />
            Advantage with{" "}
            <span className="text-[#faa226]">Ignix</span>
          </h1>

          <p className="text-[clamp(14px,1.5vw,17px)] text-[#4a5c6e] leading-relaxed mb-11 max-w-[500px] font-normal">
            Ignix Social delivers powerful cybersecurity, data-driven digital marketing, and high-performance web development solutions.
          </p>

          <div className="flex gap-5 flex-wrap items-center">
            
            {/* Outline button — dark blue border for white bg */}
            <button
              onClick={openConsultation}
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#1a2e4f] rounded-full bg-transparent text-[#1a2e4f] text-sm font-bold cursor-pointer tracking-wide transition-all duration-180 font-sans hover:bg-[#1a2e4f] hover:text-white hover:border-[#1a2e4f]"
            >
              Get a Free Consultation <span className="text-base">→</span>
            </button>

            {/* Filled orange button */}
            <button
            onClick={openConsultation}
              className="inline-flex items-center gap-2 px-8 py-4 border-none rounded-full bg-[#faa226] text-white text-sm font-bold cursor-pointer tracking-wide transition-all duration-180 font-sans shadow-[0_4px_22px_rgba(250,162,38,0.25)] hover:bg-[#f09318] hover:-translate-y-0.5 hover:shadow-[0_6px_28px_rgba(250,162,38,0.35)]"
            >
              View Our Services <span className="text-base">→</span>
            </button>
          </div>
        </div>

        {/* RIGHT — image */}
        <div 
          className="flex-1 min-w-[380px] max-w-[530px] min-h-[360px] flex items-center justify-center transition-all duration-850 delay-150"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateX(0) scale(1)' : 'translateX(28px) scale(0.97)',
            filter: 'drop-shadow(0 20px 35px rgba(0,0,0,0.08))'
          }}
        >
          <img 
            src="/images/services.png" 
            alt="Ignix Social Services"
            className="w-full h-auto max-w-[500px] rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}