import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { menuData } from "../utils/menuData.js";

const MegaMenu = ({ active, onClose }) => {
  const data = menuData[active];

  if (!data) return null;

  const [activeSection, setActiveSection] = useState(data.sections[0]);

  return (
    <div className="w-[1200px] bg-[#f3f4f6] rounded-2xl shadow-2xl p-10 flex gap-12">

      {/* LEFT MENU */}
      {active !== "solutions" && (
        <div className="w-1/4 space-y-3">
          {data.sections.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                onMouseEnter={() => setActiveSection(item)}
                className={`p-4 rounded-lg cursor-pointer transition flex items-center gap-3
                  ${activeSection.title === item.title
                    ? "bg-blue-200 font-semibold"
                    : "hover:bg-blue-100"}`}
              >
                {Icon && <Icon className="w-5 h-5" />}
                <span>{item.title}</span>
              </div>
            );
          })}
        </div>
      )}

      {/* CENTER CONTENT */}
      <div className={active === "solutions" ? "w-3/4" : "w-2/4"}>
        {/* Dynamic title/description */}
        <h2 className="text-3xl font-bold text-black leading-snug mb-6">
          {activeSection.sectionTitle || data.title}
        </h2>

        <p className="text-gray-600 mb-8">
          {activeSection.sectionDescription || data.description}
        </p>

        {/* Platform - 3x3 Grid */}
        {active === "platform" && activeSection.features && (
          <div className="grid grid-cols-3 gap-4">
            {activeSection.features.map((feature, i) => {
              const FeatureIcon = feature.icon;
              return (
                <div
                  key={i}
                  className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center"
                >
                  {FeatureIcon && (
                    <div className="p-3 bg-blue-50 rounded-full mb-3">
                      <FeatureIcon className="w-6 h-6 text-blue-600" />
                    </div>
                  )}
                  <h3 className="font-semibold text-blue-600 mb-1 text-sm">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-xs">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        )}

        {/* Solutions - Compact grid */}
        {active === "solutions" && (
          <div className="grid grid-cols-2 gap-4">
            {data.sections.map((item, i) => {
              const Icon = item.icon;
              const Wrapper = item.path ? Link : 'div';
              const wrapperProps = item.path ? { to: item.path, onClick: onClose } : {};

              return (
                <Wrapper key={i} {...wrapperProps} className="flex flex-col p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition">
                      {Icon && <Icon className="w-4 h-4 text-blue-600" />}
                    </div>
                    <h3 className="text-blue-600 font-semibold text-sm">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-gray-500 mb-2">
                    {item.description}
                  </p>
                  {item.ctaText && (
                    <button className="mt-auto text-xs text-blue-600 font-medium hover:text-blue-800 transition flex items-center gap-1">
                      {item.ctaText} <FiArrowRight className="w-2.5 h-2.5" />
                    </button>
                  )}
                </Wrapper>
              );
            })}
          </div>
        )}

        {/* Why Proofpoint - Features grid */}
        {active === "why" && activeSection.features && (
          <div className="grid grid-cols-1 gap-4">
            {activeSection.features.map((feature, i) => (
              <div key={i} className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-blue-600 mb-1">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Services - Features grid */}
        {active === "services" && activeSection.features && (
          <div className="grid grid-cols-1 gap-4">
            {activeSection.features.map((feature, i) => (
              <div key={i} className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-blue-600 mb-1">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Company - Simple grid */}
        {active === "company" && (
          <div className="grid grid-cols-1 gap-4">
            {data.sections.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-center gap-3 p-3 hover:bg-blue-50 rounded-lg transition cursor-pointer">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    {Icon && <Icon className="w-5 h-5 text-blue-600" />}
                  </div>
                  <div>
                    <h3 className="text-blue-600 font-semibold text-sm flex items-center gap-1">
                      {item.title} <FiArrowRight className="w-3 h-3" />
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* RIGHT DYNAMIC PANEL */}
      <div className="w-1/4 bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-6 flex flex-col justify-between shadow-xl">
        <div>
          <span className="text-xs uppercase tracking-widest text-blue-400">
            {data.featured.eyebrow}
          </span>

          <h4 className="text-xl font-semibold mt-3 leading-snug">
            {data.featured.heading}
          </h4>

          <p className="text-sm text-gray-300 mt-4">
            {data.featured.text}
          </p>
        </div>

        <div className="mt-6 space-y-3 text-sm">
          {data.featured.stats.map((stat, i) => (
            <div key={i} className="flex justify-between">
              <span className="text-gray-400">{stat.label}</span>
              <span className="font-semibold">{stat.value}</span>
            </div>
          ))}
        </div>

        <button className="mt-6 w-full bg-white text-black font-medium py-2 rounded-lg hover:bg-gray-200 transition">
          {data.featured.button}
        </button>
      </div>
    </div>
  );
};

export default MegaMenu;