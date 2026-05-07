Sadia Khalil — Portfolio
A professional-level portfolio built with vanilla HTML, CSS, and JavaScript. Projects load dynamically from a local JSON file, the contact form stores submissions in localStorage, and the UI includes real-time validation, search/filter, and scroll-based animations.
Features

Dynamic Projects — loaded from data/projects.json, no page reload needed
Search & Filter — filter projects by name or category (Web / AI / Mobile)
Loading Spinner — shown while projects are being fetched
Contact Form — real-time field validation with inline error messages
LocalStorage — submitted contact form data is persisted in the browser
Smooth Navigation — scroll-based transitions between sections
Scroll Animations — sections reveal on scroll using Intersection Observer
Fully Responsive — mobile, tablet, and desktop layouts


Tech Stack
Layer Technology 
Markup HTML5
StylingCSS3 (custom properties, flexbox, grid)
LogicVanilla JavaScript (ES6+)
DataJSON (local file)

Folder Structure
portfolio-tech/
│
├── css/
│   └── style.css 
         animation.css
        base.css
        components.css
        responsive.css         # All styles and responsive breakpoints
│
├── js/
│   ├── main.js            # Navigation, scroll animations, theme
│   ├── projects.js        # Loads & filters projects from JSON
│   └── contact.js         # Form validation & localStorage
│
├── data/
│   └── projects.json      # Project data source
│
├── assets/
│   └── images/            # Profile photo, project screenshots
│
├── index.html             # Main entry point
└── README.md

Requirements Coverage
Requirement Status 
Responsive design
Clean UI with proper layout
Smooth navigation transitions
Dynamic project loading from JSON
Search by name / tech
Category filter
Loading spinner
Real-time form validation
Inline error messages
LocalStorage for form submissions
Proper folder structure
Scroll-based animations