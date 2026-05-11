Sadia Khalil — Portfolio

A professional portfolio built entirely with vanilla HTML, CSS, and JavaScript — no frameworks, no build tools, just clean code.

Live Demo →

Overview
This portfolio showcases my work as a Full Stack Developer and Metaverse AI Student. Projects load dynamically from a local JSON file, the contact form validates in real time and persists data to localStorage, and every section animates smoothly on scroll.

Features
FeatureDescriptionDynamic ProjectsLoaded from data/projects.json — no page reloadSearch & FilterFilter by name or category (Web / AI / Mobile)Loading SpinnerShown while project data is being fetchedContact FormReal-time field validation with inline error messagesLocalStorageForm submissions persisted in the browserSmooth NavigationScroll-based transitions between all sectionsScroll AnimationsSections reveal on scroll via Intersection ObserverTheme ToggleDark / Light mode with localStorage persistenceFully ResponsiveMobile, tablet, and desktop layouts

Tech Stack
LayerTechnologyMarkupHTML5StylingCSS3 — custom properties, flexbox, gridLogicVanilla JavaScript (ES6+)DataJSON (local file)HostingVercel

Folder Structure
portfolio/
│
├── index.html                  # Main entry point
├── README.md
│
├── css/
│   ├── style.css               # Imports all CSS files
│   ├── base.css                # Variables, reset, global styles
│   ├── components.css          # Header, hero, skills, projects, contact, footer
│   ├── animations.css          # Keyframes and scroll reveal logic
│   └── responsive.css          # Breakpoints for all screen sizes
│
├── js/
│   ├── main.js                 # Navigation, scroll animations, theme toggle
│   ├── projects.js             # Loads and filters projects from JSON
│   └── contact.js              # Form validation and localStorage
│
├── data/
│   └── projects.json           # Project data source
│
└── assets/
    └── images/                 # Profile photo, project screenshots

Requirements Coverage
RequirementStatusResponsive design✅Clean UI with proper layout✅Smooth navigation transitions✅Dynamic project loading from JSON✅Search by name / tech✅Category filter✅Loading spinner✅Real-time form validation✅Inline error messages✅LocalStorage for form submissions✅Proper folder structure✅Scroll-based animations✅

Sections
Hero
Full-screen animated gradient background with name, subtitle, and intro. Smooth fade-in on load.
Technical Expertise
Skill bars across four categories — Frontend, Backend, AI & ML, and Databases. Bars animate to their percentage when scrolled into view.
Experience
Timeline-style cards for each role with period, title, and responsibilities.
Projects
Dynamically rendered from projects.json. Supports live keyword search and one-click category filtering with staggered card animations.
Contact
Validated form with inline error messages. Submissions are saved to localStorage so data is never lost on refresh.

Getting Started
No dependencies or build step required.
bashgit clone https://github.com/sadikhalil/portfolio.git
cd portfolio
Open index.html directly in your browser, or use VS Code Live Server:
Right click index.html → Open with Live Server

Deployment
Hosted on Vercel with automatic deployments on push to main.
To deploy your own copy:

Fork this repository
Go to vercel.com → New Project
Import your GitHub repo
Framework Preset: Other
Click Deploy


Contact
PlatformLinkEmailsadiakhalil0223@gmail.comLinkedInSadia KhalilGitHubsadikhalil

Author
Sadia Khalil
BSN Generic Nursing  |  Full Stack Web Developer  |  Metaverse AI Student
