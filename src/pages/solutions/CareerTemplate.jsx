import { useState, useEffect, useRef } from "react";
import { PHOTOS, TRUST_ITEMS, CARDS } from "../../data/careerData";

function PolaroidCard({ photo, parallaxX, parallaxY }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`absolute polaroid-anim ${photo.tabletHide ? "hidden lg:block" : ""}`}
      style={{
        ...photo.position,
        zIndex: hovered ? 50 : photo.z,
        transform: `rotate(${photo.rotate}) translate(${parallaxX ?? 0}px,${parallaxY ?? 0}px) scale(${hovered ? 1.07 : 1})`,
        transition: "transform 0.38s cubic-bezier(.34,1.56,.64,1), box-shadow 0.3s ease",
        boxShadow: hovered
          ? "0 28px 60px rgba(0,0,0,0.22),0 8px 20px rgba(0,0,0,0.13)"
          : "0 8px 28px rgba(0,0,0,0.15),0 3px 8px rgba(0,0,0,0.09)",
        cursor: "pointer",
        borderRadius: "4px",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* White Polaroid shell */}
      <div
        className={`bg-white rounded-sm`}
        style={{ padding: "10px 10px 36px 10px", width: photo.w }}
      >
        {/* Image area */}
        <div
          style={{
            width: "100%",
            height: photo.h,
            background: photo.bg,
            borderRadius: "2px",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "6px",
            overflow: "hidden",
          }}
        >
          {/* Branded banner */}
          <div className="absolute top-0 left-0 right-0 flex items-center gap-1 px-2 py-1" style={{ background: "rgba(26,106,240,0.88)" }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-white font-bold tracking-widest" style={{ fontSize: "8px", fontFamily: "Manrope, sans-serif" }}>Ignix Social</span>
          </div>
          <span style={{ fontSize: "38px", marginTop: "18px", filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.15))" }}>{photo.emoji}</span>
          <span className="text-white font-bold uppercase tracking-wider text-center px-2" style={{ fontSize: "10px", textShadow: "0 1px 4px rgba(0,0,0,0.3)", fontFamily: "Manrope, sans-serif" }}>
            {photo.label}
          </span>
        </div>
        {/* Caption */}
        <div className="text-center mt-2 font-semibold text-gray-400 tracking-wide" style={{ fontSize: "10.5px", fontFamily: "Manrope, sans-serif" }}>
          {photo.caption}
        </div>
      </div>
    </div>
  );
}

function FlipCard({ title, color, icon, description }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="cursor-pointer"
      style={{ perspective: "1000px", width: "340px", height: "320px" }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((f) => !f)}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          transition: "transform 0.5s ease",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
          className="bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col items-center justify-between py-8 px-6"
        >
          <div className="flex-1 flex items-center justify-center">
            <img
              src={icon}
              alt={title}
              className="w-32 h-32 object-contain"
            />
          </div>

          <h5 className="text-xl font-bold text-gray-900 text-center mt-4 mb-4">
            {title}
          </h5>

          <button
            className="w-10 h-10 rounded-full flex items-center justify-center text-white text-lg font-bold"
            style={{ backgroundColor: "#1565C0" }}
          >
            &#8594;
          </button>
        </div>

        {/* Back */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
          className="bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-center gap-4 p-8"
        >
          <h2 className="text-2xl font-bold text-left" style={{ color }}>
            {title}
          </h2>
          <p className="text-sm text-gray-700 text-left leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export function IgnixSocialCareersHero() {
  const [visible, setVisible] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (!heroRef.current) return;
      const r = heroRef.current.getBoundingClientRect();
      setMouse({
        x: (e.clientX - (r.left + r.width / 2)) / r.width,
        y: (e.clientY - (r.top + r.height / 2)) / r.height,
      });
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Manrope:wght@400;500;600;700;800;900&display=swap');

        @keyframes float-a {
          0%,100%{transform:translateY(0)}
          50%{transform:translateY(-11px)}
        }
        @keyframes float-b {
          0%,100%{transform:translateY(0)}
          50%{transform:translateY(-15px)}
        }
        @keyframes float-c {
          0%,100%{transform:translateY(0)}
          50%{transform:translateY(-8px)}
        }
        @keyframes fadeUp {
          from{opacity:0;transform:translateY(26px)}
          to{opacity:1;transform:translateY(0)}
        }
        @keyframes fadeScale {
          from{opacity:0;transform:scale(0.86)}
          to{opacity:1;transform:scale(1)}
        }
        @keyframes orb {
          0%,100%{opacity:.45;transform:scale(1)}
          50%{opacity:.75;transform:scale(1.06)}
        }
        .polaroid-anim { animation: fadeScale .65s cubic-bezier(.34,1.56,.64,1) both; }
        .c0{animation:fadeUp .8s cubic-bezier(.22,1,.36,1) .10s both}
        .c1{animation:fadeUp .8s cubic-bezier(.22,1,.36,1) .26s both}
        .c2{animation:fadeUp .8s cubic-bezier(.22,1,.36,1) .42s both}
        .c3{animation:fadeUp .8s cubic-bezier(.22,1,.36,1) .58s both}
        .c4{animation:fadeUp .8s cubic-bezier(.22,1,.36,1) .74s both}
        .c5{animation:fadeUp .8s cubic-bezier(.22,1,.36,1) .88s both}
        .pp-btn-primary {
          background:#1A6AF0;color:#fff;
          font-family:'Manrope',sans-serif;font-weight:700;font-size:15px;
          letter-spacing:.04em;padding:13px 30px;border-radius:50px;border:none;cursor:pointer;
          text-decoration:none;display:inline-block;
          box-shadow:0 4px 22px rgba(26,106,240,.38);
          transition:background .22s,transform .22s,box-shadow .22s;
        }
        .pp-btn-primary:hover{background:#1254C8;transform:translateY(-2px) scale(1.03);box-shadow:0 10px 36px rgba(26,106,240,.46)}
        .pp-btn-secondary {
          background:transparent;color:#1A6AF0;
          font-family:'Manrope',sans-serif;font-weight:700;font-size:15px;
          letter-spacing:.04em;padding:11px 26px;border-radius:50px;
          border:2px solid #1A6AF0;cursor:pointer;
          text-decoration:none;display:inline-block;
          transition:background .22s,transform .22s;
        }
        .pp-btn-secondary:hover{background:#EBF2FF;transform:translateY(-2px) scale(1.03)}
      `}</style>

      <section
        ref={heroRef}
        className="relative flex items-center justify-center overflow-hidden"
        style={{ minHeight: "100vh", background: "#F2F3F6", fontFamily: "Manrope, sans-serif" }}
      >
        {/* Dot grid background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            opacity: 0.55,
            zIndex: 0,
          }}
        />

        {/* Ambient orbs */}
        <div className="absolute" style={{ top: "8%", left: "4%", width: 360, height: 360, borderRadius: "50%", background: "radial-gradient(circle,rgba(26,106,240,.11) 0%,transparent 68%)", animation: "orb 7s ease-in-out infinite", zIndex: 0 }} />
        <div className="absolute" style={{ bottom: "6%", right: "4%", width: 290, height: 290, borderRadius: "50%", background: "radial-gradient(circle,rgba(236,72,153,.08) 0%,transparent 70%)", animation: "orb 9s ease-in-out infinite 2s", zIndex: 0 }} />
        <div className="absolute" style={{ top: "42%", right: "1%", width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle,rgba(34,197,94,.07) 0%,transparent 70%)", animation: "orb 6s ease-in-out infinite 1s", zIndex: 0 }} />

        {/* ─── DESKTOP POLAROID COLLAGE (hidden on mobile) */}
        <div className="hidden md:block absolute inset-0" style={{ zIndex: 1 }}>
          {PHOTOS.map((p, i) => (
            <div
              key={p.id}
              className={p.floatClass}
              style={{
                animationDelay: `${0.18 + i * 0.11}s`,
                position: "absolute",
                ...p.position,
                zIndex: p.z,
              }}
            >
              <PolaroidCard
                photo={p}
                parallaxX={mouse.x * (p.id % 2 === 0 ? 9 : -9)}
                parallaxY={mouse.y * (p.id % 3 === 0 ? 7 : -6)}
              />
            </div>
          ))}
        </div>

        {/* ─── CENTER CARD */}
        <div
          className="relative z-20 flex flex-col items-center text-center"
          style={{ maxWidth: 540, width: "100%", padding: "56px 36px" }}
        >
          {/* Frosted glass backing */}
          <div
            className="absolute inset-0 rounded-3xl"
            style={{
              background: "rgba(242,243,246,0.74)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1.5px solid rgba(255,255,255,0.72)",
              boxShadow: "0 8px 48px rgba(0,0,0,0.07)",
            }}
          />

          <div className="relative z-10 flex flex-col items-center w-full">
            {/* Badge */}
            <div
              className="c0 inline-flex items-center gap-2 rounded-full mb-5"
              style={{
                background: "rgba(26,106,240,0.1)",
                border: "1px solid rgba(26,106,240,0.25)",
                padding: "6px 18px",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#1A6AF0" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span style={{ color: "#1A6AF0", fontWeight: 800, fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                ignixsocial Careers
              </span>
            </div>

            {/* Headline */}
            <div className="c1" style={{ marginBottom: "20px", lineHeight: 1 }}>
              <div className="flex flex-wrap items-baseline justify-center gap-x-3">
                <span style={{ fontWeight: 900, fontSize: "clamp(54px,8vw,84px)", color: "#111118", letterSpacing: "-0.035em", lineHeight: 1.05, fontFamily: "Manrope, sans-serif" }}>
                  Say
                </span>
                <span style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 700, fontSize: "clamp(64px,9.5vw,98px)", color: "#1A6AF0", lineHeight: 1, position: "relative", display: "inline-block" }}>
                  Yes!
                  {/* Swoosh underline */}
                  <svg viewBox="0 0 120 18" style={{ position: "absolute", bottom: -6, left: "50%", transform: "translateX(-50%)", width: "88%", opacity: 0.3 }} preserveAspectRatio="none">
                    <path d="M4 12 Q30 4 60 12 Q90 20 116 10" stroke="#1A6AF0" strokeWidth="3.5" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
              </div>
              <div style={{ fontWeight: 900, fontSize: "clamp(34px,5.5vw,62px)", color: "#111118", letterSpacing: "-0.032em", lineHeight: 1.1, fontFamily: "Manrope, sans-serif", marginTop: "4px" }}>
                to Ignix Social.
              </div>
            </div>

            {/* Accent rule */}
            <div className="c2 rounded-full mb-5" style={{ width: 48, height: 3, background: "linear-gradient(90deg,#1A6AF0,#60a5fa)" }} />

            {/* Body copy */}
            <p className="c3" style={{ fontWeight: 500, fontSize: "clamp(14px,2vw,16.5px)", color: "#374151", lineHeight: 1.75, maxWidth: 430, marginBottom: "28px" }}>
              Ready to join a company that's changing the game in cybersecurity? Our people-centric products are disrupting the status quo around the globe and across every channel—email, web, cloud and social media.
            </p>

            {/* CTAs */}
            <div className="c4 flex flex-wrap gap-3 justify-center">
              <a
                href="#jobs-listing"
                className="pp-btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("jobs-listing")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View Open Roles →
              </a>
              <a
                href="#jobs-listing"
                className="pp-btn-secondary"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("jobs-listing")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Join Our Team
              </a>
            </div>

            {/* Trust row */}
            <div
              className="c5 flex flex-wrap gap-5 justify-center mt-7"
              style={{ opacity: 0.65 }}
            >
              {TRUST_ITEMS.map((item) => (
                <div key={item.label} className="flex items-center gap-1.5">
                  <span style={{ fontSize: "14px" }}>{item.icon}</span>
                  <span style={{ fontWeight: 700, fontSize: "10.5px", color: "#6B7280", letterSpacing: "0.08em", textTransform: "uppercase" }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── MOBILE HORIZONTAL SCROLL (visible only on mobile) */}
        <div
          className="md:hidden absolute bottom-0 left-0 right-0 flex gap-4 overflow-x-auto pb-4 pt-2 px-4"
          style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch", zIndex: 2 }}
        >
          {PHOTOS.map((p) => (
            <div
              key={p.id}
              className="flex-none"
              style={{
                transform: `rotate(${p.rotate})`,
                boxShadow: "0 6px 20px rgba(0,0,0,0.13)",
                borderRadius: "4px",
              }}
            >
              <div className="bg-white rounded-sm" style={{ padding: "7px 7px 24px 7px", width: 130 }}>
                <div style={{ width: "100%", height: 108, background: p.bg, borderRadius: "2px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "4px" }}>
                  <div className="w-full flex items-center gap-1 px-2 py-0.5" style={{ background: "rgba(26,106,240,.88)" }}>
                    <span className="text-white font-bold tracking-widest" style={{ fontSize: "7px", fontFamily: "Manrope, sans-serif" }}>IGNIX SOCIAL</span>
                  </div>
                  <span style={{ fontSize: "28px", marginTop: "8px" }}>{p.emoji}</span>
                </div>
                <div className="text-center mt-1.5 font-semibold text-gray-400" style={{ fontSize: "9px", fontFamily: "Manrope, sans-serif" }}>{p.caption}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export function DetailPanels() {
  const row1 = CARDS.slice(0, 3);
  const row2 = CARDS.slice(3, 5);

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h4 className="text-3xl font-bold text-gray-900 mb-3">
            We value your total wellbeing
          </h4>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            From traditional benefits to cool perks and incentives, our
            comprehensive rewards program has lots to offer.
          </p>
        </div>

        {/* Row 1 — 3 cards */}
        <div className="flex justify-center gap-5 mb-5">
          {row1.map((card) => (
            <FlipCard key={card.title} {...card} />
          ))}
        </div>

        {/* Row 2 — 2 cards centered */}
        <div className="flex justify-center gap-5">
          {row2.map((card) => (
            <FlipCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Main component that combines both sections - exported as Career
