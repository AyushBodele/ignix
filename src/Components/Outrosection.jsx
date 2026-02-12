import React from 'react';

const OutroSection = ({ title }) => {
return (
    <div className="marketecture-container">
      <svg 
        className="marketecture-diagram"
        viewBox="0 0 1327.43 1152.9"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Radial gradient for center circle - REMOVED GLOW */}
          <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="transparent" stopOpacity="0"/> {/* Made transparent */}
            <stop offset="50%" stopColor="transparent" stopOpacity="0"/> {/* Made transparent */}
            <stop offset="100%" stopColor="transparent" stopOpacity="0"/> {/* Made transparent */}
          </radialGradient>

          {/* Gradient for hexagon sections */}
          <linearGradient id="sectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.3"/>
            <stop offset="100%" stopColor="#00f0ff" stopOpacity="0.1"/>
          </linearGradient>

          {/* Glow filter */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* Outer glow for dots */}
          <filter id="dotGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* Pattern for center circle lines - REMOVED TO SHOW BG */}
          <pattern id="verticalLines" x="0" y="0" width="4" height="100%" patternUnits="userSpaceOnUse">
            <line x1="2" y1="0" x2="2" y2="100%" stroke="#00f0ff" strokeWidth="0.5" opacity="0"/>
          </pattern>
        </defs>

        {/* Background hexagon outline */}
        <path 
          className="hexagon-outline"
          d="M704.47,1.21h-327.91c-39.83,0-76.6,21.37-96.33,55.97L14.98,522.48c-19.35,33.51-19.35,74.8,0,108.32l268.85,466.16c19.8,34.33,56.42,55.49,96.05,55.49h324.59"
          fill="none"
          stroke="#00f0ff"
          strokeWidth="1"
          opacity="0.6"
        />
        
        <path 
          className="hexagon-outline"
          d="M622.96,1.21h327.91c39.83,0,76.6,21.37,96.33,55.97l265.25,465.3c19.35,33.51,19.35,74.8,0,108.32l-268.85,466.16c-19.8,34.33-56.42,55.49-96.05,55.49h-324.59"
          fill="none"
          stroke="#00f0ff"
          strokeWidth="1"
          opacity="0.6"
        />

        {/* Hexagon sections - clickable */}
        <a href="/products/tenable-one/capabilities/asset-inventory" className="section-link">
          <path 
            className="hexagon-section comprehensive"
            d="M445.64,423.25c-20.14,27.7-35.22,59.78-43.59,95.21-4.83,20.47-7.16,40.95-7.18,61.11H1.12c.26-18.24,3.27-36.42,12.7-52.76L181.8,231.55l263.84,191.7Z"
            fill="url(#sectionGradient)"
            stroke="#00f0ff"
            strokeWidth="0.5"
          />
        </a>

        <a href="/products/tenable-one/capabilities/exposure-prioritization" className="section-link">
          <path 
            className="hexagon-section dynamic"
            d="M578.69,326.61c-53.07,17.3-99.9,51.05-133.04,96.64L181.8,231.55l94.34-171.79c19.81-34.73,56.72-56.18,96.69-56.18h100.89l104.96,323.02Z"
            fill="url(#sectionGradient)"
            stroke="#00f0ff"
            strokeWidth="0.5"
          />
        </a>

        <a href="/solutions/exposure-ai" className="section-link">
          <path 
            className="hexagon-section predictive"
            d="M849.18,0l-106.12,326.63c-6.88-2.23-13.9-4.19-21.06-5.88-6.68-1.58-13.34-2.88-20.01-3.93-27.86-4.39-55.54-4.24-82.21-.05-14.01,2.19-27.75,5.49-41.08,9.84L473.73,3.58,849.18,0Z"
            fill="url(#sectionGradient)"
            stroke="#00f0ff"
            strokeWidth="0.5"
          />
        </a>

        <a href="/data-sheets/exposure-response" className="section-link">
          <path 
            className="hexagon-section mobilization"
            d="M1143.9,228.62l-267.88,194.63c-32.1-44.21-77.87-78.78-132.97-96.62L849.18,0h99.72c39.99,0,76.9,21.44,96.69,56.17l98.3,172.45Z"
            fill="url(#sectionGradient)"
            stroke="#00f0ff"
            strokeWidth="0.5"
          />
        </a>

        <a href="/products/tenable-one/capabilities/exposure-analytics" className="section-link">
          <path 
            className="hexagon-section advanced"
            d="M1326.38,579.57h-399.5c.06-57.08-18.4-111.63-50.85-156.32l267.88-194.63,167.94,294.6c10.06,17.42,14.9,36.92,14.54,56.35Z"
            fill="url(#sectionGradient)"
            stroke="#00f0ff"
            strokeWidth="0.5"
          />
        </a>

        {/* Center circle - NO FILL/GLOW */}
        <circle 
          className="center-circle"
          cx="660.88" 
          cy="575.93" 
          r="264.94"
          fill="transparent" 
          stroke="none" 
        />

        {/* Connection lines with animated dots */}
        <g className="connection-lines">
          {/* Comprehensive Inventory line */}
          <circle className="line-dot" cx="174" cy="429" r="5" fill="#00005c" stroke="#00f0ff" strokeWidth="2" filter="url(#dotGlow)"/>
          <circle className="line-dot" cx="345" cy="183" r="5" fill="#00005c" stroke="#00f0ff" strokeWidth="2" filter="url(#dotGlow)"/>
          <circle className="line-dot" cx="361" cy="170" r="5" fill="#00005c" stroke="#00f0ff" strokeWidth="2" filter="url(#dotGlow)"/>

          <circle className="line-dot" cx="680" cy="70" r="5" fill="#00005c" stroke="#00f0ff" strokeWidth="2" filter="url(#dotGlow)"/>
          <circle className="line-dot" cx="661" cy="70" r="5" fill="#00005c" stroke="#00f0ff" strokeWidth="2" filter="url(#dotGlow)"/>
          <circle className="line-dot" cx="642" cy="70" r="5" fill="#00005c" stroke="#00f0ff" strokeWidth="2" filter="url(#dotGlow)"/>

          <circle className="line-dot" cx="953" cy="158" r="5" fill="#00005c" stroke="#00f0ff" strokeWidth="2" filter="url(#dotGlow)"/>
          <circle className="line-dot" cx="936" cy="147" r="5" fill="#00005c" stroke="#00f0ff" strokeWidth="2" filter="url(#dotGlow)"/>
          <circle className="line-dot" cx="985" cy="182" r="5" fill="#00005c" stroke="#00f0ff" strokeWidth="2" filter="url(#dotGlow)"/>
          <circle className="line-dot" cx="969" cy="169" r="5" fill="#00005c" stroke="#00f0ff" strokeWidth="2" filter="url(#dotGlow)"/>

          {/* Advanced Analytics line */}
          <circle className="line-dot" cx="1159" cy="465" r="5" fill="#00005c" stroke="#00f0ff" strokeWidth="2" filter="url(#dotGlow)"/>
          <circle className="line-dot" cx="1155" cy="446" r="5" fill="#00005c" stroke="#00f0ff" strokeWidth="2" filter="url(#dotGlow)"/>
          <circle className="line-dot" cx="1150" cy="429" r="5" fill="#00005c" stroke="#00f0ff" strokeWidth="2" filter="url(#dotGlow)"/>
          <circle className="line-dot" cx="1144" cy="412" r="5" fill="#00005c" stroke="#00f0ff" strokeWidth="2" filter="url(#dotGlow)"/>
          <circle className="line-dot" cx="1138" cy="395" r="5" fill="#00005c" stroke="#00f0ff" strokeWidth="2" filter="url(#dotGlow)"/>
        </g>

        {/* Exposure Intelligence connectors */}
        <g className="bottom-connectors">
          <circle className="connector-dot" cx="417" cy="680" r="12" fill="#00f0ff" filter="url(#dotGlow)"/>
          <polygon className="connector-arrow" points="414,687 424,680 414,674" fill="#00005c"/>
          
          {/* Third-party connectors */}
          <circle className="connector-dot" cx="904" cy="680" r="12" fill="#00f0ff" filter="url(#dotGlow)"/>
          <circle className="connector-dot" cx="914" cy="654" r="12" fill="#00f0ff" filter="url(#dotGlow)"/>
          <circle className="connector-dot" cx="921" cy="628" r="12" fill="#00f0ff" filter="url(#dotGlow)"/>
        </g>

        {/* Native Sensors */}
        <g className="native-sensors">
          <circle className="sensor-dot" cx="609" cy="835" r="12" fill="#00f0ff" filter="url(#dotGlow)"/>
          <polygon className="sensor-arrow" points="603,838 609,828 616,838" fill="#00005c"/>
          
          <circle className="sensor-dot" cx="643" cy="840" r="12" fill="#00f0ff" filter="url(#dotGlow)"/>
          <polygon className="sensor-arrow" points="637,843 643,833 650,843" fill="#00005c"/>
          
          <circle className="sensor-dot" cx="678" cy="840" r="12" fill="#00f0ff" filter="url(#dotGlow)"/>
          <polygon className="sensor-arrow" points="672,843 678,833 685,843" fill="#00005c"/>
          
          <circle className="sensor-dot" cx="712" cy="835" r="12" fill="#00f0ff" filter="url(#dotGlow)"/>
          <polygon className="sensor-arrow" points="706,838 712,828 719,838" fill="#00005c"/>

          {/* Vertical lines from sensors */}
          <line className="sensor-line" x1="450" y1="1010" x2="450" y2="1077" stroke="#00f0ff" strokeWidth="1"/>
          <line className="sensor-line" x1="608" y1="1010" x2="608" y2="1077" stroke="#00f0ff" strokeWidth="1"/>
          <line className="sensor-line" x1="737" y1="1010" x2="737" y2="1077" stroke="#00f0ff" strokeWidth="1"/>
          <line className="sensor-line" x1="873" y1="1010" x2="873" y2="1077" stroke="#00f0ff" strokeWidth="1"/>

          {/* Horizontal dividers */}
          <line className="sensor-line" x1="763" y1="980" x2="914" y2="980" stroke="#00f0ff" strokeWidth="1"/>
          <line className="sensor-line" x1="408" y1="980" x2="559" y2="980" stroke="#00f0ff" strokeWidth="1"/>
        </g>

        {/* Text Labels */}
        <g className="labels">
          {/* Comprehensive asset inventory */}
          <text className="label-text" x="208" y="445" fill="#fff">
            <tspan x="208">Comprehensive</tspan>
            <tspan x="208" dy="30">asset inventory</tspan>
          </text>

          {/* Dynamic attack path mapping */}
          <text className="label-text" x="370" y="243" fill="#fff">
            <tspan x="370">Dynamic</tspan>
            <tspan x="370" dy="30">attack path</tspan>
            <tspan x="370" dy="30">mapping</tspan>
          </text>

          {/* Predictive prioritization */}
          <text className="label-text" x="592" y="173" fill="#fff">
            <tspan x="592">Predictive</tspan>
            <tspan x="592" dy="30">prioritization</tspan>
          </text>

          {/* Orchestration and remediation */}
          <text className="label-text" x="813" y="243" fill="#fff">
            <tspan x="813">Orchestration and</tspan>
            <tspan x="813" dy="30">remediation</tspan>
          </text>

          {/* Advanced analytics and reporting */}
          <text className="label-text" x="969" y="445" fill="#fff">
            <tspan x="969">Advanced</tspan>
            <tspan x="969" dy="30">analytics</tspan>
            <tspan x="969" dy="30">and reporting</tspan>
          </text>

          {/* Exposure data fabric - center large text */}
          <text className="center-label" x="660" y="552" textAnchor="middle" fill="#fff">
            <tspan x="660" fontSize="39">Exposure data</tspan>
            <tspan x="660" dy="45" fontSize="39">fabric</tspan>
          </text>

          {/* Normalize, Contextualize, Correlate */}
          <text className="small-label" x="605" y="637" fill="#fff" fontSize="16.5">
            <tspan x="605">NORMALIZE</tspan>
            <tspan x="584" dy="28">CONTEXTUALIZE</tspan>
            <tspan x="605" dy="28">CORRELATE</tspan>
          </text>

          {/* Exposure intelligence */}
          <text className="cyan-label" x="253" y="859" fill="#00f0ff">
            <tspan x="253">Exposure</tspan>
            <tspan x="253" dy="25">intelligence</tspan>
          </text>

          {/* Third-party connectors */}
          <text className="cyan-label" x="970" y="859" fill="#00f0ff">
            <tspan x="970">Third-party</tspan>
            <tspan x="970" dy="25">connectors</tspan>
          </text>

          {/* Native sensors title */}
          <text className="sensor-title" x="573" y="986" fill="#00f0ff" fontSize="25" fontWeight="700">
            Native sensors
          </text>

          {/* Sensor types */}
          <text className="sensor-label" x="338" y="1042" fill="#fff" fontSize="22" fontWeight="300">
            <tspan x="338">Cloud</tspan>
            <tspan x="338" dy="23">Exposure</tspan>
          </text>
          
          <text className="sensor-label" x="470" y="1042" fill="#fff" fontSize="22" fontWeight="300">
            <tspan x="470">Vulnerability</tspan>
            <tspan x="470" dy="23">Exposure</tspan>
          </text>
          
          <text className="sensor-label" x="624" y="1042" fill="#fff" fontSize="22" fontWeight="300">
            <tspan x="624">Identity</tspan>
            <tspan x="624" dy="23">Exposure</tspan>
          </text>
          
          <text className="sensor-label" x="758" y="1042" fill="#fff" fontSize="22" fontWeight="300">
            <tspan x="758">OT</tspan>
            <tspan x="758" dy="23">Exposure</tspan>
          </text>
          
          <text className="sensor-label" x="893" y="1042" fill="#fff" fontSize="22" fontWeight="300">
            <tspan x="893">AI</tspan>
            <tspan x="893" dy="23">Exposure</tspan>
          </text>
        </g>
      </svg>
    </div>
  );

};

export default OutroSection;