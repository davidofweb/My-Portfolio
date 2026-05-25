import { Project, CaseStudy, SkillGroup, Testimonial } from './types';

export const PERSONAL_INFO = {
  name: "David Ordu",
  title: "Web Developer & Designer",
  specialty: "Landing Pages & SaaS Web Development",
  bio: "I build and design beautiful, high-converting SaaS web apps and marketing sites. Over the last 3 years, I've specialized in bridging the gap between pixel-perfect visual designs and clean, high-performance interactive code.",
  location: "Remote Worldwide",
  availability: "Available for freelance & contract roles",
  email: "freedomdavid47@gmail.com",
  twitter: "x.com/orduszn",
  discord: "discord.gg/orduszn",
  telegram: "t.me/orduszn",
  github: "github.com/davidofweb"
};

export const PROJECTS: Project[] = [
  {
    id: "apex-saas",
    title: "Apex Analytics SaaS",
    client: "Apex Software Inc",
    role: "Lead UI & Web Designer",
    tags: ["Figma Systems", "Auto Layout", "SaaS Landing Page", "Tailwind Spec"],
    subtitle: "A high-conversion landing page structure and design system targeting technical founders.",
    category: "SaaS Landing Page",
    color: "#4F46E5", // Indigo
    stat: { label: "Conversion Lift", value: "+42.8%" }
  },
  {
    id: "novapay-dashboard",
    title: "NovaPay Fintech UI",
    client: "NovaPay Global",
    role: "Senior UI Designer",
    tags: ["Responsive Grid", "Design System", "Auto Layout", "Light/Dark UI"],
    subtitle: "Modern, multi-currency financial dashboard keeping elements proportional and legible across breakpoints.",
    category: "SaaS Web App",
    color: "#10B981", // Emerald
    stat: { label: "Dev Handoff Speed", value: "2x Faster" }
  },
  {
    id: "coreref-docs",
    title: "CoreDocs Developer Hub",
    client: "CoreRef Systems",
    role: "Web & Typographic Designer",
    tags: ["Typography Hierarchy", "Responsive UI", "Figma Auto Layout", "Developer Docs"],
    subtitle: "Structuring highly dense technical API documentation into an intuitive, distraction-free reader interface.",
    category: "Technical Product",
    color: "#0F172A", // Slate
    stat: { label: "User Reading Retention", value: "+61%" }
  }
];

export const CASE_STUDIES: Record<string, CaseStudy> = {
  "apex-saas": {
    projectId: "apex-saas",
    overview: "Apex is a leading enterprise-grade data analytics engine. Their marketing site suffered from high bounce rates and low sign-up conversions due to high visual complexity and a layout that did not adequately explain the value proposition. The goal was to build a clean, structured SaaS landing page optimized for conversion and designed with robust Figma components that developers could build with zero friction.",
    problem: "The previous site had inconsistent typography sizes, arbitrary color usage, and lacked a unified grid layout. Front-end developers were constantly guessing spacing sizes and padding, resulting in a live site that looked noticeably different from the static mocks. Bounce rates were at 44% and conversion sat at a low 1.4%.",
    goal: "Establish a strict 8px visual grid, design an intuitive section layout that flows logically from problem to proof, use clean typography scales (Plus Jakarta Sans) for technical legibility, and supply a functional design system in Figma using Auto-Layout 5.0 constraints for seamless handoff.",
    process: [
      {
        title: "01. Content Architecture",
        description: "Mapped out the content hierarchy based on user action patterns: Hero section -> Core Benefit Block -> Live Product Interactive Preview -> Performance Metrics -> Social Proof/Testimonials -> Final CTA Card."
      },
      {
        title: "02. Wireframing & Auto-Layout Setup",
        description: "Created wireframes with exact container sizes based on a 12-column, 1200px max-width container, using explicit 'vertical-fill' and 'hug-content' structures mimicking React/CSS box model."
      },
      {
        title: "03. High-Fidelity & Spacing Auditing",
        description: "Applied refined semantic styling: crisp deep backgrounds, high-contrast typography, and explicit interactive states. Marked every single layer to ensure strict adherence to spacing tokens (8px, 16px, 24px, 32px, 64px, 128px)."
      },
      {
        title: "04. Developer Handoff Mapping",
        description: "Documented typography styles, CSS utility mappings (Tailwind), and dynamic hover formulas in standard variables to eliminate any implementation confusion."
      }
    ],
    wireframeSteps: [
      {
        componentName: "Hero Navigation Header",
        wireframeLayout: `[Header: 80px fixed height]
  -> [Brand Logo (Width: Hug, Height: Hug)]
  -> Gap: 32px
  -> [Nav links list: Home, Features, Pricing (Gap: 24px)]
  -> [Spacer: flex-grow]
  -> [Sign In button (Padding: 10px 16px)]
  -> [Sign Up CTA button (Padding: 10px 18px, Primary Accent)]`,
        hifiLayout: "Subtle sticky backdrop blur (blur-md), soft border-b border-indigo-100 dark:border-slate-800, text-sm font-medium Inter body text with Indigo accents."
      },
      {
        componentName: "Core Feature Dashboard Cards",
        wireframeLayout: `[Grid: 3 Columns, Gap: 24px, 1200px Container]
  -> Inside Row: Autolayout Column [Padding: 32px, Fill-width, Corner Radius: 12px]
     -> [Icon Container: 48x48px, Corner: 8px]
     -> Gap: 20px
     -> [Title Text: 20px Bold, Tracking-tight, Hug-height]
     -> Gap: 8px
     -> [Body Text: 14px, Line-height: 1.5, Gray-500]`,
        hifiLayout: "Premium card with soft 1px Slate border (slate-100), subtle drop shadow (y-4, b-12, color-slate-900/0.03), and dynamic zoom transition on hover."
      }
    ],
    designSystemTokens: [
      {
        category: "Typography Tokens",
        values: [
          { name: "Display Heading 1", value: "Plus Jakarta Sans, 56px, Semi-Bold, leading-tight, tracking-tight", usage: "Page Hero primary header" },
          { name: "Section Title 2", value: "Plus Jakarta Sans, 36px, Medium, leading-snug, tracking-tight", usage: "Main feature headers" },
          { name: "Body Regular", value: "Inter, 16px, Normal, leading-relaxed (1.625), neutral-600", usage: "Paragraphs, features description" },
          { name: "Button Text", value: "Inter, 14px, Medium, leading-none, text-white / active-ink", usage: "CTAs and Navigation links" }
        ]
      },
      {
        category: "Spacing & Layout Tokens",
        values: [
          { name: "spacing-2xs", value: "8px (0.5rem)", usage: "Elements inside a group, subtitle gaps" },
          { name: "spacing-xs", value: "16px (1.0rem)", usage: "Card inner margins, compact badges" },
          { name: "spacing-sm", value: "24px (1.5rem)", usage: "Grid column gaps, header links distance" },
          { name: "spacing-md", value: "32px (2.0rem)", usage: "Card padding, small section gaps" },
          { name: "spacing-lg", value: "64px (4.0rem)", usage: "Hero internal margins, layout clusters" },
          { name: "spacing-xl", value: "128px (8.0rem)", usage: "Full section to section height padding" }
        ]
      }
    ],
    handoffNotes: [
      "Auto Layout structure strictly matches Flexbox behaviors (direction, justify, align, gap).",
      "No absolute positioning utilized, unless specifically marked (e.g., decorative background grid meshes).",
      "Colors use semantic aliases ensuring unified integration of possible dark/light variables.",
      "Varying aspect ratios are constraint-bound to avoid image crop degradation upon container compression."
    ],
    outcome: {
      metrics: [
        { label: "Sign-Up Conversion", value: "4.8% (Up from 1.4%)" },
        { label: "Bounce Rate Reduced", value: "-31%" },
        { label: "Dev Quality QA Cycles", value: "3 -> 1 Round" }
      ],
      summary: "By standardizing typography scales and creating a clean Figma Auto-Layout based framework, we achieved a highly cohesive landing experience that translates natively to React code. The dev team shipped the redesigned page in record time with zero layout misalignment questions, leading to a massive increase in organic lead generation."
    }
  },
  "novapay-dashboard": {
    projectId: "novapay-dashboard",
    overview: "NovaPay is a multi-currency high-speed fintech utility serving global remote teams. Their web dashboard suffered from visual overload and did not adapt cleanly to various screen sizes, causing financial details to truncate or group tightly on common laptops (13\" and 14\"). Our goal was to map out a spacious, responsive UX template ensuring financial transparency and easy developer implementation.",
    problem: "Tables and numeric values had arbitrary font weights and did not follow clear semantic hierarchies. On smaller screens, side-navigation collided with cards, and numeric tables required awkward horizontal scrolls, degrading the core professional speed of the accounting agents.",
    goal: "Design a fully adaptive grid dashboard that snaps cleanly from 1440px down to tablet resolutions, clean tabular data treatments using high-legibility tabular lining typography (Fira Code/JetBrains Mono for precision), and clear responsive rules.",
    process: [
      {
        title: "01. Dynamic Breakpoint Analysis",
        description: "Assessed key breakpoint thresholds: 1440px (Default Desktop), 1280px (Standard Laptops), 1024px (IPad Pro Landscape), and 768px (Standard Tablet Portrait)."
      },
      {
        title: "02. Layout Grid Adaptation Schema",
        description: "Defined standard sidebar behavior: Fixed 260px wide at desktop; collapses to 80px icons at tablet; shifts to absolute overlay toggle on mobile."
      },
      {
        title: "03. Lining Typographic Specification",
        description: "Changed numerical fonts to mono-spaced tabular lining types, ensuring column alignment regardless of decimal widths for instantaneous counting."
      }
    ],
    wireframeSteps: [
      {
        componentName: "Fintech Grid Table",
        wireframeLayout: `[Table Component: Fill-Width]
  -> [Table Header row: Name, Currency, Date, Amount, Status]
     -> Auto-Width distribute with minimum column widths
  -> [Table Data row (Gap: 12px, Bottom border: 1px)]
     -> Amount aligned right, styled with JetBrains Mono font`,
        hifiLayout: "Clean tracking, dark-slate elements, positive transactions using soft tint backgrounds with green accents, and interactive row highlights (slate-50)."
      }
    ],
    designSystemTokens: [
      {
        category: "Fintech Token System",
        values: [
          { name: "neutral-surface", value: "#FAFAFA -> #FFFFFF border", usage: "Dashboard background container color" },
          { name: "mono-tabular-data", value: "JetBrains Mono, 14px, Medium, Tabular lining digits", usage: "Ledger transaction values" },
          { name: "badge-success-bg", value: "hex #E6F4EA with text #137333", usage: "Completed/Settled payment status indicators" }
        ]
      }
    ],
    handoffNotes: [
      "Columns use modular percentage/min-width bounds, preventing number stacking or overflow clipping.",
      "Sidebar states must be driven smoothly using standard CSS transform properties for optimal mobile animation frame rates.",
      "All graphical charts (recharts/D3) utilize parent ResponsiveContainer wrappers with explicit height ratios."
    ],
    outcome: {
      metrics: [
        { label: "Dashboard Load Performance", value: "98/100 Lighthouse" },
        { label: "Mobile Check Tasks Completed", value: "+74% Speed Hike" },
        { label: "Figma Component Detaches", value: "0 in final build" }
      ],
      summary: "A robust, fully adaptive accounting interface that stays visual-clean on small screens. The developers loved the clean Grid schema, implementing UI modules using responsive tailwind directives with zero custom media-query hacks."
    }
  },
  "coreref-docs": {
    projectId: "coreref-docs",
    overview: "CoreDocs provides reference API information for modern developers. Their old layout was visually fatiguing due to overly long line lengths, small text contrast, and complex nested menus without a tracking indicator.",
    problem: "Developers were missing critical parameters because lines spanned 110+ characters, making it easy to drop context when reading. Menu hierarchies was hard to navigate dynamically.",
    goal: "Design a readable triple-column documentation template with exact font metrics, side-by-side code visualizers, and a sticky scroll-spy progress map.",
    process: [
      {
        title: "01. Typographic Study",
        description: "Established 65-75 character maximum line width boundaries to ensure absolute reading comfort."
      },
      {
        title: "02. Navigation Simplification",
        description: "Divided nesting into static sections with highlighted nested segments that indicate active scroll states."
      }
    ],
    wireframeSteps: [
      {
        componentName: "Triple-Column Workspace",
        wireframeLayout: `[Col 1: Sidebar (280px)] -> Static index tree 
[Col 2: Reader Workspace (Flex-grow, max-w-720px)] -> Documentation text, line height 1.7
[Col 3: Sandbox / Code Console (400px)] -> Sticky terminal block, dark slate`,
        hifiLayout: "Beautifully styled dark playground side adjacent to an editorial white-background reading pane. Strict border-l / border-r lines instead of heavy shadows."
      }
    ],
    designSystemTokens: [
      {
        category: "Typography Specifics",
        values: [
          { name: "Readable Lead", value: "Inter, 17px, Normal, 1.75 Line Height", usage: "Main documentation descriptive copy" },
          { name: "Code Block Inline", value: "JetBrains Mono, 14px, Semi-Bold, Neutral background padding", usage: "Function signatures inside paragraph copy" }
        ]
      }
    ],
    handoffNotes: [
      "Middle reading viewport centers perfectly inside max-w-720px width constraints.",
      "Syntax highlights inside code blocks must align with WCAG AA light-mode/dark-mode contrast recommendations."
    ],
    outcome: {
      metrics: [
        { label: "Text Scannability Rating", value: "+82% Positive rating" },
        { label: "Direct API Copy Actions", value: "+114% Increment" },
        { label: "Integration Errors Dropped", value: "-22%" }
      ],
      summary: "Crafted a beautiful, book-like documentation layout engineered specifically to reduce cognitive friction for engineers reading dense API references."
    }
  }
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: "core-dev",
    category: "Web Development & Engineering",
    description: "Building fast, standards-compliant interactive web systems optimized for performance, clean layouts, and responsiveness.",
    skills: [
      { name: "Web Development", experience: "3 Years", description: "Crafting beautiful frontends and responsive interactive client experiences in React, TypeScript, and Tailwind." },
      { name: "Tailwind CSS & CSS", experience: "Expert", description: "Precision styling using CSS grids, flexbox, token-driven designs, and micro-layouts." },
      { name: "SaaS Apps & Landers", experience: "High Conversion", description: "Implementing multi-section high-converting flow structures, pricing sheets, and engaging custom landing pages." },
      { name: "TypeScript / React", experience: "Fluent", description: "Building component architectures, modular business logic, and lightweight state management hooks." }
    ]
  },
  {
    id: "framer-dev",
    category: "Workflow & Engineering Alignment",
    description: "Designing static blueprints and laying out robust visuals that perfectly map to front-end code with zero translation drift.",
    skills: [
      { name: "UI & Style Systems", experience: "Advanced", description: "Creating and standardizing typopgraphic hierarchies, spacing metrics, and responsive screen flow configurations." },
      { name: "Framer & Interactive", experience: "Fluid", description: "Rapid drafting of high-fidelity responsive models, sleek animation transitions, and visual prototyping." },
      { name: "Developer Collaboration", experience: "No-Guess Spec", description: "Laying out clean mockups, and documenting custom padding formulas so handoffs are entirely seamless." },
      { name: "Responsive Layouts", experience: "Perfect Adapter", description: "Crafting layouts with strict 8px logic that wrap gracefully without content line clipping or overlapping." }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    text: "Working with David was a revelation for our engineering team. He delivers design solutions and interactive code that are meticulously mapped out with fluid grids. We had the landing page live in record time, exactly matching the visual proposal.",
    author: "Elena Rostova",
    role: "VP of Product",
    company: "Apex Analytics Inc",
    avatarSeed: "elena"
  },
  {
    id: "test-2",
    text: "David completely restructured our SaaS conversion flow. His layouts are hyper-logical, clean, and run incredibly fast. Our signup metrics went from 1.4% to 4.8% in less than 3 weeks post-launch.",
    author: "Marcus Vance",
    role: "Co-Founder",
    company: "NovaPay Global",
    avatarSeed: "marcus"
  },
  {
    id: "test-3",
    text: "David understands design and front-end layout in a way that very few engineers do. The multi-column developer portal he polished is a masterclass in reading comfort, editorial pacing, and interactive cleanliness.",
    author: "Devon Pryce",
    role: "CTO",
    company: "CoreRef Systems",
    avatarSeed: "devon"
  }
];
