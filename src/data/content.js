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
import mitImg from '../assets/awards/mit-reality-hack.svg';
import msImg from '../assets/awards/microsoft-imagine-cup.svg';
import nasaImg from '../assets/awards/nasa-space-apps.svg';

// ─── Personal info ─────────────────────────────────────────────────────────
export const personal = {
  name: 'Utsav Chaudhary',
  initials: 'UC',
  role: 'XR + Robotics Engineer',
  tagline: 'Bridging immersive interfaces and physical robots.',
  intro:
    "I'm a recent CS grad from Drexel working at the intersection of XR and robotics. I most recently built teleoperation interfaces at Fauna Robotics — connecting ROS2 backends to React dashboards and VR control systems.",
  location: 'Philadelphia, PA',
  email: 'uc49@drexel.edu',
  phone: '+1 267 992 7358',
  resume: '/ResumeUtsavChaudhary.pdf',
};

// ─── Social links ──────────────────────────────────────────────────────────
export const socials = [
  { label: 'GitHub',    href: 'https://github.com/utsavchaudhry/',                      icon: 'github'   },
  { label: 'LinkedIn',  href: 'https://www.linkedin.com/in/utsav-chaudhary-2874771a7/', icon: 'linkedin' },
  { label: 'Email',     href: 'mailto:uc49@drexel.edu',                                  icon: 'mail'     },
];

// ─── Nav (each entry must match a section id below) ────────────────────────
export const navLinks = [
  { label: 'About',       href: '#about'      },
  { label: 'Experience',  href: '#experience' },
  { label: 'Projects',    href: '#projects'   },
  { label: 'Awards',      href: '#awards'     },
  { label: 'Contact',     href: '#contact'    },
];

// ─── Education ─────────────────────────────────────────────────────────────
export const education = {
  school: 'Drexel University',
  location: 'Philadelphia, PA',
  degree: 'B.S. Computer Science',
  graduation: 'Class of 2026',
  gpa: '3.75 / 4.0 — Dean’s List',
  coursework: [
    'Machine Learning',
    'Design with Embedded Processors',
    'Concurrent Programming',
    'Probability & Statistics',
  ],
};

// ─── Work experience ───────────────────────────────────────────────────────
export const experience = [
  {
    company: 'Fauna Robotics',
    role: 'Teleoperation Intern',
    location: 'New York, NY',
    period: 'Sep 2025 — May 2026',
    bullets: [
      'Connected a ROS2 backend to a React frontend via Foxglove bridge, WebRTC, and custom REST APIs — built a robot status, control, and debug dashboard for live monitoring and teleoperation.',
      'Designed VR interfaces to switch robot modes/skills and visualize robot state (joint pose, motor temperatures, etc.).',
    ],
    tags: ['ROS2', 'React', 'WebRTC', 'Foxglove', 'VR'],
  },
  {
    company: 'UpRight VR',
    role: 'VR Developer',
    location: 'Philadelphia, PA',
    period: 'Sep 2022 — Aug 2024',
    bullets: [
      'Developed gamified VR rehabilitative exercises in UnityXR + C# for elderly patients with vestibular/ocular disabilities.',
      'Designed a local database to track patient performance data in real time and auto-generate progress charts.',
    ],
    tags: ['UnityXR', 'C#', 'Healthcare', 'Database'],
  },
  {
    company: 'Drexel University',
    role: 'Student Researcher',
    location: 'Philadelphia, PA',
    period: 'Apr 2022 — Sep 2024',
    bullets: [
      'Engineered two-way serial communication between a microcontroller and Unity, transmitting up to 64 bytes at 200 Hz for real-time interactive therapy game development.',
      'Built customized therapy games and a custom game controller using microcontrollers, an encoder, and biometric sensors monitoring heart rate and stress.',
    ],
    tags: ['Unity', 'Embedded', 'Biometrics', 'Research'],
  },
  {
    company: 'Chimpvine',
    role: 'Game Developer',
    location: 'Jersey City, NJ',
    period: 'Sep 2020 — Aug 2021',
    bullets: [
      'Developed 2D e-learning games in Unity + C# for primary-grade students.',
      'Optimized game performance for mobile browsers — reduced load times by 20% and improved mobile accessibility.',
    ],
    tags: ['Unity', 'C#', 'WebGL'],
  },
];

// ─── Projects ──────────────────────────────────────────────────────────────
// Each project gets the same alternating-card layout. Optional fields:
//   subtitle, period, highlights — appear in the body if provided
//   youtubeUrl                   — replaces the gradient visual with a
//                                  click-to-play YouTube player
// Add or remove items freely; the section will reflow.
export const projects = [
  {
    title: 'HOPE JR',
    subtitle: 'VR-Teleoperated Humanoid Robot',
    period: 'June 2024',
    description:
      'A 3D-printed VR-controlled robot with 35 servo motors and 6-DOF end-effector tracking. Built an inverse kinematics solver translating VR controller and headset data directly into servo commands for real-time interaction. Presented at Humanoids Summits 2024 and 2025.',
    tags: ['ROS2', 'WebRTC', 'UnityXR', 'ESP32', 'Inverse Kinematics'],
    highlights: [
      '35 servo motors, 6-DOF tracking',
      'Custom IK solver for VR → servo translation',
      'Presented at Humanoids Summits 2024/2025',
    ],
    // youtubeUrl: 'https://www.youtube.com/watch?v=...',
  },
  {
    title: 'Hybrid Classroom',
    subtitle: 'Cross-Platform Virtual Classroom',
    period: 'Dec 2021',
    description:
      'A 3D multiplayer virtual classroom supporting 20+ concurrent users across VR headsets and web browsers. Implemented WebRTC video/audio/text chat for cross-platform communication and a synced virtual whiteboard.',
    tags: ['UnityXR', 'Photon Networking', 'WebRTC', 'WebGL'],
    highlights: [
      '20+ concurrent users across VR + web',
      'Cross-platform whiteboard sync',
      'Real-time A/V/text via WebRTC',
    ],
  },
  // ── Personal / side projects (drop in a YouTube URL → embedded player) ──
  {
    title: 'Replace me — side project 1',
    description:
      'Short description of the side project. Anything with a YouTube URL gets a click-to-play player in the visual area instead of the gradient placeholder.',
    tags: [],
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    title: 'Replace me — side project 2',
    description:
      'Another side project — what you built, what you learned, what was fun.',
    tags: [],
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
];

// ─── Awards ────────────────────────────────────────────────────────────────
// Each award has an `image` (imported from src/assets/awards/) and `imageAlt`
// for accessibility. To swap an image: drop a new file at the same path or
// change the import at the top of this file.
export const awards = [
  {
    title: 'MIT Reality Hack',
    placement: '1st Place — Healthcare & Startup Track · 3rd Overall',
    year: '2024',
    image: mitImg,
    imageAlt: 'MIT Reality Hack 1st place team photo',
  },
  {
    title: 'Microsoft Imagine Cup',
    placement: 'Asia Finalist',
    year: '2020',
    image: msImg,
    imageAlt: 'Microsoft Imagine Cup finalist event',
  },
  {
    title: 'NASA Space Apps Challenge',
    placement: 'Global Nominee',
    year: '2019',
    image: nasaImg,
    imageAlt: 'NASA Space Apps Challenge global nominee',
  },
];

// ─── Skills (each group is a chip cluster) ────────────────────────────────
export const skillGroups = [
  {
    label: 'Robotics & XR',
    items: ['ROS2', 'UnityXR', 'WebRTC', 'Foxglove', 'Inverse Kinematics'],
  },
  {
    label: 'Languages',
    items: ['C++', 'C#', 'Python', 'Java', 'JavaScript', 'TypeScript'],
  },
  {
    label: 'Web & UI',
    items: ['React', 'JSX/TSX', 'REST APIs', 'HTML/CSS'],
  },
  {
    label: 'Embedded & Hardware',
    items: ['Arduino', 'ESP32', 'Servo Control', 'Biometric Sensors'],
  },
];
