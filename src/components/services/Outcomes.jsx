import { useState } from "react";

function OutcomeIcon({ children }) {
  return (
    <div style={{ marginBottom: "1.25rem", width: 56, height: 56, display: "flex", alignItems: "center", justifyContent: "center" }}>
      {children}
    </div>
  );
}

function OutcomeCard({ icon, title, description, accentColor = "#F59E0B" }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#ffffff",
        borderRadius: "1rem",
        padding: "2rem",
        boxShadow: hovered ? "0 8px 32px 0 rgba(0,0,0,0.12)" : "0 2px 16px 0 rgba(0,0,0,0.06)",
        borderBottom: `3px solid ${accentColor}`,
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition: "box-shadow 0.2s ease, transform 0.2s ease",
        cursor: "pointer",
        
      }}
    >
      <OutcomeIcon>{icon}</OutcomeIcon>
      <h3 style={{ fontFamily: "Georgia, serif", fontWeight: 700, fontSize: "1.1rem", color: "#0f172a", margin: 0 }}>
        {title}
      </h3>
      <p style={{ fontFamily: "Georgia, serif", fontSize: "0.95rem", color: "#475569", lineHeight: 1.6, margin: 0 }}>
        {description}
      </p>
    </div>
  );
}

const RocketIcon = ({ color = "#F59E0B" }) => (
  <svg width="52" height="52" viewBox="0 0 52 52" fill="none" style={{ cursor: "pointer" }}>
    <circle cx="16" cy="36" r="10" stroke={color} strokeWidth="2" fill="none" />
    <path d="M24 28 C28 18 36 12 44 8 C40 16 34 24 24 28Z" stroke={color} strokeWidth="2" fill="none" strokeLinejoin="round" />
    <circle cx="35" cy="17" r="3" stroke={color} strokeWidth="2" fill="none" />
    <path d="M20 32 L16 36 L20 40" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M24 28 L18 34" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <circle cx="11" cy="41" r="5" stroke={color} strokeWidth="1.5" fill="none" />
    <path d="M11 38.5 L11 41 L13 41" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PhoneAIIcon = ({ color = "#F59E0B" }) => (
  <svg width="52" height="52" viewBox="0 0 52 52" fill="none" style={{ cursor: "pointer" }}>
    <rect x="16" y="6" width="20" height="34" rx="3" stroke={color} strokeWidth="2" fill="none" />
    <line x1="16" y1="12" x2="36" y2="12" stroke={color} strokeWidth="1.5" />
    <line x1="16" y1="34" x2="36" y2="34" stroke={color} strokeWidth="1.5" />
    <circle cx="26" cy="39" r="1.5" stroke={color} strokeWidth="1.5" fill="none" />
    <path d="M22 4 Q26 1 30 4" stroke={color} strokeWidth="1.8" strokeLinecap="round" fill="none" />
    <path d="M19 7 Q26 3 33 7" stroke={color} strokeWidth="1.8" strokeLinecap="round" fill="none" />
    <circle cx="22" cy="23" r="2" fill={color} />
    <circle cx="26" cy="20" r="2" fill={color} />
    <circle cx="30" cy="23" r="2" fill={color} />
  </svg>
);

const CheckHandIcon = ({ color = "#F59E0B" }) => (
  <svg width="52" height="52" viewBox="0 0 52 52" fill="none" style={{ cursor: "pointer" }}>
    <path d="M18 38 C14 38 12 35 12 32 L12 22 C12 20 14 18 16 18 L16 14 C16 12 18 10 20 10 C22 10 24 12 24 14 L24 18 L28 18 C30 18 32 20 32 22 L32 26 L34 26 C36 26 38 28 38 30 L38 34 C38 37 36 40 32 40 L20 40 C19 40 18.5 39 18 38Z" stroke={color} strokeWidth="2" fill="none" strokeLinejoin="round" />
    <path d="M32 26 L36 20 C37 18 39 18 40 20 L40 30" stroke={color} strokeWidth="2" strokeLinecap="round" fill="none" />
    <circle cx="40" cy="12" r="8" stroke={color} strokeWidth="2" fill="none" />
    <path d="M36 12 L39 15 L44 9" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const DEFAULT_OUTCOMES = [
  {
    id: "innovate",
    icon: <RocketIcon />,
    title: "Innovate Faster",
    description: "Modern digital products delivered with AI-assisted engineering.",
  },
  {
    id: "operate",
    icon: <PhoneAIIcon />,
    title: "Operate Smarter",
    description: "Resilient cloud platforms powered by automation and AIOps.",
  },
  {
    id: "decide",
    icon: <CheckHandIcon />,
    title: "Decide Better",
    description: "Real-time insights driven by DataOps and predictive analytics.",
  },
];

export function Outcomes({
  heading = "Complete Digital Solutions Under One Roof",
  subheading = "At Ignix Social, we combine enterprise-grade security, strategic digital marketing, and cutting-edge technology to deliver end-to-end solutions that protect your business, amplify your reach, and scale with your growth.",
  outcomes = DEFAULT_OUTCOMES,
  accentColor = "#F59E0B",
  bgColor = "#f1f5f9",
}) {
  return (
    <section style={{ backgroundColor: bgColor, padding: "5rem 1.5rem", width: "100%", boxSizing: "border-box" }}>
      <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 3.5rem" }}>
        <h2 style={{ fontFamily: "Georgia, serif", fontWeight: 800, fontSize: "clamp(1.8rem, 4vw, 2.4rem)", color: "#0f172a", margin: "0 0 1rem", letterSpacing: "-0.02em" }}>
          {heading}
        </h2>
        <p style={{ fontFamily: "Georgia, serif", fontSize: "1rem", color: "#475569", lineHeight: 1.7, margin: 0 }}>
          {subheading}
        </p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem", maxWidth: "1100px", margin: "0 auto" }}>
        {outcomes.map((item) => (
          <OutcomeCard key={item.id} icon={item.icon} title={item.title} description={item.description} accentColor={accentColor} />
        ))}
      </div>
    </section>
  );
}

// Also export icons and DEFAULT_OUTCOMES for use in other components
export { RocketIcon, PhoneAIIcon, CheckHandIcon, DEFAULT_OUTCOMES };