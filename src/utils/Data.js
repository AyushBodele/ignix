// cardData.js
export const heroCardsData = [
  {
    id: 'hero-card-1',
    title: ['STRATEGY', 'ASSEMBLY'],
    icon: 'https://cdn.prod.website-files.com/64591e5db836f60c02bb97e9/6797a20fa66d47f859adbb70_be6541a0545698a1b015d67bfc0cc149_icon-strategy.svg',
    alt: 'Strategy icon',
    movement: {
      yStart: '0%',
      yEnd: '250%',
      scaleStart: 1,
      scaleEnd: 0.75,
      xStart: '0%',
      xEnd: '90%',
      rotationStart: 0,
      rotationEnd: -15,
    }
  },
  {
    id: 'hero-card-2',
    title: ['DESIGN', 'NOTICED'],
    icon: 'https://cdn.prod.website-files.com/64591e5db836f60c02bb97e9/6797a20f7daa2d8b2d055b0a_7600e889a3af59f71db716a7c1ded5bc_icon-design.svg',
    alt: 'Design icon',
    movement: {
      yStart: '0%',
      yEnd: '250%',
      scaleStart: 1,
      scaleEnd: 0.75,
    }
  },
  {
    id: 'hero-card-3',
    title: ['BUILD', 'STICK'],
    icon: 'https://cdn.prod.website-files.com/64591e5db836f60c02bb97e9/6797a20e6c45c550e3c0ff77_cc81fab4339bbc8ebbe9cc70ef28c84e_icon-build.svg',
    alt: 'Build icon',
    movement: {
      yStart: '0%',
      yEnd: '250%',
      scaleStart: 1,
      scaleEnd: 0.75,
      xStart: '0%',
      xEnd: '-90%',
      rotationStart: 0,
      rotationEnd: 15,
    }
  }
];

export const flipCardsData = [
  {
    id: 'card-1',
    type: 'STRATEGY',
    title: ['STRATEGY', 'ASSEMBLY'],
    backTitle: ['STRATEGY', 'STRATEGY'],
    icon: 'https://cdn.prod.website-files.com/64591e5db836f60c02bb97e9/6797a20fa66d47f859adbb70_be6541a0545698a1b015d67bfc0cc149_icon-strategy.svg',
    alt: 'Strategy icon',
    backContent: [
      'Visual Research',
      'Mitbewerber Analyse',
      'Wireframes',
      'Content Mapping',
      'User Flow',
      'Konzepte'
    ]
  },
  {
    id: 'card-2',
    type: 'DESIGN',
    title: ['DESIGN', 'NOTICED'],
    backTitle: ['DESIGN', 'DESIGN'],
    icon: 'https://cdn.prod.website-files.com/64591e5db836f60c02bb97e9/6797a20f7daa2d8b2d055b0a_7600e889a3af59f71db716a7c1ded5bc_icon-design.svg',
    alt: 'Design icon',
    backContent: [
      'Unternehmenswebsites',
      'Marketing Websites',
      'Design System',
      'Animation',
      'Design Support',
      'Barrierefreies Design'
    ]
  },
  {
    id: 'card-3',
    type: 'BUILD',
    title: ['BUILD', 'STICK'],
    backTitle: ['BUILD', 'BUILD'],
    icon: 'https://cdn.prod.website-files.com/64591e5db836f60c02bb97e9/6797a20e6c45c550e3c0ff77_cc81fab4339bbc8ebbe9cc70ef28c84e_icon-build.svg',
    alt: 'Build icon',
    backContent: [
      'Webflow Entwicklung',
      'Web Animation',
      'Webflow CMS',
      'Barrierefreie Entwicklung',
      'Technisches SEO',
      'Frontend Support'
    ]
  }
];

// Animation configuration
export const heroAnimationConfig = {
  trigger: null,
  containerSelector: '.hero-cards',
  start: 'top top',
  end: '75% top',
  scrub: 1,
  cards: [
    { id: '#hero-card-1', delay: 0, movement: heroCardsData[0].movement },
    { id: '#hero-card-2', delay: 0.9, movement: heroCardsData[1].movement },
    { id: '#hero-card-3', delay: 1.8, movement: heroCardsData[2].movement },
  ],
};

export const flipAnimationConfig = {
  trigger: null,
  cardsContainer: null,
  pinDuration: 4,
  cards: [
    { id: '#card-1', delay: 0, index: 0 },
    { id: '#card-2', delay: 0.5, index: 1 },
    { id: '#card-3', delay: 1.0, index: 2 },
  ],
};

export const footerSections = [
    {
      title: 'Products',
      links: ['Email Security', 'Cloud Security', 'Network Security', 'Threat Intelligence', 'Data Protection'],
    },
    {
      title: 'Solutions',
      links: ['Financial Services', 'Healthcare', 'Government', 'Enterprise IT', 'Compliance'],
    },
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Press', 'Partners', 'Contact'],
    },
    {
      title: 'Resources',
      links: ['Documentation', 'Blog', 'Whitepapers', 'Webinars', 'Support'],
    },
  ];


  export const heroCards = [
  {
    eyebrow: "SECURE AND GOVERN YOUR AI BEFORE RISK BECOMES REALITY",
    text:
      "Learn how to govern AI use, reduce exposure",
  },
  {
    eyebrow: "LEADER FOR EMAIL SECURITY",
    text: "Get the 2025 Gartner Magic Quadrant™ for Email Security",
  },
  {
    eyebrow: "PROOFPOINT PROTECT SERIES",
    text:
      "Join industry peers to discover how AI is redefining human-centric security",
  },
];


export const slides = [
  {
    id: 1,
    image: "/images/hero1.png",
    title: "Dominate growth with supersonic speed and",
    highlight: "top-tier protection.",
    description:
      "Live mastery of marketing, tech, and cyber shields awaits.",
    cta: "Read the guide",
  },
  {
    id: 2,
    image: "/images/hero2.png",
    title: "our experts discover ",
    highlight: "the future of secure digital growth",
    description:
      "Expert tactics for marketing, tech, and cybersecurity powering your rise.",
    cta: "Read the report",
  },
  {
    id: 3,
    image: "/images/hero3.png",
    title: "Human-centric security for the",
    highlight: "modern workplace",
    description:
      "Protect people, data and brands from today’s biggest threats.",
    cta: "Explore platform",
  },
];

export const servicesSlides = [
  {
    tag: "01 / Cyber Security",
    title: "Cyber Security",
    description:
      "Protect your digital assets with enterprise-grade security solutions. We defend your infrastructure against evolving threats, data breaches, and cyberattacks with cutting-edge tools and expertise.",
    bullets: [
      "Threat Detection & Response",
      "Network Security Monitoring",
      "Vulnerability Assessment",
      "Penetration Testing",
      "Incident Response Planning",
      "Zero Trust Architecture",
    ],
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=700&q=80",
    accent: "from-red-500/20",
    accentSolid: "bg-red-600",
    textAccent: "text-red-600",
  },
  {
    tag: "02 / Digital Marketing",
    title: "Digital Marketing",
    description:
      "Supercharge your brand's online presence with data-driven digital marketing strategies that drive real engagement, generate leads, and deliver measurable ROI.",
    bullets: [
      "Social Media Campaigns",
      "Content Strategy & Creation",
      "Email Marketing Automation",
      "Pay-Per-Click Advertising",
      "Brand Identity & Storytelling",
      "Analytics & Performance Tracking",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=80",
    accent: "from-purple-600/20",
    accentSolid: "bg-purple-600",
    textAccent: "text-purple-600",
  },
  {
    tag: "03 / SEO",
    title: "Search Engine Optimization",
    description:
      "Rank higher, get found faster. Our SEO specialists craft tailored strategies that boost organic visibility, drive qualified traffic, and grow your business sustainably.",
    bullets: [
      "Technical SEO Audits",
      "Keyword Research & Strategy",
      "On-Page Optimization",
      "Link Building Campaigns",
      "Local SEO & Google Maps",
      "Core Web Vitals Optimization",
    ],
    image:
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=700&q=80",
    accent: "from-emerald-600/20",
    accentSolid: "bg-emerald-600",
    textAccent: "text-emerald-600",
  },
  {
    tag: "04 / Web Development",
    title: "Web Development",
    description:
      "From pixel-perfect designs to high-performance applications, we build modern, scalable websites and web apps that deliver exceptional user experiences across every device.",
    bullets: [
      "Custom Website Design & Build",
      "React / Next.js Development",
      "E-Commerce Solutions",
      "CMS Integration",
      "API Development & Integration",
      "Performance & Speed Optimization",
    ],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700&q=80",
    accent: "from-blue-600/20",
    accentSolid: "bg-blue-600",
    textAccent: "text-blue-600",
  },
];

