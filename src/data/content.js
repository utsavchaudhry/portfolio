/**
 * Single source of truth for everything rendered on the portfolio.
 *
 * Convention: section data is exported as a JS array — easy to iterate,
 * reorder, append. Edit copy here and it updates everywhere.
 *
 * Static assets live under src/assets/ and are referenced via ESM imports.
 * Vite resolves the import to a hashed URL at build time, so just drop a
 * replacement file at the same path (or update the import) and you're done.
 */

// Award images — drop replacements at the same path to swap them in.
import mitImg from "../assets/awards/MIT_reality_hack.jpeg";
import msImg from "../assets/awards/microsoft_imagine_cup.webp";
import nasaImg from "../assets/awards/nasa_space_app.webp";

// ─── Personal info ─────────────────────────────────────────────────────────
export const personal = {
  name: "Utsav Chaudhary",
  initials: "UC",
  role: "XR + Robotics Engineer",
  tagline: "Bridging immersive interfaces and physical robots.",
  intro:
    "I'm a recent CS grad from Drexel working at the intersection of XR and robotics. I most recently built teleoperation interfaces at Fauna Robotics — connecting ROS2 backends to React dashboards and VR control systems.",
  location: "Philadelphia, PA",
  email: "uc49@drexel.edu",
  phone: "+1 267 992 7358",
  resume: "/ResumeUtsavChaudhary.pdf",
};

// ─── Social links ──────────────────────────────────────────────────────────
export const socials = [
  {
    label: "GitHub",
    href: "https://github.com/utsavchaudhry/",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/utsav-chaudhary-2874771a7/",
    icon: "linkedin",
  },
  { label: "Email", href: "mailto:uc49@drexel.edu", icon: "mail" },
];

// ─── Nav (each entry must match a section id below) ────────────────────────
export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Awards", href: "#awards" },
  { label: "Contact", href: "#contact" },
];

// ─── Education ─────────────────────────────────────────────────────────────
export const education = {
  school: "Drexel University",
  location: "Philadelphia, PA",
  degree: "B.S. Computer Science",
  graduation: "Class of 2026",
  gpa: "3.75 / 4.0 — Dean’s List",
  coursework: [
    "Machine Learning",
    "Design with Embedded Processors",
    "Concurrent Programming",
    "Probability & Statistics",
  ],
};

// ─── Work experience ───────────────────────────────────────────────────────
export const experience = [
  {
    company: "Fauna Robotics",
    role: "Teleoperation Intern",
    location: "New York, NY",
    period: "Sep 2025 — May 2026",
    bullets: [
      "Connected a ROS2 backend to a React frontend via Foxglove bridge, WebRTC, and custom REST APIs — built a robot status, control, and debug dashboard for live monitoring and teleoperation.",
      "Designed VR interfaces to switch robot modes/skills and visualize robot state (joint pose, motor temperatures, etc.).",
    ],
    tags: ["ROS2", "React", "WebRTC", "Foxglove", "VR"],
  },
  {
    company: "UprightVR",
    role: "VR Developer",
    location: "Philadelphia, PA",
    period: "Sep 2022 — Aug 2024",
    bullets: [
      "Developed gamified VR rehabilitative exercises in UnityXR + C# for elderly patients with vestibular/ocular disabilities.",
      "Designed a local database to track patient performance data in real time and auto-generate progress charts.",
    ],
    tags: ["UnityXR", "C#", "Healthcare", "Database"],
  },
  {
    company: "Drexel University",
    role: "Student Researcher",
    location: "Philadelphia, PA",
    period: "Apr 2022 — Sep 2024",
    bullets: [
      "Engineered two-way serial communication between a microcontroller and Unity, transmitting up to 64 bytes at 200 Hz for real-time interactive therapy game development.",
      "Built customized therapy games and a custom game controller using microcontrollers, an encoder, and biometric sensors monitoring heart rate and stress.",
    ],
    tags: ["Unity", "Embedded", "Biometrics", "Research"],
  },
  {
    company: "Chimpvine",
    role: "Game Developer",
    location: "Jersey City, NJ",
    period: "Sep 2020 — Aug 2021",
    bullets: [
      "Developed 2D e-learning games in Unity + C# for primary-grade students.",
      "Optimized game performance for mobile browsers — reduced load times by 20% and improved mobile accessibility.",
    ],
    tags: ["Unity", "C#", "WebGL"],
  },
];

// ─── Projects ──────────────────────────────────────────────────────────────
// Each project gets the same alternating-card layout. Optional fields:
//   subtitle, period, highlights — appear in the body if provided
//   url, urlLabel                — adds a CTA button under the description
//                                  linking to a live demo / project page.
//                                  urlLabel defaults to 'Visit project'.
//   youtubeUrls                  — array. 0 URLs → gradient placeholder.
//                                  1 URL → single embedded player. 2+ URLs
//                                  → carousel with prev/next + dot
//                                  indicators. Card layout (16:9 / 9:16 /
//                                  1:1) swaps per active video.
//
// Each entry in youtubeUrls can be either:
//   - a string                                          (auto-detect)
//   - { url, orientation: 'landscape'|'portrait'|'square' }   (override)
//
// Auto-detect: '/shorts/' URLs → portrait, otherwise → landscape. Use the
// object form for square (1:1) videos or for any URL the auto-detect gets
// wrong. Override is per-URL — mix orientations freely within one project:
//
//   youtubeUrls: [
//     "https://www.youtube.com/watch?v=...",                                 // auto
//     { url: "https://www.youtube.com/watch?v=...", orientation: "square" },
//     { url: "https://www.youtube.com/shorts/...", orientation: "landscape" },
//   ]
//
// Add or remove items freely; the section will reflow.
export const projects = [
  {
    title: "HOPE JR",
    subtitle: "VR-Teleoperated Humanoid Robot",
    period: "June 2024",
    description:
      "A 3D-printed VR-controlled robot with 35 servo motors and 6-DOF end-effector tracking. Built an inverse kinematics solver translating VR controller and headset data directly into servo commands for real-time interaction. Presented at Humanoids Summits 2024 and 2025.",
    tags: ["ROS2", "WebRTC", "UnityXR", "ESP32", "Inverse Kinematics"],
    highlights: [
      "35 servo motors, 6-DOF tracking",
      "Custom IK solver for VR → servo translation",
      "Presented at Humanoids Summits 2024/2025",
    ],
    youtubeUrls: [
      "https://www.youtube.com/shorts/sDc2gPa2DL8",
      "https://www.youtube.com/shorts/LgUHSN355pU",
      "https://www.youtube.com/shorts/wfb0P1JlnsE",
      "https://www.youtube.com/shorts/UuoYXG7MwtI",
      "https://www.youtube.com/shorts/FSDG3XCRdH4",
      "https://www.youtube.com/shorts/LTkfFYvGd3s",
    ],
  },
  {
    title: "HOPE JR @ Metal Shop",
    subtitle: "Commercial Telepresence Deployment",
    period: "2025 — Present",
    description:
      "Sold a HOPE JR unit to a Philadelphia metal shop and built the full telepresence stack around it. Customers connect through a React + WebRTC webapp to drive the robot around the shop and talk to staff with two-way audio/video — including a face screen mounted on the robot's head that mirrors the operator back to people on-site. Cloudflare Workers handle the signaling.",
    tags: [
      "React",
      "TypeScript",
      "WebRTC",
      "Cloudflare Workers",
      "ESP32",
      "Telepresence",
    ],
    highlights: [
      "Live commercial deployment in a Philadelphia metal shop",
      "Two-way A/V with operator face mirrored on robot head screen",
      "Virtual joystick UI for arm + head, low-latency over WebRTC data channel",
      "Cloudflare Workers signaling — same stack as utsavchaudhary.us",
    ],
    url: "https://shopmetal.com/robot",
    urlLabel: "Try teleop",
    youtubeUrls: [
      {
        url: "https://www.youtube.com/shorts/wfb0P1JlnsE",
        orientation: "landscape",
      },
    ],
  },
  {
    title: "Hybrid Classroom",
    subtitle: "Cross-Platform Virtual Classroom",
    period: "Dec 2021",
    description:
      "A 3D multiplayer virtual classroom supporting 20+ concurrent users across VR headsets and web browsers. Implemented WebRTC video/audio/text chat for cross-platform communication and a synced virtual whiteboard.",
    tags: ["UnityXR", "Photon Networking", "WebRTC", "WebGL"],
    highlights: [
      "20+ concurrent users across VR + web",
      "Cross-platform whiteboard sync",
      "Real-time A/V/text via WebRTC",
    ],
    youtubeUrls: [
      "https://www.youtube.com/watch?v=SgdRF0Lw-1k",
      "https://www.youtube.com/watch?v=ZQ7BgiFFC6s",
    ],
  },
  {
    title: "EDVR",
    subtitle: "Voice-Controlled VR for STEM Accessibility",
    period: "2020",
    description:
      "An immersive VR experience designed for dyslexic students learning STEM. EDVR tackles the challenge of teaching STEM to students with learning disabilities — letting them visualize, comprehend, and conceptualize complex topics through voice-controlled, scientifically accurate Solar System and human anatomy simulations. Built on Azure for speech recognition and cloud-backed services. Asia Finalist at Microsoft Imagine Cup 2020.",
    tags: [
      "Unity",
      "VR",
      "C#",
      "Azure",
      "Voice Recognition",
      "Accessibility",
      "EdTech",
    ],
    highlights: [
      "Voice-controlled VR navigation",
      "Scientifically accurate Solar System + anatomy",
      "Azure-powered speech + cloud backend",
      "Microsoft Imagine Cup 2020 — Asia Finalist",
    ],
    youtubeUrls: [
      {
        url: "https://www.youtube.com/watch?v=rZD0KvN3nq8",
        orientation: "square",
      },
    ],
  },
  {
    title: "VRClassroom",
    subtitle: "Multi-User Collaborative VR Space",
    description:
      "A networked VR environment where multiple headset-wearing users share the same collaborative space. State and interactions are synchronized across the network in real time — designed for remote collaboration scenarios.",
    tags: ["UnityXR", "Photon", "C#", "VR", "Multiplayer"],
    highlights: [
      "Multiple users co-present in shared VR space",
      "Network-synchronized interactions via Photon",
      "Built for remote collaboration",
    ],
    youtubeUrls: ["https://www.youtube.com/watch?v=FDiR1IC9wIc"],
  },
];

// ─── Awards ────────────────────────────────────────────────────────────────
// Each award has an `image` (imported from src/assets/awards/) and `imageAlt`
// for accessibility. Optional `url` makes the whole card a link to the
// official certificate / verification page (opens in a new tab). Drop the
// field or leave it falsy to render a non-clickable card.
export const awards = [
  {
    title: "MIT Reality Hack",
    placement: "1st Place — Healthcare & Startup Track · 3rd Overall",
    year: "2024",
    image: mitImg,
    imageAlt: "MIT Reality Hack 1st place team photo",
    url: "https://devpost.com/software/recovr-5ubkl0",
  },
  {
    title: "Microsoft Imagine Cup",
    placement: "Asia Finalist",
    year: "2020",
    image: msImg,
    imageAlt: "Microsoft Imagine Cup finalist event",
    url: "https://techcommunity.microsoft.com/blog/studentdeveloperblog/meet-the-2020-imagine-cup-asia-regional-finalists/1086465",
  },
  {
    title: "NASA Space Apps Challenge",
    placement: "Global Nominee",
    year: "2019",
    image: nasaImg,
    imageAlt: "NASA Space Apps Challenge global nominee",
    url: "https://2019.spaceappschallenge.org/challenges/planets-near-and-far/build-planet-workshop/teams/stellarploration/project/",
  },
];

// ─── Skills (each group is a chip cluster) ────────────────────────────────
export const skillGroups = [
  {
    label: "Robotics & XR",
    items: ["ROS2", "UnityXR", "WebRTC", "Foxglove", "Inverse Kinematics"],
  },
  {
    label: "Languages",
    items: ["C++", "C#", "Python", "Java", "JavaScript", "TypeScript"],
  },
  {
    label: "Web & UI",
    items: ["React", "JSX/TSX", "REST APIs", "HTML/CSS"],
  },
  {
    label: "Embedded & Hardware",
    items: ["Arduino", "ESP32", "Servo Control", "Biometric Sensors"],
  },
];
