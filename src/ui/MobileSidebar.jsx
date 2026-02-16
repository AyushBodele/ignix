import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiChevronRight, FiArrowUpRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { navItems, menuData } from "../utils/menuData.js";

const routeMap = {
    services: "/services",
    company: "/company",
    platform: { path: "/", scrollTo: "platform" },
    solutions: { path: "/", scrollTo: "platform" },
    why: { path: "/", scrollTo: "why" },
};

const MobileSidebar = ({ isOpen, onClose }) => {
    const navigate = useNavigate();
    const [expandedKey, setExpandedKey] = useState(null);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
        return () => { document.body.style.overflow = "auto"; };
    }, [isOpen]);

    const toggleAccordion = (key) => {
        setExpandedKey((prev) => (prev === key ? null : key));
    };

    const handleNavigation = (itemKey, sectionPath = null) => {
        onClose();
        if (sectionPath) {
            if (typeof sectionPath === "string" && sectionPath.startsWith("/#")) {
                navigate("/", { state: { scrollTo: sectionPath.split("#")[1] } });
            } else {
                navigate(sectionPath);
            }
            return;
        }
        if (!itemKey) return;
        const route = routeMap[itemKey];
        if (!route) return;
        if (typeof route === "string") {
            navigate(route);
        } else {
            navigate(route.path, { state: { scrollTo: route.scrollTo } });
        }
    };

    /*
     * WHY PORTAL?
     * ───────────────────────────────────────────────────────────────────
     * CSS stacking contexts (created by transform, will-change, filter,
     * isolation, etc.) trap z-index — even z-index:9999 inside a
     * transformed ancestor can't paint above siblings outside it.
     * ReactDOM.createPortal teleports the sidebar to document.body,
     * making it a direct child of <body> with no ancestor stacking
     * context to fight. This is the only reliable fix.
     * ───────────────────────────────────────────────────────────────────
     */
    const sidebarContent = (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        key="backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.22 }}
                        onClick={onClose}
                        style={{
                            position: "fixed",
                            inset: 0,
                            /* Use a very high z-index — safe because we're on body now */
                            zIndex: 9998,
                            backgroundColor: "rgba(0,0,0,0.42)",
                            backdropFilter: "blur(4px)",
                            WebkitBackdropFilter: "blur(4px)",
                        }}
                    />

                    {/* Drawer */}
                    <motion.aside
                        key="drawer"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Navigation menu"
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "calc(100% + 16px)" }}
                        transition={{ type: "spring", damping: 28, stiffness: 240 }}
                        style={{
                            position: "fixed",
                            top: "70px",
                            bottom: "16px",
                            right: "12px",
                            zIndex: 9999,
                            width: "calc(100% - 24px)",
                            maxWidth: "310px",
                            display: "flex",
                            flexDirection: "column",
                            backgroundColor: "#ffffff",
                            boxShadow: "0 8px 40px rgba(0,0,0,0.18), 0 2px 8px rgba(37,99,235,0.08)",
                            border: "1px solid #e8f0fe",
                            borderRadius: "20px",
                            overflow: "hidden",
                        }}
                    >
                        {/* Accent stripe */}
                        <div style={{
                            flexShrink: 0,
                            height: "3px",
                            background: "linear-gradient(90deg, #2563eb 0%, #4f46e5 60%, #7c3aed 100%)",
                        }} />

                        {/* ── HEADER ── */}
                        <div style={{
                            flexShrink: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: "18px 22px 16px",
                            borderBottom: "1px solid #f0f4ff",
                            backgroundColor: "#ffffff",
                        }}>
                            <button
                                onClick={() => handleNavigation(null, "/")}
                                style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
                            >
                                <span style={{
                                    fontFamily: "'Plus Jakarta Sans', 'Outfit', sans-serif",
                                    fontSize: "19px",
                                    fontWeight: 800,
                                    letterSpacing: "-0.04em",
                                    color: "#1e3a8a",
                                }}>
                                    Ignix<span style={{ color: "#2563eb" }}>Social</span>
                                    <span style={{
                                        background: "linear-gradient(135deg,#2563eb,#7c3aed)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        fontWeight: 900,
                                    }}>.</span>
                                </span>
                            </button>

                            <motion.button
                                whileHover={{ scale: 1.08, backgroundColor: "#eff6ff" }}
                                whileTap={{ scale: 0.93 }}
                                onClick={onClose}
                                aria-label="Close menu"
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "36px",
                                    height: "36px",
                                    borderRadius: "10px",
                                    backgroundColor: "#f8faff",
                                    border: "1px solid #dbeafe",
                                    cursor: "pointer",
                                    color: "#2563eb",
                                    flexShrink: 0,
                                    transition: "background-color 0.15s",
                                }}
                            >
                                <FiX size={17} strokeWidth={2.5} />
                            </motion.button>
                        </div>

                        {/* ── NAV BODY ── flex:1 + minHeight:0 = scrolls within remaining space */}
                        <nav style={{
                            flex: "1 1 0",
                            minHeight: 0,
                            overflowY: "auto",
                            overflowX: "hidden",
                            padding: "4px 22px 12px",
                            backgroundColor: "#ffffff",
                        }}>
                            <p style={{
                                fontFamily: "'DM Mono', 'Fira Mono', monospace",
                                fontSize: "9.5px",
                                fontWeight: 500,
                                letterSpacing: "0.14em",
                                textTransform: "uppercase",
                                color: "#93c5fd",
                                margin: "14px 0 6px",
                            }}>
                                Menu
                            </p>

                            {(navItems ?? []).map((item, idx) => {
                                const subData = menuData?.[item.key];
                                const hasChildren = !!(subData?.sections?.length);
                                const isExpanded = expandedKey === item.key;

                                return (
                                    <div key={item.key} style={{ borderBottom: "1px solid #f1f5f9" }}>
                                        <div style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            padding: "12px 0",
                                        }}>
                                            <button
                                                onClick={() => handleNavigation(item.key)}
                                                style={{
                                                    flex: 1,
                                                    textAlign: "left",
                                                    background: "none",
                                                    border: "none",
                                                    cursor: "pointer",
                                                    padding: 0,
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "10px",
                                                }}
                                            >
                                                <span style={{
                                                    fontFamily: "'DM Mono', monospace",
                                                    fontSize: "9px",
                                                    color: "#93c5fd",
                                                    letterSpacing: "0.06em",
                                                    fontWeight: 500,
                                                    minWidth: "16px",
                                                }}>
                                                    {String(idx + 1).padStart(2, "0")}
                                                </span>
                                                <span style={{
                                                    fontFamily: "'Plus Jakarta Sans', 'Outfit', sans-serif",
                                                    fontSize: "16px",
                                                    fontWeight: 700,
                                                    letterSpacing: "-0.02em",
                                                    color: "#0f172a",
                                                    textTransform: "uppercase",
                                                }}>
                                                    {item.label}
                                                </span>
                                            </button>

                                            {hasChildren && (
                                                <motion.button
                                                    whileHover={{ backgroundColor: "#eff6ff" }}
                                                    whileTap={{ scale: 0.9 }}
                                                    onClick={(e) => { e.stopPropagation(); toggleAccordion(item.key); }}
                                                    aria-expanded={isExpanded}
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        width: "30px",
                                                        height: "30px",
                                                        borderRadius: "8px",
                                                        backgroundColor: "transparent",
                                                        border: "none",
                                                        cursor: "pointer",
                                                        color: isExpanded ? "#2563eb" : "#94a3b8",
                                                        marginLeft: "8px",
                                                        flexShrink: 0,
                                                        transition: "color 0.15s",
                                                    }}
                                                >
                                                    <motion.span
                                                        animate={{ rotate: isExpanded ? 90 : 0 }}
                                                        transition={{ duration: 0.2 }}
                                                        style={{ display: "flex" }}
                                                    >
                                                        <FiChevronRight size={16} strokeWidth={2.5} />
                                                    </motion.span>
                                                </motion.button>
                                            )}
                                        </div>

                                        <AnimatePresence initial={false}>
                                            {isExpanded && hasChildren && (
                                                <motion.div
                                                    key="sub"
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.28, ease: "easeInOut" }}
                                                    style={{ overflow: "hidden" }}
                                                >
                                                    <div style={{
                                                        backgroundColor: "#f8faff",
                                                        borderRadius: "12px",
                                                        padding: "10px 14px 12px",
                                                        marginBottom: "10px",
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        gap: "2px",
                                                    }}>
                                                        {subData.sections.map((section, sIdx) => (
                                                            <button
                                                                key={sIdx}
                                                                onClick={() => handleNavigation(item.key, section.path || undefined)}
                                                                onMouseEnter={e => e.currentTarget.style.background = "#eff6ff"}
                                                                onMouseLeave={e => e.currentTarget.style.background = "none"}
                                                                style={{
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    gap: "10px",
                                                                    padding: "9px 6px",
                                                                    background: "none",
                                                                    border: "none",
                                                                    cursor: "pointer",
                                                                    textAlign: "left",
                                                                    borderRadius: "8px",
                                                                    width: "100%",
                                                                }}
                                                            >
                                                                <span style={{
                                                                    width: "5px",
                                                                    height: "5px",
                                                                    borderRadius: "50%",
                                                                    backgroundColor: "#93c5fd",
                                                                    flexShrink: 0,
                                                                    display: "block",
                                                                }} />
                                                                <span style={{
                                                                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                                                                    fontSize: "13.5px",
                                                                    fontWeight: 600,
                                                                    color: "#334155",
                                                                    letterSpacing: "-0.01em",
                                                                }}>
                                                                    {section.title}
                                                                </span>
                                                            </button>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            })}
                        </nav>

                        {/* ── FOOTER CTAs ── */}
                        <div style={{
                            flexShrink: 0,
                            padding: "14px 22px 20px",
                            borderTop: "1px solid #f0f4ff",
                            backgroundColor: "#ffffff",
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                        }}>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.97 }}
                                onClick={() => handleNavigation(null, "/#contact")}
                                style={{
                                    width: "100%",
                                    padding: "14px 20px",
                                    background: "linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)",
                                    color: "#ffffff",
                                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                                    fontSize: "14.5px",
                                    fontWeight: 700,
                                    letterSpacing: "-0.01em",
                                    border: "none",
                                    borderRadius: "13px",
                                    cursor: "pointer",
                                    boxShadow: "0 6px 20px rgba(37,99,235,0.25)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "7px",
                                }}
                            >
                                Contact Us
                                <FiArrowUpRight size={15} strokeWidth={2.5} />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.02, backgroundColor: "#eff6ff" }}
                                whileTap={{ scale: 0.97 }}
                                onClick={() => handleNavigation(null, "/#demo")}
                                style={{
                                    width: "100%",
                                    padding: "13px 20px",
                                    backgroundColor: "#ffffff",
                                    color: "#2563eb",
                                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                                    fontSize: "14.5px",
                                    fontWeight: 600,
                                    letterSpacing: "-0.01em",
                                    border: "2px solid #bfdbfe",
                                    borderRadius: "13px",
                                    cursor: "pointer",
                                    transition: "background-color 0.15s ease",
                                }}
                            >
                                See It in Action
                            </motion.button>
                        </div>
                    </motion.aside>
                </>
            )}
        </AnimatePresence>
    );

    /* Teleport to document.body — escapes ALL stacking contexts in your app tree */
    return ReactDOM.createPortal(sidebarContent, document.body);
};

export default MobileSidebar;