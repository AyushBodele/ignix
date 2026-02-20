// ─────────────────────────────────────────────────────────────────────────────
// All job data keyed by slug. Each entry has: metadata, requirements,
// responsibilities, and bonusSkills.
// ─────────────────────────────────────────────────────────────────────────────

export const jobsDetailMap = {

    // ──────────────────────────────────────────────────────────────────────────
    // 1. HR Executive
    // ──────────────────────────────────────────────────────────────────────────
    hr_executive: {
        metadata: {
            title: "HR Executive",
            subtitle: "Human Resources",
            tags: ["Human Resources", "Nagpur", "1–5 Years", "Graduation / PG"],
            description:
                "Join the Ignix HR team to drive talent acquisition, employee engagement, and people operations that power our fast-growing agency.",
            company: "Ignix",
            department: "Human Resources",
            employmentType: "Full-time",
            postedDate: "2025-02-01",
        },
        requirements: [
            "1–5 years of experience in HR operations or talent acquisition",
            "Proficiency with ATS platforms and HR management software",
            "Strong understanding of labour laws and compliance requirements",
            "Excellent interpersonal and communication skills",
            "Ability to manage multiple requisitions simultaneously",
            "Experience conducting interviews and coordinating onboarding",
            "Knowledge of payroll basics and HRMS tools",
        ],
        bonusSkills: [
            "Experience in a digital agency or startup environment",
            "Familiarity with employer-branding strategies",
            "Certifications in HR (SHRM, PHR, or equivalent)",
            "Experience with performance management frameworks",
        ],
        responsibilities: [
            {
                category: "Talent Acquisition",
                items: [
                    "Source, screen, and shortlist candidates across departments using job portals, LinkedIn, and referrals.",
                    "Schedule and coordinate interviews between candidates and hiring managers.",
                    "Manage offer rollouts, negotiate compensation, and facilitate onboarding.",
                ],
            },
            {
                category: "Employee Operations & Engagement",
                items: [
                    "Maintain and update employee records, HRMS data, and policy documentation.",
                    "Plan and execute employee engagement activities, team events, and recognition programs.",
                    "Address employee queries related to HR policies, leave, and benefits.",
                ],
            },
            {
                category: "Compliance & Administration",
                items: [
                    "Ensure compliance with labour laws, statutory filings, and company policies.",
                    "Support payroll processing by coordinating attendance and leave data.",
                    "Prepare HR reports and dashboards for leadership review.",
                ],
            },
        ],
    },

    // ──────────────────────────────────────────────────────────────────────────
    // 2. Data Analyst
    // ──────────────────────────────────────────────────────────────────────────
    data_analyst: {
        metadata: {
            title: "Data Analyst",
            subtitle: "Analytics & Insights",
            tags: ["Technology", "Nagpur", "1–5 Years", "B.Tech / BCA / MCA"],
            description:
                "Transform raw data into actionable insights that drive decisions for our clients and internal teams across marketing, operations, and product.",
            company: "Ignix",
            department: "Technology",
            employmentType: "Full-time",
            postedDate: "2025-02-01",
        },
        requirements: [
            "1–5 years of hands-on experience in data analysis or BI roles",
            "Proficiency in SQL and relational databases",
            "Experience with data visualisation tools — Power BI, Tableau, or Looker",
            "Strong Python or R skills for data wrangling and statistical analysis",
            "Ability to translate business questions into analytical frameworks",
            "Experience working with large datasets and performing ETL operations",
            "Excellent written and verbal communication for presenting findings",
        ],
        bonusSkills: [
            "Exposure to Google Analytics, Meta Ads Manager, or marketing analytics",
            "Knowledge of machine learning fundamentals",
            "Experience with cloud data warehouses (BigQuery, Redshift, Snowflake)",
            "Familiarity with dbt or similar transformation tools",
        ],
        responsibilities: [
            {
                category: "Data Collection & Processing",
                items: [
                    "Collect, clean, and preprocess structured and unstructured data from multiple sources.",
                    "Build and maintain data pipelines and automated reporting processes.",
                    "Collaborate with engineering teams to ensure data integrity and availability.",
                ],
            },
            {
                category: "Analysis & Visualisation",
                items: [
                    "Develop interactive dashboards and reports using Power BI / Tableau.",
                    "Perform descriptive, diagnostic, and predictive analyses to surface trends.",
                    "Create compelling data narratives for both technical and non-technical stakeholders.",
                ],
            },
            {
                category: "Business Insights & Strategy",
                items: [
                    "Partner with marketing, sales, and product teams to define KPIs and tracking frameworks.",
                    "Identify opportunities for optimisation through A/B testing and cohort analysis.",
                    "Present findings and data-driven recommendations to leadership.",
                ],
            },
        ],
    },

    // ──────────────────────────────────────────────────────────────────────────
    // 3. Data Analyst / Brand's Face
    // ──────────────────────────────────────────────────────────────────────────
    data_analyst_brands_face: {
        metadata: {
            title: "Data Analyst / Brand's Face",
            subtitle: "Analytics & Brand Presence",
            tags: ["Marketing", "Nagpur", "1–5 Years", "Graduation / PG"],
            description:
                "A unique hybrid role combining data analysis with on-camera brand representation — perfect for someone who loves numbers AND loves being on screen.",
            company: "Ignix",
            department: "Marketing",
            employmentType: "Full-time",
            postedDate: "2025-02-01",
        },
        requirements: [
            "1–5 years of experience in data analysis, content creation, or digital marketing",
            "Comfortable on camera; prior experience as a brand spokesperson or content creator is a plus",
            "Solid understanding of analytics tools (Google Analytics, Meta Insights)",
            "Proficiency in SQL or Excel for data handling",
            "Strong presentation and storytelling skills",
            "Ability to simplify complex data stories for a general audience",
            "Confidence in public speaking, video content, or live streaming",
        ],
        bonusSkills: [
            "Experience with short-form video content (Reels, YouTube Shorts, TikTok)",
            "Background in digital marketing or performance marketing analytics",
            "Knowledge of social media metrics and growth strategies",
            "Prior on-camera hosting, anchoring, or MC experience",
        ],
        responsibilities: [
            {
                category: "Data Analysis",
                items: [
                    "Analyse campaign, social, and web performance data to surface actionable insights.",
                    "Build and maintain dashboards for marketing and leadership teams.",
                    "Monitor KPIs and report on trends, anomalies, and opportunities.",
                ],
            },
            {
                category: "Brand Representation",
                items: [
                    "Appear in company videos, reels, webinars, and brand campaigns as the face of Ignix.",
                    "Host live sessions, product demos, or thought-leadership content on behalf of the brand.",
                    "Collaborate with the content team to script and deliver engaging on-camera content.",
                ],
            },
            {
                category: "Content & Strategy",
                items: [
                    "Bridge data insights with creative content strategy for maximum audience impact.",
                    "Provide data-backed recommendations for content calendars and campaigns.",
                    "Track content performance and iterate based on analytics.",
                ],
            },
        ],
    },

    // ──────────────────────────────────────────────────────────────────────────
    // 4. Video Editor
    // ──────────────────────────────────────────────────────────────────────────
    video_editor: {
        metadata: {
            title: "Video Editor",
            subtitle: "Media & Creative Production",
            tags: ["Media Services", "Nagpur", "1–5 Years", "Graduation / Diploma"],
            description:
                "Craft compelling visual stories for Ignix and our clients — from short-form social content to full-length brand films and motion graphics.",
            company: "Ignix",
            department: "Media Services",
            employmentType: "Full-time",
            postedDate: "2025-02-01",
        },
        requirements: [
            "1–5 years of professional video editing experience",
            "Proficiency in Adobe Premiere Pro and After Effects",
            "Strong understanding of colour grading, audio mixing, and visual storytelling",
            "Experience editing short-form content for Instagram Reels, YouTube Shorts, etc.",
            "Ability to meet deadlines and manage multiple projects simultaneously",
            "Portfolio demonstrating a range of video styles and formats",
            "Familiarity with video codecs, export formats, and delivery specifications",
        ],
        bonusSkills: [
            "Motion graphics and 2D animation skills",
            "Experience with DaVinci Resolve or Final Cut Pro",
            "3D compositing or VFX experience",
            "Knowledge of YouTube SEO and video optimisation best practices",
        ],
        responsibilities: [
            {
                category: "Video Production & Editing",
                items: [
                    "Edit raw footage into polished, audience-ready videos aligned with brand guidelines.",
                    "Create engaging short-form content for social media platforms.",
                    "Apply colour correction, sound design, and motion graphics to finished cuts.",
                ],
            },
            {
                category: "Creative Collaboration",
                items: [
                    "Work closely with the creative director and content team to interpret briefs.",
                    "Participate in pre-production planning, including storyboarding and visual concepting.",
                    "Incorporate client and team feedback efficiently through revision cycles.",
                ],
            },
            {
                category: "Asset Management",
                items: [
                    "Organise and manage video assets, project files, and media libraries.",
                    "Ensure all deliverables meet platform-specific technical requirements.",
                    "Maintain a consistent archive of templates and reusable motion elements.",
                ],
            },
        ],
    },

    // ──────────────────────────────────────────────────────────────────────────
    // 5. Graphic Designer
    // ──────────────────────────────────────────────────────────────────────────
    graphic_designer: {
        metadata: {
            title: "Graphic Designer",
            subtitle: "Creative & Visual Design",
            tags: ["Marketing", "Nagpur", "1–5 Years", "Graduation / Design Diploma"],
            description:
                "Design stunning visuals that elevate the Ignix brand and our clients' identities — from social media creatives to full brand identity systems.",
            company: "Ignix",
            department: "Marketing",
            employmentType: "Full-time",
            postedDate: "2025-02-01",
        },
        requirements: [
            "1–5 years of graphic design experience in a professional setting",
            "Expert-level proficiency in Adobe Photoshop, Illustrator, and InDesign",
            "Strong understanding of typography, colour theory, and layout principles",
            "Experience designing for both digital (web, social) and print mediums",
            "Ability to maintain and evolve brand identity guidelines",
            "Portfolio demonstrating breadth of creative work",
            "Excellent attention to detail and ability to work under tight deadlines",
        ],
        bonusSkills: [
            "Experience with Figma or Adobe XD for UI/UX design",
            "Motion graphics or basic animation skills",
            "Knowledge of print production processes",
            "Social media design experience (templates, carousels, ad creatives)",
        ],
        responsibilities: [
            {
                category: "Visual Design & Branding",
                items: [
                    "Design marketing materials including social graphics, banners, brochures, and presentations.",
                    "Develop and maintain brand identity systems for Ignix and client accounts.",
                    "Create visually consistent templates for recurring content types.",
                ],
            },
            {
                category: "Digital & Social Media Design",
                items: [
                    "Design optimised creatives for social media platforms (Instagram, LinkedIn, Facebook, etc.).",
                    "Create ad creatives, email headers, and landing page graphics.",
                    "Collaborate with the content team to ensure visual and copy alignment.",
                ],
            },
            {
                category: "Client Deliverables",
                items: [
                    "Produce high-quality design assets tailored to each client's brand standards.",
                    "Manage revision cycles and deliver production-ready files on schedule.",
                    "Participate in client presentations and creative pitches.",
                ],
            },
        ],
    },

    // ──────────────────────────────────────────────────────────────────────────
    // 6. Full Stack Web Developer
    // ──────────────────────────────────────────────────────────────────────────
    full_stack_web_developer: {
        metadata: {
            title: "Full Stack Web Developer",
            subtitle: "Engineering & Product",
            tags: ["Technology", "Nagpur", "1–5 Years", "B.Tech / BCA / MCA"],
            description:
                "Build scalable, high-performance web applications end-to-end — from intuitive React frontends to robust Node.js backends and cloud deployments.",
            company: "Ignix",
            department: "Technology",
            employmentType: "Full-time",
            postedDate: "2025-02-01",
        },
        requirements: [
            "1–5 years of full-stack development experience",
            "Strong proficiency in React.js, Next.js, or similar frontend frameworks",
            "Solid backend experience with Node.js, Express, or equivalent",
            "Experience with relational and NoSQL databases (PostgreSQL, MongoDB)",
            "Familiarity with REST APIs and GraphQL",
            "Understanding of CI/CD pipelines and cloud platforms (AWS, GCP, or Azure)",
            "Version control with Git and experience working in agile teams",
        ],
        bonusSkills: [
            "Experience with TypeScript",
            "Knowledge of Docker and container orchestration",
            "Familiarity with serverless architectures",
            "Performance optimisation and web accessibility (WCAG) experience",
        ],
        responsibilities: [
            {
                category: "Frontend Development",
                items: [
                    "Build responsive and performant user interfaces using React.js / Next.js.",
                    "Implement pixel-perfect designs from Figma or other design tools.",
                    "Optimise web performance (Core Web Vitals, lazy loading, code splitting).",
                ],
            },
            {
                category: "Backend Development",
                items: [
                    "Design and develop RESTful APIs and microservices using Node.js.",
                    "Manage database schemas, queries, and migrations.",
                    "Implement authentication, authorisation, and security best practices.",
                ],
            },
            {
                category: "DevOps & Deployment",
                items: [
                    "Configure and maintain deployment pipelines using GitHub Actions or similar.",
                    "Manage cloud infrastructure on AWS / GCP for scalability and reliability.",
                    "Monitor application health and resolve production incidents.",
                ],
            },
        ],
    },

    // ──────────────────────────────────────────────────────────────────────────
    // 7. Web Developer Intern
    // ──────────────────────────────────────────────────────────────────────────
    web_developer_intern: {
        metadata: {
            title: "Web Developer Intern",
            subtitle: "Technology — Internship",
            tags: ["Technology", "Nagpur", "0–2 Years", "B.Tech / BCA / MCA (Pursuing)"],
            description:
                "Kickstart your development career at Ignix — work on real-world projects, learn from experienced engineers, and make a meaningful impact from day one.",
            company: "Ignix",
            department: "Technology",
            employmentType: "Internship",
            postedDate: "2025-02-01",
        },
        requirements: [
            "0–2 years of experience or currently pursuing B.Tech / BCA / MCA",
            "Basic understanding of HTML, CSS, and JavaScript",
            "Familiarity with React.js or any frontend framework is a plus",
            "Good problem-solving attitude and eagerness to learn",
            "Ability to work collaboratively in a team environment",
            "Basic understanding of Git and version control concepts",
        ],
        bonusSkills: [
            "Personal projects or GitHub portfolio demonstrating coding ability",
            "Exposure to any backend language (Node.js, Python, PHP)",
            "Basic understanding of databases (MySQL, MongoDB)",
            "Familiarity with UI design tools like Figma",
        ],
        responsibilities: [
            {
                category: "Frontend Development",
                items: [
                    "Assist in building and maintaining web application UI components.",
                    "Implement responsive designs from mockups under senior developer guidance.",
                    "Fix UI bugs and improve front-end code quality.",
                ],
            },
            {
                category: "Learning & Collaboration",
                items: [
                    "Participate in daily standups, code reviews, and sprint planning.",
                    "Learn and follow best practices in coding, testing, and documentation.",
                    "Collaborate with designers, product managers, and fellow developers.",
                ],
            },
            {
                category: "Project Contributions",
                items: [
                    "Contribute to real client and internal projects from day one.",
                    "Write clean, documented code and submit work via pull requests.",
                    "Support the team with research, prototyping, and proof-of-concept work.",
                ],
            },
        ],
    },
};

// ──────────────────────────────────────────────────────────────────────────────
// Country codes — shared across all job description forms
// ──────────────────────────────────────────────────────────────────────────────
export const countryCodes = [
    { code: "+91", label: "🇮🇳 +91" },
    { code: "+1", label: "🇺🇸 +1" },
    { code: "+44", label: "🇬🇧 +44" },
    { code: "+61", label: "🇦🇺 +61" },
    { code: "+49", label: "🇩🇪 +49" },
    { code: "+33", label: "🇫🇷 +33" },
    { code: "+81", label: "🇯🇵 +81" },
    { code: "+86", label: "🇨🇳 +86" },
];