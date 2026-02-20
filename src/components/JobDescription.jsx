import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { jobsDetailMap, countryCodes } from "../data/jobRequirement.js";

// ── Small helpers ──────────────────────────────────────────────────────────────
function Tag({ children }) {
    return (
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-50 text-cyan-700 border border-cyan-200">
            {children}
        </span>
    );
}

function SectionTitle({ children }) {
    return (
        <h2 className="text-xl font-bold text-gray-800 mb-5 flex items-center gap-3">
            <span className="w-1 h-6 bg-cyan-400 rounded-full inline-block" />
            {children}
        </h2>
    );
}

// ── Main Component ─────────────────────────────────────────────────────────────
export default function JobDescriptionPage() {
    const { slug } = useParams();
    const navigate = useNavigate();

    // Resolve job data from slug; fall back gracefully if not found
    const jobData = jobsDetailMap[slug];

    const [form, setForm] = useState({
        fullName: "",
        email: "",
        countryCode: "+91",
        phone: "",
        experience: "",
        linkedin: "",
        resume: null,
    });
    const [submitted, setSubmitted] = useState(false);
    const [activeSection, setActiveSection] = useState(null);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setForm((prev) => ({ ...prev, [name]: files ? files[0] : value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    // ── Not-found state ──────────────────────────────────────────────────────
    if (!jobData) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-700 gap-6">
                <p className="text-2xl font-semibold">Job not found.</p>
                <button
                    onClick={() => navigate("/company")}
                    className="px-6 py-2.5 rounded-lg bg-cyan-500 text-white text-sm font-bold hover:bg-cyan-400 transition-colors"
                >
                    ← Back to Careers
                </button>
            </div>
        );
    }

    const { metadata, requirements, responsibilities, bonusSkills } = jobData;

    return (
        <div className="min-h-screen bg-white text-gray-700">
            {/* Top accent bar */}
            <div className="h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500" />

            {/* Header */}
            <header className="border-b border-gray-200 bg-white sticky top-0 z-10 shadow-sm">
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                    <button
                        onClick={() => navigate("/company")}
                        className="flex items-center gap-2 text-sm text-gray-500 hover:text-cyan-600 transition-colors"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                        All Openings
                    </button>
                    <span className="text-xs text-cyan-600 border border-cyan-300 bg-cyan-50 rounded-full px-3 py-1 font-medium">
                        Actively Hiring
                    </span>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-6 py-12">
                {/* Hero */}
                <div className="mb-12">
                    <div className="flex flex-wrap gap-3 mb-4">
                        {metadata.tags.map((tag, index) => (
                            <Tag key={index}>{tag}</Tag>
                        ))}
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
                        {metadata.title}
                        <br />
                        <span className="text-cyan-500">— {metadata.subtitle}</span>
                    </h1>
                    <p className="text-gray-500 max-w-2xl leading-relaxed">
                        {metadata.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                    {/* Left: Job Details */}
                    <div className="lg:col-span-3 space-y-10">

                        {/* Responsibilities */}
                        <section>
                            <SectionTitle>Responsibilities</SectionTitle>
                            <div className="space-y-4">
                                {responsibilities.map((group, i) => (
                                    <div key={i} className="rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm">
                                        <button
                                            className="w-full text-left px-5 py-4 flex items-center justify-between text-sm font-semibold text-gray-800 hover:bg-gray-50 transition-colors"
                                            onClick={() => setActiveSection(activeSection === i ? null : i)}
                                        >
                                            <span>{group.category}</span>
                                            <svg
                                                className={`w-4 h-4 text-cyan-500 transition-transform ${activeSection === i ? "rotate-180" : ""}`}
                                                fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                            </svg>
                                        </button>
                                        {activeSection === i && (
                                            <ul className="px-5 pb-4 space-y-2 border-t border-gray-100">
                                                {group.items.map((item, j) => (
                                                    <li key={j} className="flex gap-3 pt-3 text-sm text-gray-600 leading-relaxed">
                                                        <span className="text-cyan-500 mt-0.5 shrink-0">▸</span>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Requirements */}
                        <section>
                            <SectionTitle>Requirements</SectionTitle>
                            <div className="rounded-xl border border-gray-200 bg-white p-5 space-y-3 shadow-sm">
                                {requirements.map((req, i) => (
                                    <div key={i} className="flex gap-3 text-sm text-gray-600 leading-relaxed">
                                        <span className="text-green-500 shrink-0 mt-0.5">✓</span>
                                        {req}
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Bonus */}
                        <section>
                            <SectionTitle>What Sets You Apart</SectionTitle>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {bonusSkills.map((skill, i) => (
                                    <div key={i} className="rounded-lg border border-indigo-200 bg-indigo-50 px-4 py-3 text-sm text-indigo-700 leading-snug">
                                        ★ {skill}
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Right: Application Form */}
                    <div className="lg:col-span-2">
                        <div className="sticky top-24">
                            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md">
                                <h3 className="text-lg font-bold text-gray-900 mb-1">Apply Now</h3>
                                <p className="text-xs text-gray-400 mb-6">{metadata.title} — {metadata.subtitle}</p>

                                {submitted ? (
                                    <div className="text-center py-10">
                                        <div className="w-14 h-14 rounded-full bg-cyan-50 border border-cyan-400 flex items-center justify-center mx-auto mb-4">
                                            <svg className="w-7 h-7 text-cyan-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                            </svg>
                                        </div>
                                        <p className="text-gray-900 font-semibold mb-1">Application Submitted!</p>
                                        <p className="text-gray-500 text-sm">We'll review your profile and reach out shortly.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        {/* Full Name */}
                                        <div>
                                            <label className="block text-xs text-gray-500 mb-1.5 font-semibold uppercase tracking-wider">Full Name *</label>
                                            <input
                                                type="text"
                                                name="fullName"
                                                required
                                                value={form.fullName}
                                                onChange={handleChange}
                                                placeholder="Jane Doe"
                                                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-white transition-colors"
                                            />
                                        </div>

                                        {/* Email */}
                                        <div>
                                            <label className="block text-xs text-gray-500 mb-1.5 font-semibold uppercase tracking-wider">Email *</label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={form.email}
                                                onChange={handleChange}
                                                placeholder="jane@example.com"
                                                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-white transition-colors"
                                            />
                                        </div>

                                        {/* Phone */}
                                        <div>
                                            <label className="block text-xs text-gray-500 mb-1.5 font-semibold uppercase tracking-wider">Phone *</label>
                                            <div className="flex gap-2">
                                                <select
                                                    name="countryCode"
                                                    value={form.countryCode}
                                                    onChange={handleChange}
                                                    className="bg-gray-50 border border-gray-200 rounded-lg px-2 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-cyan-400 transition-colors"
                                                >
                                                    {countryCodes.map((c) => (
                                                        <option key={c.code} value={c.code}>{c.label}</option>
                                                    ))}
                                                </select>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    required
                                                    maxLength={10}
                                                    value={form.phone}
                                                    onChange={handleChange}
                                                    placeholder="9876543210"
                                                    className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-white transition-colors"
                                                />
                                            </div>
                                        </div>

                                        {/* Experience */}
                                        <div>
                                            <label className="block text-xs text-gray-500 mb-1.5 font-semibold uppercase tracking-wider">Experience (Years) *</label>
                                            <input
                                                type="number"
                                                name="experience"
                                                required
                                                min={0}
                                                step={0.1}
                                                value={form.experience}
                                                onChange={handleChange}
                                                placeholder="e.g. 2"
                                                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-white transition-colors"
                                            />
                                        </div>

                                        {/* LinkedIn */}
                                        <div>
                                            <label className="block text-xs text-gray-500 mb-1.5 font-semibold uppercase tracking-wider">LinkedIn URL</label>
                                            <input
                                                type="url"
                                                name="linkedin"
                                                value={form.linkedin}
                                                onChange={handleChange}
                                                placeholder="https://linkedin.com/in/janedoe"
                                                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-white transition-colors"
                                            />
                                        </div>

                                        {/* Resume Upload */}
                                        <div>
                                            <label className="block text-xs text-gray-500 mb-1.5 font-semibold uppercase tracking-wider">Resume *</label>
                                            <label className="flex flex-col items-center justify-center w-full h-24 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:border-cyan-400 hover:bg-cyan-50 transition-colors">
                                                <div className="flex flex-col items-center gap-1">
                                                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                                                    </svg>
                                                    <span className="text-xs text-gray-500">
                                                        {form.resume ? form.resume.name : "Upload .doc, .docx or .pdf"}
                                                    </span>
                                                </div>
                                                <input type="file" name="resume" accept=".doc,.docx,.pdf" required onChange={handleChange} className="hidden" />
                                            </label>
                                        </div>

                                        {/* Submit */}
                                        <button
                                            type="submit"
                                            className="w-full py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-white text-sm font-bold tracking-wide transition-colors mt-2"
                                        >
                                            Submit Application →
                                        </button>

                                        <p className="text-center text-xs text-gray-400">
                                            By submitting, you agree to our privacy policy.
                                        </p>
                                    </form>
                                )}
                            </div>

                            {/* Share */}
                            <div className="flex items-center justify-center gap-4 mt-4">
                                <span className="text-xs text-gray-400">Share this role:</span>
                                {["LinkedIn", "Twitter", "Facebook"].map((s) => (
                                    <a key={s} href="#" className="text-xs text-gray-400 hover:text-cyan-500 transition-colors">{s}</a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}