// utils/menuData.js
import {
  FiShield,
  FiDatabase,
  FiCpu,
  FiSettings,
  FiUsers,
  FiLock,
  FiMail,
  FiFileText,
  FiAward,
  FiBarChart,
  FiBookOpen,
  FiVideo,
  FiUserCheck,
  FiBriefcase,
  FiGlobe,
  FiCloud,
  FiAlertTriangle,
  FiLayers,
  FiHeadphones,
  FiTrendingUp,
  FiGlobe as FiWorld,
  FiTarget,
  FiCheckCircle,
  FiZap,
  FiSearch,
  FiTrendingUp as FiTrendingUp2,
  FiCode,
  FiActivity,
  FiEye,
  FiGlobe as FiNetwork,
  FiTool,
  FiBell,
  FiPieChart,
  FiClock,
  FiServer,
  FiKey,
  FiGrid,
  FiMonitor,
  FiArchive,
  FiFilter
} from "react-icons/fi";

export const navItems = [
  { label: "Platform", key: "platform" },
  { label: "Solutions", key: "solutions" },
  { label: "Why IgnixSocial", key: "why" },
  { label: "Services", key: "services" },
  { label: "Company", key: "company" },
];

export const menuData = {
  platform: {
    title: "Ignix Social Platform",
    description: "Ignix Social delivers unified growth and security for digital businesses. We protect marketing, apps, and customer systems—enabling fast innovation without added risks.",

    sections: [
      {
        title: "Core Security",
        icon: FiShield,
        description: "Fundamental security layers protecting your digital assets.",
        sectionTitle: "Ignix Core Security Suite",
        sectionDescription: "Comprehensive security foundation that protects every layer of your digital infrastructure with intelligent, automated defenses.",
        features: [
          { title: "Threat Intelligence", description: "Real-time global threat feeds and analysis", icon: FiActivity },
          { title: "Network Protection", description: "Advanced firewall and network security", icon: FiNetwork },
          { title: "Endpoint Security", description: "Device-level protection for all endpoints", icon: FiMonitor },
          { title: "Identity Management", description: "Secure access and identity verification", icon: FiKey },
          { title: "Data Encryption", description: "End-to-end encryption for all data", icon: FiLock },
          { title: "Compliance Controls", description: "Automated compliance and auditing", icon: FiFileText }
        ]
      },
      {
        title: "AI & Automation",
        icon: FiCpu,
        description: "Intelligent automation and AI-driven security operations.",
        sectionTitle: "Ignix AI & Automation Engine",
        sectionDescription: "Advanced AI capabilities that automate security operations, predict threats, and optimize your security posture continuously.",
        features: [
          { title: "AI Threat Detection", description: "Machine learning for threat identification", icon: FiCpu },
          { title: "Predictive Analytics", description: "Anticipate attacks before they occur", icon: FiTrendingUp },
          { title: "Behavioral Analysis", description: "User and entity behavior analytics", icon: FiUsers },
          { title: "Automated Response", description: "Instant response to security incidents", icon: FiZap },
          { title: "Smart Orchestration", description: "Coordinated security workflows", icon: FiSettings },
          { title: "Anomaly Detection", description: "Identify unusual patterns automatically", icon: FiBell }
        ]
      },
      {
        title: "Cloud & Collaboration",
        icon: FiCloud,
        description: "Security for cloud platforms and collaboration tools.",
        sectionTitle: "Ignix Cloud & Collaboration Security",
        sectionDescription: "Complete protection for your cloud infrastructure, SaaS applications, and collaboration platforms across hybrid environments.",
        features: [
          { title: "Cloud Access Security", description: "Secure access to cloud resources", icon: FiCloud },
          { title: "SaaS Application Security", description: "Protection for all SaaS applications", icon: FiServer },
          { title: "Email Security", description: "Advanced email threat protection", icon: FiMail },
          { title: "Collaboration Tools", description: "Security for Teams, Slack, etc.", icon: FiUsers },
          { title: "Cloud Storage Security", description: "Secure cloud data storage", icon: FiDatabase },
          { title: "API Security", description: "Protect your API endpoints", icon: FiCode }
        ]
      },
      {
        title: "Data Protection",
        icon: FiDatabase,
        description: "Advanced data security, privacy, and governance.",
        sectionTitle: "Ignix Data Protection & Governance",
        sectionDescription: "Comprehensive data security framework ensuring visibility, control, and compliance across all data types and locations.",
        features: [
          { title: "Data Loss Prevention", description: "Prevent unauthorized data transfers", icon: FiShield },
          { title: "Data Classification", description: "Automated data categorization", icon: FiFilter },
          { title: "Privacy Management", description: "GDPR, CCPA, and privacy compliance", icon: FiLock },
          { title: "Data Encryption", description: "Encryption at rest and in transit", icon: FiKey },
          { title: "Backup & Recovery", description: "Secure data backup and restoration", icon: FiDatabase },
          { title: "Data Access Controls", description: "Granular access permissions", icon: FiUsers }
        ]
      },
    ],

    featured: {
      eyebrow: "Ignix Platform Excellence",
      heading: "99.99% Threat Detection Accuracy",
      text: "Ignix Social's AI-powered monitoring, automation, and unified intelligence deliver unmatched security performance.",
      stats: [
        { label: "Threat Blocks", value: "12M+" },
        { label: "Enterprise Clients", value: "4,200+" },
        { label: "Uptime Coverage", value: "99.99%" },
      ],
      button: "Explore Ignix Platform →",
    }
  },

  // Solutions, Why, Services, and Company sections remain the same as before
  solutions: {
    title: "Ignix Solutions",
    description: "Real-world security for digital challenges. Ignix Social offers straightforward, effective solutions to handle everyday online threats.",

    sections: [
      {
        title: "Safe AI Adoption",
        icon: FiCpu,
        description: "Teams use AI securely while protecting sensitive data.",
        sectionTitle: "Ignix Safe AI Adoption",
        sectionDescription: "Secure your AI implementations while maintaining data protection and compliance.",
        ctaText: "Secure AI →"
      },
      {
        title: "M365 Security",
        icon: FiCloud,
        description: "Advanced defenses for Microsoft 365 and collaboration platforms.",
        sectionTitle: "Ignix M365 & Workspace Security",
        sectionDescription: "Comprehensive security for Microsoft 365 and modern collaboration tools.",
        ctaText: "Protect Workspace →"
      },
      {
        title: "Ransomware Defense",
        icon: FiLock,
        description: "Stops attacks early to limit damage and spread.",
        sectionTitle: "Ignix Ransomware Prevention",
        sectionDescription: "Proactive defense and rapid response against ransomware attacks.",
        ctaText: "Prevent Attacks →"
      },
      {
        title: "Email Protection",
        icon: FiMail,
        description: "Guards against phishing, malware, and account takeovers.",
        sectionTitle: "Ignix Email & Cloud Protection",
        sectionDescription: "Complete email security and comprehensive cloud protection.",
        ctaText: "Secure Email →"
      },
      {
        title: "Cloud App Security",
        icon: FiShield,
        description: "Secures SaaS tools and prevents data leaks.",
        sectionTitle: "Ignix Cloud App Safeguards",
        sectionDescription: "Protection for SaaS applications and cloud-based tools.",
        ctaText: "Secure SaaS →"
      },
      {
        title: "Security Training",
        icon: FiUsers,
        description: "Builds skills to spot and report threats quickly.",
        sectionTitle: "Ignix Employee Awareness Training",
        sectionDescription: "Comprehensive security awareness and training programs.",
        ctaText: "Train Team →"
      },
    ],

    featured: {
      eyebrow: "Ignix Use Cases",
      heading: "Stop Attacks Before They Spread",
      text: "Ignix Social's early detection and automated mitigation keep operations safe and secure.",
      stats: [
        { label: "Attacks Prevented", value: "8M+" },
        { label: "Risk Reduction", value: "72%" },
        { label: "Global Coverage", value: "150+" },
      ],
      button: "View Ignix Solutions →",
    },
  },

  why: {
    title: "Why Ignix Social",
    description: "Advanced AI security tailored for modern enterprises. Choose Ignix for intelligent protection that grows with your business.",

    sections: [
      {
        title: "AI Threat Engine",
        icon: FiCpu,
        description: "Advanced AI-driven threat detection and prevention",
        sectionTitle: "Ignix AI Threat Engine",
        sectionDescription: "Cutting-edge AI for real-time threat detection and prevention. Ignix learns and adapts to new threats continuously.",
        features: [
          { title: "Machine Learning Models", description: "Self-improving algorithms that get smarter over time." },
          { title: "Behavioral Analytics", description: "Detect anomalies based on user and system behavior." },
          { title: "Threat Intelligence Integration", description: "Global threat feeds integrated for comprehensive protection." }
        ]
      },
      {
        title: "Unified Dashboard",
        icon: FiBarChart,
        description: "Single pane of glass for all security metrics",
        sectionTitle: "Ignix Unified Dashboard",
        sectionDescription: "Centralized view of all security metrics, incidents, and compliance status. Everything in one place.",
        features: [
          { title: "Real-time Monitoring", description: "Live updates on security status and threats." },
          { title: "Customizable Views", description: "Tailor dashboards to your specific needs." },
          { title: "Executive Reporting", description: "Board-ready reports on security posture." }
        ]
      },
      {
        title: "Automation Core",
        icon: FiSettings,
        description: "Automated response to security incidents",
        sectionTitle: "Ignix Automation Core",
        sectionDescription: "Automated incident response for faster resolution. Reduce manual work and response times.",
        features: [
          { title: "Playbook Automation", description: "Pre-defined response workflows for common incidents." },
          { title: "Orchestration Engine", description: "Coordinate responses across security tools." },
          { title: "Self-healing Systems", description: "Automatically fix common security issues." }
        ]
      },
    ],

    featured: {
      eyebrow: "Ignix Advantage",
      heading: "AI + Automation = Stronger Security",
      text: "Ignix Social delivers fewer alerts, faster response, and smarter defense through intelligent automation.",
      stats: [
        { label: "Detection Speed", value: "3x Faster" },
        { label: "False Positives", value: "-60%" },
        { label: "Security ROI", value: "High" },
      ],
      button: "Discover Ignix →",
    },
  },

  services: {
    title: "Ignix Services",
    description: "Comprehensive digital solutions including SEO, digital marketing, and web development to grow your business with security built-in.",

    sections: [
      {
        title: "SEO Services",
        icon: FiSearch,
        description: "Improve search rankings and organic traffic with expert SEO strategies.",
        sectionTitle: "Ignix SEO Services",
        sectionDescription: "Boost your online visibility and drive qualified traffic with our comprehensive SEO solutions.",
        features: [
          { title: "Technical SEO Audit", description: "Comprehensive analysis of website performance." },
          { title: "Content Strategy", description: "Create engaging content that ranks and converts." },
          { title: "Keyword Optimization", description: "Target the right keywords for maximum impact." }
        ]
      },
      {
        title: "Digital Marketing",
        icon: FiTrendingUp2,
        description: "Strategic marketing campaigns across social media, PPC, and content marketing.",
        sectionTitle: "Ignix Digital Marketing",
        sectionDescription: "Drive growth with targeted digital marketing campaigns across all channels.",
        features: [
          { title: "Social Media Management", description: "Engage audiences across all social platforms." },
          { title: "PPC Campaign Management", description: "Targeted advertising for maximum ROI." },
          { title: "Content Marketing", description: "Create valuable content that builds authority." }
        ]
      },
      {
        title: "Web Development",
        icon: FiCode,
        description: "Custom website development and optimization for better user experience.",
        sectionTitle: "Ignix Web Development",
        sectionDescription: "Build responsive, high-performance websites that convert visitors into customers.",
        features: [
          { title: "Custom Development", description: "Tailored solutions for unique business needs." },
          { title: "E-commerce Solutions", description: "Build online stores that drive sales securely." },
          { title: "Performance Optimization", description: "Speed and security optimization for websites." }
        ]
      },
    ],

    featured: {
      eyebrow: "Ignix Service Excellence",
      heading: "Drive Business Growth Securely",
      text: "Ignix Social's comprehensive digital solutions elevate your online presence while ensuring security.",
      stats: [
        { label: "Client Success Rate", value: "95%" },
        { label: "Average ROI", value: "3.5x" },
        { label: "Projects Completed", value: "500+" },
      ],
      button: "Explore Ignix Services →",
    }
  },

  company: {
    title: "Ignix Social",
    description: "Building secure digital growth ecosystems worldwide. Innovation, integrity, and intelligent defense.",

    sections: [
      {
        title: "Leadership",
        icon: FiUsers,
        description: "Meet our experienced leadership team driving cybersecurity innovation."
      },
      {
        title: "Careers",
        icon: FiBriefcase,
        description: "Join our team of security experts and digital growth specialists."
      },
      {
        title: "Newsroom",
        icon: FiWorld,
        description: "Latest company news, updates, and announcements from Ignix Social."
      },
    ],

    featured: {
      eyebrow: "Ignix Company Highlight",
      heading: "Trusted by 4,000+ Enterprises",
      text: "Ignix Social delivers innovation, integrity, and intelligent defense to businesses worldwide.",
      stats: [
        { label: "Founded", value: "2018" },
        { label: "Team Members", value: "1,200+" },
        { label: "Global Offices", value: "10+" },
      ],
      button: "Learn About Ignix →",
    },
  },
};