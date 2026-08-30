export const projectsData = [
  {
    id: "apex-commerce",
    title: "ApexCommerce Platform",
    category: "development",
    subcategory: "Web Development",
    description: "A high-performance e-commerce platform with real-time analytics and serverless architecture.",
    longDescription: "ApexCommerce was designed to solve scaling issues for mid-size retailers. It utilizes React for the client-side presentation, coupled with Node.js on a serverless architecture to ensure lightning-fast response times. A key feature is the real-time stock sync engine using WebSockets, and a custom optimized checkout pipeline that decreased cart abandonment rate significantly.",
    technologies: ["React.js", "Node.js", "Express", "MongoDB", "WebSockets", "Vercel"],
    results: [
      "98/100 mobile performance score on Google Lighthouse",
      "Increased conversion rates by 24% in the first two months",
      "Robust checkout pipeline processing 500+ operations/sec simultaneously"
    ],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "zenith-health",
    title: "Zenith Tracker",
    category: "development",
    subcategory: "Mobile App",
    description: "A secure cross-platform wellness application featuring offline-first capabilities.",
    longDescription: "Zenith Tracker is a mobile app focused on wellness tracking, physical activity, and sleep profiling. Built with Flutter, it compiles natively for both iOS and Android. It implements an offline-first storage architecture utilizing SQLite and synchronizes data with Firebase Firestore whenever an internet connection is established. It also features beautiful, responsive interactive charts and iOS/Android home widgets.",
    technologies: ["Flutter", "Dart", "Firebase", "SQLite", "Cloud Functions", "Google Fit API"],
    results: [
      "4.8/5.0 average App Store rating from over 1,200 reviews",
      "Zero data loss reports due to offline-first synchronization architecture",
      "Integrated secure biometrics and HIPAA-compliant data encryption"
    ],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "taskflow-pro",
    title: "TaskFlow Pro",
    category: "development",
    subcategory: "Desktop App",
    description: "A lightning-fast desktop productivity tool with local encryption and custom hotkeys.",
    longDescription: "TaskFlow Pro is a developer-focused desktop application designed for task workflow automation and note-taking. Utilizing Electron and React, the app offers deep system integration, including system tray controls, global custom hotkeys, and automated offline time-tracking. Data is kept secure locally using AES-256 encryption.",
    technologies: ["Electron", "React.js", "Tailwind CSS", "AES-256 Encryption", "Node.js Desktop APIs"],
    results: [
      "Active daily use by 3,000+ developers worldwide",
      "Reduced CPU memory usage by 40% compared to equivalent Electron applications",
      "Instant startup time of under 1.2 seconds"
    ],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "dentgrow-seo",
    title: "DentGrow Local SEO",
    category: "growth",
    subcategory: "SEO & Google My Business",
    description: "An intensive local SEO and Google My Business search rank recovery campaign.",
    longDescription: "This campaign was launched for a local dental clinic experiencing a drop in new patient bookings. The project involved restructuring the client's localized website URLs, optimizing site loading speed, and implementing a complete Google My Business (GMB) optimization. This included high-frequency local citation auditing, schema markup injection, and setting up an automated customer review acquisition funnel.",
    technologies: ["Google Analytics", "Google Search Console", "SEMrush", "Schema.org", "GMB API"],
    results: [
      "Ranked #1 for local 'emergency dentist' keywords within a 15km radius",
      "250% increase in monthly phone calls driven directly from GMB listing",
      "45% organic growth in new patient registrations in 90 days"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "edulearn-marketing",
    title: "EduLearn Lead Acquisition",
    category: "growth",
    subcategory: "Paid Ads & Digital Marketing",
    description: "High-yield lead generation campaigns on Google Ads and Meta Ads.",
    longDescription: "EduLearn needed a robust conversion engine to scale their online professional courses. We designed custom landing pages built for high speed and high conversion rates, created targeted copy, and configured precise Facebook Pixel / Google Conversions tracking. We ran automated A/B tests on creative assets and scaled budgets dynamically using automated bid rules.",
    technologies: ["Meta Ads Manager", "Google Ads", "Google Tag Manager", "Hotjar", "Figma"],
    results: [
      "Achieved a consistent 4.2x Return on Ad Spend (ROAS) across a 6-month run",
      "Lowered the Cost Per Acquisition (CPA) by 45% compared to the client's baseline",
      "Captured 8,500+ highly qualified leads with a conversion rate of 8.2% on landing pages"
    ],
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "smart-logistics",
    title: "Smart Inventory Sync",
    category: "development",
    subcategory: "Web & Mobile Solution",
    description: "Hybrid inventory portal syncing a mobile barcode application with a cloud dashboard.",
    longDescription: "A comprehensive digital solution developed for a regional logistics provider. It connects a React-based warehouse management dashboard with a React Native barcode scanner app. Features include automated SKU lookup, PDF invoice generation, and low-inventory SMS alerts powered by Twilio integrations.",
    technologies: ["React.js", "React Native", "Express", "PostgreSQL", "Twilio API", "Chart.js"],
    results: [
      "Eliminated inventory tracking errors by 99.4%",
      "Reduced average parcel check-in time from 3 minutes to 15 seconds",
      "Successfully integrated with the client's pre-existing ERP system API"
    ],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80"
  }
];

export const testimonialsData = [
  {
    name: "Mohamed El Amrani",
    role: "CEO, FinTech Solutions Morocco",
    text: "Building our mobile and desktop financial dashboards with MakboulDev was the best decision. The software is robust, secure, and incredibly fast. The attention to detail in code and UI is top-notch.",
    avatar: "MA"
  },
  {
    name: "Sarah Dubois",
    role: "Marketing Director, E-Learn Hub",
    text: "Thanks to their SEO optimization and Google Ads campaign, our online course registrations exploded. The ROI was clear in weeks. They don't just write code, they understand business growth.",
    avatar: "SD"
  },
  {
    name: "Yassine Makhtar",
    role: "Founder, RapidLogistics",
    text: "The Smart Inventory Sync solution completely digitized our warehouse. We went from paper logs to instant scanning. Highly recommend them for custom digital solutions!",
    avatar: "YM"
  }
];

export const techStackData = {
  development: [
    { name: "React.js / Next.js", icon: "bi-react" },
    { name: "Node.js & Express", icon: "bi-filetype-js" },
    { name: "Flutter & Dart", icon: "bi-phone" },
    { name: "Electron (Desktop)", icon: "bi-display" },
    { name: "HTML5 & Vanilla CSS", icon: "bi-code-slash" },
    { name: "Databases (SQL/MongoDB)", icon: "bi-database" }
  ],
  marketing: [
    { name: "Search Engine Optimization (SEO)", icon: "bi-search" },
    { name: "Google My Business Optimization", icon: "bi-geo-alt" },
    { name: "Google Ads Campaigns", icon: "bi-google" },
    { name: "Meta Ads (Facebook & Instagram)", icon: "bi-instagram" },
    { name: "Google Analytics & Tag Manager", icon: "bi-bar-chart-line" },
    { name: "Digital Growth Strategy", icon: "bi-graph-up-arrow" }
  ]
};
